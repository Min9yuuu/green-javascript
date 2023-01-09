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

$(()=>{
  let list1 = $("#list1>li");
  list1.each(function(idx, el){
    $(el).addClass("a"+idx).text("aaa"+idx);
    if(idx>=list1.length-2){
      list1.eq(idx).css({"color":"white","background-color":"black"});
    }
  })
});