const reverse = require('./reverseString.js');

test("right reverse string", () =>{
  expect(reverse("suzana")).toMatch("anazus");
} )
