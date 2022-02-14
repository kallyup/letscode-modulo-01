console.log("===VARIAVEIS===")
var nula=null
console.log("nula", nula, typeof nula);// variavel object

var indefinida;
console.log("indefinida",indefinida, typeof indefinida) // variavel indefinida

//diferença entre var let e const

//var permite redeclaração de variavel (sobrescrever a variavel)
//reatribuição de valor

var nome = 1
var nome = false
console.log(nome)
// let não permite redeclação de variavel
// let permite redistribuição de valor
let peso = 25
 peso = 45
console.log("idade", peso)

//const não aceita redeclaração de variavel nem redistribuição de valor

const dia =false

console.log(dia)