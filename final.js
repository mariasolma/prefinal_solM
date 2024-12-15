


function cambiar(){
document.getElementById("principal").innerHTML="RECETAS PARA ADULTOS y PEQUES!! ";
console.log("Mensaje en la consola que se presiono el boton");
}
document.getElementById("boton").onclick=function(){
cambiar();
document.getElementById("boton").style.display="none";

}
function validar(valorT){
    document.getElementById("form_validate");
    prompt("complete datos")
    }
    document.getElementById("form_validate").onclick=function(){
    validar(true);

    
    }

    // // // let nameUser= document.getElementById("nameU") console.log("nameU");
    
    
 let textA= document.getElementById("textA");
 let primero=document.getElementById("primero")
 console.log(textA)
let boton_1= document.getElementById("boton_1")
boton_1.addEventListener("click", function(){

  primero= textA.textContent
})

