// SPDX-License-Identifier: MIT
//
pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
    string message = "Congratulations, you made it. Hello World!";

    function GetMessage() public view returns (string memory) {
        return message;
    }
}
