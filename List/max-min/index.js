const input = [9, 5, 10, 20, 15];

const findMaxMin = (input) => {
    const sortedList = input.sort((a, b) =>a-b);
    return {max: sortedList[sortedList.length - 1], min: sortedList[0]}
}

console.log(findMaxMin(input));

// Sorting the array is not the most efficient way to achieve this.
// Sorting has a time complexity of 
// 𝑂(𝑛log⁡𝑛), whereas finding the maximum and minimum values can be done in 
// 𝑂(𝑛) time.

const inputList = [9, 5, 10, 20, 15];

const findMaxMinElement = (inputList)=> {
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < inputList.length; i++) {
    if (inputList[i] > max) {
      max = inputList[i];
    }
    if (inputList[i] < min) {
      min = inputList[i];
    }
  }

  return { max, min };
};

console.log(findMaxMinElement(inputList));
