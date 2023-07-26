var list = [1, 2, 3, 4, 5];
function conta(arg) {
  return arg
}

console.log(conta(list)[4]);

function cont1() {
  return [1, 2, 3, 4, 5, 6];
}

function calculo1() {
  var soma1 = cont1()[0] + cont1()[0]
  return soma1;
}
console.log(calculo1())

function cont2() {
  return [1, 2, 3, 4, 5, 6];
}

function contador2() {
  var soma2 = cont2()[3] * cont2()[4]
  return soma2
}

console.log(contador2())



