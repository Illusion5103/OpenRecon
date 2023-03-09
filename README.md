# OpenRecon

## Summary

OpenRecon is a decentralized OSINT bounty platform built with React, IPFS/Filecoin, and Meter.

## Motivation

### Equal Access to Intelligence

Open Source Intelligence (OSINT) is any information that can be legally gathered from public sources. It enables anyone with an internet connection to collect and analyze intelligence which can inform courses of action for organizations and people alike. Even for government-level intelligence work, the overwhelming majority of information in a typical intelligence report is OSINT.

Through OpenRecon, OSINT collection is financially rewarded, and everything is decentralized to escape censorship. This grants every person around the world - as well as orgs like businesses and governments - equal access to high quality intelligence.

### A Bounty Economy

We have seen successful bounty platforms for development and security work, but there are likely many other areas in which this model could be successfully applied. By building it on decentralized technologies, and using smart contracts to handle the financial transactions, the bounty model can incentivize and reward people in every country in disciplines like music, art, science, writing, and so on. 

On a technical level, OpenRecon is about building a system that uses IPFS/Filecoin in conjunction with a smart contract on a Layer 2 solution (Meter) in order to store and monetize information in a completely decentralized mannner. The code is all open source and free to use by anyone - meaning anyone can modify OpenRecon to create their own bounty platform on these technologies, and foster a bounty economy in their own discipline of interest. 

## Application 

The front-end is built with React and Material-UI. The smart contract is built with Solidity and resides on Meter Testnet at 0xC22c3257EAC9c8a8008a659c3711Dd4f251d6826. (Mainnet is the goal, but the contract needs a bit more work to get there). 

All data concerning the bounties and their intel submissions are stored on IPFS and Filecoin. The CIDs for these files are stored on the blockchain through the smart contract, which is how they are later retrieved: the front-end calls a view function on the smart contract which sends the appropriate CIDs, and then the front-end retrieves the information at those CIDs from IPFS. 

UseDapp and Web3.js are used for communication between the front-end and the smart contract.


## Functionality

A user can upload a bounty by using the "Post Bounty" form after signing into their wallet. Upon submitting, the data is sent to IPFS and a CID is returned. When the CID has been returned, the user will be prompted by their connected waallet to send the prize funds to the OpenRecon smart contract. Once the funds are received, that CID is saved on Meter, and is used to retrieve the bounty info from IPFS on pages that need it, like Explore and Dashboard. Therefore, the bounty is not viewable on the DApp until the funds are committed to the smart contract. 

Submitting intel works similarly: a collector will submit their findings, which will get saved on IPFS, and then they will have to pay a small gas fee (few cents) to save that CID on the blockchain. That CID will be saved as a child of the CID of the bounty, and be used to retrieve the related information when accessed by the collector and the client, only. 

## Technologies Used

### IPFS/Filecoin through web3.storage

Through the use of web3.storage, OpenRecon uses IPFS and Filecoin to save all of the information sent to the platform (ie bounty posts and intel collections). The CIDs are used to map intel collections to their parent bounty posts, and to map owners to the cids of their submissions for access control. 

### Meter

The smart contract is deployed on the Meter Testnet. The transactions must be done through Meter, and the bounty prizes are in MTR. Interactions between Meter and the DApp are done through Web3.js. 


