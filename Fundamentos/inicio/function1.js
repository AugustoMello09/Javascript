// função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 5);
imprimirSoma(2);
imprimirSoma(2, 3, 7, 8, 5, 6, 4, 7);
imprimirSoma();

// função com retorno

function soma(a, b = 1) {
  return a + b;

}

console.log(soma(2, 5));
console.log(soma(2));
console.log();
