const input = [10, 5, 3, 4, 3, 5, 6];

const findDuplicateFirst = (input) => {
  let duplicateIndex = [];
  
  for (let i = 0; i < input.length; i++) {
    for (let j =i+1; j < input.length; j++) {
      if (input[i] === input[j]) {
        duplicateIndex.push(i);
      }
    }
  }
  return duplicateIndex[0];
};

console.log(findDuplicateFirst(input));
