const numbers = [-2,-20,-17, -1, -5, 0, 1, 3, 11, 19, 20];

const filterNegativeNumber = numbers.filter(function(value){

    return value >= 0
  } );

console.log(filterNegativeNumber);
