function calcular(){

let altura = parseFloat(document.getElementById("altura").value);
let peso = parseFloat(document.getElementById("peso").value);
let result= null;
let imc =peso / (altura **2);

if (imc <= 18,5){
    result = "magreza"
} else if(imc <= 24,9){
    result= "saudável"
}else if (imc <=29,9){
    result="sobrepeso"
}else if (imc <= 34,9){
    result="obesidade grau1"
}else if (imc <39,9)

    document.getElementById("imc").value=imc
document.getElementById("result").value=result
console.log(result)
}