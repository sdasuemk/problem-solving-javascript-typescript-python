const input = [5, 10, 20, 15];

const findPeak = (input) => { 
    const ipLength = input.length;

    // if length is 1
    if(ipLength === 1) return 0;

    // first or last element will be peak element
    if(input[0] > input[1]) return 0;

    if(input[ipLength-1] > input[ipLength-2]) return ipLength - 1;

    // for other elements

    for(let i = 1; i < ipLength; i++) {
        if(input[i] > input[i+1] && input[i] > input[i-1]) return i;
    }
 }

 const peakElement = console.log(input[findPeak(input)]);