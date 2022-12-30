const color = ["skyblue", "pink", "yellow", "green", "red", "blue", "white"];
let i = 0;
function colorBg() {
  let bodyTag = document.getElementsByTagName("body")[0];
  bodyTag.style.backgroundColor = color[i];
  i++;
  if (i >= color.length) {
    i = 0;
  }
}
