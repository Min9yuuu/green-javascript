let i = 1;
while(i <=10){
  document.write(`${i}<br>`)
  i++;
}

let j = 1;
while(j<=9){
  document.write("5x"+j+"="+j*5+"<br>");
  j++;
}

let x = 0;
let total =0;

do{
  x++;
  total=total+x;
  document.write(x);
  if(x!=10) document.write("+");
}while(x<10);
document.write("="+total);