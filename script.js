function cumprimentar(nome, callback) {
    console.log("Olá " + nome);
    
    callback();
}

function saudacao() {
    console.log("Como você está?");
}

cumprimentar("Lucas", saudacao);
cumprimentar("Maria", function() {
    console.log("Tudo bem?");
});



function mostrarMensagem(){
console.log("Essa mensagem será mostrada apos 3 segundos");
}

setTimeout(mostrarMensagem, 3000);
    

setTimeout(function(){
console.log("Oi");
}, 1000);


const promessa = new Promise((resolve,reject) =>{

    const condição = true

if(condição) {
resolve("a Condiçao é Verdadeira");
} else {
    reject("Condição é Falsa");

}



})

promessa.then((mensagem) => {
console.log(mensagem);
});

promessa.catch((erro) => {
    console.log(erro);
});


 const  promise1 = Promise.resolve(3);
 const promise2 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 2500, "testando");
 });

 Promise.all([promise1,promise2]).then((valores) => console.log(valores))

 async function obterValor() {
    const promessa = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Valor obtido!"), 2000);
    })};

    const valor =   promessa;

console.log(valor);

    obterValor();

  try {
    async function obterValorerro(){
        async function obterValor() {
            const promessa = new Promise((resolve, reject) => {
              setTimeout(() => reject("Valor Não obtido ERRO!"), 2000);
            })};
        
            const valor =   await promessa;
            console.log(valor);
            obterValorerro();
            obterValor();
        }
  } catch (error) {
    console.log(error);

    

    
  }

  const objeto = {nome : "João", idade : 30};
  const jsonString  = JSON.stringify(objeto);
  console.log(jsonString);
  console.log(typeof jsonString);
  const json = '{"nome": "João", "idade" : 30}';
  const objeto2 = JSON.parse(json);
  console.log(objeto2);

  










        
    
    
  
  

    

