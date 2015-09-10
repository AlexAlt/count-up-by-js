describe("countBy", function(){
  it('counts up for the first target number', function() {
    expect(countBy(6, 2)).to.eql([1, 2, 3, 4, 5, 6]);
  });
});
