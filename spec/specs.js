describe("countBy", function(){
  it('counts up for the first target number', function() {
    expect(countBy(6, 1)).to.eql([1, 2, 3, 4, 5, 6]);
  });

  it('counts up to first number using multiples of second number', function() {
    expect(countBy(6, 2)).to.eql([2, 4, 6]);
  });

  it('does not count past first number', function() {
    expect(countBy(50, 7)).to.eql([7,14, 21, 28, 35, 42, 49]);
  });
});
