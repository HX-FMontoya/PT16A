"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n < 0) throw new Error("No se aceptan valores negativos");
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
}

// console.log(nFactorial(5));
// factorial(3)
// 3! = 3 * 2 * 1
// n! = n * (n-1)!

// o(n) -> complejidad
// 1. complejidad espacial -> espacio en memoria me gasto para resolver x cosa
// 2. complejidad temporal -> cuanto tiempo se gasta para realizar una tarea
function nFibonacci(n) {
  // n representa la posicion
  if (n === 0 || n === 1) return n;
  // como carajos aplicamos recursion?
  // n = n-1 + n-2
  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

// nFibo(4) -> 13
// n = 1, n = 0

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (elem) {
  // this.array.push(elem)
  this.array.unshift(elem);
};
Queue.prototype.dequeue = function () {
  // return this.array.shift()
  return this.array.pop();
};
Queue.prototype.size = function () {
  return this.array.length;
};

/* class Queue {
  constructor() {
    this.array = [];
  }
  enqueue(elem) {
    this.array.push(elem);
  }
  dequeue() {
    return this.array.shift();
  }
  size() {
    return this.array.length;
  }
} */

const miQueue = new Queue();
console.log(miQueue);
miQueue.enqueue(2);
miQueue.enqueue(5);
miQueue.enqueue(1);
console.log(miQueue.size());
console.log(miQueue);
miQueue.dequeue();
console.log(miQueue);

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
