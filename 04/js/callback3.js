const test = function(arr,callFunc){
  for(const arrValue of arr){
    callFunc(arrValue);
  }
};
// const test = function(arr,callFunc){
//   for(const arrValue in arr){
//     callFunc(arrValue);
//   }
// };

const func = function(callPara){
  document.write(`${callPara}번째 index<br>`);
}


test([52,249,264,24,22,6],func);
