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


//arrow function
//De : function(){}
//para; ()=>{}
let numbers = [1,2,3]
//numbers = numbers.forEach((value) =>{
    //console.log(value)
//})

//numbers = numbers.filter((value)=>{
    //return value
//})
numbers = numbers.filter(value => value <3);

console.log(numbers);