const imprimirNota = function (nota) {
  if (nota >= 7) {
    console.log("Aprovado !! " + nota);
  } else {
    console.log("Reprovado '-' " + nota);
  }
}

imprimirNota(5);
imprimirNota(7);