var x = 5;
var y = 10;

function or() {
  return x < 10 || y < 10;
}

function end() {
  return x < 10 && y < 10;
}

function not() {
  return x != 10;
}

console.log("Função retorna: or", or());
console.log("Função retorna: end", end());
console.log("Função retorna: not", not());