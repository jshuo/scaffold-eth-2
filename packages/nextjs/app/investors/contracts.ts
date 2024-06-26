import { erc20Abi } from 'viem'

export const wagmiContractConfig = {
  "address": "0xd863e5Ab55C82fb59ffd7D63b23AD83DbDe14bCD",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bool",
          "name": "_isFrozen",
          "type": "bool"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "AddressFrozen",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "AgentAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "AgentRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_compliance",
          "type": "address"
        }
      ],
      "name": "ComplianceAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_identityRegistry",
          "type": "address"
        }
      ],
      "name": "IdentityRegistryAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_lostWallet",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_newWallet",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_investorOnchainID",
          "type": "address"
        }
      ],
      "name": "RecoverySuccess",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "TokensFrozen",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "TokensUnfrozen",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "_newName",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "string",
          "name": "_newSymbol",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "_newDecimals",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_newVersion",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_newOnchainID",
          "type": "address"
        }
      ],
      "name": "UpdatedTokenInformation",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "addAgent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_userAddresses",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_amounts",
          "type": "uint256[]"
        }
      ],
      "name": "batchBurn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_fromList",
          "type": "address[]"
        },
        {
          "internalType": "address[]",
          "name": "_toList",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_amounts",
          "type": "uint256[]"
        }
      ],
      "name": "batchForcedTransfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_userAddresses",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_amounts",
          "type": "uint256[]"
        }
      ],
      "name": "batchFreezePartialTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_toList",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_amounts",
          "type": "uint256[]"
        }
      ],
      "name": "batchMint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_userAddresses",
          "type": "address[]"
        },
        {
          "internalType": "bool[]",
          "name": "_freeze",
          "type": "bool[]"
        }
      ],
      "name": "batchSetAddressFrozen",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_toList",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_amounts",
          "type": "uint256[]"
        }
      ],
      "name": "batchTransfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_userAddresses",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_amounts",
          "type": "uint256[]"
        }
      ],
      "name": "batchUnfreezePartialTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "compliance",
      "outputs": [
        {
          "internalType": "contract IModularCompliance",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "forcedTransfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "freezePartialTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "getFrozenTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "identityRegistry",
      "outputs": [
        {
          "internalType": "contract IIdentityRegistry",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_identityRegistry",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_compliance",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "_decimals",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "_onchainID",
          "type": "address"
        }
      ],
      "name": "init",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "isAgent",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "isFrozen",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "onchainID",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_lostWallet",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_newWallet",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_investorOnchainID",
          "type": "address"
        }
      ],
      "name": "recoveryAddress",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "removeAgent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_freeze",
          "type": "bool"
        }
      ],
      "name": "setAddressFrozen",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_compliance",
          "type": "address"
        }
      ],
      "name": "setCompliance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_identityRegistry",
          "type": "address"
        }
      ],
      "name": "setIdentityRegistry",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "setName",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_onchainID",
          "type": "address"
        }
      ],
      "name": "setOnchainID",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        }
      ],
      "name": "setSymbol",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "unfreezePartialTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "version",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "transactionHash": "0x6373a9754c5d1036f74348bf9e3e53c3892a4ae0b1bae40be3370c8e793857e6",
  "receipt": {
    "to": null,
    "from": "0xfC10126E2F41cbB264BceEE6c6093133AA45f317",
    "contractAddress": "0xd863e5Ab55C82fb59ffd7D63b23AD83DbDe14bCD",
    "transactionIndex": 0,
    "gasUsed": "3132229",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "blockHash": "0x5aa1b3f49ba04772824271fee59dacd4267d791b8a7beee85eae62951524f69f",
    "transactionHash": "0x6373a9754c5d1036f74348bf9e3e53c3892a4ae0b1bae40be3370c8e793857e6",
    "logs": [],
    "blockNumber": 12752975,
    "cumulativeGasUsed": "3132229",
    "status": 1,
    "byzantium": true
  },
  "args": [],
  "numDeployments": 1,
  "solcInputHash": "f69367090d7184c7f33f2a160d9a791d",
  "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"bool\",\"name\":\"_isFrozen\",\"type\":\"bool\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"AddressFrozen\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_agent\",\"type\":\"address\"}],\"name\":\"AgentAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_agent\",\"type\":\"address\"}],\"name\":\"AgentRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_compliance\",\"type\":\"address\"}],\"name\":\"ComplianceAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_identityRegistry\",\"type\":\"address\"}],\"name\":\"IdentityRegistryAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint8\",\"name\":\"version\",\"type\":\"uint8\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_lostWallet\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_newWallet\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_investorOnchainID\",\"type\":\"address\"}],\"name\":\"RecoverySuccess\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"TokensFrozen\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"TokensUnfrozen\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"string\",\"name\":\"_newName\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"string\",\"name\":\"_newSymbol\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint8\",\"name\":\"_newDecimals\",\"type\":\"uint8\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"_newVersion\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_newOnchainID\",\"type\":\"address\"}],\"name\":\"UpdatedTokenInformation\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_agent\",\"type\":\"address\"}],\"name\":\"addAgent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_userAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_amounts\",\"type\":\"uint256[]\"}],\"name\":\"batchBurn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_fromList\",\"type\":\"address[]\"},{\"internalType\":\"address[]\",\"name\":\"_toList\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_amounts\",\"type\":\"uint256[]\"}],\"name\":\"batchForcedTransfer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_userAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_amounts\",\"type\":\"uint256[]\"}],\"name\":\"batchFreezePartialTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_toList\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_amounts\",\"type\":\"uint256[]\"}],\"name\":\"batchMint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_userAddresses\",\"type\":\"address[]\"},{\"internalType\":\"bool[]\",\"name\":\"_freeze\",\"type\":\"bool[]\"}],\"name\":\"batchSetAddressFrozen\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_toList\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_amounts\",\"type\":\"uint256[]\"}],\"name\":\"batchTransfer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_userAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_amounts\",\"type\":\"uint256[]\"}],\"name\":\"batchUnfreezePartialTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"compliance\",\"outputs\":[{\"internalType\":\"contract IModularCompliance\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"forcedTransfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"freezePartialTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"getFrozenTokens\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"identityRegistry\",\"outputs\":[{\"internalType\":\"contract IIdentityRegistry\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_identityRegistry\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_compliance\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"uint8\",\"name\":\"_decimals\",\"type\":\"uint8\"},{\"internalType\":\"address\",\"name\":\"_onchainID\",\"type\":\"address\"}],\"name\":\"init\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_agent\",\"type\":\"address\"}],\"name\":\"isAgent\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"isFrozen\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"onchainID\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_lostWallet\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_newWallet\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_investorOnchainID\",\"type\":\"address\"}],\"name\":\"recoveryAddress\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_agent\",\"type\":\"address\"}],\"name\":\"removeAgent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_freeze\",\"type\":\"bool\"}],\"name\":\"setAddressFrozen\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_compliance\",\"type\":\"address\"}],\"name\":\"setCompliance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_identityRegistry\",\"type\":\"address\"}],\"name\":\"setIdentityRegistry\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"setName\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_onchainID\",\"type\":\"address\"}],\"name\":\"setOnchainID\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"}],\"name\":\"setSymbol\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"unfreezePartialTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"version\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"batchBurn(address[],uint256[])\":{\"details\":\"See {IToken-batchBurn}.\"},\"batchForcedTransfer(address[],address[],uint256[])\":{\"details\":\"See {IToken-batchForcedTransfer}.\"},\"batchFreezePartialTokens(address[],uint256[])\":{\"details\":\"See {IToken-batchFreezePartialTokens}.\"},\"batchMint(address[],uint256[])\":{\"details\":\"See {IToken-batchMint}.\"},\"batchSetAddressFrozen(address[],bool[])\":{\"details\":\"See {IToken-batchSetAddressFrozen}.\"},\"batchTransfer(address[],uint256[])\":{\"details\":\"See {IToken-batchTransfer}.\"},\"batchUnfreezePartialTokens(address[],uint256[])\":{\"details\":\"See {IToken-batchUnfreezePartialTokens}.\"},\"burn(address,uint256)\":{\"details\":\"See {IToken-burn}.\"},\"compliance()\":{\"details\":\"See {IToken-compliance}.\"},\"decimals()\":{\"details\":\"See {IToken-decimals}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"See {ERC20-decreaseAllowance}.\"},\"forcedTransfer(address,address,uint256)\":{\"details\":\"See {IToken-forcedTransfer}.\"},\"freezePartialTokens(address,uint256)\":{\"details\":\"See {IToken-freezePartialTokens}.\"},\"getFrozenTokens(address)\":{\"details\":\"See {IToken-getFrozenTokens}.\"},\"identityRegistry()\":{\"details\":\"See {IToken-identityRegistry}.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"See {ERC20-increaseAllowance}.\"},\"init(address,address,string,string,uint8,address)\":{\"details\":\"the constructor initiates the token contract  msg.sender is set automatically as the owner of the smart contract\",\"params\":{\"_compliance\":\"the address of the compliance contract linked to the token\",\"_decimals\":\"the decimals of the token\",\"_identityRegistry\":\"the address of the Identity registry linked to the token\",\"_name\":\"the name of the token\",\"_onchainID\":\"the address of the onchainID of the token  emits an `UpdatedTokenInformation` event  emits an `IdentityRegistryAdded` event  emits a `ComplianceAdded` event\",\"_symbol\":\"the symbol of the token\"}},\"isFrozen(address)\":{\"details\":\"See {IToken-isFrozen}.\"},\"mint(address,uint256)\":{\"details\":\"See {IToken-mint}.\"},\"name()\":{\"details\":\"See {IToken-name}.\"},\"onchainID()\":{\"details\":\"See {IToken-onchainID}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"pause()\":{\"details\":\"See {IToken-pause}.\"},\"paused()\":{\"details\":\"See {IToken-paused}.\"},\"recoveryAddress(address,address,address)\":{\"details\":\"See {IToken-recoveryAddress}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"setAddressFrozen(address,bool)\":{\"details\":\"See {IToken-setAddressFrozen}.\"},\"setCompliance(address)\":{\"details\":\"See {IToken-setCompliance}.\"},\"setIdentityRegistry(address)\":{\"details\":\"See {IToken-setIdentityRegistry}.\"},\"setName(string)\":{\"details\":\"See {IToken-setName}.\"},\"setOnchainID(address)\":{\"details\":\"See {IToken-setOnchainID}.  if _onchainID is set at zero address it means no ONCHAINID is bound to this token\"},\"setSymbol(string)\":{\"details\":\"See {IToken-setSymbol}.\"},\"symbol()\":{\"details\":\"See {IToken-symbol}.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"params\":{\"_amount\":\"The number of tokens to transfer\",\"_to\":\"The address of the receiver\"},\"returns\":{\"_0\":\"`true` if successful and revert if unsuccessful\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"_amount\":\"The number of tokens to transfer\",\"_from\":\"The address of the sender\",\"_to\":\"The address of the receiver\"},\"returns\":{\"_0\":\"`true` if successful and revert if unsuccessful\"}},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"},\"unfreezePartialTokens(address,uint256)\":{\"details\":\"See {IToken-unfreezePartialTokens}.\"},\"unpause()\":{\"details\":\"See {IToken-unpause}.\"},\"version()\":{\"details\":\"See {IToken-version}.\"}},\"version\":1},\"userdoc\":{\"events\":{\"AddressFrozen(address,bool,address)\":{\"notice\":\"this event is emitted when the wallet of an investor is frozen or unfrozen  the event is emitted by setAddressFrozen and batchSetAddressFrozen functions  `_userAddress` is the wallet of the investor that is concerned by the freezing status  `_isFrozen` is the freezing status of the wallet  if `_isFrozen` equals `true` the wallet is frozen after emission of the event  if `_isFrozen` equals `false` the wallet is unfrozen after emission of the event  `_owner` is the address of the agent who called the function to freeze the wallet\"},\"ComplianceAdded(address)\":{\"notice\":\"this event is emitted when the Compliance has been set for the token  the event is emitted by the token constructor and by the setCompliance function  `_compliance` is the address of the Compliance contract of the token\"},\"IdentityRegistryAdded(address)\":{\"notice\":\"this event is emitted when the IdentityRegistry has been set for the token  the event is emitted by the token constructor and by the setIdentityRegistry function  `_identityRegistry` is the address of the Identity Registry of the token\"},\"Paused(address)\":{\"notice\":\"this event is emitted when the token is paused  the event is emitted by the pause function  `_userAddress` is the address of the wallet that called the pause function\"},\"RecoverySuccess(address,address,address)\":{\"notice\":\"this event is emitted when an investor successfully recovers his tokens  the event is emitted by the recoveryAddress function  `_lostWallet` is the address of the wallet that the investor lost access to  `_newWallet` is the address of the wallet that the investor provided for the recovery  `_investorOnchainID` is the address of the onchainID of the investor who asked for a recovery\"},\"TokensFrozen(address,uint256)\":{\"notice\":\"this event is emitted when a certain amount of tokens is frozen on a wallet  the event is emitted by freezePartialTokens and batchFreezePartialTokens functions  `_userAddress` is the wallet of the investor that is concerned by the freezing status  `_amount` is the amount of tokens that are frozen\"},\"TokensUnfrozen(address,uint256)\":{\"notice\":\"this event is emitted when a certain amount of tokens is unfrozen on a wallet  the event is emitted by unfreezePartialTokens and batchUnfreezePartialTokens functions  `_userAddress` is the wallet of the investor that is concerned by the freezing status  `_amount` is the amount of tokens that are unfrozen\"},\"Unpaused(address)\":{\"notice\":\"this event is emitted when the token is unpaused  the event is emitted by the unpause function  `_userAddress` is the address of the wallet that called the unpause function\"},\"UpdatedTokenInformation(string,string,uint8,string,address)\":{\"notice\":\"this event is emitted when the token information is updated.  the event is emitted by the token init function and by the setTokenInformation function  `_newName` is the name of the token  `_newSymbol` is the symbol of the token  `_newDecimals` is the decimals of the token  `_newVersion` is the version of the token, current version is 3.0  `_newOnchainID` is the address of the onchainID of the token\"}},\"kind\":\"user\",\"methods\":{\"transfer(address,uint256)\":{\"notice\":\"ERC-20 overridden function that include logic to check for trade validity.  Require that the msg.sender and to addresses are not frozen.  Require that the value should not exceed available balance .  Require that the to address is a verified address\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"ERC-20 overridden function that include logic to check for trade validity.  Require that the from and to addresses are not frozen.  Require that the value should not exceed available balance .  Require that the to address is a verified address\"}},\"notice\":\"NOTICE     The T-REX software is licensed under a proprietary license or the GPL v.3.     If you choose to receive it under the GPL v.3 license, the following applies:     T-REX is a suite of smart contracts implementing the ERC-3643 standard and     developed by Tokeny to manage and transfer financial assets on EVM blockchains     Copyright (C) 2023, Tokeny s\\u00e0rl.     This program is free software: you can redistribute it and/or modify     it under the terms of the GNU General Public License as published by     the Free Software Foundation, either version 3 of the License, or     (at your option) any later version.     This program is distributed in the hope that it will be useful,     but WITHOUT ANY WARRANTY; without even the implied warranty of     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the     GNU General Public License for more details.     You should have received a copy of the GNU General Public License     along with this program.  If not, see <https://www.gnu.org/licenses/>.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/Token.sol\":\"Token\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"contracts/Token.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\npragma solidity 0.8.17;\\n\\n// Sources flattened with hardhat v2.14.0 https://hardhat.org\\n\\n// File @onchain-id/solidity/contracts/interface/IERC734.sol@v2.1.0\\n\\n/**\\n * @dev interface of the ERC734 (Key Holder) standard as defined in the EIP.\\n */\\ninterface IERC734 {\\n\\n    /**\\n     * @dev Emitted when an execution request was approved.\\n     *\\n     * Specification: MUST be triggered when approve was successfully called.\\n     */\\n    event Approved(uint256 indexed executionId, bool approved);\\n\\n    /**\\n     * @dev Emitted when an execute operation was approved and successfully performed.\\n     *\\n     * Specification: MUST be triggered when approve was called and the execution was successfully approved.\\n     */\\n    event Executed(uint256 indexed executionId, address indexed to, uint256 indexed value, bytes data);\\n\\n    /**\\n     * @dev Emitted when an execution request was performed via `execute`.\\n     *\\n     * Specification: MUST be triggered when execute was successfully called.\\n     */\\n    event ExecutionRequested(uint256 indexed executionId, address indexed to, uint256 indexed value, bytes data);\\n\\n    /**\\n     * @dev Emitted when an execute operation was called and failed\\n     *\\n     * Specification: MUST be triggered when execute call failed\\n     */\\n    event ExecutionFailed(uint256 indexed executionId, address indexed to, uint256 indexed value, bytes data);\\n\\n    /**\\n     * @dev Emitted when a key was added to the Identity.\\n     *\\n     * Specification: MUST be triggered when addKey was successfully called.\\n     */\\n    event KeyAdded(bytes32 indexed key, uint256 indexed purpose, uint256 indexed keyType);\\n\\n    /**\\n     * @dev Emitted when a key was removed from the Identity.\\n     *\\n     * Specification: MUST be triggered when removeKey was successfully called.\\n     */\\n    event KeyRemoved(bytes32 indexed key, uint256 indexed purpose, uint256 indexed keyType);\\n\\n    /**\\n     * @dev Adds a _key to the identity. The _purpose specifies the purpose of the key.\\n     *\\n     * Triggers Event: `KeyAdded`\\n     *\\n     * Specification: MUST only be done by keys of purpose 1, or the identity\\n     * itself. If it's the identity itself, the approval process will determine its approval.\\n     */\\n    function addKey(bytes32 _key, uint256 _purpose, uint256 _keyType) external returns (bool success);\\n\\n    /**\\n    * @dev Approves an execution.\\n    *\\n    * Triggers Event: `Approved`\\n    * Triggers on execution successful Event: `Executed`\\n    * Triggers on execution failure Event: `ExecutionFailed`\\n    */\\n    function approve(uint256 _id, bool _approve) external returns (bool success);\\n\\n    /**\\n     * @dev Removes _purpose for _key from the identity.\\n     *\\n     * Triggers Event: `KeyRemoved`\\n     *\\n     * Specification: MUST only be done by keys of purpose 1, or the identity itself.\\n     * If it's the identity itself, the approval process will determine its approval.\\n     */\\n    function removeKey(bytes32 _key, uint256 _purpose) external returns (bool success);\\n\\n    /**\\n     * @dev Passes an execution instruction to an ERC734 identity.\\n     * How the execution is handled is up to the identity implementation:\\n     * An execution COULD be requested and require `approve` to be called with one or more keys of purpose 1 or 2 to\\n     * approve this execution.\\n     * Execute COULD be used as the only accessor for `addKey` and `removeKey`.\\n     *\\n     * Triggers Event: ExecutionRequested\\n     * Triggers on direct execution Event: Executed\\n     */\\n    function execute(address _to, uint256 _value, bytes calldata _data) external payable returns (uint256 executionId);\\n\\n    /**\\n     * @dev Returns the full key data, if present in the identity.\\n     */\\n    function getKey(bytes32 _key) external view returns (uint256[] memory purposes, uint256 keyType, bytes32 key);\\n\\n    /**\\n     * @dev Returns the list of purposes associated with a key.\\n     */\\n    function getKeyPurposes(bytes32 _key) external view returns(uint256[] memory _purposes);\\n\\n    /**\\n     * @dev Returns an array of public key bytes32 held by this identity.\\n     */\\n    function getKeysByPurpose(uint256 _purpose) external view returns (bytes32[] memory keys);\\n\\n    /**\\n     * @dev Returns TRUE if a key is present and has the given purpose. If the key is not present it returns FALSE.\\n     */\\n    function keyHasPurpose(bytes32 _key, uint256 _purpose) external view returns (bool exists);\\n}\\n\\n// File @onchain-id/solidity/contracts/interface/IERC735.sol@v2.1.0\\n\\n/**\\n * @dev interface of the ERC735 (Claim Holder) standard as defined in the EIP.\\n */\\ninterface IERC735 {\\n\\n    /**\\n     * @dev Emitted when a claim was added.\\n     *\\n     * Specification: MUST be triggered when a claim was successfully added.\\n     */\\n    event ClaimAdded(\\n        bytes32 indexed claimId,\\n        uint256 indexed topic,\\n        uint256 scheme,\\n        address indexed issuer,\\n        bytes signature,\\n        bytes data,\\n        string uri);\\n\\n    /**\\n     * @dev Emitted when a claim was removed.\\n     *\\n     * Specification: MUST be triggered when removeClaim was successfully called.\\n     */\\n    event ClaimRemoved(\\n        bytes32 indexed claimId,\\n        uint256 indexed topic,\\n        uint256 scheme,\\n        address indexed issuer,\\n        bytes signature,\\n        bytes data,\\n        string uri);\\n\\n    /**\\n     * @dev Emitted when a claim was changed.\\n     *\\n     * Specification: MUST be triggered when addClaim was successfully called on an existing claimId.\\n     */\\n    event ClaimChanged(\\n        bytes32 indexed claimId,\\n        uint256 indexed topic,\\n        uint256 scheme,\\n        address indexed issuer,\\n        bytes signature,\\n        bytes data,\\n        string uri);\\n\\n    /**\\n     * @dev Add or update a claim.\\n     *\\n     * Triggers Event: `ClaimAdded`, `ClaimChanged`\\n     *\\n     * Specification: Add or update a claim from an issuer.\\n     *\\n     * _signature is a signed message of the following structure:\\n     * `keccak256(abi.encode(address identityHolder_address, uint256 topic, bytes data))`.\\n     * Claim IDs are generated using `keccak256(abi.encode(address issuer_address + uint256 topic))`.\\n     */\\n    function addClaim(\\n        uint256 _topic,\\n        uint256 _scheme,\\n        address issuer,\\n        bytes calldata _signature,\\n        bytes calldata _data,\\n        string calldata _uri)\\n    external returns (bytes32 claimRequestId);\\n\\n    /**\\n     * @dev Removes a claim.\\n     *\\n     * Triggers Event: `ClaimRemoved`\\n     *\\n     * Claim IDs are generated using `keccak256(abi.encode(address issuer_address, uint256 topic))`.\\n     */\\n    function removeClaim(bytes32 _claimId) external returns (bool success);\\n\\n    /**\\n     * @dev Get a claim by its ID.\\n     *\\n     * Claim IDs are generated using `keccak256(abi.encode(address issuer_address, uint256 topic))`.\\n     */\\n    function getClaim(bytes32 _claimId)\\n    external view returns(\\n        uint256 topic,\\n        uint256 scheme,\\n        address issuer,\\n        bytes memory signature,\\n        bytes memory data,\\n        string memory uri);\\n\\n    /**\\n     * @dev Returns an array of claim IDs by topic.\\n     */\\n    function getClaimIdsByTopic(uint256 _topic) external view returns(bytes32[] memory claimIds);\\n}\\n\\n// File @onchain-id/solidity/contracts/interface/IIdentity.sol@v2.1.0\\n\\n// solhint-disable-next-line no-empty-blocks\\ninterface IIdentity is IERC734, IERC735 {}\\n\\n// File @onchain-id/solidity/contracts/interface/IClaimIssuer.sol@v2.1.0\\n\\ninterface IClaimIssuer is IIdentity {\\n\\n    /**\\n     * @dev Emitted when a claim is revoked.\\n     *\\n     * Specification: MUST be triggered when revoking a claim.\\n     */\\n    event ClaimRevoked(bytes indexed signature);\\n\\n    /**\\n     * @dev Revoke a claim previously issued, the claim is no longer considered as valid after revocation.\\n     * @notice will fetch the claim from the identity contract (unsafe).\\n     * @param _claimId the id of the claim\\n     * @param _identity the address of the identity contract\\n     * @return isRevoked true when the claim is revoked\\n     */\\n    function revokeClaim(bytes32 _claimId, address _identity) external returns(bool);\\n\\n    /**\\n     * @dev Revoke a claim previously issued, the claim is no longer considered as valid after revocation.\\n     * @param signature the signature of the claim\\n     */\\n    function revokeClaimBySignature(bytes calldata signature) external;\\n\\n    /**\\n     * @dev Returns revocation status of a claim.\\n     * @param _sig the signature of the claim\\n     * @return isRevoked true if the claim is revoked and false otherwise\\n     */\\n    function isClaimRevoked(bytes calldata _sig) external view returns (bool);\\n\\n    /**\\n     * @dev Checks if a claim is valid.\\n     * @param _identity the identity contract related to the claim\\n     * @param claimTopic the claim topic of the claim\\n     * @param sig the signature of the claim\\n     * @param data the data field of the claim\\n     * @return claimValid true if the claim is valid, false otherwise\\n     */\\n    function isClaimValid(\\n        IIdentity _identity,\\n        uint256 claimTopic,\\n        bytes calldata sig,\\n        bytes calldata data)\\n    external view returns (bool);\\n\\n    /**\\n     * @dev returns the address that signed the given data\\n     * @param sig the signature of the data\\n     * @param dataHash the data that was signed\\n     * returns the address that signed dataHash and created the signature sig\\n     */\\n    function getRecoveredAddress(bytes calldata sig, bytes32 dataHash) external pure returns (address);\\n}\\n\\n// File @openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol@v4.9.3\\n\\n// OpenZeppelin Contracts (last updated v4.9.0) (utils/Address.sol)\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary AddressUpgradeable {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     *\\n     * Furthermore, `isContract` will also return true if the target contract within\\n     * the same transaction is already scheduled for destruction by `SELFDESTRUCT`,\\n     * which only has an effect at the end of a transaction.\\n     * ====\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * You shouldn't rely on `isContract` to protect against flash loan attacks!\\n     *\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\n     * constructor.\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize/address.code.length, which returns 0\\n        // for contracts in construction, since the code is only stored at the end\\n        // of the constructor execution.\\n\\n        return account.code.length > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.8.0/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\\"Address: insufficient balance\\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\\"\\\");\\n        require(success, \\\"Address: unable to send value, recipient may have reverted\\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, \\\"Address: low-level call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\\"Address: low-level call with value failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\\"Address: insufficient balance for call\\\");\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\\"Address: low-level static call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\\"Address: low-level delegate call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call to smart-contract was successful, and revert (either by bubbling\\n     * the revert reason or using the provided one) in case of unsuccessful call or if target was not a contract.\\n     *\\n     * _Available since v4.8._\\n     */\\n    function verifyCallResultFromTarget(\\n        address target,\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        if (success) {\\n            if (returndata.length == 0) {\\n                // only check isContract if the call was successful and the return data is empty\\n                // otherwise we already know that it was a contract\\n                require(isContract(target), \\\"Address: call to non-contract\\\");\\n            }\\n            return returndata;\\n        } else {\\n            _revert(returndata, errorMessage);\\n        }\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call was successful, and revert if it wasn't, either by bubbling the\\n     * revert reason or using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            _revert(returndata, errorMessage);\\n        }\\n    }\\n\\n    function _revert(bytes memory returndata, string memory errorMessage) private pure {\\n        // Look for revert reason and bubble it up if present\\n        if (returndata.length > 0) {\\n            // The easiest way to bubble the revert reason is using memory via assembly\\n            /// @solidity memory-safe-assembly\\n            assembly {\\n                let returndata_size := mload(returndata)\\n                revert(add(32, returndata), returndata_size)\\n            }\\n        } else {\\n            revert(errorMessage);\\n        }\\n    }\\n}\\n\\n// File @openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol@v4.9.3\\n\\n// OpenZeppelin Contracts (last updated v4.9.0) (proxy/utils/Initializable.sol)\\n\\n/**\\n * @dev This is a base contract to aid in writing upgradeable contracts, or any kind of contract that will be deployed\\n * behind a proxy. Since proxied contracts do not make use of a constructor, it's common to move constructor logic to an\\n * external initializer function, usually called `initialize`. It then becomes necessary to protect this initializer\\n * function so it can only be called once. The {initializer} modifier provided by this contract will have this effect.\\n *\\n * The initialization functions use a version number. Once a version number is used, it is consumed and cannot be\\n * reused. This mechanism prevents re-execution of each \\\"step\\\" but allows the creation of new initialization steps in\\n * case an upgrade adds a module that needs to be initialized.\\n *\\n * For example:\\n *\\n * [.hljs-theme-light.nopadding]\\n * ```solidity\\n * contract MyToken is ERC20Upgradeable {\\n *     function initialize() initializer public {\\n *         __ERC20_init(\\\"MyToken\\\", \\\"MTK\\\");\\n *     }\\n * }\\n *\\n * contract MyTokenV2 is MyToken, ERC20PermitUpgradeable {\\n *     function initializeV2() reinitializer(2) public {\\n *         __ERC20Permit_init(\\\"MyToken\\\");\\n *     }\\n * }\\n * ```\\n *\\n * TIP: To avoid leaving the proxy in an uninitialized state, the initializer function should be called as early as\\n * possible by providing the encoded function call as the `_data` argument to {ERC1967Proxy-constructor}.\\n *\\n * CAUTION: When used with inheritance, manual care must be taken to not invoke a parent initializer twice, or to ensure\\n * that all initializers are idempotent. This is not verified automatically as constructors are by Solidity.\\n *\\n * [CAUTION]\\n * ====\\n * Avoid leaving a contract uninitialized.\\n *\\n * An uninitialized contract can be taken over by an attacker. This applies to both a proxy and its implementation\\n * contract, which may impact the proxy. To prevent the implementation contract from being used, you should invoke\\n * the {_disableInitializers} function in the constructor to automatically lock it when it is deployed:\\n *\\n * [.hljs-theme-light.nopadding]\\n * ```\\n * /// @custom:oz-upgrades-unsafe-allow constructor\\n * constructor() {\\n *     _disableInitializers();\\n * }\\n * ```\\n * ====\\n */\\nabstract contract Initializable {\\n    /**\\n     * @dev Indicates that the contract has been initialized.\\n     * @custom:oz-retyped-from bool\\n     */\\n    uint8 private _initialized;\\n\\n    /**\\n     * @dev Indicates that the contract is in the process of being initialized.\\n     */\\n    bool private _initializing;\\n\\n    /**\\n     * @dev Triggered when the contract has been initialized or reinitialized.\\n     */\\n    event Initialized(uint8 version);\\n\\n    /**\\n     * @dev A modifier that defines a protected initializer function that can be invoked at most once. In its scope,\\n     * `onlyInitializing` functions can be used to initialize parent contracts.\\n     *\\n     * Similar to `reinitializer(1)`, except that functions marked with `initializer` can be nested in the context of a\\n     * constructor.\\n     *\\n     * Emits an {Initialized} event.\\n     */\\n    modifier initializer() {\\n        bool isTopLevelCall = !_initializing;\\n        require(\\n            (isTopLevelCall && _initialized < 1) || (!AddressUpgradeable.isContract(address(this)) && _initialized == 1),\\n            \\\"Initializable: contract is already initialized\\\"\\n        );\\n        _initialized = 1;\\n        if (isTopLevelCall) {\\n            _initializing = true;\\n        }\\n        _;\\n        if (isTopLevelCall) {\\n            _initializing = false;\\n            emit Initialized(1);\\n        }\\n    }\\n\\n    /**\\n     * @dev A modifier that defines a protected reinitializer function that can be invoked at most once, and only if the\\n     * contract hasn't been initialized to a greater version before. In its scope, `onlyInitializing` functions can be\\n     * used to initialize parent contracts.\\n     *\\n     * A reinitializer may be used after the original initialization step. This is essential to configure modules that\\n     * are added through upgrades and that require initialization.\\n     *\\n     * When `version` is 1, this modifier is similar to `initializer`, except that functions marked with `reinitializer`\\n     * cannot be nested. If one is invoked in the context of another, execution will revert.\\n     *\\n     * Note that versions can jump in increments greater than 1; this implies that if multiple reinitializers coexist in\\n     * a contract, executing them in the right order is up to the developer or operator.\\n     *\\n     * WARNING: setting the version to 255 will prevent any future reinitialization.\\n     *\\n     * Emits an {Initialized} event.\\n     */\\n    modifier reinitializer(uint8 version) {\\n        require(!_initializing && _initialized < version, \\\"Initializable: contract is already initialized\\\");\\n        _initialized = version;\\n        _initializing = true;\\n        _;\\n        _initializing = false;\\n        emit Initialized(version);\\n    }\\n\\n    /**\\n     * @dev Modifier to protect an initialization function so that it can only be invoked by functions with the\\n     * {initializer} and {reinitializer} modifiers, directly or indirectly.\\n     */\\n    modifier onlyInitializing() {\\n        require(_initializing, \\\"Initializable: contract is not initializing\\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Locks the contract, preventing any future reinitialization. This cannot be part of an initializer call.\\n     * Calling this in the constructor of a contract will prevent that contract from being initialized or reinitialized\\n     * to any version. It is recommended to use this to lock implementation contracts that are designed to be called\\n     * through proxies.\\n     *\\n     * Emits an {Initialized} event the first time it is successfully executed.\\n     */\\n    function _disableInitializers() internal virtual {\\n        require(!_initializing, \\\"Initializable: contract is initializing\\\");\\n        if (_initialized != type(uint8).max) {\\n            _initialized = type(uint8).max;\\n            emit Initialized(type(uint8).max);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the highest version that has been initialized. See {reinitializer}.\\n     */\\n    function _getInitializedVersion() internal view returns (uint8) {\\n        return _initialized;\\n    }\\n\\n    /**\\n     * @dev Returns `true` if the contract is currently initializing. See {onlyInitializing}.\\n     */\\n    function _isInitializing() internal view returns (bool) {\\n        return _initializing;\\n    }\\n}\\n\\n// File @openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol@v4.9.3\\n\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract ContextUpgradeable is Initializable {\\n    function __Context_init() internal onlyInitializing {\\n    }\\n\\n    function __Context_init_unchained() internal onlyInitializing {\\n    }\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n\\n    /**\\n     * @dev This empty reserved space is put in place to allow future versions to add new\\n     * variables without shifting down storage in the inheritance chain.\\n     * See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps\\n     */\\n    uint256[50] private __gap;\\n}\\n\\n// File @openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol@v4.9.3\\n\\n// OpenZeppelin Contracts (last updated v4.9.0) (access/Ownable.sol)\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * By default, the owner account will be the one that deploys the contract. This\\n * can later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract OwnableUpgradeable is Initializable, ContextUpgradeable {\\n    address private _owner;\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the deployer as the initial owner.\\n     */\\n    function __Ownable_init() internal onlyInitializing {\\n        __Ownable_init_unchained();\\n    }\\n\\n    function __Ownable_init_unchained() internal onlyInitializing {\\n        _transferOwnership(_msgSender());\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        _checkOwner();\\n        _;\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if the sender is not the owner.\\n     */\\n    function _checkOwner() internal view virtual {\\n        require(owner() == _msgSender(), \\\"Ownable: caller is not the owner\\\");\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby disabling any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _transferOwnership(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        require(newOwner != address(0), \\\"Ownable: new owner is the zero address\\\");\\n        _transferOwnership(newOwner);\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Internal function without access restriction.\\n     */\\n    function _transferOwnership(address newOwner) internal virtual {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n\\n    /**\\n     * @dev This empty reserved space is put in place to allow future versions to add new\\n     * variables without shifting down storage in the inheritance chain.\\n     * See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps\\n     */\\n    uint256[49] private __gap;\\n}\\n\\n// File contracts/registry/interface/IClaimTopicsRegistry.sol\\n\\n//\\n//                                             :+#####%%%%%%%%%%%%%%+\\n//                                         .-*@@@%+.:+%@@@@@%%#***%@@%=\\n//                                     :=*%@@@#=.      :#@@%       *@@@%=\\n//                       .-+*%@%*-.:+%@@@@@@+.     -*+:  .=#.       :%@@@%-\\n//                   :=*@@@@%%@@@@@@@@@%@@@-   .=#@@@%@%=             =@@@@#.\\n//             -=+#%@@%#*=:.  :%@@@@%.   -*@@#*@@@@@@@#=:-              *@@@@+\\n//            =@@%=:.     :=:   *@@@@@%#-   =%*%@@@@#+-.        =+       :%@@@%-\\n//           -@@%.     .+@@@     =+=-.         @@#-           +@@@%-       =@@@@%:\\n//          :@@@.    .+@@#%:                   :    .=*=-::.-%@@@+*@@=       +@@@@#.\\n//          %@@:    +@%%*                         =%@@@@@@@@@@@#.  .*@%-       +@@@@*.\\n//         #@@=                                .+@@@@%:=*@@@@@-      :%@%:      .*@@@@+\\n//        *@@*                                +@@@#-@@%-:%@@*          +@@#.      :%@@@@-\\n//       -@@%           .:-=++*##%%%@@@@@@@@@@@@*. :@+.@@@%:            .#@@+       =@@@@#:\\n//      .@@@*-+*#%%%@@@@@@@@@@@@@@@@%%#**@@%@@@.   *@=*@@#                :#@%=      .#@@@@#-\\n//      -%@@@@@@@@@@@@@@@*+==-:-@@@=    *@# .#@*-=*@@@@%=                 -%@@@*       =@@@@@%-\\n//         -+%@@@#.   %@%%=   -@@:+@: -@@*    *@@*-::                   -%@@%=.         .*@@@@@#\\n//            *@@@*  +@* *@@##@@-  #@*@@+    -@@=          .         :+@@@#:           .-+@@@%+-\\n//             +@@@%*@@:..=@@@@*   .@@@*   .#@#.       .=+-       .=%@@@*.         :+#@@@@*=:\\n//              =@@@@%@@@@@@@@@@@@@@@@@@@@@@%-      :+#*.       :*@@@%=.       .=#@@@@%+:\\n//               .%@@=                 .....    .=#@@+.       .#@@@*:       -*%@@@@%+.\\n//                 +@@#+===---:::...         .=%@@*-         +@@@+.      -*@@@@@%+.\\n//                  -@@@@@@@@@@@@@@@@@@@@@@%@@@@=          -@@@+      -#@@@@@#=.\\n//                    ..:::---===+++***###%%%@@@#-       .#@@+     -*@@@@@#=.\\n//                                           @@@@@@+.   +@@*.   .+@@@@@%=.\\n//                                          -@@@@@=   =@@%:   -#@@@@%+.\\n//                                          +@@@@@. =@@@=  .+@@@@@*:\\n//                                          #@@@@#:%@@#. :*@@@@#-\\n//                                          @@@@@%@@@= :#@@@@+.\\n//                                         :@@@@@@@#.:#@@@%-\\n//                                         +@@@@@@-.*@@@*:\\n//                                         #@@@@#.=@@@+.\\n//                                         @@@@+-%@%=\\n//                                        :@@@#%@%=\\n//                                        +@@@@%-\\n//                                        :#%%=\\n//\\n/**\\n *     NOTICE\\n *\\n *     The T-REX software is licensed under a proprietary license or the GPL v.3.\\n *     If you choose to receive it under the GPL v.3 license, the following applies:\\n *     T-REX is a suite of smart contracts implementing the ERC-3643 standard and\\n *     developed by Tokeny to manage and transfer financial assets on EVM blockchains\\n *\\n *     Copyright (C) 2023, Tokeny s\\u00e0rl.\\n *\\n *     This program is free software: you can redistribute it and/or modify\\n *     it under the terms of the GNU General Public License as published by\\n *     the Free Software Foundation, either version 3 of the License, or\\n *     (at your option) any later version.\\n *\\n *     This program is distributed in the hope that it will be useful,\\n *     but WITHOUT ANY WARRANTY; without even the implied warranty of\\n *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\n *     GNU General Public License for more details.\\n *\\n *     You should have received a copy of the GNU General Public License\\n *     along with this program.  If not, see <https://www.gnu.org/licenses/>.\\n */\\n\\ninterface IClaimTopicsRegistry {\\n    /**\\n     *  this event is emitted when a claim topic has been added to the ClaimTopicsRegistry\\n     *  the event is emitted by the 'addClaimTopic' function\\n     *  `claimTopic` is the required claim added to the Claim Topics Registry\\n     */\\n    event ClaimTopicAdded(uint256 indexed claimTopic);\\n\\n    /**\\n     *  this event is emitted when a claim topic has been removed from the ClaimTopicsRegistry\\n     *  the event is emitted by the 'removeClaimTopic' function\\n     *  `claimTopic` is the required claim removed from the Claim Topics Registry\\n     */\\n    event ClaimTopicRemoved(uint256 indexed claimTopic);\\n\\n    /**\\n     * @dev Add a trusted claim topic (For example: KYC=1, AML=2).\\n     * Only owner can call.\\n     * emits `ClaimTopicAdded` event\\n     * cannot add more than 15 topics for 1 token as adding more could create gas issues\\n     * @param _claimTopic The claim topic index\\n     */\\n    function addClaimTopic(uint256 _claimTopic) external;\\n\\n    /**\\n     *  @dev Remove a trusted claim topic (For example: KYC=1, AML=2).\\n     *  Only owner can call.\\n     *  emits `ClaimTopicRemoved` event\\n     *  @param _claimTopic The claim topic index\\n     */\\n    function removeClaimTopic(uint256 _claimTopic) external;\\n\\n    /**\\n     *  @dev Get the trusted claim topics for the security token\\n     *  @return Array of trusted claim topics\\n     */\\n    function getClaimTopics() external view returns (uint256[] memory);\\n}\\n\\n// File contracts/registry/interface/IIdentityRegistryStorage.sol\\n\\n//\\n//                                             :+#####%%%%%%%%%%%%%%+\\n//                                         .-*@@@%+.:+%@@@@@%%#***%@@%=\\n//                                     :=*%@@@#=.      :#@@%       *@@@%=\\n//                       .-+*%@%*-.:+%@@@@@@+.     -*+:  .=#.       :%@@@%-\\n//                   :=*@@@@%%@@@@@@@@@%@@@-   .=#@@@%@%=             =@@@@#.\\n//             -=+#%@@%#*=:.  :%@@@@%.   -*@@#*@@@@@@@#=:-              *@@@@+\\n//            =@@%=:.     :=:   *@@@@@%#-   =%*%@@@@#+-.        =+       :%@@@%-\\n//           -@@%.     .+@@@     =+=-.         @@#-           +@@@%-       =@@@@%:\\n//          :@@@.    .+@@#%:                   :    .=*=-::.-%@@@+*@@=       +@@@@#.\\n//          %@@:    +@%%*                         =%@@@@@@@@@@@#.  .*@%-       +@@@@*.\\n//         #@@=                                .+@@@@%:=*@@@@@-      :%@%:      .*@@@@+\\n//        *@@*                                +@@@#-@@%-:%@@*          +@@#.      :%@@@@-\\n//       -@@%           .:-=++*##%%%@@@@@@@@@@@@*. :@+.@@@%:            .#@@+       =@@@@#:\\n//      .@@@*-+*#%%%@@@@@@@@@@@@@@@@%%#**@@%@@@.   *@=*@@#                :#@%=      .#@@@@#-\\n//      -%@@@@@@@@@@@@@@@*+==-:-@@@=    *@# .#@*-=*@@@@%=                 -%@@@*       =@@@@@%-\\n//         -+%@@@#.   %@%%=   -@@:+@: -@@*    *@@*-::                   -%@@%=.         .*@@@@@#\\n//            *@@@*  +@* *@@##@@-  #@*@@+    -@@=          .         :+@@@#:           .-+@@@%+-\\n//             +@@@%*@@:..=@@@@*   .@@@*   .#@#.       .=+-       .=%@@@*.         :+#@@@@*=:\\n//              =@@@@%@@@@@@@@@@@@@@@@@@@@@@%-      :+#*.       :*@@@%=.       .=#@@@@%+:\\n//               .%@@=                 .....    .=#@@+.       .#@@@*:       -*%@@@@%+.\\n//                 +@@#+===---:::...         .=%@@*-         +@@@+.      -*@@@@@%+.\\n//                  -@@@@@@@@@@@@@@@@@@@@@@%@@@@=          -@@@+      -#@@@@@#=.\\n//                    ..:::---===+++***###%%%@@@#-       .#@@+     -*@@@@@#=.\\n//                                           @@@@@@+.   +@@*.   .+@@@@@%=.\\n//                                          -@@@@@=   =@@%:   -#@@@@%+.\\n//                                          +@@@@@. =@@@=  .+@@@@@*:\\n//                                          #@@@@#:%@@#. :*@@@@#-\\n//                                          @@@@@%@@@= :#@@@@+.\\n//                                         :@@@@@@@#.:#@@@%-\\n//                                         +@@@@@@-.*@@@*:\\n//                                         #@@@@#.=@@@+.\\n//                                         @@@@+-%@%=\\n//                                        :@@@#%@%=\\n//                                        +@@@@%-\\n//                                        :#%%=\\n//\\n/**\\n *     NOTICE\\n *\\n *     The T-REX software is licensed under a proprietary license or the GPL v.3.\\n *     If you choose to receive it under the GPL v.3 license, the following applies:\\n *     T-REX is a suite of smart contracts implementing the ERC-3643 standard and\\n *     developed by Tokeny to manage and transfer financial assets on EVM blockchains\\n *\\n *     Copyright (C) 2023, Tokeny s\\u00e0rl.\\n *\\n *     This program is free software: you can redistribute it and/or modify\\n *     it under the terms of the GNU General Public License as published by\\n *     the Free Software Foundation, either version 3 of the License, or\\n *     (at your option) any later version.\\n *\\n *     This program is distributed in the hope that it will be useful,\\n *     but WITHOUT ANY WARRANTY; without even the implied warranty of\\n *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\n *     GNU General Public License for more details.\\n *\\n *     You should have received a copy of the GNU General Public License\\n *     along with this program.  If not, see <https://www.gnu.org/licenses/>.\\n */\\n\\ninterface IIdentityRegistryStorage {\\n\\n    /// events\\n\\n    /**\\n     *  this event is emitted when an Identity is registered into the storage contract.\\n     *  the event is emitted by the 'registerIdentity' function\\n     *  `investorAddress` is the address of the investor's wallet\\n     *  `identity` is the address of the Identity smart contract (onchainID)\\n     */\\n    event IdentityStored(address indexed investorAddress, IIdentity indexed identity);\\n\\n    /**\\n     *  this event is emitted when an Identity is removed from the storage contract.\\n     *  the event is emitted by the 'deleteIdentity' function\\n     *  `investorAddress` is the address of the investor's wallet\\n     *  `identity` is the address of the Identity smart contract (onchainID)\\n     */\\n    event IdentityUnstored(address indexed investorAddress, IIdentity indexed identity);\\n\\n    /**\\n     *  this event is emitted when an Identity has been updated\\n     *  the event is emitted by the 'updateIdentity' function\\n     *  `oldIdentity` is the old Identity contract's address to update\\n     *  `newIdentity` is the new Identity contract's\\n     */\\n    event IdentityModified(IIdentity indexed oldIdentity, IIdentity indexed newIdentity);\\n\\n    /**\\n     *  this event is emitted when an Identity's country has been updated\\n     *  the event is emitted by the 'updateCountry' function\\n     *  `investorAddress` is the address on which the country has been updated\\n     *  `country` is the numeric code (ISO 3166-1) of the new country\\n     */\\n    event CountryModified(address indexed investorAddress, uint16 indexed country);\\n\\n    /**\\n     *  this event is emitted when an Identity Registry is bound to the storage contract\\n     *  the event is emitted by the 'addIdentityRegistry' function\\n     *  `identityRegistry` is the address of the identity registry added\\n     */\\n    event IdentityRegistryBound(address indexed identityRegistry);\\n\\n    /**\\n     *  this event is emitted when an Identity Registry is unbound from the storage contract\\n     *  the event is emitted by the 'removeIdentityRegistry' function\\n     *  `identityRegistry` is the address of the identity registry removed\\n     */\\n    event IdentityRegistryUnbound(address indexed identityRegistry);\\n\\n    /// functions\\n\\n    /**\\n     *  @dev adds an identity contract corresponding to a user address in the storage.\\n     *  Requires that the user doesn't have an identity contract already registered.\\n     *  This function can only be called by an address set as agent of the smart contract\\n     *  @param _userAddress The address of the user\\n     *  @param _identity The address of the user's identity contract\\n     *  @param _country The country of the investor\\n     *  emits `IdentityStored` event\\n     */\\n    function addIdentityToStorage(\\n        address _userAddress,\\n        IIdentity _identity,\\n        uint16 _country\\n    ) external;\\n\\n    /**\\n     *  @dev Removes an user from the storage.\\n     *  Requires that the user have an identity contract already deployed that will be deleted.\\n     *  This function can only be called by an address set as agent of the smart contract\\n     *  @param _userAddress The address of the user to be removed\\n     *  emits `IdentityUnstored` event\\n     */\\n    function removeIdentityFromStorage(address _userAddress) external;\\n\\n    /**\\n     *  @dev Updates the country corresponding to a user address.\\n     *  Requires that the user should have an identity contract already deployed that will be replaced.\\n     *  This function can only be called by an address set as agent of the smart contract\\n     *  @param _userAddress The address of the user\\n     *  @param _country The new country of the user\\n     *  emits `CountryModified` event\\n     */\\n    function modifyStoredInvestorCountry(address _userAddress, uint16 _country) external;\\n\\n    /**\\n     *  @dev Updates an identity contract corresponding to a user address.\\n     *  Requires that the user address should be the owner of the identity contract.\\n     *  Requires that the user should have an identity contract already deployed that will be replaced.\\n     *  This function can only be called by an address set as agent of the smart contract\\n     *  @param _userAddress The address of the user\\n     *  @param _identity The address of the user's new identity contract\\n     *  emits `IdentityModified` event\\n     */\\n    function modifyStoredIdentity(address _userAddress, IIdentity _identity) external;\\n\\n    /**\\n     *  @notice Adds an identity registry as agent of the Identity Registry Storage Contract.\\n     *  This function can only be called by the wallet set as owner of the smart contract\\n     *  This function adds the identity registry to the list of identityRegistries linked to the storage contract\\n     *  cannot bind more than 300 IR to 1 IRS\\n     *  @param _identityRegistry The identity registry address to add.\\n     */\\n    function bindIdentityRegistry(address _identityRegistry) external;\\n\\n    /**\\n     *  @notice Removes an identity registry from being agent of the Identity Registry Storage Contract.\\n     *  This function can only be called by the wallet set as owner of the smart contract\\n     *  This function removes the identity registry from the list of identityRegistries linked to the storage contract\\n     *  @param _identityRegistry The identity registry address to remove.\\n     */\\n    function unbindIdentityRegistry(address _identityRegistry) external;\\n\\n    /**\\n     *  @dev Returns the identity registries linked to the storage contract\\n     */\\n    function linkedIdentityRegistries() external view returns (address[] memory);\\n\\n    /**\\n     *  @dev Returns the onchainID of an investor.\\n     *  @param _userAddress The wallet of the investor\\n     */\\n    function storedIdentity(address _userAddress) external view returns (IIdentity);\\n\\n    /**\\n     *  @dev Returns the country code of an investor.\\n     *  @param _userAddress The wallet of the investor\\n     */\\n    function storedInvestorCountry(address _userAddress) external view returns (uint16);\\n}\\n\\n// File contracts/registry/interface/ITrustedIssuersRegistry.sol\\n\\n//\\n//                                             :+#####%%%%%%%%%%%%%%+\\n//                                         .-*@@@%+.:+%@@@@@%%#***%@@%=\\n//                                     :=*%@@@#=.      :#@@%       *@@@%=\\n//                       .-+*%@%*-.:+%@@@@@@+.     -*+:  .=#.       :%@@@%-\\n//                   :=*@@@@%%@@@@@@@@@%@@@-   .=#@@@%@%=             =@@@@#.\\n//             -=+#%@@%#*=:.  :%@@@@%.   -*@@#*@@@@@@@#=:-              *@@@@+\\n//            =@@%=:.     :=:   *@@@@@%#-   =%*%@@@@#+-.        =+       :%@@@%-\\n//           -@@%.     .+@@@     =+=-.         @@#-           +@@@%-       =@@@@%:\\n//          :@@@.    .+@@#%:                   :    .=*=-::.-%@@@+*@@=       +@@@@#.\\n//          %@@:    +@%%*                         =%@@@@@@@@@@@#.  .*@%-       +@@@@*.\\n//         #@@=                                .+@@@@%:=*@@@@@-      :%@%:      .*@@@@+\\n//        *@@*                                +@@@#-@@%-:%@@*          +@@#.      :%@@@@-\\n//       -@@%           .:-=++*##%%%@@@@@@@@@@@@*. :@+.@@@%:            .#@@+       =@@@@#:\\n//      .@@@*-+*#%%%@@@@@@@@@@@@@@@@%%#**@@%@@@.   *@=*@@#                :#@%=      .#@@@@#-\\n//      -%@@@@@@@@@@@@@@@*+==-:-@@@=    *@# .#@*-=*@@@@%=                 -%@@@*       =@@@@@%-\\n//         -+%@@@#.   %@%%=   -@@:+@: -@@*    *@@*-::                   -%@@%=.         .*@@@@@#\\n//            *@@@*  +@* *@@##@@-  #@*@@+    -@@=          .         :+@@@#:           .-+@@@%+-\\n//             +@@@%*@@:..=@@@@*   .@@@*   .#@#.       .=+-       .=%@@@*.         :+#@@@@*=:\\n//              =@@@@%@@@@@@@@@@@@@@@@@@@@@@%-      :+#*.       :*@@@%=.       .=#@@@@%+:\\n//               .%@@=                 .....    .=#@@+.       .#@@@*:       -*%@@@@%+.\\n//                 +@@#+===---:::...         .=%@@*-         +@@@+.      -*@@@@@%+.\\n//                  -@@@@@@@@@@@@@@@@@@@@@@%@@@@=          -@@@+      -#@@@@@#=.\\n//                    ..:::---===+++***###%%%@@@#-       .#@@+     -*@@@@@#=.\\n//                                           @@@@@@+.   +@@*.   .+@@@@@%=.\\n//                                          -@@@@@=   =@@%:   -#@@@@%+.\\n//                                          +@@@@@. =@@@=  .+@@@@@*:\\n//                                          #@@@@#:%@@#. :*@@@@#-\\n//                                          @@@@@%@@@= :#@@@@+.\\n//                                         :@@@@@@@#.:#@@@%-\\n//                                         +@@@@@@-.*@@@*:\\n//                                         #@@@@#.=@@@+.\\n//                                         @@@@+-%@%=\\n//                                        :@@@#%@%=\\n//                                        +@@@@%-\\n//                                        :#%%=\\n//\\n\\n/**\\n *     NOTICE\\n *\\n *     The T-REX software is licensed under a proprietary license or the GPL v.3.\\n *     If you choose to receive it under the GPL v.3 license, the following applies:\\n *     T-REX is a suite of smart contracts implementing the ERC-3643 standard and\\n *     developed by Tokeny to manage and transfer financial assets on EVM blockchains\\n *\\n *     Copyright (C) 2023, Tokeny s\\u00e0rl.\\n *\\n *     This program is free software: you can redistribute it and/or modify\\n *     it under the terms of the GNU General Public License as published by\\n *     the Free Software Foundation, either version 3 of the License, or\\n *     (at your option) any later version.\\n *\\n *     This program is distributed in the hope that it will be useful,\\n *     but WITHOUT ANY WARRANTY; without even the implied warranty of\\n *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\n *     GNU General Public License for more details.\\n *\\n *     You should have received a copy of the GNU General Public License\\n *     along with this program.  If not, see <https://www.gnu.org/licenses/>.\\n */\\n\\ninterface ITrustedIssuersRegistry {\\n    /**\\n     *  this event is emitted when a trusted issuer is added in the registry.\\n     *  the event is emitted by the addTrustedIssuer function\\n     *  `trustedIssuer` is the address of the trusted issuer's ClaimIssuer contract\\n     *  `claimTopics` is the set of claims that the trusted issuer is allowed to emit\\n     */\\n    event TrustedIssuerAdded(IClaimIssuer indexed trustedIssuer, uint256[] claimTopics);\\n\\n    /**\\n     *  this event is emitted when a trusted issuer is removed from the registry.\\n     *  the event is emitted by the removeTrustedIssuer function\\n     *  `trustedIssuer` is the address of the trusted issuer's ClaimIssuer contract\\n     */\\n    event TrustedIssuerRemoved(IClaimIssuer indexed trustedIssuer);\\n\\n    /**\\n     *  this event is emitted when the set of claim topics is changed for a given trusted issuer.\\n     *  the event is emitted by the updateIssuerClaimTopics function\\n     *  `trustedIssuer` is the address of the trusted issuer's ClaimIssuer contract\\n     *  `claimTopics` is the set of claims that the trusted issuer is allowed to emit\\n     */\\n    event ClaimTopicsUpdated(IClaimIssuer indexed trustedIssuer, uint256[] claimTopics);\\n\\n    /**\\n     *  @dev registers a ClaimIssuer contract as trusted claim issuer.\\n     *  Requires that a ClaimIssuer contract doesn't already exist\\n     *  Requires that the claimTopics set is not empty\\n     *  Requires that there is no more than 15 claimTopics\\n     *  Requires that there is no more than 50 Trusted issuers\\n     *  @param _trustedIssuer The ClaimIssuer contract address of the trusted claim issuer.\\n     *  @param _claimTopics the set of claim topics that the trusted issuer is allowed to emit\\n     *  This function can only be called by the owner of the Trusted Issuers Registry contract\\n     *  emits a `TrustedIssuerAdded` event\\n     */\\n    function addTrustedIssuer(IClaimIssuer _trustedIssuer, uint256[] calldata _claimTopics) external;\\n\\n    /**\\n     *  @dev Removes the ClaimIssuer contract of a trusted claim issuer.\\n     *  Requires that the claim issuer contract to be registered first\\n     *  @param _trustedIssuer the claim issuer to remove.\\n     *  This function can only be called by the owner of the Trusted Issuers Registry contract\\n     *  emits a `TrustedIssuerRemoved` event\\n     */\\n    function removeTrustedIssuer(IClaimIssuer _trustedIssuer) external;\\n\\n    /**\\n     *  @dev Updates the set of claim topics that a trusted issuer is allowed to emit.\\n     *  Requires that this ClaimIssuer contract already exists in the registry\\n     *  Requires that the provided claimTopics set is not empty\\n     *  Requires that there is no more than 15 claimTopics\\n     *  @param _trustedIssuer the claim issuer to update.\\n     *  @param _claimTopics the set of claim topics that the trusted issuer is allowed to emit\\n     *  This function can only be called by the owner of the Trusted Issuers Registry contract\\n     *  emits a `ClaimTopicsUpdated` event\\n     */\\n    function updateIssuerClaimTopics(IClaimIssuer _trustedIssuer, uint256[] calldata _claimTopics) external;\\n\\n    /**\\n     *  @dev Function for getting all the trusted claim issuers stored.\\n     *  @return array of all claim issuers registered.\\n     */\\n    function getTrustedIssuers() external view returns (IClaimIssuer[] memory);\\n\\n    /**\\n     *  @dev Function for getting all the trusted issuer allowed for a given claim topic.\\n     *  @param claimTopic the claim topic to get the trusted issuers for.\\n     *  @return array of all claim issuer addresses that are allowed for the given claim topic.\\n     */\\n    function getTrustedIssuersForClaimTopic(uint256 claimTopic) external view returns (IClaimIssuer[] memory);\\n\\n    /**\\n     *  @dev Checks if the ClaimIssuer contract is trusted\\n     *  @param _issuer the address of the ClaimIssuer contract\\n     *  @return true if the issuer is trusted, false otherwise.\\n     */\\n    function isTrustedIssuer(address _issuer) external view returns (bool);\\n\\n    /**\\n     *  @dev Function for getting all the claim topic of trusted claim issuer\\n     *  Requires the provided ClaimIssuer contract to be registered in the trusted issuers registry.\\n     *  @param _trustedIssuer the trusted issuer concerned.\\n     *  @return The set of claim topics that the trusted issuer is allowed to emit\\n     */\\n    function getTrustedIssuerClaimTopics(IClaimIssuer _trustedIssuer) external view returns (uint256[] memory);\\n\\n    /**\\n     *  @dev Function for checking if the trusted claim issuer is allowed\\n     *  to emit a certain claim topic\\n     *  @param _issuer the address of the trusted issuer's ClaimIssuer contract\\n     *  @param _claimTopic the Claim Topic that has to be checked to know if the `issuer` is allowed to emit it\\n     *  @return true if the issuer is trusted for this claim topic.\\n     */\\n    function hasClaimTopic(address _issuer, uint256 _claimTopic) external view returns (bool);\\n}\\n\\n// File contracts/registry/interface/IIdentityRegistry.sol\\n\\n//\\n//                                             :+#####%%%%%%%%%%%%%%+\\n//                                         .-*@@@%+.:+%@@@@@%%#***%@@%=\\n//                                     :=*%@@@#=.      :#@@%       *@@@%=\\n//                       .-+*%@%*-.:+%@@@@@@+.     -*+:  .=#.       :%@@@%-\\n//                   :=*@@@@%%@@@@@@@@@%@@@-   .=#@@@%@%=             =@@@@#.\\n//             -=+#%@@%#*=:.  :%@@@@%.   -*@@#*@@@@@@@#=:-              *@@@@+\\n//            =@@%=:.     :=:   *@@@@@%#-   =%*%@@@@#+-.        =+       :%@@@%-\\n//           -@@%.     .+@@@     =+=-.         @@#-           +@@@%-       =@@@@%:\\n//          :@@@.    .+@@#%:                   :    .=*=-::.-%@@@+*@@=       +@@@@#.\\n//          %@@:    +@%%*                         =%@@@@@@@@@@@#.  .*@%-       +@@@@*.\\n//         #@@=                                .+@@@@%:=*@@@@@-      :%@%:      .*@@@@+\\n//        *@@*                                +@@@#-@@%-:%@@*          +@@#.      :%@@@@-\\n//       -@@%           .:-=++*##%%%@@@@@@@@@@@@*. :@+.@@@%:            .#@@+       =@@@@#:\\n//      .@@@*-+*#%%%@@@@@@@@@@@@@@@@%%#**@@%@@@.   *@=*@@#                :#@%=      .#@@@@#-\\n//      -%@@@@@@@@@@@@@@@*+==-:-@@@=    *@# .#@*-=*@@@@%=                 -%@@@*       =@@@@@%-\\n//         -+%@@@#.   %@%%=   -@@:+@: -@@*    *@@*-::                   -%@@%=.         .*@@@@@#\\n//            *@@@*  +@* *@@##@@-  #@*@@+    -@@=          .         :+@@@#:           .-+@@@%+-\\n//             +@@@%*@@:..=@@@@*   .@@@*   .#@#.       .=+-       .=%@@@*.         :+#@@@@*=:\\n//              =@@@@%@@@@@@@@@@@@@@@@@@@@@@%-      :+#*.       :*@@@%=.       .=#@@@@%+:\\n//               .%@@=                 .....    .=#@@+.       .#@@@*:       -*%@@@@%+.\\n//                 +@@#+===---:::...         .=%@@*-         +@@@+.      -*@@@@@%+.\\n//                  -@@@@@@@@@@@@@@@@@@@@@@%@@@@=          -@@@+      -#@@@@@#=.\\n//                    ..:::---===+++***###%%%@@@#-       .#@@+     -*@@@@@#=.\\n//                                           @@@@@@+.   +@@*.   .+@@@@@%=.\\n//                                          -@@@@@=   =@@%:   -#@@@@%+.\\n//                                          +@@@@@. =@@@=  .+@@@@@*:\\n//                                          #@@@@#:%@@#. :*@@@@#-\\n//                                          @@@@@%@@@= :#@@@@+.\\n//                                         :@@@@@@@#.:#@@@%-\\n//                                         +@@@@@@-.*@@@*:\\n//                                         #@@@@#.=@@@+.\\n//                                         @@@@+-%@%=\\n//                                        :@@@#%@%=\\n//                                        +@@@@%-\\n//                                        :#%%=\\n//\\n/**\\n *     NOTICE\\n *\\n *     The T-REX software is licensed under a proprietary license or the GPL v.3.\\n *     If you choose to receive it under the GPL v.3 license, the following applies:\\n *     T-REX is a suite of smart contracts implementing the ERC-3643 standard and\\n *     developed by Tokeny to manage and transfer financial assets on EVM blockchains\\n *\\n *     Copyright (C) 2023, Tokeny s\\u00e0rl.\\n *\\n *     This program is free software: you can redistribute it and/or modify\\n *     it under the terms of the GNU General Public License as published by\\n *     the Free Software Foundation, either version 3 of the License, or\\n *     (at your option) any later version.\\n *\\n *     This program is distributed in the hope that it will be useful,\\n *     but WITHOUT ANY WARRANTY; without even the implied warranty of\\n *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\n *     GNU General Public License for more details.\\n *\\n *     You should have received a copy of the GNU General Public License\\n *     along with this program.  If not, see <https://www.gnu.org/licenses/>.\\n */\\n\\ninterface IIdentityRegistry {\\n    /**\\n     *  this event is emitted when the ClaimTopicsRegistry has been set for the IdentityRegistry\\n     *  the event is emitted by the IdentityRegistry constructor\\n     *  `claimTopicsRegistry` is the address of the Claim Topics Registry contract\\n     */\\n    event ClaimTopicsRegistrySet(address indexed claimTopicsRegistry);\\n\\n    /**\\n     *  this event is emitted when the IdentityRegistryStorage has been set for the IdentityRegistry\\n     *  the event is emitted by the IdentityRegistry constructor\\n     *  `identityStorage` is the address of the Identity Registry Storage contract\\n     */\\n    event IdentityStorageSet(address indexed identityStorage);\\n\\n    /**\\n     *  this event is emitted when the TrustedIssuersRegistry has been set for the IdentityRegistry\\n     *  the event is emitted by the IdentityRegistry constructor\\n     *  `trustedIssuersRegistry` is the address of the Trusted Issuers Registry contract\\n     */\\n    event TrustedIssuersRegistrySet(address indexed trustedIssuersRegistry);\\n\\n    /**\\n     *  this event is emitted when an Identity is registered into the Identity Registry.\\n     *  the event is emitted by the 'registerIdentity' function\\n     *  `investorAddress` is the address of the investor's wallet\\n     *  `identity` is the address of the Identity smart contract (onchainID)\\n     */\\n    event IdentityRegistered(address indexed investorAddress, IIdentity indexed identity);\\n\\n    /**\\n     *  this event is emitted when an Identity is removed from the Identity Registry.\\n     *  the event is emitted by the 'deleteIdentity' function\\n     *  `investorAddress` is the address of the investor's wallet\\n     *  `identity` is the address of the Identity smart contract (onchainID)\\n     */\\n    event IdentityRemoved(address indexed investorAddress, IIdentity indexed identity);\\n\\n    /**\\n     *  this event is emitted when an Identity has been updated\\n     *  the event is emitted by the 'updateIdentity' function\\n     *  `oldIdentity` is the old Identity contract's address to update\\n     *  `newIdentity` is the new Identity contract's\\n     */\\n    event IdentityUpdated(IIdentity indexed oldIdentity, IIdentity indexed newIdentity);\\n\\n    /**\\n     *  this event is emitted when an Identity's country has been updated\\n     *  the event is emitted by the 'updateCountry' function\\n     *  `investorAddress` is the address on which the country has been updated\\n     *  `country` is the numeric code (ISO 3166-1) of the new country\\n     */\\n    event CountryUpdated(address indexed investorAddress, uint16 indexed country);\\n\\n    /**\\n     *  @dev Register an identity contract corresponding to a user address.\\n     *  Requires that the user doesn't have an identity contract already registered.\\n     *  This function can only be called by a wallet set as agent of the smart contract\\n     *  @param _userAddress The address of the user\\n     *  @param _identity The address of the user's identity contract\\n     *  @param _country The country of the investor\\n     *  emits `IdentityRegistered` event\\n     */\\n    function registerIdentity(\\n        address _userAddress,\\n        IIdentity _identity,\\n        uint16 _country\\n    ) external;\\n\\n    /**\\n     *  @dev Removes an user from the identity registry.\\n     *  Requires that the user have an identity contract already deployed that will be deleted.\\n     *  This function can only be called by a wallet set as agent of the smart contract\\n     *  @param _userAddress The address of the user to be removed\\n     *  emits `IdentityRemoved` event\\n     */\\n    function deleteIdentity(address _userAddress) external;\\n\\n    /**\\n     *  @dev Replace the actual identityRegistryStorage contract with a new one.\\n     *  This function can only be called by the wallet set as owner of the smart contract\\n     *  @param _identityRegistryStorage The address of the new Identity Registry Storage\\n     *  emits `IdentityStorageSet` event\\n     */\\n    function setIdentityRegistryStorage(address _identityRegistryStorage) external;\\n\\n    /**\\n     *  @dev Replace the actual claimTopicsRegistry contract with a new one.\\n     *  This function can only be called by the wallet set as owner of the smart contract\\n     *  @param _claimTopicsRegistry The address of the new claim Topics Registry\\n     *  emits `ClaimTopicsRegistrySet` event\\n     */\\n    function setClaimTopicsRegistry(address _claimTopicsRegistry) external;\\n\\n    /**\\n     *  @dev Replace the actual trustedIssuersRegistry contract with a new one.\\n     *  This function can only be called by the wallet set as owner of the smart contract\\n     *  @param _trustedIssuersRegistry The address of the new Trusted Issuers Registry\\n     *  emits `TrustedIssuersRegistrySet` event\\n     */\\n    function setTrustedIssuersRegistry(address _trustedIssuersRegistry) external;\\n\\n    /**\\n     *  @dev Updates the country corresponding to a user address.\\n     *  Requires that the user should have an identity contract already deployed that will be replaced.\\n     *  This function can only be called by a wallet set as agent of the smart contract\\n     *  @param _userAddress The address of the user\\n     *  @param _country The new country of the user\\n     *  emits `CountryUpdated` event\\n     */\\n    function updateCountry(address _userAddress, uint16 _country) external;\\n\\n    /**\\n     *  @dev Updates an identity contract corresponding to a user address.\\n     *  Requires that the user address should be the owner of the identity contract.\\n     *  Requires that the user should have an identity contract already deployed that will be replaced.\\n     *  This function can only be called by a wallet set as agent of the smart contract\\n     *  @param _userAddress The address of the user\\n     *  @param _identity The address of the user's new identity contract\\n     *  emits `IdentityUpdated` event\\n     */\\n    function updateIdentity(address _userAddress, IIdentity _identity) external;\\n\\n    /**\\n     *  @dev function allowing to register identities in batch\\n     *  This function can only be called by a wallet set as agent of the smart contract\\n     *  Requires that none of the users has an identity contract already registered.\\n     *  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_userAddresses.length` IS TOO HIGH,\\n     *  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN \\\"OUT OF GAS\\\" TRANSACTION\\n     *  @param _userAddresses The addresses of the users\\n     *  @param _identities The addresses of the corresponding identity contracts\\n     *  @param _countries The countries of the corresponding investors\\n     *  emits _userAddresses.length `IdentityRegistered` events\\n     */\\n    function batchRegisterIdentity(\\n        address[] calldata _userAddresses,\\n        IIdentity[] calldata _identities,\\n        uint16[] calldata _countries\\n    ) external;\\n\\n    /**\\n     *  @dev This functions checks whether a wallet has its Identity registered or not\\n     *  in the Identity Registry.\\n     *  @param _userAddress The address of the user to be checked.\\n     *  @return 'True' if the address is contained in the Identity Registry, 'false' if not.\\n     */\\n    function contains(address _userAddress) external view returns (bool);\\n\\n    /**\\n     *  @dev This functions checks whether an identity contract\\n     *  corresponding to the provided user address has the required claims or not based\\n     *  on the data fetched from trusted issuers registry and from the claim topics registry\\n     *  @param _userAddress The address of the user to be verified.\\n     *  @return 'True' if the address is verified, 'false' if not.\\n     */\\n    function isVerified(address _userAddress) external view returns (bool);\\n\\n    /**\\n     *  @dev Returns the onchainID of an investor.\\n     *  @param _userAddress The wallet of the investor\\n     */\\n    function identity(address _userAddress) external view returns (IIdentity);\\n\\n    /**\\n     *  @dev Returns the country code of an investor.\\n     *  @param _userAddress The wallet of the investor\\n     */\\n    function investorCountry(address _userAddress) external view returns (uint16);\\n\\n    /**\\n     *  @dev Returns the IdentityRegistryStorage linked to the current IdentityRegistry.\\n     */\\n    function identityStorage() external view returns (IIdentityRegistryStorage);\\n\\n    /**\\n     *  @dev Returns the TrustedIssuersRegistry linked to the current IdentityRegistry.\\n     */\\n    function issuersRegistry() external view returns (ITrustedIssuersRegistry);\\n\\n    /**\\n     *  @dev Returns the ClaimTopicsRegistry linked to the current IdentityRegistry.\\n     */\\n    function topicsRegistry() external view returns (IClaimTopicsRegistry);\\n}\\n\\n// File contracts/roles/Roles.sol\\n\\n//\\n//                                             :+#####%%%%%%%%%%%%%%+\\n//                                         .-*@@@%+.:+%@@@@@%%#***%@@%=\\n//                                     :=*%@@@#=.      :#@@%       *@@@%=\\n//                       .-+*%@%*-.:+%@@@@@@+.     -*+:  .=#.       :%@@@%-\\n//                   :=*@@@@%%@@@@@@@@@%@@@-   .=#@@@%@%=             =@@@@#.\\n//             -=+#%@@%#*=:.  :%@@@@%.   -*@@#*@@@@@@@#=:-              *@@@@+\\n//            =@@%=:.     :=:   *@@@@@%#-   =%*%@@@@#+-.        =+       :%@@@%-\\n//           -@@%.     .+@@@     =+=-.         @@#-           +@@@%-       =@@@@%:\\n//          :@@@.    .+@@#%:                   :    .=*=-::.-%@@@+*@@=       +@@@@#.\\n//          %@@:    +@%%*                         =%@@@@@@@@@@@#.  .*@%-       +@@@@*.\\n//         #@@=                                .+@@@@%:=*@@@@@-      :%@%:      .*@@@@+\\n//        *@@*                                +@@@#-@@%-:%@@*          +@@#.      :%@@@@-\\n//       -@@%           .:-=++*##%%%@@@@@@@@@@@@*. :@+.@@@%:            .#@@+       =@@@@#:\\n//      .@@@*-+*#%%%@@@@@@@@@@@@@@@@%%#**@@%@@@.   *@=*@@#                :#@%=      .#@@@@#-\\n//      -%@@@@@@@@@@@@@@@*+==-:-@@@=    *@# .#@*-=*@@@@%=                 -%@@@*       =@@@@@%-\\n//         -+%@@@#.   %@%%=   -@@:+@: -@@*    *@@*-::                   -%@@%=.         .*@@@@@#\\n//            *@@@*  +@* *@@##@@-  #@*@@+    -@@=          .         :+@@@#:           .-+@@@%+-\\n//             +@@@%*@@:..=@@@@*   .@@@*   .#@#.       .=+-       .=%@@@*.         :+#@@@@*=:\\n//              =@@@@%@@@@@@@@@@@@@@@@@@@@@@%-      :+#*.       :*@@@%=.       .=#@@@@%+:\\n//               .%@@=                 .....    .=#@@+.       .#@@@*:       -*%@@@@%+.\\n//                 +@@#+===---:::...         .=%@@*-         +@@@+.      -*@@@@@%+.\\n//                  -@@@@@@@@@@@@@@@@@@@@@@%@@@@=          -@@@+      -#@@@@@#=.\\n//                    ..:::---===+++***###%%%@@@#-       .#@@+     -*@@@@@#=.\\n//                                           @@@@@@+.   +@@*.   .+@@@@@%=.\\n//                                          -@@@@@=   =@@%:   -#@@@@%+.\\n//                                          +@@@@@. =@@@=  .+@@@@@*:\\n//                                          #@@@@#:%@@#. :*@@@@#-\\n//                                          @@@@@%@@@= :#@@@@+.\\n//                                         :@@@@@@@#.:#@@@%-\\n//                                         +@@@@@@-.*@@@*:\\n//                                         #@@@@#.=@@@+.\\n//                                         @@@@+-%@%=\\n//                                        :@@@#%@%=\\n//                                        +@@@@%-\\n//                                        :#%%=\\n//\\n\\n/**\\n *     NOTICE\\n *\\n *     The T-REX software is licensed under a proprietary license or the GPL v.3.\\n *     If you choose to receive it under the GPL v.3 license, the following applies:\\n *     T-REX is a suite of smart contracts implementing the ERC-3643 standard and\\n *     developed by Tokeny to manage and transfer financial assets on EVM blockchains\\n *\\n *     Copyright (C) 2023, Tokeny s\\u00e0rl.\\n *\\n *     This program is free software: you can redistribute it and/or modify\\n *     it under the terms of the GNU General Public License as published by\\n *     the Free Software Foundation, either version 3 of the License, or\\n *     (at your option) any later version.\\n *\\n *     This program is distributed in the hope that it will be useful,\\n *     but WITHOUT ANY WARRANTY; without even the implied warranty of\\n *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\n *     GNU General Public License for more details.\\n *\\n *     You should have received a copy of the GNU General Public License\\n *     along with this program.  If not, see <https://www.gnu.org/licenses/>.\\n */\\n\\n/**\\n * @title Roles\\n * @dev Library for managing addresses assigned to a Role.\\n */\\nlibrary Roles {\\n    struct Role {\\n        mapping(address => bool) bearer;\\n    }\\n\\n    /**\\n     * @dev Give an account access to this role.\\n     */\\n    function add(Role storage role, address account) internal {\\n        require(!has(role, account), \\\"Roles: account already has role\\\");\\n        role.bearer[account] = true;\\n    }\\n\\n    /**\\n     * @dev Remove an account's access to this role.\\n     */\\n    function remove(Role storage role, address account) internal {\\n        require(has(role, account), \\\"Roles: account does not have role\\\");\\n        role.bearer[account] = false;\\n    }\\n\\n    /**\\n     * @dev Check if an account has this role.\\n     * @return bool\\n     */\\n    function has(Role storage role, address account) internal view returns (bool) {\\n        require(account != address(0), \\\"Roles: account is the zero address\\\");\\n        return role.bearer[account];\\n    }\\n}\\n\\n// File contracts/roles/AgentRoleUpgradeable.sol\\n\\n//\\n//                                             :+#####%%%%%%%%%%%%%%+\\n//                                         .-*@@@%+.:+%@@@@@%%#***%@@%=\\n//                                     :=*%@@@#=.      :#@@%       *@@@%=\\n//                       .-+*%@%*-.:+%@@@@@@+.     -*+:  .=#.       :%@@@%-\\n//                   :=*@@@@%%@@@@@@@@@%@@@-   .=#@@@%@%=             =@@@@#.\\n//             -=+#%@@%#*=:.  :%@@@@%.   -*@@#*@@@@@@@#=:-              *@@@@+\\n//            =@@%=:.     :=:   *@@@@@%#-   =%*%@@@@#+-.        =+       :%@@@%-\\n//           -@@%.     .+@@@     =+=-.         @@#-           +@@@%-       =@@@@%:\\n//          :@@@.    .+@@#%:                   :    .=*=-::.-%@@@+*@@=       +@@@@#.\\n//          %@@:    +@%%*                         =%@@@@@@@@@@@#.  .*@%-       +@@@@*.\\n//         #@@=                                .+@@@@%:=*@@@@@-      :%@%:      .*@@@@+\\n//        *@@*                                +@@@#-@@%-:%@@*          +@@#.      :%@@@@-\\n//       -@@%           .:-=++*##%%%@@@@@@@@@@@@*. :@+.@@@%:            .#@@+       =@@@@#:\\n//      .@@@*-+*#%%%@@@@@@@@@@@@@@@@%%#**@@%@@@.   *@=*@@#                :#@%=      .#@@@@#-\\n//      -%@@@@@@@@@@@@@@@*+==-:-@@@=    *@# .#@*-=*@@@@%=                 -%@@@*       =@@@@@%-\\n//         -+%@@@#.   %@%%=   -@@:+@: -@@*    *@@*-::                   -%@@%=.         .*@@@@@#\\n//            *@@@*  +@* *@@##@@-  #@*@@+    -@@=          .         :+@@@#:           .-+@@@%+-\\n//             +@@@%*@@:..=@@@@*   .@@@*   .#@#.       .=+-       .=%@@@*.         :+#@@@@*=:\\n//              =@@@@%@@@@@@@@@@@@@@@@@@@@@@%-      :+#*.       :*@@@%=.       .=#@@@@%+:\\n//               .%@@=                 .....    .=#@@+.       .#@@@*:       -*%@@@@%+.\\n//                 +@@#+===---:::...         .=%@@*-         +@@@+.      -*@@@@@%+.\\n//                  -@@@@@@@@@@@@@@@@@@@@@@%@@@@=          -@@@+      -#@@@@@#=.\\n//                    ..:::---===+++***###%%%@@@#-       .#@@+     -*@@@@@#=.\\n//                                           @@@@@@+.   +@@*.   .+@@@@@%=.\\n//                                          -@@@@@=   =@@%:   -#@@@@%+.\\n//                                          +@@@@@. =@@@=  .+@@@@@*:\\n//                                          #@@@@#:%@@#. :*@@@@#-\\n//                                          @@@@@%@@@= :#@@@@+.\\n//                                         :@@@@@@@#.:#@@@%-\\n//                                         +@@@@@@-.*@@@*:\\n//                                         #@@@@#.=@@@+.\\n//                                         @@@@+-%@%=\\n//                                        :@@@#%@%=\\n//                                        +@@@@%-\\n//                                        :#%%=\\n//\\n\\n/**\\n *     NOTICE\\n *\\n *     The T-REX software is licensed under a proprietary license or the GPL v.3.\\n *     If you choose to receive it under the GPL v.3 license, the following applies:\\n *     T-REX is a suite of smart contracts implementing the ERC-3643 standard and\\n *     developed by Tokeny to manage and transfer financial assets on EVM blockchains\\n *\\n *     Copyright (C) 2023, Tokeny s\\u00e0rl.\\n *\\n *     This program is free software: you can redistribute it and/or modify\\n *     it under the terms of the GNU General Public License as published by\\n *     the Free Software Foundation, either version 3 of the License, or\\n *     (at your option) any later version.\\n *\\n *     This program is distributed in the hope that it will be useful,\\n *     but WITHOUT ANY WARRANTY; without even the implied warranty of\\n *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\n *     GNU General Public License for more details.\\n *\\n *     You should have received a copy of the GNU General Public License\\n *     along with this program.  If not, see <https://www.gnu.org/licenses/>.\\n */\\n\\ncontract AgentRoleUpgradeable is OwnableUpgradeable {\\n    using Roles for Roles.Role;\\n\\n    Roles.Role private _agents;\\n\\n    event AgentAdded(address indexed _agent);\\n    event AgentRemoved(address indexed _agent);\\n\\n    modifier onlyAgent() {\\n        require(isAgent(msg.sender), \\\"AgentRole: caller does not have the Agent role\\\");\\n        _;\\n    }\\n\\n    function addAgent(address _agent) public onlyOwner {\\n        require(_agent != address(0), \\\"invalid argument - zero address\\\");\\n        _agents.add(_agent);\\n        emit AgentAdded(_agent);\\n    }\\n\\n    function removeAgent(address _agent) public onlyOwner {\\n        require(_agent != address(0), \\\"invalid argument - zero address\\\");\\n        _agents.remove(_agent);\\n        emit AgentRemoved(_agent);\\n    }\\n\\n    function isAgent(address _agent) public view returns (bool) {\\n        return _agents.has(_agent);\\n    }\\n}\\n\\n// File @openzeppelin/contracts/token/ERC20/IERC20.sol@v4.9.3\\n\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/IERC20.sol)\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20 {\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller's account to `to`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address to, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender's allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\n     * allowance mechanism. `amount` is then deducted from the caller's\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(address from, address to, uint256 amount) external returns (bool);\\n}\\n\\n// File contracts/compliance/modular/IModularCompliance.sol\\n\\n//\\n//                                             :+#####%%%%%%%%%%%%%%+\\n//                                         .-*@@@%+.:+%@@@@@%%#***%@@%=\\n//                                     :=*%@@@#=.      :#@@%       *@@@%=\\n//                       .-+*%@%*-.:+%@@@@@@+.     -*+:  .=#.       :%@@@%-\\n//                   :=*@@@@%%@@@@@@@@@%@@@-   .=#@@@%@%=             =@@@@#.\\n//             -=+#%@@%#*=:.  :%@@@@%.   -*@@#*@@@@@@@#=:-              *@@@@+\\n//            =@@%=:.     :=:   *@@@@@%#-   =%*%@@@@#+-.        =+       :%@@@%-\\n//           -@@%.     .+@@@     =+=-.         @@#-           +@@@%-       =@@@@%:\\n//          :@@@.    .+@@#%:                   :    .=*=-::.-%@@@+*@@=       +@@@@#.\\n//          %@@:    +@%%*                         =%@@@@@@@@@@@#.  .*@%-       +@@@@*.\\n//         #@@=                                .+@@@@%:=*@@@@@-      :%@%:      .*@@@@+\\n//        *@@*                                +@@@#-@@%-:%@@*          +@@#.      :%@@@@-\\n//       -@@%           .:-=++*##%%%@@@@@@@@@@@@*. :@+.@@@%:            .#@@+       =@@@@#:\\n//      .@@@*-+*#%%%@@@@@@@@@@@@@@@@%%#**@@%@@@.   *@=*@@#                :#@%=      .#@@@@#-\\n//      -%@@@@@@@@@@@@@@@*+==-:-@@@=    *@# .#@*-=*@@@@%=                 -%@@@*       =@@@@@%-\\n//         -+%@@@#.   %@%%=   -@@:+@: -@@*    *@@*-::                   -%@@%=.         .*@@@@@#\\n//            *@@@*  +@* *@@##@@-  #@*@@+    -@@=          .         :+@@@#:           .-+@@@%+-\\n//             +@@@%*@@:..=@@@@*   .@@@*   .#@#.       .=+-       .=%@@@*.         :+#@@@@*=:\\n//              =@@@@%@@@@@@@@@@@@@@@@@@@@@@%-      :+#*.       :*@@@%=.       .=#@@@@%+:\\n//               .%@@=                 .....    .=#@@+.       .#@@@*:       -*%@@@@%+.\\n//                 +@@#+===---:::...         .=%@@*-         +@@@+.      -*@@@@@%+.\\n//                  -@@@@@@@@@@@@@@@@@@@@@@%@@@@=          -@@@+      -#@@@@@#=.\\n//                    ..:::---===+++***###%%%@@@#-       .#@@+     -*@@@@@#=.\\n//                                           @@@@@@+.   +@@*.   .+@@@@@%=.\\n//                                          -@@@@@=   =@@%:   -#@@@@%+.\\n//                                          +@@@@@. =@@@=  .+@@@@@*:\\n//                                          #@@@@#:%@@#. :*@@@@#-\\n//                                          @@@@@%@@@= :#@@@@+.\\n//                                         :@@@@@@@#.:#@@@%-\\n//                                         +@@@@@@-.*@@@*:\\n//                                         #@@@@#.=@@@+.\\n//                                         @@@@+-%@%=\\n//                                        :@@@#%@%=\\n//                                        +@@@@%-\\n//                                        :#%%=\\n//\\n/**\\n *     NOTICE\\n *\\n *     The T-REX software is licensed under a proprietary license or the GPL v.3.\\n *     If you choose to receive it under the GPL v.3 license, the following applies:\\n *     T-REX is a suite of smart contracts implementing the ERC-3643 standard and\\n *     developed by Tokeny to manage and transfer financial assets on EVM blockchains\\n *\\n *     Copyright (C) 2023, Tokeny s\\u00e0rl.\\n *\\n *     This program is free software: you can redistribute it and/or modify\\n *     it under the terms of the GNU General Public License as published by\\n *     the Free Software Foundation, either version 3 of the License, or\\n *     (at your option) any later version.\\n *\\n *     This program is distributed in the hope that it will be useful,\\n *     but WITHOUT ANY WARRANTY; without even the implied warranty of\\n *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\n *     GNU General Public License for more details.\\n *\\n *     You should have received a copy of the GNU General Public License\\n *     along with this program.  If not, see <https://www.gnu.org/licenses/>.\\n */\\n\\ninterface IModularCompliance {\\n\\n    /// events\\n\\n    /**\\n     *  @dev Event emitted for each executed interaction with a module contract.\\n     *  For gas efficiency, only the interaction calldata selector (first 4\\n     *  bytes) is included in the event. For interactions without calldata or\\n     *  whose calldata is shorter than 4 bytes, the selector will be `0`.\\n     */\\n    event ModuleInteraction(address indexed target, bytes4 selector);\\n\\n    /**\\n     *  this event is emitted when a token has been bound to the compliance contract\\n     *  the event is emitted by the bindToken function\\n     *  `_token` is the address of the token to bind\\n     */\\n    event TokenBound(address _token);\\n\\n    /**\\n     *  this event is emitted when a token has been unbound from the compliance contract\\n     *  the event is emitted by the unbindToken function\\n     *  `_token` is the address of the token to unbind\\n     */\\n    event TokenUnbound(address _token);\\n\\n    /**\\n     *  this event is emitted when a module has been added to the list of modules bound to the compliance contract\\n     *  the event is emitted by the addModule function\\n     *  `_module` is the address of the compliance module\\n     */\\n    event ModuleAdded(address indexed _module);\\n\\n    /**\\n     *  this event is emitted when a module has been removed from the list of modules bound to the compliance contract\\n     *  the event is emitted by the removeModule function\\n     *  `_module` is the address of the compliance module\\n     */\\n    event ModuleRemoved(address indexed _module);\\n\\n    /// functions\\n\\n    /**\\n     *  @dev binds a token to the compliance contract\\n     *  @param _token address of the token to bind\\n     *  This function can be called ONLY by the owner of the compliance contract\\n     *  Emits a TokenBound event\\n     */\\n    function bindToken(address _token) external;\\n\\n    /**\\n     *  @dev unbinds a token from the compliance contract\\n     *  @param _token address of the token to unbind\\n     *  This function can be called ONLY by the owner of the compliance contract\\n     *  Emits a TokenUnbound event\\n     */\\n    function unbindToken(address _token) external;\\n\\n    /**\\n     *  @dev adds a module to the list of compliance modules\\n     *  @param _module address of the module to add\\n     *  there cannot be more than 25 modules bound to the modular compliance for gas cost reasons\\n     *  This function can be called ONLY by the owner of the compliance contract\\n     *  Emits a ModuleAdded event\\n     */\\n    function addModule(address _module) external;\\n\\n    /**\\n     *  @dev removes a module from the list of compliance modules\\n     *  @param _module address of the module to remove\\n     *  This function can be called ONLY by the owner of the compliance contract\\n     *  Emits a ModuleRemoved event\\n     */\\n    function removeModule(address _module) external;\\n\\n    /**\\n     *  @dev calls any function on bound modules\\n     *  can be called only on bound modules\\n     *  @param callData the bytecode for interaction with the module, abi encoded\\n     *  @param _module The address of the module\\n     *  This function can be called only by the modular compliance owner\\n     *  emits a `ModuleInteraction` event\\n     */\\n    function callModuleFunction(bytes calldata callData, address _module) external;\\n\\n    /**\\n     *  @dev function called whenever tokens are transferred\\n     *  from one wallet to another\\n     *  this function can update state variables in the modules bound to the compliance\\n     *  these state variables being used by the module checks to decide if a transfer\\n     *  is compliant or not depending on the values stored in these state variables and on\\n     *  the parameters of the modules\\n     *  This function can be called ONLY by the token contract bound to the compliance\\n     *  @param _from The address of the sender\\n     *  @param _to The address of the receiver\\n     *  @param _amount The amount of tokens involved in the transfer\\n     *  This function calls moduleTransferAction() on each module bound to the compliance contract\\n     */\\n    function transferred(\\n        address _from,\\n        address _to,\\n        uint256 _amount\\n    ) external;\\n\\n    /**\\n     *  @dev function called whenever tokens are created on a wallet\\n     *  this function can update state variables in the modules bound to the compliance\\n     *  these state variables being used by the module checks to decide if a transfer\\n     *  is compliant or not depending on the values stored in these state variables and on\\n     *  the parameters of the modules\\n     *  This function can be called ONLY by the token contract bound to the compliance\\n     *  @param _to The address of the receiver\\n     *  @param _amount The amount of tokens involved in the minting\\n     *  This function calls moduleMintAction() on each module bound to the compliance contract\\n     */\\n    function created(address _to, uint256 _amount) external;\\n\\n    /**\\n     *  @dev function called whenever tokens are destroyed from a wallet\\n     *  this function can update state variables in the modules bound to the compliance\\n     *  these state variables being used by the module checks to decide if a transfer\\n     *  is compliant or not depending on the values stored in these state variables and on\\n     *  the parameters of the modules\\n     *  This function can be called ONLY by the token contract bound to the compliance\\n     *  @param _from The address on which tokens are burnt\\n     *  @param _amount The amount of tokens involved in the burn\\n     *  This function calls moduleBurnAction() on each module bound to the compliance contract\\n     */\\n    function destroyed(address _from, uint256 _amount) external;\\n\\n    /**\\n     *  @dev checks that the transfer is compliant.\\n     *  default compliance always returns true\\n     *  READ ONLY FUNCTION, this function cannot be used to increment\\n     *  counters, emit events, ...\\n     *  @param _from The address of the sender\\n     *  @param _to The address of the receiver\\n     *  @param _amount The amount of tokens involved in the transfer\\n     *  This function will call moduleCheck() on every module bound to the compliance\\n     *  If each of the module checks return TRUE, this function will return TRUE as well\\n     *  returns FALSE otherwise\\n     */\\n    function canTransfer(\\n        address _from,\\n        address _to,\\n        uint256 _amount\\n    ) external view returns (bool);\\n\\n    /**\\n     *  @dev getter for the modules bound to the compliance contract\\n     *  returns address array of module contracts bound to the compliance\\n     */\\n    function getModules() external view returns (address[] memory);\\n\\n    /**\\n     *  @dev getter for the address of the token bound\\n     *  returns the address of the token\\n     */\\n    function getTokenBound() external view returns (address);\\n\\n    /**\\n     *  @dev checks if a module is bound to the compliance contract\\n     *  returns true if module is bound, false otherwise\\n     */\\n    function isModuleBound(address _module) external view returns (bool);\\n}\\n\\n// File contracts/token/IToken.sol\\n\\n//\\n//                                             :+#####%%%%%%%%%%%%%%+\\n//                                         .-*@@@%+.:+%@@@@@%%#***%@@%=\\n//                                     :=*%@@@#=.      :#@@%       *@@@%=\\n//                       .-+*%@%*-.:+%@@@@@@+.     -*+:  .=#.       :%@@@%-\\n//                   :=*@@@@%%@@@@@@@@@%@@@-   .=#@@@%@%=             =@@@@#.\\n//             -=+#%@@%#*=:.  :%@@@@%.   -*@@#*@@@@@@@#=:-              *@@@@+\\n//            =@@%=:.     :=:   *@@@@@%#-   =%*%@@@@#+-.        =+       :%@@@%-\\n//           -@@%.     .+@@@     =+=-.         @@#-           +@@@%-       =@@@@%:\\n//          :@@@.    .+@@#%:                   :    .=*=-::.-%@@@+*@@=       +@@@@#.\\n//          %@@:    +@%%*                         =%@@@@@@@@@@@#.  .*@%-       +@@@@*.\\n//         #@@=                                .+@@@@%:=*@@@@@-      :%@%:      .*@@@@+\\n//        *@@*                                +@@@#-@@%-:%@@*          +@@#.      :%@@@@-\\n//       -@@%           .:-=++*##%%%@@@@@@@@@@@@*. :@+.@@@%:            .#@@+       =@@@@#:\\n//      .@@@*-+*#%%%@@@@@@@@@@@@@@@@%%#**@@%@@@.   *@=*@@#                :#@%=      .#@@@@#-\\n//      -%@@@@@@@@@@@@@@@*+==-:-@@@=    *@# .#@*-=*@@@@%=                 -%@@@*       =@@@@@%-\\n//         -+%@@@#.   %@%%=   -@@:+@: -@@*    *@@*-::                   -%@@%=.         .*@@@@@#\\n//            *@@@*  +@* *@@##@@-  #@*@@+    -@@=          .         :+@@@#:           .-+@@@%+-\\n//             +@@@%*@@:..=@@@@*   .@@@*   .#@#.       .=+-       .=%@@@*.         :+#@@@@*=:\\n//              =@@@@%@@@@@@@@@@@@@@@@@@@@@@%-      :+#*.       :*@@@%=.       .=#@@@@%+:\\n//               .%@@=                 .....    .=#@@+.       .#@@@*:       -*%@@@@%+.\\n//                 +@@#+===---:::...         .=%@@*-         +@@@+.      -*@@@@@%+.\\n//                  -@@@@@@@@@@@@@@@@@@@@@@%@@@@=          -@@@+      -#@@@@@#=.\\n//                    ..:::---===+++***###%%%@@@#-       .#@@+     -*@@@@@#=.\\n//                                           @@@@@@+.   +@@*.   .+@@@@@%=.\\n//                                          -@@@@@=   =@@%:   -#@@@@%+.\\n//                                          +@@@@@. =@@@=  .+@@@@@*:\\n//                                          #@@@@#:%@@#. :*@@@@#-\\n//                                          @@@@@%@@@= :#@@@@+.\\n//                                         :@@@@@@@#.:#@@@%-\\n//                                         +@@@@@@-.*@@@*:\\n//                                         #@@@@#.=@@@+.\\n//                                         @@@@+-%@%=\\n//                                        :@@@#%@%=\\n//                                        +@@@@%-\\n//                                        :#%%=\\n//\\n\\n/**\\n *     NOTICE\\n *\\n *     The T-REX software is licensed under a proprietary license or the GPL v.3.\\n *     If you choose to receive it under the GPL v.3 license, the following applies:\\n *     T-REX is a suite of smart contracts implementing the ERC-3643 standard and\\n *     developed by Tokeny to manage and transfer financial assets on EVM blockchains\\n *\\n *     Copyright (C) 2023, Tokeny s\\u00e0rl.\\n *\\n *     This program is free software: you can redistribute it and/or modify\\n *     it under the terms of the GNU General Public License as published by\\n *     the Free Software Foundation, either version 3 of the License, or\\n *     (at your option) any later version.\\n *\\n *     This program is distributed in the hope that it will be useful,\\n *     but WITHOUT ANY WARRANTY; without even the implied warranty of\\n *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\n *     GNU General Public License for more details.\\n *\\n *     You should have received a copy of the GNU General Public License\\n *     along with this program.  If not, see <https://www.gnu.org/licenses/>.\\n */\\n\\n/// @dev interface\\ninterface IToken is IERC20 {\\n\\n    /// events\\n\\n    /**\\n     *  this event is emitted when the token information is updated.\\n     *  the event is emitted by the token init function and by the setTokenInformation function\\n     *  `_newName` is the name of the token\\n     *  `_newSymbol` is the symbol of the token\\n     *  `_newDecimals` is the decimals of the token\\n     *  `_newVersion` is the version of the token, current version is 3.0\\n     *  `_newOnchainID` is the address of the onchainID of the token\\n     */\\n    event UpdatedTokenInformation(string indexed _newName, string indexed _newSymbol, uint8 _newDecimals, string\\n    _newVersion, address indexed _newOnchainID);\\n\\n    /**\\n     *  this event is emitted when the IdentityRegistry has been set for the token\\n     *  the event is emitted by the token constructor and by the setIdentityRegistry function\\n     *  `_identityRegistry` is the address of the Identity Registry of the token\\n     */\\n    event IdentityRegistryAdded(address indexed _identityRegistry);\\n\\n    /**\\n     *  this event is emitted when the Compliance has been set for the token\\n     *  the event is emitted by the token constructor and by the setCompliance function\\n     *  `_compliance` is the address of the Compliance contract of the token\\n     */\\n    event ComplianceAdded(address indexed _compliance);\\n\\n    /**\\n     *  this event is emitted when an investor successfully recovers his tokens\\n     *  the event is emitted by the recoveryAddress function\\n     *  `_lostWallet` is the address of the wallet that the investor lost access to\\n     *  `_newWallet` is the address of the wallet that the investor provided for the recovery\\n     *  `_investorOnchainID` is the address of the onchainID of the investor who asked for a recovery\\n     */\\n    event RecoverySuccess(address indexed _lostWallet, address indexed _newWallet, address indexed _investorOnchainID);\\n\\n    /**\\n     *  this event is emitted when the wallet of an investor is frozen or unfrozen\\n     *  the event is emitted by setAddressFrozen and batchSetAddressFrozen functions\\n     *  `_userAddress` is the wallet of the investor that is concerned by the freezing status\\n     *  `_isFrozen` is the freezing status of the wallet\\n     *  if `_isFrozen` equals `true` the wallet is frozen after emission of the event\\n     *  if `_isFrozen` equals `false` the wallet is unfrozen after emission of the event\\n     *  `_owner` is the address of the agent who called the function to freeze the wallet\\n     */\\n    event AddressFrozen(address indexed _userAddress, bool indexed _isFrozen, address indexed _owner);\\n\\n    /**\\n     *  this event is emitted when a certain amount of tokens is frozen on a wallet\\n     *  the event is emitted by freezePartialTokens and batchFreezePartialTokens functions\\n     *  `_userAddress` is the wallet of the investor that is concerned by the freezing status\\n     *  `_amount` is the amount of tokens that are frozen\\n     */\\n    event TokensFrozen(address indexed _userAddress, uint256 _amount);\\n\\n    /**\\n     *  this event is emitted when a certain amount of tokens is unfrozen on a wallet\\n     *  the event is emitted by unfreezePartialTokens and batchUnfreezePartialTokens functions\\n     *  `_userAddress` is the wallet of the investor that is concerned by the freezing status\\n     *  `_amount` is the amount of tokens that are unfrozen\\n     */\\n    event TokensUnfrozen(address indexed _userAddress, uint256 _amount);\\n\\n    /**\\n     *  this event is emitted when the token is paused\\n     *  the event is emitted by the pause function\\n     *  `_userAddress` is the address of the wallet that called the pause function\\n     */\\n    event Paused(address _userAddress);\\n\\n    /**\\n     *  this event is emitted when the token is unpaused\\n     *  the event is emitted by the unpause function\\n     *  `_userAddress` is the address of the wallet that called the unpause function\\n     */\\n    event Unpaused(address _userAddress);\\n\\n    /// functions\\n\\n    /**\\n     *  @dev sets the token name\\n     *  @param _name the name of token to set\\n     *  Only the owner of the token smart contract can call this function\\n     *  emits a `UpdatedTokenInformation` event\\n     */\\n    function setName(string calldata _name) external;\\n\\n    /**\\n     *  @dev sets the token symbol\\n     *  @param _symbol the token symbol to set\\n     *  Only the owner of the token smart contract can call this function\\n     *  emits a `UpdatedTokenInformation` event\\n     */\\n    function setSymbol(string calldata _symbol) external;\\n\\n    /**\\n     *  @dev sets the onchain ID of the token\\n     *  @param _onchainID the address of the onchain ID to set\\n     *  Only the owner of the token smart contract can call this function\\n     *  emits a `UpdatedTokenInformation` event\\n     */\\n    function setOnchainID(address _onchainID) external;\\n\\n    /**\\n     *  @dev pauses the token contract, when contract is paused investors cannot transfer tokens anymore\\n     *  This function can only be called by a wallet set as agent of the token\\n     *  emits a `Paused` event\\n     */\\n    function pause() external;\\n\\n    /**\\n     *  @dev unpauses the token contract, when contract is unpaused investors can transfer tokens\\n     *  if their wallet is not blocked & if the amount to transfer is <= to the amount of free tokens\\n     *  This function can only be called by a wallet set as agent of the token\\n     *  emits an `Unpaused` event\\n     */\\n    function unpause() external;\\n\\n    /**\\n     *  @dev sets an address frozen status for this token.\\n     *  @param _userAddress The address for which to update frozen status\\n     *  @param _freeze Frozen status of the address\\n     *  This function can only be called by a wallet set as agent of the token\\n     *  emits an `AddressFrozen` event\\n     */\\n    function setAddressFrozen(address _userAddress, bool _freeze) external;\\n\\n    /**\\n     *  @dev freezes token amount specified for given address.\\n     *  @param _userAddress The address for which to update frozen tokens\\n     *  @param _amount Amount of Tokens to be frozen\\n     *  This function can only be called by a wallet set as agent of the token\\n     *  emits a `TokensFrozen` event\\n     */\\n    function freezePartialTokens(address _userAddress, uint256 _amount) external;\\n\\n    /**\\n     *  @dev unfreezes token amount specified for given address\\n     *  @param _userAddress The address for which to update frozen tokens\\n     *  @param _amount Amount of Tokens to be unfrozen\\n     *  This function can only be called by a wallet set as agent of the token\\n     *  emits a `TokensUnfrozen` event\\n     */\\n    function unfreezePartialTokens(address _userAddress, uint256 _amount) external;\\n\\n    /**\\n     *  @dev sets the Identity Registry for the token\\n     *  @param _identityRegistry the address of the Identity Registry to set\\n     *  Only the owner of the token smart contract can call this function\\n     *  emits an `IdentityRegistryAdded` event\\n     */\\n    function setIdentityRegistry(address _identityRegistry) external;\\n\\n    /**\\n     *  @dev sets the compliance contract of the token\\n     *  @param _compliance the address of the compliance contract to set\\n     *  Only the owner of the token smart contract can call this function\\n     *  calls bindToken on the compliance contract\\n     *  emits a `ComplianceAdded` event\\n     */\\n    function setCompliance(address _compliance) external;\\n\\n    /**\\n     *  @dev force a transfer of tokens between 2 whitelisted wallets\\n     *  In case the `from` address has not enough free tokens (unfrozen tokens)\\n     *  but has a total balance higher or equal to the `amount`\\n     *  the amount of frozen tokens is reduced in order to have enough free tokens\\n     *  to proceed the transfer, in such a case, the remaining balance on the `from`\\n     *  account is 100% composed of frozen tokens post-transfer.\\n     *  Require that the `to` address is a verified address,\\n     *  @param _from The address of the sender\\n     *  @param _to The address of the receiver\\n     *  @param _amount The number of tokens to transfer\\n     *  @return `true` if successful and revert if unsuccessful\\n     *  This function can only be called by a wallet set as agent of the token\\n     *  emits a `TokensUnfrozen` event if `_amount` is higher than the free balance of `_from`\\n     *  emits a `Transfer` event\\n     */\\n    function forcedTransfer(\\n        address _from,\\n        address _to,\\n        uint256 _amount\\n    ) external returns (bool);\\n\\n    /**\\n     *  @dev mint tokens on a wallet\\n     *  Improved version of default mint method. Tokens can be minted\\n     *  to an address if only it is a verified address as per the security token.\\n     *  @param _to Address to mint the tokens to.\\n     *  @param _amount Amount of tokens to mint.\\n     *  This function can only be called by a wallet set as agent of the token\\n     *  emits a `Transfer` event\\n     */\\n    function mint(address _to, uint256 _amount) external;\\n\\n    /**\\n     *  @dev burn tokens on a wallet\\n     *  In case the `account` address has not enough free tokens (unfrozen tokens)\\n     *  but has a total balance higher or equal to the `value` amount\\n     *  the amount of frozen tokens is reduced in order to have enough free tokens\\n     *  to proceed the burn, in such a case, the remaining balance on the `account`\\n     *  is 100% composed of frozen tokens post-transaction.\\n     *  @param _userAddress Address to burn the tokens from.\\n     *  @param _amount Amount of tokens to burn.\\n     *  This function can only be called by a wallet set as agent of the token\\n     *  emits a `TokensUnfrozen` event if `_amount` is higher than the free balance of `_userAddress`\\n     *  emits a `Transfer` event\\n     */\\n    function burn(address _userAddress, uint256 _amount) external;\\n\\n    /**\\n     *  @dev recovery function used to force transfer tokens from a\\n     *  lost wallet to a new wallet for an investor.\\n     *  @param _lostWallet the wallet that the investor lost\\n     *  @param _newWallet the newly provided wallet on which tokens have to be transferred\\n     *  @param _investorOnchainID the onchainID of the investor asking for a recovery\\n     *  This function can only be called by a wallet set as agent of the token\\n     *  emits a `TokensUnfrozen` event if there is some frozen tokens on the lost wallet if the recovery process is successful\\n     *  emits a `Transfer` event if the recovery process is successful\\n     *  emits a `RecoverySuccess` event if the recovery process is successful\\n     *  emits a `RecoveryFails` event if the recovery process fails\\n     */\\n    function recoveryAddress(\\n        address _lostWallet,\\n        address _newWallet,\\n        address _investorOnchainID\\n    ) external returns (bool);\\n\\n    /**\\n     *  @dev function allowing to issue transfers in batch\\n     *  Require that the msg.sender and `to` addresses are not frozen.\\n     *  Require that the total value should not exceed available balance.\\n     *  Require that the `to` addresses are all verified addresses,\\n     *  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_toList.length` IS TOO HIGH,\\n     *  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN \\\"OUT OF GAS\\\" TRANSACTION\\n     *  @param _toList The addresses of the receivers\\n     *  @param _amounts The number of tokens to transfer to the corresponding receiver\\n     *  emits _toList.length `Transfer` events\\n     */\\n    function batchTransfer(address[] calldata _toList, uint256[] calldata _amounts) external;\\n\\n    /**\\n     *  @dev function allowing to issue forced transfers in batch\\n     *  Require that `_amounts[i]` should not exceed available balance of `_fromList[i]`.\\n     *  Require that the `_toList` addresses are all verified addresses\\n     *  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_fromList.length` IS TOO HIGH,\\n     *  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN \\\"OUT OF GAS\\\" TRANSACTION\\n     *  @param _fromList The addresses of the senders\\n     *  @param _toList The addresses of the receivers\\n     *  @param _amounts The number of tokens to transfer to the corresponding receiver\\n     *  This function can only be called by a wallet set as agent of the token\\n     *  emits `TokensUnfrozen` events if `_amounts[i]` is higher than the free balance of `_fromList[i]`\\n     *  emits _fromList.length `Transfer` events\\n     */\\n    function batchForcedTransfer(\\n        address[] calldata _fromList,\\n        address[] calldata _toList,\\n        uint256[] calldata _amounts\\n    ) external;\\n\\n    /**\\n     *  @dev function allowing to mint tokens in batch\\n     *  Require that the `_toList` addresses are all verified addresses\\n     *  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_toList.length` IS TOO HIGH,\\n     *  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN \\\"OUT OF GAS\\\" TRANSACTION\\n     *  @param _toList The addresses of the receivers\\n     *  @param _amounts The number of tokens to mint to the corresponding receiver\\n     *  This function can only be called by a wallet set as agent of the token\\n     *  emits _toList.length `Transfer` events\\n     */\\n    function batchMint(address[] calldata _toList, uint256[] calldata _amounts) external;\\n\\n    /**\\n     *  @dev function allowing to burn tokens in batch\\n     *  Require that the `_userAddresses` addresses are all verified addresses\\n     *  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_userAddresses.length` IS TOO HIGH,\\n     *  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN \\\"OUT OF GAS\\\" TRANSACTION\\n     *  @param _userAddresses The addresses of the wallets concerned by the burn\\n     *  @param _amounts The number of tokens to burn from the corresponding wallets\\n     *  This function can only be called by a wallet set as agent of the token\\n     *  emits _userAddresses.length `Transfer` events\\n     */\\n    function batchBurn(address[] calldata _userAddresses, uint256[] calldata _amounts) external;\\n\\n    /**\\n     *  @dev function allowing to set frozen addresses in batch\\n     *  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_userAddresses.length` IS TOO HIGH,\\n     *  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN \\\"OUT OF GAS\\\" TRANSACTION\\n     *  @param _userAddresses The addresses for which to update frozen status\\n     *  @param _freeze Frozen status of the corresponding address\\n     *  This function can only be called by a wallet set as agent of the token\\n     *  emits _userAddresses.length `AddressFrozen` events\\n     */\\n    function batchSetAddressFrozen(address[] calldata _userAddresses, bool[] calldata _freeze) external;\\n\\n    /**\\n     *  @dev function allowing to freeze tokens partially in batch\\n     *  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_userAddresses.length` IS TOO HIGH,\\n     *  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN \\\"OUT OF GAS\\\" TRANSACTION\\n     *  @param _userAddresses The addresses on which tokens need to be frozen\\n     *  @param _amounts the amount of tokens to freeze on the corresponding address\\n     *  This function can only be called by a wallet set as agent of the token\\n     *  emits _userAddresses.length `TokensFrozen` events\\n     */\\n    function batchFreezePartialTokens(address[] calldata _userAddresses, uint256[] calldata _amounts) external;\\n\\n    /**\\n     *  @dev function allowing to unfreeze tokens partially in batch\\n     *  IMPORTANT : THIS TRANSACTION COULD EXCEED GAS LIMIT IF `_userAddresses.length` IS TOO HIGH,\\n     *  USE WITH CARE OR YOU COULD LOSE TX FEES WITH AN \\\"OUT OF GAS\\\" TRANSACTION\\n     *  @param _userAddresses The addresses on which tokens need to be unfrozen\\n     *  @param _amounts the amount of tokens to unfreeze on the corresponding address\\n     *  This function can only be called by a wallet set as agent of the token\\n     *  emits _userAddresses.length `TokensUnfrozen` events\\n     */\\n    function batchUnfreezePartialTokens(address[] calldata _userAddresses, uint256[] calldata _amounts) external;\\n\\n    /**\\n     * @dev Returns the number of decimals used to get its user representation.\\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\\n     * be displayed to a user as `5,05` (`505 / 1 ** 2`).\\n     *\\n     * Tokens usually opt for a value of 18, imitating the relationship between\\n     * Ether and Wei.\\n     *\\n     * NOTE: This information is only used for _display_ purposes: it in\\n     * no way affects any of the arithmetic of the contract, including\\n     * balanceOf() and transfer().\\n     */\\n    function decimals() external view returns (uint8);\\n\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the address of the onchainID of the token.\\n     * the onchainID of the token gives all the information available\\n     * about the token and is managed by the token issuer or his agent.\\n     */\\n    function onchainID() external view returns (address);\\n\\n    /**\\n     * @dev Returns the symbol of the token, usually a shorter version of the\\n     * name.\\n     */\\n    function symbol() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the TREX version of the token.\\n     * current version is 3.0.0\\n     */\\n    function version() external view returns (string memory);\\n\\n    /**\\n     *  @dev Returns the Identity Registry linked to the token\\n     */\\n    function identityRegistry() external view returns (IIdentityRegistry);\\n\\n    /**\\n     *  @dev Returns the Compliance contract linked to the token\\n     */\\n    function compliance() external view returns (IModularCompliance);\\n\\n    /**\\n     * @dev Returns true if the contract is paused, and false otherwise.\\n     */\\n    function paused() external view returns (bool);\\n\\n    /**\\n     *  @dev Returns the freezing status of a wallet\\n     *  if isFrozen returns `true` the wallet is frozen\\n     *  if isFrozen returns `false` the wallet is not frozen\\n     *  isFrozen returning `true` doesn't mean that the balance is free, tokens could be blocked by\\n     *  a partial freeze or the whole token could be blocked by pause\\n     *  @param _userAddress the address of the wallet on which isFrozen is called\\n     */\\n    function isFrozen(address _userAddress) external view returns (bool);\\n\\n    /**\\n     *  @dev Returns the amount of tokens that are partially frozen on a wallet\\n     *  the amount of frozen tokens is always <= to the total balance of the wallet\\n     *  @param _userAddress the address of the wallet on which getFrozenTokens is called\\n     */\\n    function getFrozenTokens(address _userAddress) external view returns (uint256);\\n}\\n\\n// File contracts/token/TokenStorage.sol\\n\\n//\\n//                                             :+#####%%%%%%%%%%%%%%+\\n//                                         .-*@@@%+.:+%@@@@@%%#***%@@%=\\n//                                     :=*%@@@#=.      :#@@%       *@@@%=\\n//                       .-+*%@%*-.:+%@@@@@@+.     -*+:  .=#.       :%@@@%-\\n//                   :=*@@@@%%@@@@@@@@@%@@@-   .=#@@@%@%=             =@@@@#.\\n//             -=+#%@@%#*=:.  :%@@@@%.   -*@@#*@@@@@@@#=:-              *@@@@+\\n//            =@@%=:.     :=:   *@@@@@%#-   =%*%@@@@#+-.        =+       :%@@@%-\\n//           -@@%.     .+@@@     =+=-.         @@#-           +@@@%-       =@@@@%:\\n//          :@@@.    .+@@#%:                   :    .=*=-::.-%@@@+*@@=       +@@@@#.\\n//          %@@:    +@%%*                         =%@@@@@@@@@@@#.  .*@%-       +@@@@*.\\n//         #@@=                                .+@@@@%:=*@@@@@-      :%@%:      .*@@@@+\\n//        *@@*                                +@@@#-@@%-:%@@*          +@@#.      :%@@@@-\\n//       -@@%           .:-=++*##%%%@@@@@@@@@@@@*. :@+.@@@%:            .#@@+       =@@@@#:\\n//      .@@@*-+*#%%%@@@@@@@@@@@@@@@@%%#**@@%@@@.   *@=*@@#                :#@%=      .#@@@@#-\\n//      -%@@@@@@@@@@@@@@@*+==-:-@@@=    *@# .#@*-=*@@@@%=                 -%@@@*       =@@@@@%-\\n//         -+%@@@#.   %@%%=   -@@:+@: -@@*    *@@*-::                   -%@@%=.         .*@@@@@#\\n//            *@@@*  +@* *@@##@@-  #@*@@+    -@@=          .         :+@@@#:           .-+@@@%+-\\n//             +@@@%*@@:..=@@@@*   .@@@*   .#@#.       .=+-       .=%@@@*.         :+#@@@@*=:\\n//              =@@@@%@@@@@@@@@@@@@@@@@@@@@@%-      :+#*.       :*@@@%=.       .=#@@@@%+:\\n//               .%@@=                 .....    .=#@@+.       .#@@@*:       -*%@@@@%+.\\n//                 +@@#+===---:::...         .=%@@*-         +@@@+.      -*@@@@@%+.\\n//                  -@@@@@@@@@@@@@@@@@@@@@@%@@@@=          -@@@+      -#@@@@@#=.\\n//                    ..:::---===+++***###%%%@@@#-       .#@@+     -*@@@@@#=.\\n//                                           @@@@@@+.   +@@*.   .+@@@@@%=.\\n//                                          -@@@@@=   =@@%:   -#@@@@%+.\\n//                                          +@@@@@. =@@@=  .+@@@@@*:\\n//                                          #@@@@#:%@@#. :*@@@@#-\\n//                                          @@@@@%@@@= :#@@@@+.\\n//                                         :@@@@@@@#.:#@@@%-\\n//                                         +@@@@@@-.*@@@*:\\n//                                         #@@@@#.=@@@+.\\n//                                         @@@@+-%@%=\\n//                                        :@@@#%@%=\\n//                                        +@@@@%-\\n//                                        :#%%=\\n//\\n\\n/**\\n *     NOTICE\\n *\\n *     The T-REX software is licensed under a proprietary license or the GPL v.3.\\n *     If you choose to receive it under the GPL v.3 license, the following applies:\\n *     T-REX is a suite of smart contracts implementing the ERC-3643 standard and\\n *     developed by Tokeny to manage and transfer financial assets on EVM blockchains\\n *\\n *     Copyright (C) 2023, Tokeny s\\u00e0rl.\\n *\\n *     This program is free software: you can redistribute it and/or modify\\n *     it under the terms of the GNU General Public License as published by\\n *     the Free Software Foundation, either version 3 of the License, or\\n *     (at your option) any later version.\\n *\\n *     This program is distributed in the hope that it will be useful,\\n *     but WITHOUT ANY WARRANTY; without even the implied warranty of\\n *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\n *     GNU General Public License for more details.\\n *\\n *     You should have received a copy of the GNU General Public License\\n *     along with this program.  If not, see <https://www.gnu.org/licenses/>.\\n */\\n\\ncontract TokenStorage {\\n    /// @dev ERC20 basic variables\\n    mapping(address => uint256) internal _balances;\\n    mapping(address => mapping(address => uint256)) internal _allowances;\\n    uint256 internal _totalSupply;\\n\\n    /// @dev Token information\\n    string internal _tokenName;\\n    string internal _tokenSymbol;\\n    uint8 internal _tokenDecimals;\\n    address internal _tokenOnchainID;\\n    string internal constant _TOKEN_VERSION = \\\"4.0.1\\\";\\n\\n    /// @dev Variables of freeze and pause functions\\n    mapping(address => bool) internal _frozen;\\n    mapping(address => uint256) internal _frozenTokens;\\n\\n    bool internal _tokenPaused = false;\\n\\n    /// @dev Identity Registry contract used by the onchain validator system\\n    IIdentityRegistry internal _tokenIdentityRegistry;\\n\\n    /// @dev Compliance contract linked to the onchain validator system\\n    IModularCompliance internal _tokenCompliance;\\n\\n    /**\\n     * @dev This empty reserved space is put in place to allow future versions to add new\\n     * variables without shifting down storage in the inheritance chain.\\n     */\\n    uint256[49] private __gap;\\n}\\n\\n// File contracts/token/Token.sol\\n\\n//\\n//                                             :+#####%%%%%%%%%%%%%%+\\n//                                         .-*@@@%+.:+%@@@@@%%#***%@@%=\\n//                                     :=*%@@@#=.      :#@@%       *@@@%=\\n//                       .-+*%@%*-.:+%@@@@@@+.     -*+:  .=#.       :%@@@%-\\n//                   :=*@@@@%%@@@@@@@@@%@@@-   .=#@@@%@%=             =@@@@#.\\n//             -=+#%@@%#*=:.  :%@@@@%.   -*@@#*@@@@@@@#=:-              *@@@@+\\n//            =@@%=:.     :=:   *@@@@@%#-   =%*%@@@@#+-.        =+       :%@@@%-\\n//           -@@%.     .+@@@     =+=-.         @@#-           +@@@%-       =@@@@%:\\n//          :@@@.    .+@@#%:                   :    .=*=-::.-%@@@+*@@=       +@@@@#.\\n//          %@@:    +@%%*                         =%@@@@@@@@@@@#.  .*@%-       +@@@@*.\\n//         #@@=                                .+@@@@%:=*@@@@@-      :%@%:      .*@@@@+\\n//        *@@*                                +@@@#-@@%-:%@@*          +@@#.      :%@@@@-\\n//       -@@%           .:-=++*##%%%@@@@@@@@@@@@*. :@+.@@@%:            .#@@+       =@@@@#:\\n//      .@@@*-+*#%%%@@@@@@@@@@@@@@@@%%#**@@%@@@.   *@=*@@#                :#@%=      .#@@@@#-\\n//      -%@@@@@@@@@@@@@@@*+==-:-@@@=    *@# .#@*-=*@@@@%=                 -%@@@*       =@@@@@%-\\n//         -+%@@@#.   %@%%=   -@@:+@: -@@*    *@@*-::                   -%@@%=.         .*@@@@@#\\n//            *@@@*  +@* *@@##@@-  #@*@@+    -@@=          .         :+@@@#:           .-+@@@%+-\\n//             +@@@%*@@:..=@@@@*   .@@@*   .#@#.       .=+-       .=%@@@*.         :+#@@@@*=:\\n//              =@@@@%@@@@@@@@@@@@@@@@@@@@@@%-      :+#*.       :*@@@%=.       .=#@@@@%+:\\n//               .%@@=                 .....    .=#@@+.       .#@@@*:       -*%@@@@%+.\\n//                 +@@#+===---:::...         .=%@@*-         +@@@+.      -*@@@@@%+.\\n//                  -@@@@@@@@@@@@@@@@@@@@@@%@@@@=          -@@@+      -#@@@@@#=.\\n//                    ..:::---===+++***###%%%@@@#-       .#@@+     -*@@@@@#=.\\n//                                           @@@@@@+.   +@@*.   .+@@@@@%=.\\n//                                          -@@@@@=   =@@%:   -#@@@@%+.\\n//                                          +@@@@@. =@@@=  .+@@@@@*:\\n//                                          #@@@@#:%@@#. :*@@@@#-\\n//                                          @@@@@%@@@= :#@@@@+.\\n//                                         :@@@@@@@#.:#@@@%-\\n//                                         +@@@@@@-.*@@@*:\\n//                                         #@@@@#.=@@@+.\\n//                                         @@@@+-%@%=\\n//                                        :@@@#%@%=\\n//                                        +@@@@%-\\n//                                        :#%%=\\n//\\n\\n/**\\n *     NOTICE\\n *\\n *     The T-REX software is licensed under a proprietary license or the GPL v.3.\\n *     If you choose to receive it under the GPL v.3 license, the following applies:\\n *     T-REX is a suite of smart contracts implementing the ERC-3643 standard and\\n *     developed by Tokeny to manage and transfer financial assets on EVM blockchains\\n *\\n *     Copyright (C) 2023, Tokeny s\\u00e0rl.\\n *\\n *     This program is free software: you can redistribute it and/or modify\\n *     it under the terms of the GNU General Public License as published by\\n *     the Free Software Foundation, either version 3 of the License, or\\n *     (at your option) any later version.\\n *\\n *     This program is distributed in the hope that it will be useful,\\n *     but WITHOUT ANY WARRANTY; without even the implied warranty of\\n *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\n *     GNU General Public License for more details.\\n *\\n *     You should have received a copy of the GNU General Public License\\n *     along with this program.  If not, see <https://www.gnu.org/licenses/>.\\n */\\n\\ncontract Token is IToken, AgentRoleUpgradeable, TokenStorage {\\n\\n    /// modifiers\\n\\n    /// @dev Modifier to make a function callable only when the contract is not paused.\\n    modifier whenNotPaused() {\\n        require(!_tokenPaused, \\\"Pausable: paused\\\");\\n        _;\\n    }\\n\\n    /// @dev Modifier to make a function callable only when the contract is paused.\\n    modifier whenPaused() {\\n        require(_tokenPaused, \\\"Pausable: not paused\\\");\\n        _;\\n    }\\n\\n    /**\\n     *  @dev the constructor initiates the token contract\\n     *  msg.sender is set automatically as the owner of the smart contract\\n     *  @param _identityRegistry the address of the Identity registry linked to the token\\n     *  @param _compliance the address of the compliance contract linked to the token\\n     *  @param _name the name of the token\\n     *  @param _symbol the symbol of the token\\n     *  @param _decimals the decimals of the token\\n     *  @param _onchainID the address of the onchainID of the token\\n     *  emits an `UpdatedTokenInformation` event\\n     *  emits an `IdentityRegistryAdded` event\\n     *  emits a `ComplianceAdded` event\\n     */\\n    function init(\\n        address _identityRegistry,\\n        address _compliance,\\n        string memory _name,\\n        string memory _symbol,\\n        uint8 _decimals,\\n        // _onchainID can be zero address if not set, can be set later by owner\\n        address _onchainID\\n    ) external initializer {\\n        // that require is protecting legacy versions of TokenProxy contracts\\n        // as there was a bug with the initializer modifier on these proxies\\n        // that check is preventing attackers to call the init functions on those\\n        // legacy contracts.\\n        require(owner() == address(0), \\\"already initialized\\\");\\n        require(\\n            _identityRegistry != address(0)\\n            && _compliance != address(0)\\n        , \\\"invalid argument - zero address\\\");\\n        require(\\n            keccak256(abi.encode(_name)) != keccak256(abi.encode(\\\"\\\"))\\n            && keccak256(abi.encode(_symbol)) != keccak256(abi.encode(\\\"\\\"))\\n        , \\\"invalid argument - empty string\\\");\\n        require(0 <= _decimals && _decimals <= 18, \\\"decimals between 0 and 18\\\");\\n        __Ownable_init();\\n        _tokenName = _name;\\n        _tokenSymbol = _symbol;\\n        _tokenDecimals = _decimals;\\n        _tokenOnchainID = _onchainID;\\n        _tokenPaused = true;\\n        setIdentityRegistry(_identityRegistry);\\n        setCompliance(_compliance);\\n        emit UpdatedTokenInformation(_tokenName, _tokenSymbol, _tokenDecimals, _TOKEN_VERSION, _tokenOnchainID);\\n    }\\n\\n    /**\\n     *  @dev See {IERC20-approve}.\\n     */\\n    function approve(address _spender, uint256 _amount) external virtual override returns (bool) {\\n        _approve(msg.sender, _spender, _amount);\\n        return true;\\n    }\\n\\n    /**\\n     *  @dev See {ERC20-increaseAllowance}.\\n     */\\n    function increaseAllowance(address _spender, uint256 _addedValue) external virtual returns (bool) {\\n        _approve(msg.sender, _spender, _allowances[msg.sender][_spender] + (_addedValue));\\n        return true;\\n    }\\n\\n    /**\\n     *  @dev See {ERC20-decreaseAllowance}.\\n     */\\n    function decreaseAllowance(address _spender, uint256 _subtractedValue) external virtual returns (bool) {\\n        _approve(msg.sender, _spender, _allowances[msg.sender][_spender] - _subtractedValue);\\n        return true;\\n    }\\n\\n    /**\\n     *  @dev See {IToken-setName}.\\n     */\\n    function setName(string calldata _name) external override onlyOwner {\\n        require(keccak256(abi.encode(_name)) != keccak256(abi.encode(\\\"\\\")), \\\"invalid argument - empty string\\\");\\n        _tokenName = _name;\\n        emit UpdatedTokenInformation(_tokenName, _tokenSymbol, _tokenDecimals, _TOKEN_VERSION, _tokenOnchainID);\\n    }\\n\\n    /**\\n     *  @dev See {IToken-setSymbol}.\\n     */\\n    function setSymbol(string calldata _symbol) external override onlyOwner {\\n        require(keccak256(abi.encode(_symbol)) != keccak256(abi.encode(\\\"\\\")), \\\"invalid argument - empty string\\\");\\n        _tokenSymbol = _symbol;\\n        emit UpdatedTokenInformation(_tokenName, _tokenSymbol, _tokenDecimals, _TOKEN_VERSION, _tokenOnchainID);\\n    }\\n\\n    /**\\n     *  @dev See {IToken-setOnchainID}.\\n     *  if _onchainID is set at zero address it means no ONCHAINID is bound to this token\\n     */\\n    function setOnchainID(address _onchainID) external override onlyOwner {\\n        _tokenOnchainID = _onchainID;\\n        emit UpdatedTokenInformation(_tokenName, _tokenSymbol, _tokenDecimals, _TOKEN_VERSION, _tokenOnchainID);\\n    }\\n\\n    /**\\n     *  @dev See {IToken-pause}.\\n     */\\n    function pause() external override onlyAgent whenNotPaused {\\n        _tokenPaused = true;\\n        emit Paused(msg.sender);\\n    }\\n\\n    /**\\n     *  @dev See {IToken-unpause}.\\n     */\\n    function unpause() external override onlyAgent whenPaused {\\n        _tokenPaused = false;\\n        emit Unpaused(msg.sender);\\n    }\\n\\n    /**\\n     *  @dev See {IToken-batchTransfer}.\\n     */\\n    function batchTransfer(address[] calldata _toList, uint256[] calldata _amounts) external override {\\n        for (uint256 i = 0; i < _toList.length; i++) {\\n            transfer(_toList[i], _amounts[i]);\\n        }\\n    }\\n\\n    /**\\n     *  @notice ERC-20 overridden function that include logic to check for trade validity.\\n     *  Require that the from and to addresses are not frozen.\\n     *  Require that the value should not exceed available balance .\\n     *  Require that the to address is a verified address\\n     *  @param _from The address of the sender\\n     *  @param _to The address of the receiver\\n     *  @param _amount The number of tokens to transfer\\n     *  @return `true` if successful and revert if unsuccessful\\n     */\\n    function transferFrom(\\n        address _from,\\n        address _to,\\n        uint256 _amount\\n    ) external override whenNotPaused returns (bool) {\\n        require(!_frozen[_to] && !_frozen[_from], \\\"wallet is frozen\\\");\\n        require(_amount <= balanceOf(_from) - (_frozenTokens[_from]), \\\"Insufficient Balance\\\");\\n        if (_tokenIdentityRegistry.isVerified(_to) && _tokenCompliance.canTransfer(_from, _to, _amount)) {\\n            _approve(_from, msg.sender, _allowances[_from][msg.sender] - (_amount));\\n            _transfer(_from, _to, _amount);\\n            _tokenCompliance.transferred(_from, _to, _amount);\\n            return true;\\n        }\\n        revert(\\\"Transfer not possible\\\");\\n    }\\n\\n    /**\\n     *  @dev See {IToken-batchForcedTransfer}.\\n     */\\n    function batchForcedTransfer(\\n        address[] calldata _fromList,\\n        address[] calldata _toList,\\n        uint256[] calldata _amounts\\n    ) external override {\\n        for (uint256 i = 0; i < _fromList.length; i++) {\\n            forcedTransfer(_fromList[i], _toList[i], _amounts[i]);\\n        }\\n    }\\n\\n    /**\\n     *  @dev See {IToken-batchMint}.\\n     */\\n    function batchMint(address[] calldata _toList, uint256[] calldata _amounts) external override {\\n        for (uint256 i = 0; i < _toList.length; i++) {\\n            mint(_toList[i], _amounts[i]);\\n        }\\n    }\\n\\n    /**\\n     *  @dev See {IToken-batchBurn}.\\n     */\\n    function batchBurn(address[] calldata _userAddresses, uint256[] calldata _amounts) external override {\\n        for (uint256 i = 0; i < _userAddresses.length; i++) {\\n            burn(_userAddresses[i], _amounts[i]);\\n        }\\n    }\\n\\n    /**\\n     *  @dev See {IToken-batchSetAddressFrozen}.\\n     */\\n    function batchSetAddressFrozen(address[] calldata _userAddresses, bool[] calldata _freeze) external override {\\n        for (uint256 i = 0; i < _userAddresses.length; i++) {\\n            setAddressFrozen(_userAddresses[i], _freeze[i]);\\n        }\\n    }\\n\\n    /**\\n     *  @dev See {IToken-batchFreezePartialTokens}.\\n     */\\n    function batchFreezePartialTokens(address[] calldata _userAddresses, uint256[] calldata _amounts) external override {\\n        for (uint256 i = 0; i < _userAddresses.length; i++) {\\n            freezePartialTokens(_userAddresses[i], _amounts[i]);\\n        }\\n    }\\n\\n    /**\\n     *  @dev See {IToken-batchUnfreezePartialTokens}.\\n     */\\n    function batchUnfreezePartialTokens(address[] calldata _userAddresses, uint256[] calldata _amounts) external override {\\n        for (uint256 i = 0; i < _userAddresses.length; i++) {\\n            unfreezePartialTokens(_userAddresses[i], _amounts[i]);\\n        }\\n    }\\n\\n    /**\\n     *  @dev See {IToken-recoveryAddress}.\\n     */\\n    function recoveryAddress(\\n        address _lostWallet,\\n        address _newWallet,\\n        address _investorOnchainID\\n    ) external override onlyAgent returns (bool) {\\n        require(balanceOf(_lostWallet) != 0, \\\"no tokens to recover\\\");\\n        IIdentity _onchainID = IIdentity(_investorOnchainID);\\n        bytes32 _key = keccak256(abi.encode(_newWallet));\\n        if (_onchainID.keyHasPurpose(_key, 1)) {\\n            uint256 investorTokens = balanceOf(_lostWallet);\\n            uint256 frozenTokens = _frozenTokens[_lostWallet];\\n            _tokenIdentityRegistry.registerIdentity(_newWallet, _onchainID, _tokenIdentityRegistry.investorCountry\\n                (_lostWallet));\\n            forcedTransfer(_lostWallet, _newWallet, investorTokens);\\n            if (frozenTokens > 0) {\\n                freezePartialTokens(_newWallet, frozenTokens);\\n            }\\n            if (_frozen[_lostWallet] == true) {\\n                setAddressFrozen(_newWallet, true);\\n            }\\n            _tokenIdentityRegistry.deleteIdentity(_lostWallet);\\n            emit RecoverySuccess(_lostWallet, _newWallet, _investorOnchainID);\\n            return true;\\n        }\\n        revert(\\\"Recovery not possible\\\");\\n    }\\n\\n    /**\\n     *  @dev See {IERC20-totalSupply}.\\n     */\\n    function totalSupply() external view override returns (uint256) {\\n        return _totalSupply;\\n    }\\n\\n    /**\\n     *  @dev See {IERC20-allowance}.\\n     */\\n    function allowance(address _owner, address _spender) external view virtual override returns (uint256) {\\n        return _allowances[_owner][_spender];\\n    }\\n\\n    /**\\n     *  @dev See {IToken-identityRegistry}.\\n     */\\n    function identityRegistry() external view override returns (IIdentityRegistry) {\\n        return _tokenIdentityRegistry;\\n    }\\n\\n    /**\\n     *  @dev See {IToken-compliance}.\\n     */\\n    function compliance() external view override returns (IModularCompliance) {\\n        return _tokenCompliance;\\n    }\\n\\n    /**\\n     *  @dev See {IToken-paused}.\\n     */\\n    function paused() external view override returns (bool) {\\n        return _tokenPaused;\\n    }\\n\\n    /**\\n     *  @dev See {IToken-isFrozen}.\\n     */\\n    function isFrozen(address _userAddress) external view override returns (bool) {\\n        return _frozen[_userAddress];\\n    }\\n\\n    /**\\n     *  @dev See {IToken-getFrozenTokens}.\\n     */\\n    function getFrozenTokens(address _userAddress) external view override returns (uint256) {\\n        return _frozenTokens[_userAddress];\\n    }\\n\\n    /**\\n     *  @dev See {IToken-decimals}.\\n     */\\n    function decimals() external view override returns (uint8) {\\n        return _tokenDecimals;\\n    }\\n\\n    /**\\n     *  @dev See {IToken-name}.\\n     */\\n    function name() external view override returns (string memory) {\\n        return _tokenName;\\n    }\\n\\n    /**\\n     *  @dev See {IToken-onchainID}.\\n     */\\n    function onchainID() external view override returns (address) {\\n        return _tokenOnchainID;\\n    }\\n\\n    /**\\n     *  @dev See {IToken-symbol}.\\n     */\\n    function symbol() external view override returns (string memory) {\\n        return _tokenSymbol;\\n    }\\n\\n    /**\\n     *  @dev See {IToken-version}.\\n     */\\n    function version() external pure override returns (string memory) {\\n        return _TOKEN_VERSION;\\n    }\\n\\n    /**\\n     *  @notice ERC-20 overridden function that include logic to check for trade validity.\\n     *  Require that the msg.sender and to addresses are not frozen.\\n     *  Require that the value should not exceed available balance .\\n     *  Require that the to address is a verified address\\n     *  @param _to The address of the receiver\\n     *  @param _amount The number of tokens to transfer\\n     *  @return `true` if successful and revert if unsuccessful\\n     */\\n    function transfer(address _to, uint256 _amount) public override whenNotPaused returns (bool) {\\n        require(!_frozen[_to] && !_frozen[msg.sender], \\\"wallet is frozen\\\");\\n        require(_amount <= balanceOf(msg.sender) - (_frozenTokens[msg.sender]), \\\"Insufficient Balance\\\");\\n        if (_tokenIdentityRegistry.isVerified(_to) && _tokenCompliance.canTransfer(msg.sender, _to, _amount)) {\\n            _transfer(msg.sender, _to, _amount);\\n            _tokenCompliance.transferred(msg.sender, _to, _amount);\\n            return true;\\n        }\\n        revert(\\\"Transfer not possible\\\");\\n    }\\n\\n    /**\\n     *  @dev See {IToken-forcedTransfer}.\\n     */\\n    function forcedTransfer(\\n        address _from,\\n        address _to,\\n        uint256 _amount\\n    ) public override onlyAgent returns (bool) {\\n        require(balanceOf(_from) >= _amount, \\\"sender balance too low\\\");\\n        uint256 freeBalance = balanceOf(_from) - (_frozenTokens[_from]);\\n        if (_amount > freeBalance) {\\n            uint256 tokensToUnfreeze = _amount - (freeBalance);\\n            _frozenTokens[_from] = _frozenTokens[_from] - (tokensToUnfreeze);\\n            emit TokensUnfrozen(_from, tokensToUnfreeze);\\n        }\\n        if (_tokenIdentityRegistry.isVerified(_to)) {\\n            _transfer(_from, _to, _amount);\\n            _tokenCompliance.transferred(_from, _to, _amount);\\n            return true;\\n        }\\n        revert(\\\"Transfer not possible\\\");\\n    }\\n\\n    /**\\n     *  @dev See {IToken-mint}.\\n     */\\n    function mint(address _to, uint256 _amount) public override onlyAgent {\\n        require(_tokenIdentityRegistry.isVerified(_to), \\\"Identity is not verified.\\\");\\n        require(_tokenCompliance.canTransfer(address(0), _to, _amount), \\\"Compliance not followed\\\");\\n        _mint(_to, _amount);\\n        _tokenCompliance.created(_to, _amount);\\n    }\\n\\n    /**\\n     *  @dev See {IToken-burn}.\\n     */\\n    function burn(address _userAddress, uint256 _amount) public override onlyAgent {\\n        require(balanceOf(_userAddress) >= _amount, \\\"cannot burn more than balance\\\");\\n        uint256 freeBalance = balanceOf(_userAddress) - _frozenTokens[_userAddress];\\n        if (_amount > freeBalance) {\\n            uint256 tokensToUnfreeze = _amount - (freeBalance);\\n            _frozenTokens[_userAddress] = _frozenTokens[_userAddress] - (tokensToUnfreeze);\\n            emit TokensUnfrozen(_userAddress, tokensToUnfreeze);\\n        }\\n        _burn(_userAddress, _amount);\\n        _tokenCompliance.destroyed(_userAddress, _amount);\\n    }\\n\\n    /**\\n     *  @dev See {IToken-setAddressFrozen}.\\n     */\\n    function setAddressFrozen(address _userAddress, bool _freeze) public override onlyAgent {\\n        _frozen[_userAddress] = _freeze;\\n\\n        emit AddressFrozen(_userAddress, _freeze, msg.sender);\\n    }\\n\\n    /**\\n     *  @dev See {IToken-freezePartialTokens}.\\n     */\\n    function freezePartialTokens(address _userAddress, uint256 _amount) public override onlyAgent {\\n        uint256 balance = balanceOf(_userAddress);\\n        require(balance >= _frozenTokens[_userAddress] + _amount, \\\"Amount exceeds available balance\\\");\\n        _frozenTokens[_userAddress] = _frozenTokens[_userAddress] + (_amount);\\n        emit TokensFrozen(_userAddress, _amount);\\n    }\\n\\n    /**\\n     *  @dev See {IToken-unfreezePartialTokens}.\\n     */\\n    function unfreezePartialTokens(address _userAddress, uint256 _amount) public override onlyAgent {\\n        require(_frozenTokens[_userAddress] >= _amount, \\\"Amount should be less than or equal to frozen tokens\\\");\\n        _frozenTokens[_userAddress] = _frozenTokens[_userAddress] - (_amount);\\n        emit TokensUnfrozen(_userAddress, _amount);\\n    }\\n\\n    /**\\n     *  @dev See {IToken-setIdentityRegistry}.\\n     */\\n    function setIdentityRegistry(address _identityRegistry) public override onlyOwner {\\n        _tokenIdentityRegistry = IIdentityRegistry(_identityRegistry);\\n        emit IdentityRegistryAdded(_identityRegistry);\\n    }\\n\\n    /**\\n     *  @dev See {IToken-setCompliance}.\\n     */\\n    function setCompliance(address _compliance) public override onlyOwner {\\n        if (address(_tokenCompliance) != address(0)) {\\n            _tokenCompliance.unbindToken(address(this));\\n        }\\n        _tokenCompliance = IModularCompliance(_compliance);\\n        _tokenCompliance.bindToken(address(this));\\n        emit ComplianceAdded(_compliance);\\n    }\\n\\n    /**\\n     *  @dev See {IERC20-balanceOf}.\\n     */\\n    function balanceOf(address _userAddress) public view override returns (uint256) {\\n        return _balances[_userAddress];\\n    }\\n\\n    /**\\n     *  @dev See {ERC20-_transfer}.\\n     */\\n    function _transfer(\\n        address _from,\\n        address _to,\\n        uint256 _amount\\n    ) internal virtual {\\n        require(_from != address(0), \\\"ERC20: transfer from the zero address\\\");\\n        require(_to != address(0), \\\"ERC20: transfer to the zero address\\\");\\n\\n        _beforeTokenTransfer(_from, _to, _amount);\\n\\n        _balances[_from] = _balances[_from] - _amount;\\n        _balances[_to] = _balances[_to] + _amount;\\n        emit Transfer(_from, _to, _amount);\\n    }\\n\\n    /**\\n     *  @dev See {ERC20-_mint}.\\n     */\\n    function _mint(address _userAddress, uint256 _amount) internal virtual {\\n        require(_userAddress != address(0), \\\"ERC20: mint to the zero address\\\");\\n\\n        _beforeTokenTransfer(address(0), _userAddress, _amount);\\n\\n        _totalSupply = _totalSupply + _amount;\\n        _balances[_userAddress] = _balances[_userAddress] + _amount;\\n        emit Transfer(address(0), _userAddress, _amount);\\n    }\\n\\n    /**\\n     *  @dev See {ERC20-_burn}.\\n     */\\n    function _burn(address _userAddress, uint256 _amount) internal virtual {\\n        require(_userAddress != address(0), \\\"ERC20: burn from the zero address\\\");\\n\\n        _beforeTokenTransfer(_userAddress, address(0), _amount);\\n\\n        _balances[_userAddress] = _balances[_userAddress] - _amount;\\n        _totalSupply = _totalSupply - _amount;\\n        emit Transfer(_userAddress, address(0), _amount);\\n    }\\n\\n    /**\\n     *  @dev See {ERC20-_approve}.\\n     */\\n    function _approve(\\n        address _owner,\\n        address _spender,\\n        uint256 _amount\\n    ) internal virtual {\\n        require(_owner != address(0), \\\"ERC20: approve from the zero address\\\");\\n        require(_spender != address(0), \\\"ERC20: approve to the zero address\\\");\\n\\n        _allowances[_owner][_spender] = _amount;\\n        emit Approval(_owner, _spender, _amount);\\n    }\\n\\n    /**\\n     *  @dev See {ERC20-_beforeTokenTransfer}.\\n     */\\n    // solhint-disable-next-line no-empty-blocks\\n    function _beforeTokenTransfer(address _from, address _to, uint256 _amount) internal virtual {}\\n}\\n\",\"keccak256\":\"0xec579ed04d04fab1c8e459039908c1e9ea29ed7c6a7b24273aa29b377bd616c8\",\"license\":\"GPL-3.0\"}},\"version\":1}",
  "bytecode": "0x6080604052606e805460ff1916905534801561001a57600080fd5b506137a58061002a6000396000f3fe608060405234801561001057600080fd5b506004361061028a5760003560e01c8063715018a61161015c578063a9059cbb116100ce578063dd62ed3e11610087578063dd62ed3e146105af578063e5839836146105e8578063f2fde38b14610614578063f898178914610627578063f91b619c1461063a578063fc7e5fa81461064d57600080fd5b8063a9059cbb1461053a578063aba637051461054d578063b84c824614610563578063c47f002714610576578063c69c09cf14610589578063cbf3f8611461059c57600080fd5b80639285948a116101205780639285948a146104d357806395d89b41146104e657806397a6278e146104ee5780639dc29fac146105015780639fc1d0e714610514578063a457c2d71461052757600080fd5b8063715018a61461048c5780638456cb591461049457806384e798421461049c57806388d695b2146104af5780638da5cb5b146104c257600080fd5b806339509351116102005780634a6cc677116101b95780634a6cc6771461041657806354fd4d50146104295780635c975abb1461044a5780636290865d14610455578063685731071461046657806370a082311461047957600080fd5b806339509351146103af5780633d1ddc5b146103c25780633f4ba83a146103d557806340c10f19146103dd57806342a47abc146103f05780634710362d1461040357600080fd5b806318160ddd1161025257806318160ddd146103465780631a7af3791461034e5780631fe56f7d146103615780631ffbb0641461037457806323b872dd14610387578063313ce5671461039a57600080fd5b806306fdde031461028f578063095ea7b3146102ad578063125c4a33146102d0578063134e18f4146102e5578063158b1a571461030f575b600080fd5b610297610660565b6040516102a49190612e09565b60405180910390f35b6102c06102bb366004612e38565b6106f2565b60405190151581526020016102a4565b6102e36102de366004612e38565b610709565b005b606e5461010090046001600160a01b03165b6040516001600160a01b0390911681526020016102a4565b61033861031d366004612e62565b6001600160a01b03166000908152606d602052604090205490565b6040519081526020016102a4565b606854610338565b6102e361035c366004612ec9565b610838565b6102e361036f366004612e38565b6108ad565b6102c0610382366004612e62565b6109d6565b6102c0610395366004612f35565b6109e3565b606b5460405160ff90911681526020016102a4565b6102c06103bd366004612e38565b610ced565b6102e36103d0366004612e62565b610d24565b6102e3610de2565b6102e36103eb366004612e38565b610e90565b6102e36103fe366004612f71565b6110ab565b6102e3610411366004612ec9565b611141565b6102e3610424366004612ec9565b6111a6565b604080518082019091526005815264342e302e3160d81b6020820152610297565b606e5460ff166102c0565b606f546001600160a01b03166102f7565b6102e3610474366004612ec9565b61120b565b610338610487366004612e62565b611270565b6102e361128b565b6102e361129f565b6102e36104aa366004612e62565b611324565b6102e36104bd366004612ec9565b611394565b6033546001600160a01b03166102f7565b6102c06104e136600461300b565b6113fa565b610297611769565b6102e36104fc366004612e62565b611778565b6102e361050f366004612e38565b6117e8565b6102c0610522366004612f35565b611993565b6102c0610535366004612e38565b611bc1565b6102c0610548366004612e38565b611bf8565b606b5461010090046001600160a01b03166102f7565b6102e361057136600461304e565b611e6f565b6102e361058436600461304e565b611f9b565b6102e36105973660046130ce565b612027565b6102e36105aa366004612e62565b6120a1565b6103386105bd366004613105565b6001600160a01b03918216600090815260676020908152604080832093909416825291909152205490565b6102c06105f6366004612e62565b6001600160a01b03166000908152606c602052604090205460ff1690565b6102e3610622366004612e62565b6120fb565b6102e3610635366004612e62565b612174565b6102e36106483660046131db565b61228e565b6102e361065b366004612ec9565b612666565b60606069805461066f90613288565b80601f016020809104026020016040519081016040528092919081815260200182805461069b90613288565b80156106e85780601f106106bd576101008083540402835291602001916106e8565b820191906000526020600020905b8154815290600101906020018083116106cb57829003601f168201915b5050505050905090565b60006106ff3384846126cb565b5060015b92915050565b610712336109d6565b6107375760405162461bcd60e51b815260040161072e906132c2565b60405180910390fd5b600061074283611270565b6001600160a01b0384166000908152606d6020526040902054909150610769908390613326565b8110156107b85760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206578636565647320617661696c61626c652062616c616e6365604482015260640161072e565b6001600160a01b0383166000908152606d60205260409020546107dc908390613326565b6001600160a01b0384166000818152606d6020526040908190209290925590517fa065e63c631c86f1b9f66a4a2f63f2093bf1c2168d23290259dbd969e0222a459061082b9085815260200190565b60405180910390a2505050565b60005b838110156108a65761089485858381811061085857610858613339565b905060200201602081019061086d9190612e62565b84848481811061087f5761087f613339565b9050602002016020810190610597919061334f565b8061089e8161336c565b91505061083b565b5050505050565b6108b6336109d6565b6108d25760405162461bcd60e51b815260040161072e906132c2565b6001600160a01b0382166000908152606d60205260409020548111156109575760405162461bcd60e51b815260206004820152603460248201527f416d6f756e742073686f756c64206265206c657373207468616e206f7220657160448201527375616c20746f2066726f7a656e20746f6b656e7360601b606482015260840161072e565b6001600160a01b0382166000908152606d602052604090205461097b908290613385565b6001600160a01b0383166000818152606d6020526040908190209290925590517f9bed35cb62ad0dba04f9d5bfee4b5bc91443e77da8a65c4c84834c51bb08b0d6906109ca9084815260200190565b60405180910390a25050565b60006107036065836127f0565b606e5460009060ff1615610a095760405162461bcd60e51b815260040161072e90613398565b6001600160a01b0383166000908152606c602052604090205460ff16158015610a4b57506001600160a01b0384166000908152606c602052604090205460ff16155b610a8a5760405162461bcd60e51b815260206004820152601060248201526f3bb0b63632ba1034b990333937bd32b760811b604482015260640161072e565b6001600160a01b0384166000908152606d6020526040902054610aac85611270565b610ab69190613385565b821115610afc5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742042616c616e636560601b604482015260640161072e565b606e5460405163b9209e3360e01b81526001600160a01b0385811660048301526101009092049091169063b9209e3390602401602060405180830381865afa158015610b4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7091906133c2565b8015610bec5750606f546040516372331c7360e11b81526001600160a01b039091169063e46638e690610bab908790879087906004016133df565b602060405180830381865afa158015610bc8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bec91906133c2565b15610ca6576001600160a01b038416600090815260676020908152604080832033808552925290912054610c2c918691610c27908690613385565b6126cb565b610c37848484612873565b606f546040516322ebca6d60e21b81526001600160a01b0390911690638baf29b490610c6b908790879087906004016133df565b600060405180830381600087803b158015610c8557600080fd5b505af1158015610c99573d6000803e3d6000fd5b5050505060019050610ce6565b60405162461bcd60e51b81526020600482015260156024820152745472616e73666572206e6f7420706f737369626c6560581b604482015260640161072e565b9392505050565b3360008181526067602090815260408083206001600160a01b038716845290915281205490916106ff918590610c27908690613326565b610d2c6129e1565b606b8054610100600160a81b0319166101006001600160a01b038481168202929092179283905560405192041690610d6690606a90613403565b60405180910390206069604051610d7d9190613403565b60408051918290038220606b5483830183526005845264342e302e3160d81b6020850152915190927f6a1105ac8148a3c319adbc369f9072573e8a11d3a3d195e067e7c40767ec54d192610dd79260ff9091169190613479565b60405180910390a450565b610deb336109d6565b610e075760405162461bcd60e51b815260040161072e906132c2565b606e5460ff16610e505760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161072e565b606e805460ff191690556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa906020015b60405180910390a1565b610e99336109d6565b610eb55760405162461bcd60e51b815260040161072e906132c2565b606e5460405163b9209e3360e01b81526001600160a01b0384811660048301526101009092049091169063b9209e3390602401602060405180830381865afa158015610f05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2991906133c2565b610f755760405162461bcd60e51b815260206004820152601960248201527f4964656e74697479206973206e6f742076657269666965642e00000000000000604482015260640161072e565b606f546040516372331c7360e11b81526001600160a01b039091169063e46638e690610faa90600090869086906004016133df565b602060405180830381865afa158015610fc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610feb91906133c2565b6110375760405162461bcd60e51b815260206004820152601760248201527f436f6d706c69616e6365206e6f7420666f6c6c6f776564000000000000000000604482015260640161072e565b6110418282612a3b565b606f54604051635f8dead360e01b81526001600160a01b0384811660048301526024820184905290911690635f8dead390604401600060405180830381600087803b15801561108f57600080fd5b505af11580156110a3573d6000803e3d6000fd5b505050505050565b60005b85811015611138576111258787838181106110cb576110cb613339565b90506020020160208101906110e09190612e62565b8686848181106110f2576110f2613339565b90506020020160208101906111079190612e62565b85858581811061111957611119613339565b90506020020135611993565b50806111308161336c565b9150506110ae565b50505050505050565b60005b838110156108a65761119485858381811061116157611161613339565b90506020020160208101906111769190612e62565b84848481811061118857611188613339565b905060200201356108ad565b8061119e8161336c565b915050611144565b60005b838110156108a6576111f98585838181106111c6576111c6613339565b90506020020160208101906111db9190612e62565b8484848181106111ed576111ed613339565b905060200201356117e8565b806112038161336c565b9150506111a9565b60005b838110156108a65761125e85858381811061122b5761122b613339565b90506020020160208101906112409190612e62565b84848481811061125257611252613339565b90506020020135610e90565b806112688161336c565b91505061120e565b6001600160a01b031660009081526066602052604090205490565b6112936129e1565b61129d6000612b23565b565b6112a8336109d6565b6112c45760405162461bcd60e51b815260040161072e906132c2565b606e5460ff16156112e75760405162461bcd60e51b815260040161072e90613398565b606e805460ff191660011790556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25890602001610e86565b61132c6129e1565b6001600160a01b0381166113525760405162461bcd60e51b815260040161072e9061349d565b61135d606582612b75565b6040516001600160a01b038216907ff68e73cec97f2d70aa641fb26e87a4383686e2efacb648f2165aeb02ac562ec590600090a250565b60005b838110156108a6576113e78585838181106113b4576113b4613339565b90506020020160208101906113c99190612e62565b8484848181106113db576113db613339565b90506020020135611bf8565b50806113f28161336c565b915050611397565b6000611405336109d6565b6114215760405162461bcd60e51b815260040161072e906132c2565b61142a84611270565b6000036114705760405162461bcd60e51b81526020600482015260146024820152733737903a37b5b2b739903a37903932b1b7bb32b960611b604482015260640161072e565b604080516001600160a01b038516602082015283916000910160408051808303601f1901815290829052805160209091012063d202158d60e01b8252600482018190526001602483015291506001600160a01b0383169063d202158d90604401602060405180830381865afa1580156114ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151191906133c2565b1561172957600061152187611270565b6001600160a01b038881166000818152606d60205260409081902054606e549151637e42683b60e01b8152600481019390935293945061010090049091169063454a03e090899087908490637e42683b90602401602060405180830381865afa158015611592573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b691906134d4565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015261ffff166044820152606401600060405180830381600087803b15801561160957600080fd5b505af115801561161d573d6000803e3d6000fd5b5050505061162c888884611993565b50801561163d5761163d8782610709565b6001600160a01b0388166000908152606c602052604090205460ff16151560010361166d5761166d876001612027565b606e5460405163a8d29d1d60e01b81526001600160a01b038a811660048301526101009092049091169063a8d29d1d90602401600060405180830381600087803b1580156116ba57600080fd5b505af11580156116ce573d6000803e3d6000fd5b50505050856001600160a01b0316876001600160a01b0316896001600160a01b03167ff0c9129a94f30f1caaceb63e44b9811d0a3edf1d6c23757f346093af5553fed060405160405180910390a46001945050505050610ce6565b60405162461bcd60e51b81526020600482015260156024820152745265636f76657279206e6f7420706f737369626c6560581b604482015260640161072e565b6060606a805461066f90613288565b6117806129e1565b6001600160a01b0381166117a65760405162461bcd60e51b815260040161072e9061349d565b6117b1606582612bf1565b6040516001600160a01b038216907fed9c8ad8d5a0a66898ea49d2956929c93ae2e8bd50281b2ed897c5d1a6737e0b90600090a250565b6117f1336109d6565b61180d5760405162461bcd60e51b815260040161072e906132c2565b8061181783611270565b10156118655760405162461bcd60e51b815260206004820152601d60248201527f63616e6e6f74206275726e206d6f7265207468616e2062616c616e6365000000604482015260640161072e565b6001600160a01b0382166000908152606d602052604081205461188784611270565b6118919190613385565b9050808211156119275760006118a78284613385565b6001600160a01b0385166000908152606d60205260409020549091506118ce908290613385565b6001600160a01b0385166000818152606d6020526040908190209290925590517f9bed35cb62ad0dba04f9d5bfee4b5bc91443e77da8a65c4c84834c51bb08b0d69061191d9084815260200190565b60405180910390a2505b6119318383612c73565b606f5460405163469753b960e11b81526001600160a01b0385811660048301526024820185905290911690638d2ea77290604401600060405180830381600087803b15801561197f57600080fd5b505af1158015611138573d6000803e3d6000fd5b600061199e336109d6565b6119ba5760405162461bcd60e51b815260040161072e906132c2565b816119c485611270565b1015611a0b5760405162461bcd60e51b815260206004820152601660248201527573656e6465722062616c616e636520746f6f206c6f7760501b604482015260640161072e565b6001600160a01b0384166000908152606d6020526040812054611a2d86611270565b611a379190613385565b905080831115611acd576000611a4d8285613385565b6001600160a01b0387166000908152606d6020526040902054909150611a74908290613385565b6001600160a01b0387166000818152606d6020526040908190209290925590517f9bed35cb62ad0dba04f9d5bfee4b5bc91443e77da8a65c4c84834c51bb08b0d690611ac39084815260200190565b60405180910390a2505b606e5460405163b9209e3360e01b81526001600160a01b0386811660048301526101009092049091169063b9209e3390602401602060405180830381865afa158015611b1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b4191906133c2565b15610ca657611b51858585612873565b606f546040516322ebca6d60e21b81526001600160a01b0390911690638baf29b490611b85908890889088906004016133df565b600060405180830381600087803b158015611b9f57600080fd5b505af1158015611bb3573d6000803e3d6000fd5b505050506001915050610ce6565b3360008181526067602090815260408083206001600160a01b038716845290915281205490916106ff918590610c27908690613385565b606e5460009060ff1615611c1e5760405162461bcd60e51b815260040161072e90613398565b6001600160a01b0383166000908152606c602052604090205460ff16158015611c575750336000908152606c602052604090205460ff16155b611c965760405162461bcd60e51b815260206004820152601060248201526f3bb0b63632ba1034b990333937bd32b760811b604482015260640161072e565b336000818152606d602052604090205490611cb090611270565b611cba9190613385565b821115611d005760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742042616c616e636560601b604482015260640161072e565b606e5460405163b9209e3360e01b81526001600160a01b0385811660048301526101009092049091169063b9209e3390602401602060405180830381865afa158015611d50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d7491906133c2565b8015611df05750606f546040516372331c7360e11b81526001600160a01b039091169063e46638e690611daf903390879087906004016133df565b602060405180830381865afa158015611dcc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611df091906133c2565b15610ca657611e00338484612873565b606f546040516322ebca6d60e21b81526001600160a01b0390911690638baf29b490611e34903390879087906004016133df565b600060405180830381600087803b158015611e4e57600080fd5b505af1158015611e62573d6000803e3d6000fd5b5050505060019050610703565b611e776129e1565b604051602001611e9290602080825260009082015260400190565b604051602081830303815290604052805190602001208282604051602001611ebb9291906134f8565b6040516020818303038152906040528051906020012003611eee5760405162461bcd60e51b815260040161072e90613527565b606a611efb8284836135a4565b50606b546040516101009091046001600160a01b031690611f1e90606a90613403565b60405180910390206069604051611f359190613403565b60408051918290038220606b5483830183526005845264342e302e3160d81b6020850152915190927f6a1105ac8148a3c319adbc369f9072573e8a11d3a3d195e067e7c40767ec54d192611f8f9260ff9091169190613479565b60405180910390a45050565b611fa36129e1565b604051602001611fbe90602080825260009082015260400190565b604051602081830303815290604052805190602001208282604051602001611fe79291906134f8565b604051602081830303815290604052805190602001200361201a5760405162461bcd60e51b815260040161072e90613527565b6069611efb8284836135a4565b612030336109d6565b61204c5760405162461bcd60e51b815260040161072e906132c2565b6001600160a01b0382166000818152606c6020526040808220805460ff19168515159081179091559051339391927f7fa523c84ab8d7fc5b72f08b9e46dbbf10c39e119a075b3e317002d14bc9f43691a45050565b6120a96129e1565b606e8054610100600160a81b0319166101006001600160a01b038416908102919091179091556040517fd2be862d755bca7e0d39772b2cab3a5578da9c285f69199f4c063c2294a7f36c90600090a250565b6121036129e1565b6001600160a01b0381166121685760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161072e565b61217181612b23565b50565b61217c6129e1565b606f546001600160a01b0316156121eb57606f5460405163040db3b560e41b81523060048201526001600160a01b03909116906340db3b5090602401600060405180830381600087803b1580156121d257600080fd5b505af11580156121e6573d6000803e3d6000fd5b505050505b606f80546001600160a01b0319166001600160a01b038316908117909155604051631ffad50160e11b8152306004820152633ff5aa0290602401600060405180830381600087803b15801561223f57600080fd5b505af1158015612253573d6000803e3d6000fd5b50506040516001600160a01b03841692507f7f3a888862559648ec01d97deb7b5012bff86dc91e654a1de397170db40e35b69150600090a250565b600054610100900460ff16158080156122ae5750600054600160ff909116105b806122c85750303b1580156122c8575060005460ff166001145b61232b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161072e565b6000805460ff19166001179055801561234e576000805461ff0019166101001790555b60006123626033546001600160a01b031690565b6001600160a01b0316146123ae5760405162461bcd60e51b8152602060048201526013602482015272185b1c9958591e481a5b9a5d1a585b1a5e9959606a1b604482015260640161072e565b6001600160a01b038716158015906123ce57506001600160a01b03861615155b6123ea5760405162461bcd60e51b815260040161072e9061349d565b60405160200161240590602080825260009082015260400190565b604051602081830303815290604052805190602001208560405160200161242c9190612e09565b60405160208183030381529060405280519060200120141580156124a6575060405160200161246690602080825260009082015260400190565b604051602081830303815290604052805190602001208460405160200161248d9190612e09565b6040516020818303038152906040528051906020012014155b6124c25760405162461bcd60e51b815260040161072e90613527565b60128360ff1611156125165760405162461bcd60e51b815260206004820152601960248201527f646563696d616c73206265747765656e203020616e6420313800000000000000604482015260640161072e565b61251e612d5f565b606961252a8682613664565b50606a6125378582613664565b50606b80546001600160a01b038416610100026001600160a81b031990911660ff861617179055606e805460ff19166001179055612574876120a1565b61257d86612174565b606b546040516101009091046001600160a01b03169061259f90606a90613403565b604051809103902060696040516125b69190613403565b60408051918290038220606b5483830183526005845264342e302e3160d81b6020850152915190927f6a1105ac8148a3c319adbc369f9072573e8a11d3a3d195e067e7c40767ec54d1926126109260ff9091169190613479565b60405180910390a48015611138576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150505050505050565b60005b838110156108a6576126b985858381811061268657612686613339565b905060200201602081019061269b9190612e62565b8484848181106126ad576126ad613339565b90506020020135610709565b806126c38161336c565b915050612669565b6001600160a01b03831661272d5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161072e565b6001600160a01b03821661278e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161072e565b6001600160a01b0383811660008181526067602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006001600160a01b0382166128535760405162461bcd60e51b815260206004820152602260248201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604482015261737360f01b606482015260840161072e565b506001600160a01b03166000908152602091909152604090205460ff1690565b6001600160a01b0383166128d75760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161072e565b6001600160a01b0382166129395760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161072e565b6001600160a01b03831660009081526066602052604090205461295d908290613385565b6001600160a01b03808516600090815260666020526040808220939093559084168152205461298d908290613326565b6001600160a01b0380841660008181526066602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906127e39085815260200190565b6033546001600160a01b0316331461129d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161072e565b6001600160a01b038216612a915760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161072e565b80606854612a9f9190613326565b6068556001600160a01b038216600090815260666020526040902054612ac6908290613326565b6001600160a01b0383166000818152606660205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90612b179085815260200190565b60405180910390a35050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b612b7f82826127f0565b15612bcc5760405162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015260640161072e565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b612bfb82826127f0565b612c515760405162461bcd60e51b815260206004820152602160248201527f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c6044820152606560f81b606482015260840161072e565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b6001600160a01b038216612cd35760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161072e565b6001600160a01b038216600090815260666020526040902054612cf7908290613385565b6001600160a01b038316600090815260666020526040902055606854612d1e908290613385565b6068556040518181526000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001612b17565b600054610100900460ff16612d865760405162461bcd60e51b815260040161072e90613724565b61129d612d93565b505050565b600054610100900460ff16612dba5760405162461bcd60e51b815260040161072e90613724565b61129d33612b23565b6000815180845260005b81811015612de957602081850181015186830182015201612dcd565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610ce66020830184612dc3565b80356001600160a01b0381168114612e3357600080fd5b919050565b60008060408385031215612e4b57600080fd5b612e5483612e1c565b946020939093013593505050565b600060208284031215612e7457600080fd5b610ce682612e1c565b60008083601f840112612e8f57600080fd5b50813567ffffffffffffffff811115612ea757600080fd5b6020830191508360208260051b8501011115612ec257600080fd5b9250929050565b60008060008060408587031215612edf57600080fd5b843567ffffffffffffffff80821115612ef757600080fd5b612f0388838901612e7d565b90965094506020870135915080821115612f1c57600080fd5b50612f2987828801612e7d565b95989497509550505050565b600080600060608486031215612f4a57600080fd5b612f5384612e1c565b9250612f6160208501612e1c565b9150604084013590509250925092565b60008060008060008060608789031215612f8a57600080fd5b863567ffffffffffffffff80821115612fa257600080fd5b612fae8a838b01612e7d565b90985096506020890135915080821115612fc757600080fd5b612fd38a838b01612e7d565b90965094506040890135915080821115612fec57600080fd5b50612ff989828a01612e7d565b979a9699509497509295939492505050565b60008060006060848603121561302057600080fd5b61302984612e1c565b925061303760208501612e1c565b915061304560408501612e1c565b90509250925092565b6000806020838503121561306157600080fd5b823567ffffffffffffffff8082111561307957600080fd5b818501915085601f83011261308d57600080fd5b81358181111561309c57600080fd5b8660208285010111156130ae57600080fd5b60209290920196919550909350505050565b801515811461217157600080fd5b600080604083850312156130e157600080fd5b6130ea83612e1c565b915060208301356130fa816130c0565b809150509250929050565b6000806040838503121561311857600080fd5b61312183612e1c565b915061312f60208401612e1c565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261315f57600080fd5b813567ffffffffffffffff8082111561317a5761317a613138565b604051601f8301601f19908116603f011681019082821181831017156131a2576131a2613138565b816040528381528660208588010111156131bb57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060008060c087890312156131f457600080fd5b6131fd87612e1c565b955061320b60208801612e1c565b9450604087013567ffffffffffffffff8082111561322857600080fd5b6132348a838b0161314e565b9550606089013591508082111561324a57600080fd5b5061325789828a0161314e565b935050608087013560ff8116811461326e57600080fd5b915061327c60a08801612e1c565b90509295509295509295565b600181811c9082168061329c57607f821691505b6020821081036132bc57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4167656e74526f6c653a2063616c6c657220646f6573206e6f7420686176652060408201526d746865204167656e7420726f6c6560901b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b8082018082111561070357610703613310565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561336157600080fd5b8135610ce6816130c0565b60006001820161337e5761337e613310565b5060010190565b8181038181111561070357610703613310565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b6000602082840312156133d457600080fd5b8151610ce6816130c0565b6001600160a01b039384168152919092166020820152604081019190915260600190565b600080835461341181613288565b60018281168015613429576001811461343e5761346d565b60ff198416875282151583028701945061346d565b8760005260208060002060005b858110156134645781548a82015290840190820161344b565b50505082870194505b50929695505050505050565b60ff831681526040602082015260006134956040830184612dc3565b949350505050565b6020808252601f908201527f696e76616c696420617267756d656e74202d207a65726f206164647265737300604082015260600190565b6000602082840312156134e657600080fd5b815161ffff81168114610ce657600080fd5b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b6020808252601f908201527f696e76616c696420617267756d656e74202d20656d70747920737472696e6700604082015260600190565b601f821115612d8e57600081815260208120601f850160051c810160208610156135855750805b601f850160051c820191505b818110156110a357828155600101613591565b67ffffffffffffffff8311156135bc576135bc613138565b6135d0836135ca8354613288565b8361355e565b6000601f84116001811461360457600085156135ec5750838201355b600019600387901b1c1916600186901b1783556108a6565b600083815260209020601f19861690835b828110156136355786850135825560209485019460019092019101613615565b50868210156136525760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b815167ffffffffffffffff81111561367e5761367e613138565b6136928161368c8454613288565b8461355e565b602080601f8311600181146136c757600084156136af5750858301515b600019600386901b1c1916600185901b1785556110a3565b600085815260208120601f198616915b828110156136f6578886015182559484019460019091019084016136d7565b50858210156137145787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea2646970667358221220294fb0e9a1d691e5bb4c0ea9126c5199ce5e7359b0093e4313449ab66f7a6c1d64736f6c63430008110033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061028a5760003560e01c8063715018a61161015c578063a9059cbb116100ce578063dd62ed3e11610087578063dd62ed3e146105af578063e5839836146105e8578063f2fde38b14610614578063f898178914610627578063f91b619c1461063a578063fc7e5fa81461064d57600080fd5b8063a9059cbb1461053a578063aba637051461054d578063b84c824614610563578063c47f002714610576578063c69c09cf14610589578063cbf3f8611461059c57600080fd5b80639285948a116101205780639285948a146104d357806395d89b41146104e657806397a6278e146104ee5780639dc29fac146105015780639fc1d0e714610514578063a457c2d71461052757600080fd5b8063715018a61461048c5780638456cb591461049457806384e798421461049c57806388d695b2146104af5780638da5cb5b146104c257600080fd5b806339509351116102005780634a6cc677116101b95780634a6cc6771461041657806354fd4d50146104295780635c975abb1461044a5780636290865d14610455578063685731071461046657806370a082311461047957600080fd5b806339509351146103af5780633d1ddc5b146103c25780633f4ba83a146103d557806340c10f19146103dd57806342a47abc146103f05780634710362d1461040357600080fd5b806318160ddd1161025257806318160ddd146103465780631a7af3791461034e5780631fe56f7d146103615780631ffbb0641461037457806323b872dd14610387578063313ce5671461039a57600080fd5b806306fdde031461028f578063095ea7b3146102ad578063125c4a33146102d0578063134e18f4146102e5578063158b1a571461030f575b600080fd5b610297610660565b6040516102a49190612e09565b60405180910390f35b6102c06102bb366004612e38565b6106f2565b60405190151581526020016102a4565b6102e36102de366004612e38565b610709565b005b606e5461010090046001600160a01b03165b6040516001600160a01b0390911681526020016102a4565b61033861031d366004612e62565b6001600160a01b03166000908152606d602052604090205490565b6040519081526020016102a4565b606854610338565b6102e361035c366004612ec9565b610838565b6102e361036f366004612e38565b6108ad565b6102c0610382366004612e62565b6109d6565b6102c0610395366004612f35565b6109e3565b606b5460405160ff90911681526020016102a4565b6102c06103bd366004612e38565b610ced565b6102e36103d0366004612e62565b610d24565b6102e3610de2565b6102e36103eb366004612e38565b610e90565b6102e36103fe366004612f71565b6110ab565b6102e3610411366004612ec9565b611141565b6102e3610424366004612ec9565b6111a6565b604080518082019091526005815264342e302e3160d81b6020820152610297565b606e5460ff166102c0565b606f546001600160a01b03166102f7565b6102e3610474366004612ec9565b61120b565b610338610487366004612e62565b611270565b6102e361128b565b6102e361129f565b6102e36104aa366004612e62565b611324565b6102e36104bd366004612ec9565b611394565b6033546001600160a01b03166102f7565b6102c06104e136600461300b565b6113fa565b610297611769565b6102e36104fc366004612e62565b611778565b6102e361050f366004612e38565b6117e8565b6102c0610522366004612f35565b611993565b6102c0610535366004612e38565b611bc1565b6102c0610548366004612e38565b611bf8565b606b5461010090046001600160a01b03166102f7565b6102e361057136600461304e565b611e6f565b6102e361058436600461304e565b611f9b565b6102e36105973660046130ce565b612027565b6102e36105aa366004612e62565b6120a1565b6103386105bd366004613105565b6001600160a01b03918216600090815260676020908152604080832093909416825291909152205490565b6102c06105f6366004612e62565b6001600160a01b03166000908152606c602052604090205460ff1690565b6102e3610622366004612e62565b6120fb565b6102e3610635366004612e62565b612174565b6102e36106483660046131db565b61228e565b6102e361065b366004612ec9565b612666565b60606069805461066f90613288565b80601f016020809104026020016040519081016040528092919081815260200182805461069b90613288565b80156106e85780601f106106bd576101008083540402835291602001916106e8565b820191906000526020600020905b8154815290600101906020018083116106cb57829003601f168201915b5050505050905090565b60006106ff3384846126cb565b5060015b92915050565b610712336109d6565b6107375760405162461bcd60e51b815260040161072e906132c2565b60405180910390fd5b600061074283611270565b6001600160a01b0384166000908152606d6020526040902054909150610769908390613326565b8110156107b85760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206578636565647320617661696c61626c652062616c616e6365604482015260640161072e565b6001600160a01b0383166000908152606d60205260409020546107dc908390613326565b6001600160a01b0384166000818152606d6020526040908190209290925590517fa065e63c631c86f1b9f66a4a2f63f2093bf1c2168d23290259dbd969e0222a459061082b9085815260200190565b60405180910390a2505050565b60005b838110156108a65761089485858381811061085857610858613339565b905060200201602081019061086d9190612e62565b84848481811061087f5761087f613339565b9050602002016020810190610597919061334f565b8061089e8161336c565b91505061083b565b5050505050565b6108b6336109d6565b6108d25760405162461bcd60e51b815260040161072e906132c2565b6001600160a01b0382166000908152606d60205260409020548111156109575760405162461bcd60e51b815260206004820152603460248201527f416d6f756e742073686f756c64206265206c657373207468616e206f7220657160448201527375616c20746f2066726f7a656e20746f6b656e7360601b606482015260840161072e565b6001600160a01b0382166000908152606d602052604090205461097b908290613385565b6001600160a01b0383166000818152606d6020526040908190209290925590517f9bed35cb62ad0dba04f9d5bfee4b5bc91443e77da8a65c4c84834c51bb08b0d6906109ca9084815260200190565b60405180910390a25050565b60006107036065836127f0565b606e5460009060ff1615610a095760405162461bcd60e51b815260040161072e90613398565b6001600160a01b0383166000908152606c602052604090205460ff16158015610a4b57506001600160a01b0384166000908152606c602052604090205460ff16155b610a8a5760405162461bcd60e51b815260206004820152601060248201526f3bb0b63632ba1034b990333937bd32b760811b604482015260640161072e565b6001600160a01b0384166000908152606d6020526040902054610aac85611270565b610ab69190613385565b821115610afc5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742042616c616e636560601b604482015260640161072e565b606e5460405163b9209e3360e01b81526001600160a01b0385811660048301526101009092049091169063b9209e3390602401602060405180830381865afa158015610b4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7091906133c2565b8015610bec5750606f546040516372331c7360e11b81526001600160a01b039091169063e46638e690610bab908790879087906004016133df565b602060405180830381865afa158015610bc8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bec91906133c2565b15610ca6576001600160a01b038416600090815260676020908152604080832033808552925290912054610c2c918691610c27908690613385565b6126cb565b610c37848484612873565b606f546040516322ebca6d60e21b81526001600160a01b0390911690638baf29b490610c6b908790879087906004016133df565b600060405180830381600087803b158015610c8557600080fd5b505af1158015610c99573d6000803e3d6000fd5b5050505060019050610ce6565b60405162461bcd60e51b81526020600482015260156024820152745472616e73666572206e6f7420706f737369626c6560581b604482015260640161072e565b9392505050565b3360008181526067602090815260408083206001600160a01b038716845290915281205490916106ff918590610c27908690613326565b610d2c6129e1565b606b8054610100600160a81b0319166101006001600160a01b038481168202929092179283905560405192041690610d6690606a90613403565b60405180910390206069604051610d7d9190613403565b60408051918290038220606b5483830183526005845264342e302e3160d81b6020850152915190927f6a1105ac8148a3c319adbc369f9072573e8a11d3a3d195e067e7c40767ec54d192610dd79260ff9091169190613479565b60405180910390a450565b610deb336109d6565b610e075760405162461bcd60e51b815260040161072e906132c2565b606e5460ff16610e505760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161072e565b606e805460ff191690556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa906020015b60405180910390a1565b610e99336109d6565b610eb55760405162461bcd60e51b815260040161072e906132c2565b606e5460405163b9209e3360e01b81526001600160a01b0384811660048301526101009092049091169063b9209e3390602401602060405180830381865afa158015610f05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2991906133c2565b610f755760405162461bcd60e51b815260206004820152601960248201527f4964656e74697479206973206e6f742076657269666965642e00000000000000604482015260640161072e565b606f546040516372331c7360e11b81526001600160a01b039091169063e46638e690610faa90600090869086906004016133df565b602060405180830381865afa158015610fc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610feb91906133c2565b6110375760405162461bcd60e51b815260206004820152601760248201527f436f6d706c69616e6365206e6f7420666f6c6c6f776564000000000000000000604482015260640161072e565b6110418282612a3b565b606f54604051635f8dead360e01b81526001600160a01b0384811660048301526024820184905290911690635f8dead390604401600060405180830381600087803b15801561108f57600080fd5b505af11580156110a3573d6000803e3d6000fd5b505050505050565b60005b85811015611138576111258787838181106110cb576110cb613339565b90506020020160208101906110e09190612e62565b8686848181106110f2576110f2613339565b90506020020160208101906111079190612e62565b85858581811061111957611119613339565b90506020020135611993565b50806111308161336c565b9150506110ae565b50505050505050565b60005b838110156108a65761119485858381811061116157611161613339565b90506020020160208101906111769190612e62565b84848481811061118857611188613339565b905060200201356108ad565b8061119e8161336c565b915050611144565b60005b838110156108a6576111f98585838181106111c6576111c6613339565b90506020020160208101906111db9190612e62565b8484848181106111ed576111ed613339565b905060200201356117e8565b806112038161336c565b9150506111a9565b60005b838110156108a65761125e85858381811061122b5761122b613339565b90506020020160208101906112409190612e62565b84848481811061125257611252613339565b90506020020135610e90565b806112688161336c565b91505061120e565b6001600160a01b031660009081526066602052604090205490565b6112936129e1565b61129d6000612b23565b565b6112a8336109d6565b6112c45760405162461bcd60e51b815260040161072e906132c2565b606e5460ff16156112e75760405162461bcd60e51b815260040161072e90613398565b606e805460ff191660011790556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25890602001610e86565b61132c6129e1565b6001600160a01b0381166113525760405162461bcd60e51b815260040161072e9061349d565b61135d606582612b75565b6040516001600160a01b038216907ff68e73cec97f2d70aa641fb26e87a4383686e2efacb648f2165aeb02ac562ec590600090a250565b60005b838110156108a6576113e78585838181106113b4576113b4613339565b90506020020160208101906113c99190612e62565b8484848181106113db576113db613339565b90506020020135611bf8565b50806113f28161336c565b915050611397565b6000611405336109d6565b6114215760405162461bcd60e51b815260040161072e906132c2565b61142a84611270565b6000036114705760405162461bcd60e51b81526020600482015260146024820152733737903a37b5b2b739903a37903932b1b7bb32b960611b604482015260640161072e565b604080516001600160a01b038516602082015283916000910160408051808303601f1901815290829052805160209091012063d202158d60e01b8252600482018190526001602483015291506001600160a01b0383169063d202158d90604401602060405180830381865afa1580156114ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151191906133c2565b1561172957600061152187611270565b6001600160a01b038881166000818152606d60205260409081902054606e549151637e42683b60e01b8152600481019390935293945061010090049091169063454a03e090899087908490637e42683b90602401602060405180830381865afa158015611592573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b691906134d4565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015261ffff166044820152606401600060405180830381600087803b15801561160957600080fd5b505af115801561161d573d6000803e3d6000fd5b5050505061162c888884611993565b50801561163d5761163d8782610709565b6001600160a01b0388166000908152606c602052604090205460ff16151560010361166d5761166d876001612027565b606e5460405163a8d29d1d60e01b81526001600160a01b038a811660048301526101009092049091169063a8d29d1d90602401600060405180830381600087803b1580156116ba57600080fd5b505af11580156116ce573d6000803e3d6000fd5b50505050856001600160a01b0316876001600160a01b0316896001600160a01b03167ff0c9129a94f30f1caaceb63e44b9811d0a3edf1d6c23757f346093af5553fed060405160405180910390a46001945050505050610ce6565b60405162461bcd60e51b81526020600482015260156024820152745265636f76657279206e6f7420706f737369626c6560581b604482015260640161072e565b6060606a805461066f90613288565b6117806129e1565b6001600160a01b0381166117a65760405162461bcd60e51b815260040161072e9061349d565b6117b1606582612bf1565b6040516001600160a01b038216907fed9c8ad8d5a0a66898ea49d2956929c93ae2e8bd50281b2ed897c5d1a6737e0b90600090a250565b6117f1336109d6565b61180d5760405162461bcd60e51b815260040161072e906132c2565b8061181783611270565b10156118655760405162461bcd60e51b815260206004820152601d60248201527f63616e6e6f74206275726e206d6f7265207468616e2062616c616e6365000000604482015260640161072e565b6001600160a01b0382166000908152606d602052604081205461188784611270565b6118919190613385565b9050808211156119275760006118a78284613385565b6001600160a01b0385166000908152606d60205260409020549091506118ce908290613385565b6001600160a01b0385166000818152606d6020526040908190209290925590517f9bed35cb62ad0dba04f9d5bfee4b5bc91443e77da8a65c4c84834c51bb08b0d69061191d9084815260200190565b60405180910390a2505b6119318383612c73565b606f5460405163469753b960e11b81526001600160a01b0385811660048301526024820185905290911690638d2ea77290604401600060405180830381600087803b15801561197f57600080fd5b505af1158015611138573d6000803e3d6000fd5b600061199e336109d6565b6119ba5760405162461bcd60e51b815260040161072e906132c2565b816119c485611270565b1015611a0b5760405162461bcd60e51b815260206004820152601660248201527573656e6465722062616c616e636520746f6f206c6f7760501b604482015260640161072e565b6001600160a01b0384166000908152606d6020526040812054611a2d86611270565b611a379190613385565b905080831115611acd576000611a4d8285613385565b6001600160a01b0387166000908152606d6020526040902054909150611a74908290613385565b6001600160a01b0387166000818152606d6020526040908190209290925590517f9bed35cb62ad0dba04f9d5bfee4b5bc91443e77da8a65c4c84834c51bb08b0d690611ac39084815260200190565b60405180910390a2505b606e5460405163b9209e3360e01b81526001600160a01b0386811660048301526101009092049091169063b9209e3390602401602060405180830381865afa158015611b1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b4191906133c2565b15610ca657611b51858585612873565b606f546040516322ebca6d60e21b81526001600160a01b0390911690638baf29b490611b85908890889088906004016133df565b600060405180830381600087803b158015611b9f57600080fd5b505af1158015611bb3573d6000803e3d6000fd5b505050506001915050610ce6565b3360008181526067602090815260408083206001600160a01b038716845290915281205490916106ff918590610c27908690613385565b606e5460009060ff1615611c1e5760405162461bcd60e51b815260040161072e90613398565b6001600160a01b0383166000908152606c602052604090205460ff16158015611c575750336000908152606c602052604090205460ff16155b611c965760405162461bcd60e51b815260206004820152601060248201526f3bb0b63632ba1034b990333937bd32b760811b604482015260640161072e565b336000818152606d602052604090205490611cb090611270565b611cba9190613385565b821115611d005760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742042616c616e636560601b604482015260640161072e565b606e5460405163b9209e3360e01b81526001600160a01b0385811660048301526101009092049091169063b9209e3390602401602060405180830381865afa158015611d50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d7491906133c2565b8015611df05750606f546040516372331c7360e11b81526001600160a01b039091169063e46638e690611daf903390879087906004016133df565b602060405180830381865afa158015611dcc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611df091906133c2565b15610ca657611e00338484612873565b606f546040516322ebca6d60e21b81526001600160a01b0390911690638baf29b490611e34903390879087906004016133df565b600060405180830381600087803b158015611e4e57600080fd5b505af1158015611e62573d6000803e3d6000fd5b5050505060019050610703565b611e776129e1565b604051602001611e9290602080825260009082015260400190565b604051602081830303815290604052805190602001208282604051602001611ebb9291906134f8565b6040516020818303038152906040528051906020012003611eee5760405162461bcd60e51b815260040161072e90613527565b606a611efb8284836135a4565b50606b546040516101009091046001600160a01b031690611f1e90606a90613403565b60405180910390206069604051611f359190613403565b60408051918290038220606b5483830183526005845264342e302e3160d81b6020850152915190927f6a1105ac8148a3c319adbc369f9072573e8a11d3a3d195e067e7c40767ec54d192611f8f9260ff9091169190613479565b60405180910390a45050565b611fa36129e1565b604051602001611fbe90602080825260009082015260400190565b604051602081830303815290604052805190602001208282604051602001611fe79291906134f8565b604051602081830303815290604052805190602001200361201a5760405162461bcd60e51b815260040161072e90613527565b6069611efb8284836135a4565b612030336109d6565b61204c5760405162461bcd60e51b815260040161072e906132c2565b6001600160a01b0382166000818152606c6020526040808220805460ff19168515159081179091559051339391927f7fa523c84ab8d7fc5b72f08b9e46dbbf10c39e119a075b3e317002d14bc9f43691a45050565b6120a96129e1565b606e8054610100600160a81b0319166101006001600160a01b038416908102919091179091556040517fd2be862d755bca7e0d39772b2cab3a5578da9c285f69199f4c063c2294a7f36c90600090a250565b6121036129e1565b6001600160a01b0381166121685760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161072e565b61217181612b23565b50565b61217c6129e1565b606f546001600160a01b0316156121eb57606f5460405163040db3b560e41b81523060048201526001600160a01b03909116906340db3b5090602401600060405180830381600087803b1580156121d257600080fd5b505af11580156121e6573d6000803e3d6000fd5b505050505b606f80546001600160a01b0319166001600160a01b038316908117909155604051631ffad50160e11b8152306004820152633ff5aa0290602401600060405180830381600087803b15801561223f57600080fd5b505af1158015612253573d6000803e3d6000fd5b50506040516001600160a01b03841692507f7f3a888862559648ec01d97deb7b5012bff86dc91e654a1de397170db40e35b69150600090a250565b600054610100900460ff16158080156122ae5750600054600160ff909116105b806122c85750303b1580156122c8575060005460ff166001145b61232b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161072e565b6000805460ff19166001179055801561234e576000805461ff0019166101001790555b60006123626033546001600160a01b031690565b6001600160a01b0316146123ae5760405162461bcd60e51b8152602060048201526013602482015272185b1c9958591e481a5b9a5d1a585b1a5e9959606a1b604482015260640161072e565b6001600160a01b038716158015906123ce57506001600160a01b03861615155b6123ea5760405162461bcd60e51b815260040161072e9061349d565b60405160200161240590602080825260009082015260400190565b604051602081830303815290604052805190602001208560405160200161242c9190612e09565b60405160208183030381529060405280519060200120141580156124a6575060405160200161246690602080825260009082015260400190565b604051602081830303815290604052805190602001208460405160200161248d9190612e09565b6040516020818303038152906040528051906020012014155b6124c25760405162461bcd60e51b815260040161072e90613527565b60128360ff1611156125165760405162461bcd60e51b815260206004820152601960248201527f646563696d616c73206265747765656e203020616e6420313800000000000000604482015260640161072e565b61251e612d5f565b606961252a8682613664565b50606a6125378582613664565b50606b80546001600160a01b038416610100026001600160a81b031990911660ff861617179055606e805460ff19166001179055612574876120a1565b61257d86612174565b606b546040516101009091046001600160a01b03169061259f90606a90613403565b604051809103902060696040516125b69190613403565b60408051918290038220606b5483830183526005845264342e302e3160d81b6020850152915190927f6a1105ac8148a3c319adbc369f9072573e8a11d3a3d195e067e7c40767ec54d1926126109260ff9091169190613479565b60405180910390a48015611138576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150505050505050565b60005b838110156108a6576126b985858381811061268657612686613339565b905060200201602081019061269b9190612e62565b8484848181106126ad576126ad613339565b90506020020135610709565b806126c38161336c565b915050612669565b6001600160a01b03831661272d5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161072e565b6001600160a01b03821661278e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161072e565b6001600160a01b0383811660008181526067602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006001600160a01b0382166128535760405162461bcd60e51b815260206004820152602260248201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604482015261737360f01b606482015260840161072e565b506001600160a01b03166000908152602091909152604090205460ff1690565b6001600160a01b0383166128d75760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161072e565b6001600160a01b0382166129395760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161072e565b6001600160a01b03831660009081526066602052604090205461295d908290613385565b6001600160a01b03808516600090815260666020526040808220939093559084168152205461298d908290613326565b6001600160a01b0380841660008181526066602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906127e39085815260200190565b6033546001600160a01b0316331461129d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161072e565b6001600160a01b038216612a915760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161072e565b80606854612a9f9190613326565b6068556001600160a01b038216600090815260666020526040902054612ac6908290613326565b6001600160a01b0383166000818152606660205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90612b179085815260200190565b60405180910390a35050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b612b7f82826127f0565b15612bcc5760405162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015260640161072e565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b612bfb82826127f0565b612c515760405162461bcd60e51b815260206004820152602160248201527f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c6044820152606560f81b606482015260840161072e565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b6001600160a01b038216612cd35760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161072e565b6001600160a01b038216600090815260666020526040902054612cf7908290613385565b6001600160a01b038316600090815260666020526040902055606854612d1e908290613385565b6068556040518181526000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001612b17565b600054610100900460ff16612d865760405162461bcd60e51b815260040161072e90613724565b61129d612d93565b505050565b600054610100900460ff16612dba5760405162461bcd60e51b815260040161072e90613724565b61129d33612b23565b6000815180845260005b81811015612de957602081850181015186830182015201612dcd565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610ce66020830184612dc3565b80356001600160a01b0381168114612e3357600080fd5b919050565b60008060408385031215612e4b57600080fd5b612e5483612e1c565b946020939093013593505050565b600060208284031215612e7457600080fd5b610ce682612e1c565b60008083601f840112612e8f57600080fd5b50813567ffffffffffffffff811115612ea757600080fd5b6020830191508360208260051b8501011115612ec257600080fd5b9250929050565b60008060008060408587031215612edf57600080fd5b843567ffffffffffffffff80821115612ef757600080fd5b612f0388838901612e7d565b90965094506020870135915080821115612f1c57600080fd5b50612f2987828801612e7d565b95989497509550505050565b600080600060608486031215612f4a57600080fd5b612f5384612e1c565b9250612f6160208501612e1c565b9150604084013590509250925092565b60008060008060008060608789031215612f8a57600080fd5b863567ffffffffffffffff80821115612fa257600080fd5b612fae8a838b01612e7d565b90985096506020890135915080821115612fc757600080fd5b612fd38a838b01612e7d565b90965094506040890135915080821115612fec57600080fd5b50612ff989828a01612e7d565b979a9699509497509295939492505050565b60008060006060848603121561302057600080fd5b61302984612e1c565b925061303760208501612e1c565b915061304560408501612e1c565b90509250925092565b6000806020838503121561306157600080fd5b823567ffffffffffffffff8082111561307957600080fd5b818501915085601f83011261308d57600080fd5b81358181111561309c57600080fd5b8660208285010111156130ae57600080fd5b60209290920196919550909350505050565b801515811461217157600080fd5b600080604083850312156130e157600080fd5b6130ea83612e1c565b915060208301356130fa816130c0565b809150509250929050565b6000806040838503121561311857600080fd5b61312183612e1c565b915061312f60208401612e1c565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261315f57600080fd5b813567ffffffffffffffff8082111561317a5761317a613138565b604051601f8301601f19908116603f011681019082821181831017156131a2576131a2613138565b816040528381528660208588010111156131bb57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060008060c087890312156131f457600080fd5b6131fd87612e1c565b955061320b60208801612e1c565b9450604087013567ffffffffffffffff8082111561322857600080fd5b6132348a838b0161314e565b9550606089013591508082111561324a57600080fd5b5061325789828a0161314e565b935050608087013560ff8116811461326e57600080fd5b915061327c60a08801612e1c565b90509295509295509295565b600181811c9082168061329c57607f821691505b6020821081036132bc57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4167656e74526f6c653a2063616c6c657220646f6573206e6f7420686176652060408201526d746865204167656e7420726f6c6560901b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b8082018082111561070357610703613310565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561336157600080fd5b8135610ce6816130c0565b60006001820161337e5761337e613310565b5060010190565b8181038181111561070357610703613310565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b6000602082840312156133d457600080fd5b8151610ce6816130c0565b6001600160a01b039384168152919092166020820152604081019190915260600190565b600080835461341181613288565b60018281168015613429576001811461343e5761346d565b60ff198416875282151583028701945061346d565b8760005260208060002060005b858110156134645781548a82015290840190820161344b565b50505082870194505b50929695505050505050565b60ff831681526040602082015260006134956040830184612dc3565b949350505050565b6020808252601f908201527f696e76616c696420617267756d656e74202d207a65726f206164647265737300604082015260600190565b6000602082840312156134e657600080fd5b815161ffff81168114610ce657600080fd5b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b6020808252601f908201527f696e76616c696420617267756d656e74202d20656d70747920737472696e6700604082015260600190565b601f821115612d8e57600081815260208120601f850160051c810160208610156135855750805b601f850160051c820191505b818110156110a357828155600101613591565b67ffffffffffffffff8311156135bc576135bc613138565b6135d0836135ca8354613288565b8361355e565b6000601f84116001811461360457600085156135ec5750838201355b600019600387901b1c1916600186901b1783556108a6565b600083815260209020601f19861690835b828110156136355786850135825560209485019460019092019101613615565b50868210156136525760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b815167ffffffffffffffff81111561367e5761367e613138565b6136928161368c8454613288565b8461355e565b602080601f8311600181146136c757600084156136af5750858301515b600019600386901b1c1916600185901b1785556110a3565b600085815260208120601f198616915b828110156136f6578886015182559484019460019091019084016136d7565b50858210156137145787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea2646970667358221220294fb0e9a1d691e5bb4c0ea9126c5199ce5e7359b0093e4313449ab66f7a6c1d64736f6c63430008110033",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}."
      },
      "approve(address,uint256)": {
        "details": "See {IERC20-approve}."
      },
      "balanceOf(address)": {
        "details": "See {IERC20-balanceOf}."
      },
      "batchBurn(address[],uint256[])": {
        "details": "See {IToken-batchBurn}."
      },
      "batchForcedTransfer(address[],address[],uint256[])": {
        "details": "See {IToken-batchForcedTransfer}."
      },
      "batchFreezePartialTokens(address[],uint256[])": {
        "details": "See {IToken-batchFreezePartialTokens}."
      },
      "batchMint(address[],uint256[])": {
        "details": "See {IToken-batchMint}."
      },
      "batchSetAddressFrozen(address[],bool[])": {
        "details": "See {IToken-batchSetAddressFrozen}."
      },
      "batchTransfer(address[],uint256[])": {
        "details": "See {IToken-batchTransfer}."
      },
      "batchUnfreezePartialTokens(address[],uint256[])": {
        "details": "See {IToken-batchUnfreezePartialTokens}."
      },
      "burn(address,uint256)": {
        "details": "See {IToken-burn}."
      },
      "compliance()": {
        "details": "See {IToken-compliance}."
      },
      "decimals()": {
        "details": "See {IToken-decimals}."
      },
      "decreaseAllowance(address,uint256)": {
        "details": "See {ERC20-decreaseAllowance}."
      },
      "forcedTransfer(address,address,uint256)": {
        "details": "See {IToken-forcedTransfer}."
      },
      "freezePartialTokens(address,uint256)": {
        "details": "See {IToken-freezePartialTokens}."
      },
      "getFrozenTokens(address)": {
        "details": "See {IToken-getFrozenTokens}."
      },
      "identityRegistry()": {
        "details": "See {IToken-identityRegistry}."
      },
      "increaseAllowance(address,uint256)": {
        "details": "See {ERC20-increaseAllowance}."
      },
      "init(address,address,string,string,uint8,address)": {
        "details": "the constructor initiates the token contract  msg.sender is set automatically as the owner of the smart contract",
        "params": {
          "_compliance": "the address of the compliance contract linked to the token",
          "_decimals": "the decimals of the token",
          "_identityRegistry": "the address of the Identity registry linked to the token",
          "_name": "the name of the token",
          "_onchainID": "the address of the onchainID of the token  emits an `UpdatedTokenInformation` event  emits an `IdentityRegistryAdded` event  emits a `ComplianceAdded` event",
          "_symbol": "the symbol of the token"
        }
      },
      "isFrozen(address)": {
        "details": "See {IToken-isFrozen}."
      },
      "mint(address,uint256)": {
        "details": "See {IToken-mint}."
      },
      "name()": {
        "details": "See {IToken-name}."
      },
      "onchainID()": {
        "details": "See {IToken-onchainID}."
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "pause()": {
        "details": "See {IToken-pause}."
      },
      "paused()": {
        "details": "See {IToken-paused}."
      },
      "recoveryAddress(address,address,address)": {
        "details": "See {IToken-recoveryAddress}."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
      },
      "setAddressFrozen(address,bool)": {
        "details": "See {IToken-setAddressFrozen}."
      },
      "setCompliance(address)": {
        "details": "See {IToken-setCompliance}."
      },
      "setIdentityRegistry(address)": {
        "details": "See {IToken-setIdentityRegistry}."
      },
      "setName(string)": {
        "details": "See {IToken-setName}."
      },
      "setOnchainID(address)": {
        "details": "See {IToken-setOnchainID}.  if _onchainID is set at zero address it means no ONCHAINID is bound to this token"
      },
      "setSymbol(string)": {
        "details": "See {IToken-setSymbol}."
      },
      "symbol()": {
        "details": "See {IToken-symbol}."
      },
      "totalSupply()": {
        "details": "See {IERC20-totalSupply}."
      },
      "transfer(address,uint256)": {
        "params": {
          "_amount": "The number of tokens to transfer",
          "_to": "The address of the receiver"
        },
        "returns": {
          "_0": "`true` if successful and revert if unsuccessful"
        }
      },
      "transferFrom(address,address,uint256)": {
        "params": {
          "_amount": "The number of tokens to transfer",
          "_from": "The address of the sender",
          "_to": "The address of the receiver"
        },
        "returns": {
          "_0": "`true` if successful and revert if unsuccessful"
        }
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      },
      "unfreezePartialTokens(address,uint256)": {
        "details": "See {IToken-unfreezePartialTokens}."
      },
      "unpause()": {
        "details": "See {IToken-unpause}."
      },
      "version()": {
        "details": "See {IToken-version}."
      }
    },
    "version": 1
  },
  "userdoc": {
    "events": {
      "AddressFrozen(address,bool,address)": {
        "notice": "this event is emitted when the wallet of an investor is frozen or unfrozen  the event is emitted by setAddressFrozen and batchSetAddressFrozen functions  `_userAddress` is the wallet of the investor that is concerned by the freezing status  `_isFrozen` is the freezing status of the wallet  if `_isFrozen` equals `true` the wallet is frozen after emission of the event  if `_isFrozen` equals `false` the wallet is unfrozen after emission of the event  `_owner` is the address of the agent who called the function to freeze the wallet"
      },
      "ComplianceAdded(address)": {
        "notice": "this event is emitted when the Compliance has been set for the token  the event is emitted by the token constructor and by the setCompliance function  `_compliance` is the address of the Compliance contract of the token"
      },
      "IdentityRegistryAdded(address)": {
        "notice": "this event is emitted when the IdentityRegistry has been set for the token  the event is emitted by the token constructor and by the setIdentityRegistry function  `_identityRegistry` is the address of the Identity Registry of the token"
      },
      "Paused(address)": {
        "notice": "this event is emitted when the token is paused  the event is emitted by the pause function  `_userAddress` is the address of the wallet that called the pause function"
      },
      "RecoverySuccess(address,address,address)": {
        "notice": "this event is emitted when an investor successfully recovers his tokens  the event is emitted by the recoveryAddress function  `_lostWallet` is the address of the wallet that the investor lost access to  `_newWallet` is the address of the wallet that the investor provided for the recovery  `_investorOnchainID` is the address of the onchainID of the investor who asked for a recovery"
      },
      "TokensFrozen(address,uint256)": {
        "notice": "this event is emitted when a certain amount of tokens is frozen on a wallet  the event is emitted by freezePartialTokens and batchFreezePartialTokens functions  `_userAddress` is the wallet of the investor that is concerned by the freezing status  `_amount` is the amount of tokens that are frozen"
      },
      "TokensUnfrozen(address,uint256)": {
        "notice": "this event is emitted when a certain amount of tokens is unfrozen on a wallet  the event is emitted by unfreezePartialTokens and batchUnfreezePartialTokens functions  `_userAddress` is the wallet of the investor that is concerned by the freezing status  `_amount` is the amount of tokens that are unfrozen"
      },
      "Unpaused(address)": {
        "notice": "this event is emitted when the token is unpaused  the event is emitted by the unpause function  `_userAddress` is the address of the wallet that called the unpause function"
      },
      "UpdatedTokenInformation(string,string,uint8,string,address)": {
        "notice": "this event is emitted when the token information is updated.  the event is emitted by the token init function and by the setTokenInformation function  `_newName` is the name of the token  `_newSymbol` is the symbol of the token  `_newDecimals` is the decimals of the token  `_newVersion` is the version of the token, current version is 3.0  `_newOnchainID` is the address of the onchainID of the token"
      }
    },
    "kind": "user",
    "methods": {
      "transfer(address,uint256)": {
        "notice": "ERC-20 overridden function that include logic to check for trade validity.  Require that the msg.sender and to addresses are not frozen.  Require that the value should not exceed available balance .  Require that the to address is a verified address"
      },
      "transferFrom(address,address,uint256)": {
        "notice": "ERC-20 overridden function that include logic to check for trade validity.  Require that the from and to addresses are not frozen.  Require that the value should not exceed available balance .  Require that the to address is a verified address"
      }
    },
    "notice": "NOTICE     The T-REX software is licensed under a proprietary license or the GPL v.3.     If you choose to receive it under the GPL v.3 license, the following applies:     T-REX is a suite of smart contracts implementing the ERC-3643 standard and     developed by Tokeny to manage and transfer financial assets on EVM blockchains     Copyright (C) 2023, Tokeny sàrl.     This program is free software: you can redistribute it and/or modify     it under the terms of the GNU General Public License as published by     the Free Software Foundation, either version 3 of the License, or     (at your option) any later version.     This program is distributed in the hope that it will be useful,     but WITHOUT ANY WARRANTY; without even the implied warranty of     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the     GNU General Public License for more details.     You should have received a copy of the GNU General Public License     along with this program.  If not, see <https://www.gnu.org/licenses/>.",
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 12725,
        "contract": "contracts/Token.sol:Token",
        "label": "_initialized",
        "offset": 0,
        "slot": "0",
        "type": "t_uint8"
      },
      {
        "astId": 12728,
        "contract": "contracts/Token.sol:Token",
        "label": "_initializing",
        "offset": 1,
        "slot": "0",
        "type": "t_bool"
      },
      {
        "astId": 12925,
        "contract": "contracts/Token.sol:Token",
        "label": "__gap",
        "offset": 0,
        "slot": "1",
        "type": "t_array(t_uint256)50_storage"
      },
      {
        "astId": 12933,
        "contract": "contracts/Token.sol:Token",
        "label": "_owner",
        "offset": 0,
        "slot": "51",
        "type": "t_address"
      },
      {
        "astId": 13053,
        "contract": "contracts/Token.sol:Token",
        "label": "__gap",
        "offset": 0,
        "slot": "52",
        "type": "t_array(t_uint256)49_storage"
      },
      {
        "astId": 13564,
        "contract": "contracts/Token.sol:Token",
        "label": "_agents",
        "offset": 0,
        "slot": "101",
        "type": "t_struct(Role)13473_storage"
      },
      {
        "astId": 14166,
        "contract": "contracts/Token.sol:Token",
        "label": "_balances",
        "offset": 0,
        "slot": "102",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 14172,
        "contract": "contracts/Token.sol:Token",
        "label": "_allowances",
        "offset": 0,
        "slot": "103",
        "type": "t_mapping(t_address,t_mapping(t_address,t_uint256))"
      },
      {
        "astId": 14174,
        "contract": "contracts/Token.sol:Token",
        "label": "_totalSupply",
        "offset": 0,
        "slot": "104",
        "type": "t_uint256"
      },
      {
        "astId": 14177,
        "contract": "contracts/Token.sol:Token",
        "label": "_tokenName",
        "offset": 0,
        "slot": "105",
        "type": "t_string_storage"
      },
      {
        "astId": 14179,
        "contract": "contracts/Token.sol:Token",
        "label": "_tokenSymbol",
        "offset": 0,
        "slot": "106",
        "type": "t_string_storage"
      },
      {
        "astId": 14181,
        "contract": "contracts/Token.sol:Token",
        "label": "_tokenDecimals",
        "offset": 0,
        "slot": "107",
        "type": "t_uint8"
      },
      {
        "astId": 14183,
        "contract": "contracts/Token.sol:Token",
        "label": "_tokenOnchainID",
        "offset": 1,
        "slot": "107",
        "type": "t_address"
      },
      {
        "astId": 14191,
        "contract": "contracts/Token.sol:Token",
        "label": "_frozen",
        "offset": 0,
        "slot": "108",
        "type": "t_mapping(t_address,t_bool)"
      },
      {
        "astId": 14195,
        "contract": "contracts/Token.sol:Token",
        "label": "_frozenTokens",
        "offset": 0,
        "slot": "109",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 14198,
        "contract": "contracts/Token.sol:Token",
        "label": "_tokenPaused",
        "offset": 0,
        "slot": "110",
        "type": "t_bool"
      },
      {
        "astId": 14202,
        "contract": "contracts/Token.sol:Token",
        "label": "_tokenIdentityRegistry",
        "offset": 1,
        "slot": "110",
        "type": "t_contract(IIdentityRegistry)13467"
      },
      {
        "astId": 14206,
        "contract": "contracts/Token.sol:Token",
        "label": "_tokenCompliance",
        "offset": 0,
        "slot": "111",
        "type": "t_contract(IModularCompliance)13850"
      },
      {
        "astId": 14211,
        "contract": "contracts/Token.sol:Token",
        "label": "__gap",
        "offset": 0,
        "slot": "112",
        "type": "t_array(t_uint256)49_storage"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_array(t_uint256)49_storage": {
        "base": "t_uint256",
        "encoding": "inplace",
        "label": "uint256[49]",
        "numberOfBytes": "1568"
      },
      "t_array(t_uint256)50_storage": {
        "base": "t_uint256",
        "encoding": "inplace",
        "label": "uint256[50]",
        "numberOfBytes": "1600"
      },
      "t_bool": {
        "encoding": "inplace",
        "label": "bool",
        "numberOfBytes": "1"
      },
      "t_contract(IIdentityRegistry)13467": {
        "encoding": "inplace",
        "label": "contract IIdentityRegistry",
        "numberOfBytes": "20"
      },
      "t_contract(IModularCompliance)13850": {
        "encoding": "inplace",
        "label": "contract IModularCompliance",
        "numberOfBytes": "20"
      },
      "t_mapping(t_address,t_bool)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => bool)",
        "numberOfBytes": "32",
        "value": "t_bool"
      },
      "t_mapping(t_address,t_mapping(t_address,t_uint256))": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => mapping(address => uint256))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_address,t_uint256)"
      },
      "t_mapping(t_address,t_uint256)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_string_storage": {
        "encoding": "bytes",
        "label": "string",
        "numberOfBytes": "32"
      },
      "t_struct(Role)13473_storage": {
        "encoding": "inplace",
        "label": "struct Roles.Role",
        "members": [
          {
            "astId": 13472,
            "contract": "contracts/Token.sol:Token",
            "label": "bearer",
            "offset": 0,
            "slot": "0",
            "type": "t_mapping(t_address,t_bool)"
          }
        ],
        "numberOfBytes": "32"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      },
      "t_uint8": {
        "encoding": "inplace",
        "label": "uint8",
        "numberOfBytes": "1"
      }
    }
  }
} as const

export const usdcContractConfig = {
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  abi: erc20Abi,
} as const
