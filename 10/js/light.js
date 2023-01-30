// document.addEventListener('DOMContentLoaded',function(){
  // let btn = document.querySelectorAll('.gallery img');
  // let newImg = document.querySelector("#lightbox-image");
  // let overBox = document.querySelector("#lightbox-overlay");

  // btn.forEach((el,idx) => {
  //   btn[idx].addEventListener('click',function(){
  //     let imgSrc = this.getAttribute('data-lightbox');
  //     newImg.setAttribute('src',imgSrc);
  //     overBox.classList.add("visible");
  //   });
  // });
  // overBox.addEventListener('click',function(){
  //   newImg.setAttribute('src','');
  //   overBox.classList.remove('visible');
  // });
// });

document.addEventListener('DOMContentLoaded',()=>{
  var button = document.querySelectorAll(".gallery a"),
    target = document.querySelector("#lightbox-overlay"),
    targetImg = target.querySelector("#lightbox-image");

  button.forEach((el,idx) => {
    button[idx].addEventListener('click',function(){
      let  changeImg = this.querySelector("img").getAttribute("data-lightbox");
      targetImg.setAttribute("src", changeImg);
      target.classList.add('visible');
    });
  });
  target.addEventListener('click',function(){
    targetImg.setAttribute('src','');
    target.classList.remove('visible');
  });
});

