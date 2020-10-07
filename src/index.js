module.exports = function toReadable (number) {
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
    '0': '',
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
    '0': '', // надо ли
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

  let dozens;
  if (array.length === 2) {
    if (array[0] === '1') {
      if (wordNumbers2.hasOwnProperty(array[array.length - 1])) {
        dozens = wordNumbers2[array[array.length - 1]]
        return dozens;
      } else if (wordNumbers1.hasOwnProperty(array[array.length - 2])) {
        secondNumber = wordNumbers3[array[array.length - 2]];
        }
      
        if (wordNumbers1.hasOwnProperty(array[array.length - 1])) {
          units = wordNumbers1[array[array.length - 1]];
        }

    return `${dozens} ${units}`;
  }



    //  проверка от 11-19
    if (array.length === 2 && array[0] === '1') {
     for (let i = 1; i < array.length; i++) {
     if (wordNumbers2.hasOwnProperty(array[i])) {
   return wordNumbers2[array[i]];
     }
     }
     }

       
     let firstNumber; // последнее число (единицы)
       if (wordNumbers1.hasOwnProperty(array[array.length - 1])) {
       firstNumber = wordNumbers1[array[array.length - 1]];
       }
     
     let thirdNumber; // сотни
       if (wordNumbers1.hasOwnProperty(array[array.length - 3])) {
       thirdNumber = wordNumbers1[array[array.length - 3]] + ' hundred';
       }


       
       let secondNumber; // второе число (десятки)
       if (array[array.length - 2] === '1') {
        if (wordNumbers2.hasOwnProperty(array[i])) {
          secondNumber = wordNumbers2[array[i]];
        } else if (wordNumbers1.hasOwnProperty(array[array.length - 2])) {
       secondNumber = wordNumbers3[array[array.length - 2]];
       }
      }
     
     let result = `${thirdNumber} ${secondNumber} ${firstNumber}`.trim() ;
     return result;
}
