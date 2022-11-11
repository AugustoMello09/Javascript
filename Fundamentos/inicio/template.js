const nome = "José";
const concatenation = "Hello" + nome + "!";
const template = ` Hello ${nome}!`;
console.log(concatenation, template);

// Expressoes...

console.log(` 1 + 1 = ${1 + 1}`);

const up = text => text.toUpperCase();
console.log(`Ei ... ${up("cuidado")}`);