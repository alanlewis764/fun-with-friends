const Artifact = require('../models/artifact');
const expect = require('chai').expect;

describe("Testing to see if required artifact properties are mandatory", function() {
  var artifact = new Artifact()
  it("Artifact requires an _id", function(){
    expect(artifact).to.have.property("_id");
  })
  it("Artifact requires a title", function(){
    expect(artifact).to.have.property("title");
  })
  it("Artifact requires a description", function(){
    expect(artifact).to.have.property("desc");
  })
  it("Object requires a uploaded date", function(){
    expect(artifact).to.have.property("uploaded");
  })
})

