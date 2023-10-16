const { ethers } = require('ethers'); // using ether js liberary to interact with blockchain
const mntABI = require('./mnt.json'); // abi is js version of a solidity smart contract to interact with it , whenever we compile a contract we get abi in json

async function main() {
    const mntAddress = "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000"; // address of a the token smart contract on mantle testnet whose events we are going to pull
    const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/mantle_testnet"); // provider work as a mediator to send and recive data from blockchain 

    const contract = new ethers.Contract(mntAddress, mntABI, provider); // initializing the smart contract instance here


    /*reading the Transfer event of smart contract it has 3 varaiabel from is address of person who is sending , 
    to is address of reciever and value is amount of tokens being transferred */
    contract.on("Transfer", (from, to, value) => {
        let info = {
            from: from,
            to: to,
            value: ethers.utils.formatUnits(value, 18), // converting the value which is in 18 decimals to normal int
        };

        //it will print all the events in console
        console.log(JSON.stringify(info, null, 4));

    }
    );
}
main();