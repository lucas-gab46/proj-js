const frase  = `javascript e incrivel`

console.log(frase.startsWith('java'));
console.log(frase.startsWith('java', 1));
console.log(frase.endsWith("incrivel"));
console.log(frase.endsWith("ruim"));

const idade = 15

if (idade < 18) {
throw new Error ("voce deve ter 18 anos")
}

console.log("progama encerrado")
