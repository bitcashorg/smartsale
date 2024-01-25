#!/bin/sh

# Load values from .env
set -a; source .env; set +a

# Function to check if a variable is set
check_variable() {
    if [ -z "${!1}" ]; then
        echo "Error: Environment variable $1 is not set."
        exit 1
    fi
}

# Check if required variables are set
check_variable BIDDING_TOKEN
check_variable AUCTIONING_TOKEN
check_variable NETWORK
check_variable PK

# exports
export BIDDING_TOKEN=$BIDDING_TOKEN
export AUCTIONING_TOKEN=$AUCTIONING_TOKEN
export NETWORK=$NETWORK
export PK=$PK

# Execute initiate auction
bun run hardhat initiateAuction --auctioning-token $AUCTIONING_TOKEN --bidding-token $BIDDING_TOKEN --sell-amount 0.1 --min-buy-amount 50 --auction-end-date 1711349042 --network $NETWORK 
