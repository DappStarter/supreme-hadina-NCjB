require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note pave clutch harvest indoor equal gather'; 
let testAccounts = [
"0x4cdf48c254fae615e34804c1040ae1f9e6acd00e45a76d76387a7de19f5dfe73",
"0xa693c7a972e4cbd465160a81a05658148f8e5436a9b7b8624aa13d1014284fae",
"0xbf3c15ba152e349db4c1ddd5c725ea4e012f74270a2a2ded9b5454fdaad7b027",
"0x94dba32d035db3c3ed1447a38c9e53d3bcdcfb64770fda17a9482a17f8264e66",
"0x49ac409093b78dfd76a32523bd226d16ad5ab248e435e936a2d57f165db48684",
"0x9d4f955dd97b81caeb09c13380f5c152292d6411da9a4e9aaa6ab1ed5423ed87",
"0xd40f55d7203102b9a6b52ec97288bb484c76b5e7ce5b9b531beb227b972951c0",
"0xb2e1a7d0aade3899c336927b4fa422eb0ffd2da6bd5f19cae0ed53f39e4f6d69",
"0xf97e632b8de9168581ce8af7011fcec039290253c44a6d927b08637046ff6aa4",
"0xfd1b9db6615ec93dd8999357b096df932034e8acb75476597ac04cccc2f2ac37"
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

