// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "./Context.sol";
import "./SafeMath.sol";
import "./Address.sol";

contract Token is Context {
    using SafeMath for uint256;
    using Address for address;

    mapping(address => uint256) private _balances;
    mapping(uint256 => _Transaction) private _transactions;

    uint256 private _totalSupply;
    uint256 transactionCount;

    string private _name;
    string private _symbol;
    uint256 private _decimals;

    struct _Transaction {
        uint256 id;
        address sender;
        address recepient;
        uint256 amount;
    }

    event Transfer(
        uint256 id,
        address sender,
        address recipent,
        uint256 amount
    );

    constructor(
        string memory name,
        string memory symbol,
        uint256 totalSupply
    ) public {
        _name = name;
        _symbol = symbol;
        _decimals = 0;
        _totalSupply = totalSupply * (10**_decimals);
        _balances[msg.sender] = _totalSupply;
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    function makeTransaction(address recipient, uint256 amount)
        public
        returns (bool)
    {
        transactionCount = transactionCount.add(1);
        _transactions[transactionCount] = _Transaction(
            transactionCount,
            _msgSender(),
            recipient,
            amount
        );
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal virtual {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");

        _balances[sender] = _balances[sender].sub(
            amount,
            "ERC20: transfer amount exceeds balance"
        );
        _balances[recipient] = _balances[recipient].add(amount);
        emit Transfer(transactionCount, sender, recipient, amount);
    }
}
