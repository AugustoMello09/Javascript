isAtivo = true;
console.log(isAtivo);

isAtivo = false;
console.log(isAtivo);

const up =text => text.toUpperCase();
console.log(`${up("os verdadeiros")}`);
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!Infinity);
console.log(!!(isAtivo = true));

const up2 =text => text.toUpperCase();
console.log(`${up2("os falsos")}`);
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("pra finalizar");

let nome = "";
console.log(nome || "Desconhecido");
