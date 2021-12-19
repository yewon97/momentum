// const calculator = {
//   plus : function(a, b) {
//     console.log(a + b);
//   },
//   minus : function(a,b){
//     console.log(a-b);
//   },
//   times : function(a,b){
//     console.log(a*b)
//   },
//   divide : function(a,b){
//     console.log(a/b);
//   },
//   power : function(a,b){
//     console.log(a**b);
//   }
// }

// calculator.plus(2, 7);
// calculator.minus(2, 7);
// calculator.times(2, 7);
// calculator.divide(2, 7);
// calculator.power(2, 7);

const calculator = {
  plus : function(a, b) {
    return a + b;
  },
  minus : function(a,b){
    return a - b;
  },
  times : function(a,b){
    return a * b;
  },
  divide : function(a,b){
    return a / b;
  },
  power : function(a,b){
    return a ** b;
  }
}

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);