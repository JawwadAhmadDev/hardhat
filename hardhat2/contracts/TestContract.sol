// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract TestContract {
    string public name;

    constructor(string memory _name) {
        name = _name;
    }

    function setName(string memory _name) external {
        name = _name;
    }
}