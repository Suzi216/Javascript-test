const reverse = (string) => {
  var split=string.split("");
  var reverse= split.reverse();
  var join=reverse.join("");
  return join;
}

module.exports = reverse;
