console.log("===carros===");
// dica 1 ; apenas input
//document.getElementById("modelo").value ="";
//dica 2 tags em geral
//document.getElementById("qtde").textContent = "";

// critérios
/* usar array
1 ao cadastrar um carro, incrementar a quantidade
2 limpar o campo par o p´roximo preenchimento
3 ao alcançar 10 carros, exibilos na tela*/

/*let carros= []
let modelo= document.getElementById("modelo").value;
let qtde = document.getElementById("qtde"). textContent=carros.length;


function adicionar(){
 
    for (qtde=0; qtde<modelo; qtde++){
        carros.push(document.getElementById("modelo").value);

        document.getElementById("modelo").value="";
    }

    
    if(carros.length == 10){
        carros.forEach(function(valor){
           document.write("=> ", valor, "<br>");
        }
    }
}*/

//entreda
let carros= []
function adicionar(){
let modelo = document.getElementById("modelo");
let ano = (document.getElementById("ano"));
let cor = document.getElementById("cor");
let situacao = document.getElementById("situacao");

console.log(modelo.value, ano.value, cor.value, situacao.value)
//console.log(situacao);
//console.log(situacao.options); //aray
//console.log(situacao.options.selectedIndex)//indice
//console.log(situacao.value[situacao.options.selectedIndex].value);

//processamento
const carro = {
    modelo: modelo.value,
    ano: ano.value,
    cor: cor.value,
    situacao: situacao.value
};

console.log(carro);
carros.push(carro)

//saida 
console.table(carros)
//exibir na tela
let lista = document.getElementById("lista");
//let array = [] opção 1
//lista.innerHTML=``; opção 2
lista.innerHTML=carros
.filter(function(carro){
    return carro.ano=== '2015'
})
.map(function(carro){
    //debugger; para testar linha por linha
   // lista.innerHTML+=
     return `<tr> 
    <td>${carro.modelo}</td>
    <td>${carro.ano}</td>
    <td>${carro.cor}</td>
    <td>${carro.situacao}</td>
</tr>`;
 
}).join("") // join transforma um array em string
//lista.innerHTML= array.join("");
// ` string com quebra de linha
 //limpar o campo  
modelo.value='';
ano.value='';
cor.value='';
//situacao.value='';
 // dar foco no primeiro campo
 modelo.focus();
}