console.log("===FUNÇÕES===")

//declaração de FUNÇÃO Nomeada
function soma(a=0,b=0) { // default parmeter (paramentro padrão)
    
    return a+ b
    
}
//NaN Not a Number
console.log(soma()); //NaN undefined
console.log(soma); //referencia a função
console.log(soma(5));//NaN
console.log(soma(5,10));//15


//Função não nomeda (anonima)
const sum=function (a=0,b=0){
return a+ b
}
console.log(sum());
console.log(sum);
console.log(sum(5));
console.log(sum(5,10));