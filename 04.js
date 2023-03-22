/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true
  // numeroSimetrico[0]
  // numeroSimetrico[1]
  // numeroSimetrico[2]
  // numeroSimetrico[3]
  // numeroSimetrico[4]

  // Tu código:
  var array = [];
  var nuevoArray=[];
  var numToString = num.toString();
  array = numToString.split("");
  for (let i = 0 ; i < array.length ; i++){
    nuevoArray[array.length-1-i]=array[i]
  }
var simetrico=0;
simetrico = nuevoArray.join("")
if (simetrico === numToString){
  return true
}else{
  return false
}
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico