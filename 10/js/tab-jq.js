const btn = $('ul>li'),panel = $('h3');

panel.hide();
panel.eq(0).show();

btn.each((idx)=>{
  btn.eq(idx).click(function(){
    unVisible(panel);
    visible(panel.eq(idx));
  });
});

function visible(obj){
  obj.show();
}
function unVisible(obj) {
  obj.hide();
}