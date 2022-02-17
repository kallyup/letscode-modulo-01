console.log("---condicionais---");

//entrada
/*const alunos = prompt("digite o nome do aluno");
const nota = prompt("digite a nota (0-10)");
console.log(alunos, nota);

//processamento
/*if (nota >= 6) {
    console.log("aprov");
  
} 
if (nota <=4 && nota < 6) {
    console.log("recuper");
 }
 if (nota > 4) {
    console.log("repro");
 }*/
  //let resp= null;
 /*if (nota >= 6) {
    resp =("aprov");
  
} 
if (nota <=4 && nota < 6) {
    resp =("recuper");
 }
 if (nota > 4) {
    resp = ("repro");
 }
 console.log(resp)

 document.write( `
 Aluno: ${alunos}, <br>,
 Nota: ${nota} <br>
 Status: ${resp}`);*/

 /*if (nota >=6) {
resp= "aprov"; 
 } else{
 if (nota < 4) {
    resp ="repro";
 } else {
    resp= "rec";
 }*/
 
 
 /*if(nota >= 6){
     resp= "aprv"
 } else if (nota < 4){
     resp= "rep"
 } else {
     resp= "rec"
 }
 console.log(resp);*/

 //EXEMPLO -SWITCH / CASE
 /*switch (nota) {
    case "1":
         resp= "rep"
         break;
    case "2":
         resp= "rep"
        break;
    case "3":
        resp= "rep"
        break;
    
     default:
         break;
 }
//EXEMPLO2 -SWITCH / CASE
const semana = prompt("dia da semana")
switch (semana) {
    case "1":
        
        break;

    default:
        break;
}*/


function analisar (){


let idade = document.getElementById("idade").value;
let resultado = null;
if ( idade <=12) {
    resultado = "Criança"; 
} else if (idade <=17){
    resultado= "adolescente";
} else if( idade <=64 ){
    resultado= "adulto";
} else if( idade<=110){
    resultado = "idoso";
}else {
    resultado="já passou da hora";
}

document.getElementById("resultado").value = resultado;
console.log(resultado)
}