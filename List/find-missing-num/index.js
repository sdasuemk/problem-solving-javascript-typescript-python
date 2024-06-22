const input = [1, 3, 8, 2, 6, 10, 5];

const findMissingNum = (input) => {
  const sortedList = input.sort((a, b) => a - b);
  const result = [];
  let end = sortedList[sortedList.length - 1];
  let start = sortedList[0];
  console.log(start);
  while (start < end) {
    if (!sortedList.includes(start)) {
      result.push(start);
    }
    start = start + 1;
  }

  return result;
};

console.log(findMissingNum(input));

// O(n^2)

const findMissingNumP2 = (input) => {
  const sortedList = input.sort((a, b) => a - b);
  const result = [];
  const start = sortedList[0];
  const end = sortedList[sortedList.length - 1];

  for (let i = start; i < end; i++) {
    if (!sortedList.includes(i)) {
      result.push(i);
    }
  }

  return result;
};

console.log(findMissingNumP2(input));

// O(n^2)
