async function main() {
    const Token = await ethers.getContractFactory("NelsToken");
    // Start deployment, returning a promise that resolves to a contract object
    const token = await Token.deploy();
    console.log("Contract deployed to address:", token.address);
}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });