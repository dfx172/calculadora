console.log("script cargado");
const btnsumar = document.getElementById("btnsumar");
const btnrestar = document.getElementById("btnrestar");
const btnmultiplicar= document.getElementById("btnmultiplicar");
const btndividir = document.getElementById("btndividir");
let numero1 = document.getElementById("numero1");


let numero2 = document.getElementById("numero2");

let resultado = document.getElementById("resultado");

btnsumar.addEventListener("click",sumar);
btnrestar.addEventListener("click",restar);
btnmultiplicar.addEventListener("click",multiplicar);
btndividir.addEventListener("click",dividir);

function sumar(){
    if(numero1.value!="" && numero2.value!=""){
        resultado.value="";
        let num1=parseInt(numero1.value);
        let num2=parseInt(numero2.value);
        let c =num1+num2;
        resultado.value=(" "+c);
        numero1.value="";
        numero2.value="";
    }else{
        resultado.value="ingrese numeros";
    }
    
}
function restar(){
    if(numero1.value!="" && numero2.value!=""){
    resultado.value="";
    let num1=parseInt(numero1.value);
    let num2=parseInt(numero2.value);
    let c =num1-num2;
    resultado.value=(" "+c);
    numero1.value="";
    numero2.value="";
    }else{
    resultado.value="ingrese numeros";
    }
}
function multiplicar(){
    if(numero1.value!="" && numero2.value!=""){
    resultado.value="";
    let num1=parseInt(numero1.value);
    let num2=parseInt(numero2.value);
    let c =num1*num2;
    resultado.value=(" "+c);
    numero1.value="";
    numero2.value="";
    }else{
    resultado.value="ingrese numeros";
    }
}
function dividir(){
    if(numero1.value!="" && numero2.value!=""){
    resultado.value="";
    let num1=parseInt(numero1.value);
    let num2=parseInt(numero2.value);
    if (num2!=0){
        let c =num1/num2;
        resultado.value=(" "+c);
        numero1.value="";
        numero2.value="";
    }else{
        resultado.value="no se puede dividir por 0"
    }
    
    }else{
    resultado.value="ingrese numeros";
    }
}