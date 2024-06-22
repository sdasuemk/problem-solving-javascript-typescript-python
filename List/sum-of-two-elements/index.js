const input = [1, 5, 7, -1, 5];
const sum = 6;

const findNumPair = (input) => {
  const pair = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i+1; j < input.length; j++) {
      if (input[i] + input[j] === sum){
        pair.push([input[i], input[j]])
      }
    }
  }


console.log("pair", pair);
let result = pair.length;
  return result;
};

console.log(findNumPair(input));

