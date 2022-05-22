import os
from scripts.helpful_scripts import get_account
from brownie import OpenRecon, accounts, network

def deploy_openrecon():
    account = accounts.add(os.getenv('PRIVATE_KEY'))
    OpenRecon.deploy({"from": account})

def main():
    deploy_openrecon()