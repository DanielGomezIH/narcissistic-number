//Un número narcicista es un número positivo que es la suma de sus propios digitos, cada uno elevado a la potencia del número de digitos en una exponente dada.
// Nos limitaremos al decimal exponente (10)
//por Ejemlo: 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

//solo se pasarán a la función números enteros positivos distintos de cero válidos.

// TODO Parametro: números enteros positivos distintos de cero válidos.
// TODO Determinar el exponente del número que ingrese como parámetro.
// TODO Separar el número introducido como digitos individuales (1450 - 1, 4, 5, 0)
// TODO: Elevar cada digito a la potencia del número de digitos en una exponente dada
// TODO: Sumar el resultado de cada digito elevado a la potencia
// TODO: Evaluar si el resultado cumple un número narcisita = true, sino = false.

const separarDigitos = (numero) => {
  let numeroStr = numero.toString();

  let digitosArr = [];

  for (let i = 0; i < numeroStr.length; i++) {
    digitosArr.push(parseInt(numeroStr[i]));
  }

  return digitosArr;
};

const narcissistic = (valor) => {
  let exponente = separarDigitos(valor).length;
  console.log(exponente);
  let digitos = separarDigitos(valor);
  console.log(digitos);

  let potencias = [];
  let suma = 0;

  for (let i = 0; i < digitos.length; i++) {
    numeroElevado = digitos[i] ** exponente;
    potencias.push(numeroElevado);
    console.log(potencias);

    suma += potencias[i];
  }
  console.log(suma);

  return suma === valor ? true : false;
};

console.log(narcissistic());
