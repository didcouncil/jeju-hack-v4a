const fs = require('fs')
const DIDCouncil = artifacts.require('./DIDCouncil.sol')

module.exports = function (deployer) {
  deployer.deploy(DIDCouncil)
    .then(()=>{
        if(DIDCouncil._json){
            fs.writeFile('deployedABI', JSON.stringify(DIDCouncil._json.abi), 
                (err) => {
                    if(err) throw err;
                    console.log("ABI 저장.")
                }
            );

            fs.writeFile('deployedAddress', DIDCouncil.address, 
                (err) => {
                    if(err) throw err;
                    console.log("Address 저장.")
                }
            );

        }
    })
}
