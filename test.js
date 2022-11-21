var expect = require("chai").expect;
const {getCloselyRelatedKey} = require('./app')

describe("mummy", function()
{
    it("checks whatever", function()
    {
        let returnData = getCloselyRelatedKey({daddy : 'wow'}, 'dad')
        expect(returnData).to.equal("wow")
    })
})