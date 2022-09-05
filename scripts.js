const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje-encriptado");

inputTexto.focus();



/*Botones de llamadas a funciones*/

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}

function btnEncriptar(){
/*
A travez de el llamado a la funcion btnEncriptar desde el html: 
Guardo en la variable el texto encriptado llamando a la funcion encriptar, enviando como parametro el valor del inputTexto el cual es seleccionado del html con query y envio o reemplazo lo que contiene la variable de textoEncriptado dentro de la variable mensaje
*/
    const texto = encriptar(inputTexto.value);
    mensaje.value = texto;
    mensaje.style.backgroundImage = "none";
};
function btnDesencriptar(){
    const texto2 = desencriptar(inputTexto.value);
    mensaje.value = texto2;
    mensaje.style.backgroundImage="none"
}

/*Funcion para encriptar y desencriptar*/

function encriptar(textoBase){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];

/*Array multidimensional para corroborar que letras se encuentran y por cual reemplazar*/

    textoBase = textoBase.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(textoBase.includes(matrizCodigo[i][0])) 
/*Si el parametro textoBase incluye la letra del indice i sub 0*/
        {
            textoBase = textoBase.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
/*reemplazo todas las letras que se encuentran en matrizCodigo indice i sub 0 por las letras de matrizCodigo indice i sub 1*/
        }                
    };
    return textoBase;
/*La funcion retorna el valor del parametro*/
};
function desencriptar(textoEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(textoEncriptado.includes(matrizCodigo[i][1])){
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        };
    };
    return textoEncriptado;
}
