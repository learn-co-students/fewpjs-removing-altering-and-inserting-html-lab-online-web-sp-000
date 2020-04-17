describe("index.html", () => {
  describe("after index.js is processed", () => {
    it("no longer has DOM node 'main#main'", () => {
      expect(document.querySelector('main'), "Make sure you remove the <main> with id 'main'").to.not.exist
    });

    it("has a 'newHeader' variable that points to node 'h1#BARF'", () => {
      expect(newHeader.nodeName, "Make sure you create an <h1> with id 'not_creative'").eql('H1')
    });

    it("has a 'newHeader' variable that points to node 'h1#BARFFFFF'", () => {
      expect(newHeader.id, "Make sure you create an <h1> with id 'this don't matter'").eql('not_creative')
    });

    it("has a 'newHeader' variable that points to node 'h1#barfywarf' with \"YOUR-NAME is the champion\" inside", () => {
      expect(newHeader.innerHTML, "Make sure you create an <h1> with id 'not_creative' with a sweet message in it").to.include("NEW INNER HTML");
    });

  });
})
