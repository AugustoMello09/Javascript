function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("APROVADO !! " + nota)
  }
}

soBoaNoticia(8.1);
soBoaNoticia(6.9);

function seForVerdade(valor) {
  if (valor) {
    console.log("É VERDADE ... ");
  }
}

seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade(NaN);
seForVerdade("");
seForVerdade(0);
seForVerdade(-1)
seForVerdade(" ");
seForVerdade("?")
seForVerdade([]);
seForVerdade([1, 2]);
seForVerdade({}); 

