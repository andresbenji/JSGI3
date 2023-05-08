//a function inside of a function that takes a number and later divides by numPeople. Returns a string with total
const cutPizzaSlices = (totalSlices) => {
  return (numPeople) => {
    var slicesPerPerson = totalSlices / numPeople;
    return `Each person gets ${slicesPerPerson} slices of pizza`;
  };
};

//variable that equals to function cutPizzaSlices and accepts numPeople as an argument
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza"

console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza"
