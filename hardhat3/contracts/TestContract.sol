// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract TestContract {
    struct Student {
        string name;
        uint256 identity;
    }

    Student public student;

    constructor(Student memory _student) {
        student = _student;
    }

    function setStudent(Student memory _student) external {
        student = _student;
    }

    function getStudent() public view returns (string memory name, uint256 id) {
        return (student.name, student.identity);
    }
}