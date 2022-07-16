require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss hope clip sun velvet'; 
let testAccounts = [
"0x7abbb0efbc1436ebecabee1d1de2a1ad0d67d4f6e06b1b0e9f32b21d515c7792",
"0xb7c7cd0665b7c73d00319d4c6f8c3215b3729168d1161fa7de1595babcc04041",
"0xf06c677358d2ddce1a2e32728ff9e1e0a04f8aa53fd80283ddbe72e7b19a76ba",
"0x11539be20efb33efc99d0fe353deae56b636b3bc7f0b357a2eeb6eba12805243",
"0x36f2ea4fa7ceddb9e0325ea3ed3b0567d498fb6505506a0af3e4ffddfc5fe68d",
"0xc57f34faee9adffe4e2d4aeb6357710d13e85d8c27c4673b7efe637a5ebcb970",
"0x3d1147b5291617e8d9dc4a664a12a8e6b5241dc379542d0a57d5d6bf717d36b8",
"0xf1271b43783afd2a6d8dd4b7490b7da5aed416c42ebcbfd62dfff10afc39b7b6",
"0xb68bc738f51a50a4afd21ae540005ee5740d3b948cd351c71529caaac7178863",
"0x20ecb174b000a50bd9845864f3f9118e4a606d8444e7dbcb9d45e8d042a19a78"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

