// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/// @title a contract for creating, awarding, and closing a bounty
/// @author netski
/// @notice this is used to manage bounty related actions and emit the appropriate events
contract OpenRecon {

    event NewBounty(uint bountyId, string cid, uint amount);
    event AwardBounty(uint bountyId, string cid, uint amount);
    event ClosedBounty(uint bountyId, string cid, uint amount);

    struct Bounty{
        string cid;
        uint amount;
        uint8 statusActive;  // 1 = active; 0 = inactive
        uint8 statusPaid;    // 1 = paid; 0 = unpaid
    }

    Bounty[] public bounties;
    string[] public bountyCIDs;
    string[] public childBounties;

    mapping (address => uint) public ownerToAmount;
    mapping (address => string[]) public ownerToBounties;
    mapping (uint => address) public bountyToOwner;
    mapping (uint => uint) public bountyToAmount;
    mapping (uint => string) public bountyToCID;
    mapping (string => uint) public CIDToBounty;
    mapping (string => string[]) public ParentToChildren;
    mapping (address => string[]) public ownerToIntel;

    // make this contract payable
    constructor () payable {
    }

    /// @dev funds a bounty and initiates the creation process
    /// @param _cid the cid of the bounty
    function fundBounty(string memory _cid) 
        public payable 
    {
        ownerToAmount[msg.sender] += msg.value;
        ownerToBounties[msg.sender].push(_cid);
        _createBounty(_cid, msg.value, msg.sender);
    }

    /// @dev creates the structs and mappings surrounding a bounty once it has been funded
    /// @param _amount the money backing the bounty, paid to the contract already
    function _createBounty(string memory _cid, uint _amount, address owner) 
        internal 
    {
        require(ownerToAmount[owner] >= _amount);
     
        bounties.push(Bounty(_cid, _amount, 1, 0));
        uint id = bounties.length - 1;
        emit NewBounty(id, _cid, _amount);

        bountyToOwner[id] = owner;
        bountyToAmount[id] = _amount;
        bountyToCID[id] = _cid;
        CIDToBounty[_cid] = id;
        
        bountyCIDs.push(_cid);
    }

    /// @dev awards bounty funds to the address specified using transfer
    /// @param _address the address to be awarded the bounty money
    /// @param _cid the cid of the bounty to be awarded
    function awardBounty(address payable _address, string memory _cid) 
        public 
    {
        uint _id = CIDToBounty[_cid];
        emit AwardBounty(_id, _cid, bountyToAmount[_id]);

        // @dev these could be modifiers
        require(bountyToOwner[_id] == msg.sender);
        require(bounties[_id].statusActive == 1);
        require(bounties[_id].statusPaid == 0);
        require(ownerToAmount[msg.sender] >= bountyToAmount[_id]);

        // avoid reentrancy attack by setting these first
        ownerToAmount[msg.sender] -= (bountyToAmount[_id]);
        bounties[_id].statusActive = 0;
        bounties[_id].statusPaid = 1;
        _address.transfer(bountyToAmount[_id]); 
    }

    /// @dev marks bounties as closed, making them ineligible to be awarded without messing up ids of bounties after it
    /// @param _cid the id of the bounty to be destroyed
    function destroyBounty(string memory _cid) 
        public 
    {
        uint _id = CIDToBounty[_cid];
        emit ClosedBounty(_id, _cid, bountyToAmount[_id]);

        require(bountyToOwner[_id] == msg.sender);
        require(bounties[_id].statusActive == 1);

        // check if bounty amount is still in contract, send to owner if so
        if (bounties[_id].statusPaid == 0 && ownerToAmount[msg.sender] >= bountyToAmount[_id]) 
        {    
            ownerToAmount[msg.sender] -= (bountyToAmount[_id]);
            bounties[_id].statusPaid = 1;
            bounties[_id].statusActive = 0;
            payable(msg.sender).transfer(bountyToAmount[_id]);
        }
    }

    // @dev create a child cid (map an intel submission to a parent bounty)
    function makeIntel(string memory _parentCid, string memory _childCid) 
        public 
    {
        ParentToChildren[_parentCid].push(_childCid);
        // map intel to collector address
        ownerToIntel[msg.sender].push(_childCid);
    }

    // @dev view, return all active bounty cids
    function getCIDS() 
        public view 
        returns(string[] memory) 
    {
        return bountyCIDs;
    }

    // @dev view, return all child cids for a given parent
    function getChildren(string memory _cid) 
        public view 
        returns(string[] memory) 
    {
        return ParentToChildren[_cid];
    }

    // @dev get the bounties owned by this address
    function getOwnedBounties() 
        public view 
        returns(string[] memory) 
    {
        return ownerToBounties[msg.sender];
    }

    // @dev get the cids of the intel you've submitted
    function getOwnedIntel() 
        public view 
        returns(string[] memory) 
    {
        return ownerToIntel[msg.sender];
    }
}