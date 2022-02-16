function comparar(){

    var n1 =parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var operador = document.getElementById("operador").value;
    var result= eval(n1+operador+n2);
  
/* Também funciona
switch(operador){
    case "+":
        result=n1+n2;
    break;
    case "-":
        result=n1-n2;
    break;
    case "*":
        result=n1*n2;
    break;
    case "/":
        result=n1/n2;
    break;
    case ">":
        result=n1>n2;
    break;
    case "<":
        result=n1<n2;
    break;
    case "<=":
        result= n1<=n2;
    break;
    case ">=":
        result= n1>=n2;
    break;
    case "===":
        result= n1===n2;
    break;
    case "==":
        result= n1==n2;
    break;
    case "!=":
        result= n1!=n2;
    break;
    default:
        result= "Não foi dessa vez"

}*/



   document.getElementById("result").value = result;
   console.log(result)
}
