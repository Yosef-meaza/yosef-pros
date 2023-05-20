const { expect } = require('chai');
var tools = require('../lib/tools')
console.log(Object.getOwnPropertyNames(require('chai')))
describe("tools", function () {
   describe("printName()", () => {
      it("should print the last name first", () => {
         var results = tools.printName({ first: "Alex", last: "Banks" });
         expect(results).to.equal("Banks, Alex")
      });
   });
   describe("loadWiki()", () => {
      it("load NF's Wikipedia page", (done) => {
         tools.loadWiki({ first: "NF" }, function (html) {
            expect(html).to.be.ok;
            module.exports = {
               html: html
            }
         });
         done();
      });
   })
});