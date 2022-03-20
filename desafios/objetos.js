console.log("==objetos==");
//const car1=["gol", 2010, "vermelho","usado"]
//objeto literal

const carro1= [
    modelo: "gol",
    ano:2010,
    cor:"vermelho",
    situacao:"usado"
]

const carros = {[
    modelo: "gol",
    ano:2010,
    cor:"vermelho",
    situacao:"usado"
]},
{[
    modelo: "fox",
    ano:2015,
    cor:"preto",
    situacao:"zero"  
]},
{[
    modelo: "uno",
    ano:2000,
    cor:"verde",
    situacao:"usado"
]},
;

carros.forEach(function(carro){
    console.log(carro.modelo, carro.situacao )
})


