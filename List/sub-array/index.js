const input = [1, 0, 0, 1, 0, 1, 1];

const findSubArrInd = (input) => {
  let sub = [];
    for (let i = 0; i < input.length; i++) {
      for (let j = i+1; j < input.length; j++) {
        if(input[i] !== input[j]){
          sub.push([i,j]);
        }
        
      }
    }
    return sub;
}

console.log(findSubArrInd(input));