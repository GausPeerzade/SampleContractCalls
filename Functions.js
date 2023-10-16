const { ethers } = require('ethers');
const mntABI = require('./mnt.json');

async function main() {
    const mntAddress = "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000";
    const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/mantle_testnet");

    const contract = new ethers.Contract(mntAddress, mntABI, provider);

    /* the smart contract has a function called decimals() which will just return us the token decimals in int 
    here we are calling that function directly and stroring it in decimal
    */
    let decimal = await contract.decimals();

    console.log(decimal)

}
main();