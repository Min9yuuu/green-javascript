// let list1 = document.querySelectorAll("#list1 > li"); 
// let list2 = document.querySelector(".theObj");

// list1.forEach((el,idx) => {
//   el.textContent="aaa"+idx;
//   el.classList.add("a"+idx);
//   el.style.color="purple";
//   if(idx>=list1.length-2){
//     el.style.backgroundColor="black";
//     el.style.color="white";
//   }
// });

// // innerText = text추가, innerHtml = tag추가
// list2.innerHTML=`<span>${Math.random()}</span>`
// // setAttribute : 속성, 속성값
// // data- : 
// list2.setAttribute("data-role","accessbillity");
// let list2Attr = list2.getAttribute("class");
// list2.nextElementSibling.innerText = `${list2Attr}`;
// list2.nextElementSibling.style.backgroundColor = "turquoise";
// list2.nextElementSibling.style.color = "white";

// let list3 = document.querySelector("#list3")
// list3.innerHTML += "<li>🐹추가한 list</li>";
// // insertAdjacentHtml : 원하는 위치에 추가, afterbegin : 제일첫번째, beforeend : 가장 마지막에 추가
// list3.insertAdjacentHTML("afterbegin", "<li>🐹추가한 list</li>");
// list3.insertAdjacentHTML("beforeend", "<li>🐻추가한 list</li>");
// // beforebegin 바로 앞에 추가
// list3.insertAdjacentHTML("beforebegin", "<div>🐻추가한 list</div>");
// // afterend 바로 앞에 추가
// list3.insertAdjacentHTML("afterend", "<div>🐻추가한 list</div>");
// let list3Li = document.querySelectorAll("#list3 > li");
// list3Li[4].insertAdjacentHTML("afterbegin", "<li>🥪🥪🥪🥪🥪🥪🥪</li>");


$(()=>{
  let list1 = $("#list1>li");
  list1.each(function (idx, el) {
    $(el)
      .addClass("a" + idx)
      .text("aaa" + idx);
    if (idx >= list1.length - 2) {
      list1.eq(idx).css({ color: "white", "background-color": "black" });
    }
  });
  let list2 = $(".theObj");
  list2.html(`<span>${Math.random()}</span>`);
  // attr : 속성, 속성값
  // ():인자 1개 = 갖고오기
  // ():인자 1개 안에 속성을 쓰면 그 속성을 가져옴
  // (""):인자안에 ""만 있으면 비우기
  // ("",""): 속성 교체
  list2.attr("data-role", "accessbillity");
  list2.attr("class","abcd");
  let list2Attr = list2.attr("class");
  list2.html(`<span>${list2Attr}</span>`);
  list2.next().html(`${list2Attr}`);
  list2.next().css("background-color","turquoise");
  list2.next().css("color","white");

  let list3 = $("#list3");
  // append : 뒤에 추가, prepend : 앞에 추가
  list3.append("<li>🐹추가한 list</li>");
  list3.prepend("<li>🐹추가한 list</li>");
  // list3.insertAdjacentHTML("beforebegin", "<div>🐻추가한 list</div>");
  // list3.insertAdjacentHTML("afterend", "<div>🐻추가한 list</div>");
  list3.find("li").eq(3).append("<li>🥪🥪🥪🥪🥪🥪🥪</li>");
});