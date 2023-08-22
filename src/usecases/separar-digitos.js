/**
 * @param {Number<Number>} numero numero a separar sus digitos
 * @returns {Array<Array>} Retorna un arreglo con los digitos del número enviado.
 */

export const separarDigitos = (numero) => {
  let numeroStr = numero.toString();
  let digitosArr = [];

  for (let i = 0; i < numeroStr.length; i++) {
    digitosArr.push(parseInt(numeroStr[i]));
  }

  return digitosArr;
};
