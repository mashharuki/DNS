/**
 * ======================================================================
 * The Test Code for WalletFactory Contract + MyToken Contract
 * ======================================================================
 */

const truffleAssert = require("truffle-assertions");
const DNS = artifacts.require("DNS");

/**
 * test
 */
contract("DNS Contract tests!!", accounts => {

      // variable for dns Contract
      var dns;

      /**
       * deploy contract method
       */
      beforeEach (async () => {
            dns = await DNS.new();
      });

      /**
       * init test 
       */
      describe ("initialization", () => {
            // check 
            it ("confirm owner address", async () => {
                  // check owner address
                  assert.equal(true, await dns.isOwner(), "owner address must be match!!");
            });
      });
});