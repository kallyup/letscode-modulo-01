console.log("===array===");

//array literal
const carros = ["Gol", 'Corsa', "Fox"];
// contexro.comando():
carros.push("Corolla"); //add no final do array
carros.unshift("Marea");//add no começo no array
carros.splice(2 , 1); //remove item na posição x do array
carros.splice(0,1, "BMW");// substitui item na posição x do array
carros.splice(2, 0, "fusca");// add item na posição X array
carros.pop();//remove item do final
carros.shift();//remove item do inicio
carros.sort();//ordena itens
carros.reverse();//inverte itens

for(let i=0; i< carros.length; i++){
   // document.write("- " , carros[i], "<br>");
}
//implementação1
// função nomeada
//usar se for reapoveirar

function pegaCar(modelo,pos){
console.log("pegou?", modelo, pos);
}

carros.forEach(pegaCar)//pega a função e executa para cada item da lista
//internamente:
//pegaCar("Golf", 0); loop 0


//implementação2
// funcção anonima
//usar se for expecífica dessa implementação

carros.forEach(function(carro, i){
    console.log("funfa?", carro, i)
    document.write("=>", carro,i,"<br>")

});

console.log(carros);
console.log(carros.length) //tamanho da lista