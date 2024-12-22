


function cambiar(){
document.getElementById("principal").innerHTML="RECETAS PARA ADULTOS y PEQUES!! ";
console.log("Mensaje en la consola que se presiono el boton");
}
document.getElementById("boton").onclick=function(){
cambiar();
document.getElementById("boton").style.display="none";

}
  
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y= document.forms["myForm"]["fape"].value;
      let t= document.forms["myForm"]["fmail"].value;
      let z= document.forms["myForm"]["fpass"].value;
  
    if ((x == "") || (y =="")||(t =="")|| (z =="")) {
      alert("TODOS los campos deben ser completados. Gracias.");
      return false;
      
    }
    
    
  
       

    
    
    
}
 

    // // // let nameUser= document.getElementById("nameU") console.log("nameU");
    