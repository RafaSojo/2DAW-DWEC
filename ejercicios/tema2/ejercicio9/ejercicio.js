{
	document.addEventListener("DOMContentLoaded",init);

 
	function recogerText(){
		return prompt("Escribe texto: ");
	}

  function caracteres(texto){
    let resul = texto;
    // Comprobar mayúsculas y minúsculas
    if(texto == texto.toUpperCase()) {
      resul += " está utilizando sólo mayúsculas";
    }
    else if(texto == texto.toLowerCase()) {
      resul += " está utilizando sólo minúsculas";
    }
    else {
      resul += " está utilizando mayúsculas y minúsculas";
    }
   
    return resul;
  }
	function init(){
		let resp = document.getElementById("respuesta");
		resp.innerHTML = caracteres(recogerText());
	}
}