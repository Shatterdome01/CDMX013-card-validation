const validator = {
  isValid: function (valueCN) {
    let output = valueCN.split('').reverse(); // con esta linea separo el numero y lo pongo al revés
    let arrayReverse;
    //***** Aquí pongo el número en un arreglo y lo pongo al revés.
    let valueCardNumber = [];
    for (let i = 0; i < output.length; i++) {
      valueCardNumber.push(parseInt(output[i]));
    }
    arrayReverse = valueCardNumber;
    //*****Aqui agrega a un nuevo Array los puros numeros encontrados en posiciones pares y multiplicarlos x2
    let arrayPairs = [];
    for (let i = 1; i < arrayReverse.length; i = i + 2) {
      arrayPairs.push(arrayReverse[i] * 2);
    }
    //*****Aqui agrego a un nuevo arreglo los numeros con 2 digitos y se suman.
    let arraySumPairs = [];
    for (let i = 0; i < arrayPairs.length; i++) {
      if (arrayPairs[i] > 9) {
        arraySumPairs.push(arrayPairs[i] - 9);//suma los digitos de aquellos numeros con 2 digitos.
      }
    }
    //*****Aqui filtro los resultados de 2 digitos de un par y los concateno con los anteriores en posiciones pares.
    let filterDigists = arrayPairs.filter(number => number < 10);
    let arrayPairsFinally = arraySumPairs.concat(filterDigists);
    //console.log(arrayPairsFinally);

    //*****Aquí concatenaré los pares con los demás números y los sumaré
    let oddArray = arrayReverse.filter((number, index) => index % 2 == 0);
    let totalArray = oddArray.concat(arrayPairsFinally);

    //suma de todos los digitos
    let sum = 0;
    for (let i = 0; i < totalArray.length; i++) {
      sum = sum + totalArray[i];
    }
    if (sum % 10 == 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify: function (valueCN) {
    if (valueCN.length > 4) {
      let sustitute = "#".repeat(valueCN.length - 4);
      let last = valueCN.substring(valueCN.length - 4);
      let outputMask = sustitute + last;
      return outputMask;
    } else {
      return valueCN;
    }
  }
};
export default validator;
