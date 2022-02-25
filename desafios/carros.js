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

let carros= []
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
}

