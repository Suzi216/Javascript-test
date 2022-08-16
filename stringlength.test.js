const counts = require('./stringlength.js');


test('wrong throw error', () =>{
  expect( () => {
    counts("suzanamarsela");
  }).toThrow("wrong length");
});

test('Correct count of letters', () => {
  expect(counts("suzana")).toBe(6);
});
