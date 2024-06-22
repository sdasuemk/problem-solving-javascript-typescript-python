const input = [9, 4, 9, 6, 7, 4];

const findUniqFirst = (input) => {
  let uniq = [];

  for (let i = 0; i < input.length; i++) {
    if (!uniq.includes(input[i])) {
      uniq.push(input[i]);
    }
  }
  return uniq[0];
};

console.log(findUniqFirst(input));
