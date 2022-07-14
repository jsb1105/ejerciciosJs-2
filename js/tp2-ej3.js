//3-Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let fraseCompleta="" 

while(confirm("¿Desea ingresar palabras?")){
    let textoIngresado = prompt("Ingrese una palabra");
    fraseCompleta = fraseCompleta +"-"+ textoIngresado
    console.log(textoIngresado)
    console.log(fraseCompleta)
}
