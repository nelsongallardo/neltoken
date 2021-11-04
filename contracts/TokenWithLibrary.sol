pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NelsToken is ERC20 {
    constructor() public ERC20("NelToken", "NELS") {
        _mint(msg.sender, 100000);
    }

    function decimals() public view virtual override returns (uint8) {
        return 0;
    }
}
