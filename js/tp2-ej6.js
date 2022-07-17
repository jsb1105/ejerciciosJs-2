//6-Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
//1
//22
//333
//4444
//55555
//666666
//…

let numero;
let repetir;
console.log(numero);
console.log(repetir);

for(numero = 1; numero <= 30; numero++){
  for(repetir = 0; repetir < numero; repetir++){
    document.write(numero);
  }
  document.write("<br>");
}
