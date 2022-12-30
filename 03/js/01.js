/*배열 생성 1 - 빈배열 선언후 값 할당*/ 

let str = [];
// javascript가 문자형을 배열로 다룬다.
str = '선문아그만자';
document.write(`${str}<br>`);
document.write(`${str[1]}<br>`);
document.write(`${str[0]}${str[1]}${str[2]} ${str[str.length-1]}<hr>`);
document.write(`배열의 갯수 : ${str.length} <br> 배열의 마지막 index번호 : ${str.length - 1}<hr>`);

//배열의 생성 2 

const arr = [];
arr[0] = '영';
arr[1] = '우';
arr[2] = '투';
arr[3] = '더';

document.write(`${arr[1]} ${arr[arr.length - 2]}${arr[3]} ${arr[0]} ${arr[2]}${arr[arr.length - 1]} ${arr[1]} <hr>`);

const arr1 = [273,'String',true, function(){},{},[273,106]];
const arr2 = [,,,];
arr2[0]="마";
arr2[1]="리";
arr2[2]="야";

// 배열 생성 3
const arr3 = new Array(1,2,3);
console.log(arr3.length);
console.log(arr3[arr3.length-2+1]);


const arr4 = new Array(3);
console.log(arr4);

const fruits = ['배','사과','키위','바나나'];
fruits[4]=('오렌지');
document.write(`과일의 갯수는 총 ${fruits.length}개 입니다.<br>`);
document.write(`2번째에 들어있는 과일은 ${fruits[1]}입니다.<br>`);
document.write(`오늘 들어온 과일은 ${fruits}입니다. 그중 제일 맛있는 과일은 ${fruits[fruits.length-1]}입니다.`);
