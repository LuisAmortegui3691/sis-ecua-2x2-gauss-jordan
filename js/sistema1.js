//? Definir sistema de ecuanciones
const a11 = 2, a12 = 3, x = 5;
const a21 = 4, a22 = -2, y = 2;

//? Pasar sistema de ecuaciones en una matriz aumentada
const matrizAumentada = [
    [a11,a12,x],
    [a21,a22,y]
];

//? Gauss-Jordan convertir la matriz en una forma escalonada reducida
const filas = matrizAumentada.length;
const columnas = matrizAumentada[0].length;

console.log(`Las filas de la matriz son: ${filas}`);
console.log(`Las columnas de la matriz son: ${columnas}`);

//? Recorrido de las filas
for (let i = 0; i < filas; i++) {
  //? Dividir la fila i por el elemento en la posición (i, i)
  const divisor = matrizAumentada[i][i];
  for (let j = 0; j < columnas; j++) {
    matrizAumentada[i][j] /= divisor;
  }

  // Hacer cero los elementos debajo y encima del elemento principal en la columna i
  for (let k = 0; k < filas; k++) {
    if (k !== i) {
      const factor = matrizAumentada[k][i];
      for (let j = 0; j < columnas; j++) {
        matrizAumentada[k][j] -= factor * matrizAumentada[i][j];
      }
    }
  }
}
const solucionX = matrizAumentada[0][2];
const solucionY = matrizAumentada[1][2];

console.log("La solución del sistema de ecuaciones es:");
console.log(`x = ${solucionX}`);
console.log(`y = ${solucionY}`);