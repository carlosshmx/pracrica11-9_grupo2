// Grupo 2
// Carlos Colmenares
// Alberto Carrera
// Camilo Gomez
// Esmeralda Montoya
// Agustin Hernandez
// Edwin Gomez

//1. A partir de él siguiente array de edades nos solicitan realizar lo siguiente

const edades = [33, 27, 34, 30, 34, 25];


// a. Desarrollar una función que ordene internamente de forma ascendente las edades, la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.
// [25, 27, 30, 33, 34, 34]

function ordernadoAsc(arr) {
    for (let n = 0; n < arr.length; n++) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let selected = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = selected;
        }
      }
    }
    return edades;
  }
//   console.log(ordernadoAsc(edades))

// b.  Desarrollar una función que ordene internamente de forma descendente las edades, la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.
// [34, 34, 33, 30, 27, 25]

function ordernadoDesc(arr) {
    for (let n = 0; n < arr.length; n++) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          let selected = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = selected;
        }
      }
    }
    return edades;
  }

//   console.log(ordernadoDesc(edades))

//   2. Dado un array de strings:
const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]

// ¿Cómo pudieras ordenar el array anterior, alfabéticamente?

function ordernadoAlf(arr) {
    for (let n = 0; n < arr.length; n++) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let selected = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = selected;
        }
      }
    }
    return letras;
  }

//   console.log(ordernadoAlf(letras))

//   3. A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:

const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

//    a. Desarrollar una función que ordene internamente de forma ascendente según él saldo de cada cuenta, la misma deberá retornar él array ordenado .

function ordernadoAscSaldo(arr) {
    for (let n = 0; n < arr.length; n++) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].saldo > arr[i + 1].saldo) {
          let selected = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = selected;
        }
      }
    }
    return arrayCuentas ;
  }

// console.log(ordernadoAscSaldo(arrayCuentas))

//b. Desarrollar una función que ordene internamente de forma ascendente según la edad del titular de cada cuenta, la misma deberá retornar él array ordenado.

function ordernadoAscEdad(arr) {
    for (let n = 0; n < arr.length; n++) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].edadTitular > arr[i + 1].edadTitular) {
          let selected = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = selected;
        }
      }
    }
    return arrayCuentas ;
  }

//   console.log(ordernadoAscEdad(arrayCuentas))