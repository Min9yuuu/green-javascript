// 객체 생성

// 1.
let dog = new Object;
dog = {
  // 키 : 값 (프로퍼티)
  name : "망고",
  features : "말티즈",
};

// 2.
const cat = {
  name: "마리",
  features : "깜냥이",

};

document.write(`<h2>${dog.name}는 ${dog.features}이고 강아지입니다.</h2>`);
document.write(`<h2>${cat.name}는 ${cat.features}이고 고양이입니다.</h2>`);

// 3.
const food = prompt("오늘의 간식은 무엇입니까?");
const pet = {
  // property(프로퍼티)가 함수(function)일때 메소드라고 부른다.
  name:"마리",
  eat:function(food){
    document.write(`<h2>${this.name}는 ${food}를 좋아합니다.</h2>`);
  }
}

pet.eat(food);