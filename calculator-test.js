
it('should calculate the monthly rate correctly', function () {
  let values = { amount: 30000, years: 15, rate: 8.5}
  expect(calculateMonthlyPayment(values)).toEqual('295.42');
});


it("should return a result with 2 decimal places", function() {
  let values = { amount: 15000, years: 5, rate: 4.3}
  expect(calculateMonthlyPayment(values)).toEqual('278.28');
});


