// interact.js
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");


// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network = "ropsten", API_KEY);
// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
// Contract
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);




async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);

    console.log("Updating the message...");
    const tx = await helloWorldContract.update("Nelsooon this is the NEW message.");
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log("The new message is: " + newMessage);
}
main();