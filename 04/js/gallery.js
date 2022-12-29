// JavaScript

let galleryItem = document.getElementById("gallery");
let num = 1;

function nextGallery(){
  num++;
  if(num>=7){
    num = 1;
  }
  galleryItem.src="./images/img"+num+".jpg";
  return false;
}

function prevGallery(){
  num--;
  if(num <= 0){
    num = 7
  }
  galleryItem.src = "./images/img" + num + ".jpg";
  return false;
}

