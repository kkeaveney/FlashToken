# documentation
## By: [Kevin Keaveney](https://github.com/kkeaveney)

## Summary
*  The contracts use access modifiers throughout to control visibilty. The checks, effects and interactions pattern
*  has been applied when making external calls to unstrusted contracts.

### Recommendations
*  The Open Zepplein Reentrancy modifer can be applied when calling external contracts.
*  BFactory.sol - State variables are updated after blockArt.mint, this doesn't relate to reentrancy that uses ether but the
*  checks, effects and interactions pattern could be applied.


## Scope
```
├── README.md
└── contracts
    ├── BArt.sol
    ├── BFactory.sol
    ├── BStyle.sol
    ├── ERC721Ref.sol
    ├── ERC721Style.sol
           
```

## File Review
### `contracts/`
#### `BArt.sol`

* No external transfers from the contract. All external functions can only be called by the owner

<!-- constructor?
onlyOwner modifier? -->

#### `BFactory..sol`

* collectStyleFees call externally, but the onlyStyleOwner modifer restricts access
* collectCoins & collectBalance() call externally, but only by the contract owner


#### `BStyle..sol`

* No external transfers from the contract. External function visibility is restricted to the owner or an address that _isApprovedOrOwner

<!-- constructor?
onlyOwner modifier? -->


#### `ERC721Ref.sol`

* No external transfers from the contract, mint is an external function but can only be called by the owner, all function calls from mint are ERC721 compliant.

#### `ERC721Style.sol`

* No external transfers from the contract, mint is an external function but can only be called by the owner, all function calls from mint are ERC721 compliant.


 

