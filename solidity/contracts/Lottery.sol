pragma solidity 0.5.12;
contract Lottery {
    address public manager;
    address payable[] public players;

    constructor() public {
        manager = msg.sender;
    }

    function genRandom() private view returns(uint256) {
        return uint256(keccak256(abi.encodePacked(block.difficulty, address(this), players)));
    }

    function winner() public restricted {

        // assert(msg.sender == manager && players.length != 0);
        uint i = genRandom() % players.length;
        players[i].transfer(address(this).balance);
        // Reset players
        players = new address payable[](0);
    }

    function enter() public payable {
        assert(msg.value > .01 ether);
        assert(gasleft() < block.gaslimit);
        players.push(msg.sender);
    }
    modifier restricted(){
        //Only manager can call the function
        assert(msg.sender == manager);
        _;
    }

    function getPlayers() public view returns(address payable[] memory) {
        return players;
    }
}