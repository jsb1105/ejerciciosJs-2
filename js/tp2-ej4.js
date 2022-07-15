//4-Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert»
//BUCLE DO y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

do {
  let numero = parseInt(prompt("Introduce un numero"));
  if (Number(numero) == numero) {
    suma = suma + numero;
  } else {
    if (numero != undefined) {
      alert(numero + " No es un numero");
    }
  }
} while (numero != undefined);
document.write(suma);
