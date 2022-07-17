//8-Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
//1
//12
//123
//1234
//12345
//……

let numerorepe = prompt("Ingrese un numero hasta 50");

if (Number(numerorepe) == numerorepe){
    if (numerorepe > 0 && numerorepe <= 50){
        let rep;
        let numero;
        for (numero = 0; numero <=numerorepe; numero++){
            for (rep = 1; rep <= numero; rep++){
                document.write(rep);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número ingresado no es válido");
    }
} 
else {
    alert("No ingreso un número");
}