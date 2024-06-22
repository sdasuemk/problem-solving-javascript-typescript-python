const input = [1, 2, 3, 6, 3, 6, 1];

const findDuplicate = (input) => {
  let duplicate = [];
  let unique = [];

  for (let i = 0; i < input.length; i++) {
    if (!unique.includes(input[i])) {
      unique.push(input[i]);
    } else {
      duplicate.push(input[i]);
    }
  }

  console.log("unique", unique);
  let result = duplicate;
  return result;
};

console.log(findDuplicate(input));
