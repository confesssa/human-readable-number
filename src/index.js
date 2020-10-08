module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  }
  let array = Array.from(number + '');
  let wordNumbers2 = { //числа от 10 до 19
    '0': 'ten',
    '1': 'eleven',
    '2': 'twelve',
    '3': 'thirteen',
    '4': 'fourteen',
    '5': 'fifteen',
    '6': 'sixteen',
    '7': 'seventeen',
    '8': 'eighteen',
    '9': 'nineteen',
     };

  let wordNumbers1 = { // числа от 1 до 9 + то же для сотен
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
      };

  let wordNumbers3 = { // десятки
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety',
    };

  let units; // последнее число (единицы)
  if (array.length === 1) { // если полученное число состоит из одной цифры
    if (wordNumbers1.hasOwnProperty(array[array.length - 1])) {
      units = wordNumbers1[array[array.length - 1]];
    }
    return units;
  } 


  let dozens; // вторая с конца цифра (десятки)
  if (array.length === 2) { // если полученное число состоит из двух цифр
    if (array[0] === '1') {
     dozens = wordNumbers2[array[array.length - 1]]
     return dozens;
    } else if (array[array.length - 1] === '0') {
    dozens = wordNumbers3[array[array.length - 2]];
    return dozens;
    } else  if (array[array.length - 1] !== '0'){
      dozens = wordNumbers3[array[array.length - 2]]; 
      units = wordNumbers1[array[array.length - 1]];
      return `${dozens} ${units}`;
    }
  }
  
  let hundreds; // третья с конца цифра (сотни)
  if (array.length === 3) {
   if (wordNumbers1.hasOwnProperty(array[array.length - 3])) {
      hundreds = wordNumbers1[array[array.length - 3]];
    }
    if (array[array.length - 2] === '0' && array[array.length - 1] === '0') {
      return `${hundreds} hundred`;
     } else if (array[array.length - 2] === '0') {
      units = wordNumbers1[array[array.length - 1]];
      return `${hundreds} hundred ${units}`;
     } else if (array[array.length - 2] === '1') {
       dozens = wordNumbers2[array[array.length - 1]]
       return `${hundreds} hundred ${dozens}`;
      } else if (array[array.length - 1] === '0') {
      dozens = wordNumbers3[array[array.length - 2]];
      return `${hundreds} hundred ${dozens}`;
      } else  {
        dozens = wordNumbers3[array[array.length - 2]]; 
        units = wordNumbers1[array[array.length - 1]];
        return `${hundreds} hundred ${dozens} ${units}`;
      }

  }




}
