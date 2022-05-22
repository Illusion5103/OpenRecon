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
    string[] public intel;
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
    function fundBounty(string memory _cid) public payable {
        // map owner to the amount they have funded
        ownerToAmount[msg.sender] += msg.value;
        // add bounty to the list of bounties owned by this address
        ownerToBounties[msg.sender].push(_cid);
        // call _createBounty function in manageBounty.sol
        _createBounty(_cid, msg.value, msg.sender);
    }

    /// @dev creates the structs and mappings surrounding a bounty once it has been funded
    /// @param _amount the money backing the bounty, paid to the contract already
    function _createBounty(string memory _cid, uint _amount, address owner) internal {
        // check that this bounty has already been funded
        require(ownerToAmount[owner] >= _amount);
        // create a Bounty struct and push it onto the bounties array
        bounties.push(Bounty(_cid, _amount, 1, 0));
        // set the id used to reference this bounty
        uint id = bounties.length - 1;
        // set the owner of this bounty to the function caller
        bountyToOwner[id] = owner;
        // set the amount of the bounty to the amount committed in _fundBounty()
        bountyToAmount[id] = _amount;
        // set the cid to what is given by ipfs
        bountyToCID[id] = _cid;
        // do the opposite
        CIDToBounty[_cid] = id;
        // emit NewBounty event
        emit NewBounty(id, _cid, _amount);
    }

    /// @dev awards bounty funds to the address specified using transfer
    /// @param _address the address to be awarded the bounty money
    /// @param _cid the cid of the bounty to be awarded
    function awardBounty(address payable _address, string memory _cid) public {
        // get the id given the cid
        uint _id = CIDToBounty[_cid];
        // check that the bounty is owned by the function caller
        require(bountyToOwner[_id] == msg.sender);
        // check that the bounty is still open
        require(bounties[_id].statusActive == 1);
        // check that the bounty has not yet been paid
        require(bounties[_id].statusPaid == 0);
        // check that the funds are still available
        require(ownerToAmount[msg.sender] >= bountyToAmount[_id]);
        // transfer the bounty amount to the recipient
        _address.transfer(bountyToAmount[_id]); // what happens if this fails?
        // mark the bounty as paid
        bounties[_id].statusPaid = 1;
        // decrement the funds from the owners balance
        ownerToAmount[msg.sender] -= (bountyToAmount[_id]);
        // close the bounty
        bounties[_id].statusActive = 0;
        // emit AwardBounty event
        emit AwardBounty(_id, _cid, bountyToAmount[_id]);
    }

    /// @dev marks bounties as closed, making them ineligible to be awarded without messing up ids of bounties after it
    /// @param _cid the id of the bounty to be destroyed
    function destroyBounty(string memory _cid) public {
        // get the id given the cid
        uint _id = CIDToBounty[_cid];
        // check that the bounty is owned by the function caller
        require(bountyToOwner[_id] == msg.sender);
        // check that the bounty is still open
        require(bounties[_id].statusActive == 1);
        // check if bounty amount is still in contract, send to owner if so
        if (bounties[_id].statusPaid == 0 && ownerToAmount[msg.sender] >= bountyToAmount[_id]) payable(msg.sender).transfer(bountyToAmount[_id]);
        // decrement the funds from the owners balance
        ownerToAmount[msg.sender] -= (bountyToAmount[_id]);
        // mark the bounty as paid
        bounties[_id].statusPaid = 1;
        // mark the bounty as closed
        bounties[_id].statusActive = 0;
        // emit ClosedBounty event
        emit ClosedBounty(_id, _cid, bountyToAmount[_id]);
    }

    // need a read function that will return 
    // all parent cids
    // all child cids for a given parent
    // all cids owned by an address

    // view, return all active bounty cids
    function getCIDS() public view returns(string[] memory cidList) {
        for (uint i = 0; i < bounties.length - 1; i++) {
            if (bounties[i].statusActive == 1) {
                cidList[i] = bounties[i].cid;
            }
        }
        return cidList;
    }

    // create a child cid (map an intel submission to a parent bounty)
    function makeIntel(string memory _parentCid, string memory _childCid) public {
        ParentToChildren[_parentCid].push(_childCid);
        // map intel to collector address
        ownerToIntel[msg.sender].push(_childCid);
    }

    // view, return all child cids for a given parent
    function getChildren(string memory _cid) public view returns(string[] memory) {
        return ParentToChildren[_cid];
    }

    // get the bounties owned by this address
    function getOwnedBounties() public view returns(string[] memory ownedBounties) {
        address _owner = msg.sender;
        for (uint i = 0; i < ownerToBounties[_owner].length - 1; i++) {
            ownedBounties[i] = ownerToBounties[_owner][i];
        }
        return ownedBounties;
    }

    function getOwnedIntel() public view returns(string memory ownedIntel) {
        return ownedIntel;
    }
}