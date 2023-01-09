function add(){
  let sum = 10+20; // 지역변수
  multi=10*20; // 키워드 안쓰고 식별자만 쓸 경우 전역변수
  total=sum; // 전역변수
  return total;
}
add();

console.log(multi);
console.log(total);
console.log(sum);
