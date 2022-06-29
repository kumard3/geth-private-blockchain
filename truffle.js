module.exports = {
  networks: {
    development: {
      host: "localhost",
      // port: 8543,
      // network_id: "*",
      from: "0x74be08c1ba3644505234bf3de0caeca7cb7b61f8",

      // host: "127.0.0.1",
      port: 8543,
      network_id: "*", // Match any network id
      gas: 20000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.15", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
