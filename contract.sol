// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract StringArray {
    string[] private myStrings;

    function addString(string memory newString) public {
        myStrings.push(newString);
    }

    function getAllStrings() public view returns (string[] memory) {
        return myStrings;
    }
}