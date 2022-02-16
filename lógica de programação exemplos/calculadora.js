console.log("===calculador===");
/* também funciona
function clicar(){
    console.log("click")
   const num1 = document.querySelector(".num1").value;
    const num2 = document.querySelector(".num2").value;

    const resposta = parseInt(num1) + parseInt(num2);
    document.querySelector(".resposta").value=resposta
    document.querySelector(".resultado").innerHTML = resultado;
    document.getElementById("resultado").innerHTML=num1+num2;
    console.log(num1, num2);*/
function calcular() {
    console.log("CLICK!!!");
  
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultado = Number(num1) + Number(num2) ;
    document.getElementById("resultado").value = resultado;
    console.log(resultado);
  
    /*console.log('===Calculadora===')
    function calcular() {
        document.getElementById('result').value = (
            Number(document.getElementById('n1').value.toString().replace(',','.')) + Number(document.getElementById('n2').value.toString().replace(',','.'))
            ).toString().replace('.',',');
    }
  }