function calcular(){


const diasTrab=20
const precoGas= 5.5;
const volTanque= 40.0;
const distIdaVol=20;
const KmLitros =12


let totalgasto=0.0

let numEnt= parseFloat(document.getElementById("numEnt").value);
let distEnt= parseFloat(document.getElementById("distEnt").value);

const totalKmDia = (numEnt * (distEnt *2)) +distIdaVol;
const totalKmMes = totalKmDia*diasTrab;
const custGasIni =volTanque *precoGas;
const quantoOcarroAnda = volTanque* KmLitros;

console.log("totalkmDia", totalKmDia);
console.log("totalkmMes", totalKmMes);
console.log("custGasIni", custGasIni);
console.log("quantoOCarroAnda", quantoOcarroAnda);

for (let cont = 0; cont <= numEnt; cont++) {
    
}
}