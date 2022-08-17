const capitalize=require('./capitalize.js');

test("It is capitalized", ()=>{
  expect(capitalize("Suzana")).toBeTruthy();
});
