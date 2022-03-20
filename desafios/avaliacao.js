//entreda
let carros= []
let precoTotal= null

function adicionar(){
let modelo = document.getElementById("modelo");
let ano = (document.getElementById("ano"));
let cor = document.getElementById("cor");
let situacao = document.getElementById("situacao");
let preco = document.getElementById("preco");
let total = document.getElementById("total");
console.log(modelo.value, ano.value, cor.value, situacao.value, preco.value)

//console.log(situacao);
//console.log(situacao.options); //aray
//console.log(situacao.options.selectedIndex)//indice
//console.log(situacao.value[situacao.options.selectedIndex].value);

//processamento
const carro = {
    modelo: modelo.value,
    ano: ano.value,
    cor: cor.value,
    situacao: situacao.value,
    preco: parseFloat(preco.value)
    
};

console.log(carro);
carros.push(carro)

//saida 
console.table(carros)

precoTotal= carros.reduce((total, carro) => total+carro.preco, 0);

total.innerHTML=`Total = R$ ${precoTotal.toFixed(2)}`;

//exibir na tela
let lista = document.getElementById("lista");

lista.innerHTML=carros

.map(function(carro){
    //debugger; para testar linha por linha
   // lista.innerHTML+=
     return `<tr> 
    <td>${carro.modelo}</td>
    <td>${carro.ano}</td>
    <td>${carro.cor}</td>
    <td>${carro.situacao}</td>
    <td>R$ ${carro.preco.toFixed(2)}</td>
</tr>`;
 
}).join("") // join transforma um array em string
//lista.innerHTML= array.join("");
// ` string com quebra de linha
 //limpar o campo  
modelo.value='';
ano.value='';
//cor.value='';
preco.value='';
total.value='';
//situacao.value='';
 // dar foco no primeiro campo
 modelo.focus();
}