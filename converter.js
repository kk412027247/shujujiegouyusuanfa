const Stack = require('./stack');

// 二进制
// const divideBy2 =(decNumber)=>{
//   const remStack = new Stack();
//   let rem,
//       binaryString = '';
//   while (decNumber>0){
//     rem = Math.floor(decNumber%2);
//     remStack.push(rem);
//     decNumber = Math.floor(decNumber /2);
//
//   }
//   while(!remStack.isEmpty()){
//     binaryString = binaryString + remStack.pop()
//   }
//   console.log(binaryString)
// };

const baseConverter =(decNumber, base=2)=>{
  const remStack = new Stack(),
        digits = '0123456789ABCEF';
  let rem,
    binaryString = '';
  while (decNumber > 0){
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);

  }
  while(!remStack.isEmpty()){
    binaryString = binaryString + digits[remStack.pop()];
  }
  console.log(binaryString);
};

baseConverter(123144,16);
