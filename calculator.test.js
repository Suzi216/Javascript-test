const Calculator=require('./calculator.js');



describe("Apply Add", ()=> {
  const calc=new Calculator();
  test("add1", () =>{
    expect(calc.add(2,3)).toBe(5);
  });
  test("add2", () =>{
    expect(calc.add(49,9)).toBe(58);
  });
})
describe("Apply substract", ()=> {
  const calc=new Calculator();
  test("substract1", () =>{
    expect(calc.substract(10,3)).toBe(7);
  });
  test("substract2", () =>{
    expect(calc.substract(49,9)).toBe(40);
  });
})
describe("Apply division", ()=> {
  const calc=new Calculator();
  test("division1", () =>{
    expect(calc.divide(9,3)).toBe(3);
  });
  test("division2", () =>{
    expect(calc.divide(49,7)).toBe(7);
  });
})
describe("Apply multiplication", ()=> {
  const calc=new Calculator();
  test("multiplication1", () =>{
    expect(calc.multiply(9,3)).toBe(27);
  });
  test("multiplication12", () =>{
    expect(calc.multiply(49,7)).toBe(343);
  });
})
