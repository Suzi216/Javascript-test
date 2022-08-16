function counts(str) {
  if(!(str.length >0 && str.length<10)){
    throw new Error("wrong length");
  }
  return str.length;
}
module.exports = counts;
