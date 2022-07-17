//7-Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

//303030303030303030303030303030303030303030303030303030303030
//2929292929292929292929292929292929292929292929292929292929
//28282828282828282828282828282828282828282828282828282828
//…..
//333
//22
//1

let numerorepe = prompt("Ingrese un numero hasta 50");
console.log(numerorepe);
if (Number(numerorepe) == numerorepe) {
  if (numerorepe > 0 && numerorepe <= 50) {
    let rep;
    let numero;
    for (numero = numerorepe; numero >= 1; numero--) {
      for (rep = numerorepe; rep >= 1; rep--) {
        document.write(numero);
      }
      document.write("<br>");
    }
  } else {
    alert("El número introducido no es válido");
  }
}else {
  alert("No has introducido un número");
}
