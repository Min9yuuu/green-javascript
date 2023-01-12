
    const cursor = document.querySelector("#cursor");
    const cStyle = window.getComputedStyle(cursor);
    const m1 = document.querySelector("#m1");
    const m2 = document.querySelector("#m2");
    const m3 = document.querySelector("#m3");

    window.addEventListener("mousemove",function(e){
      let pointer = e;

      let cSize=[cStyle.width.split("px",1),cStyle.height.split("px",1)]
      let cPoint = [pointer.clientX,pointer.clientY];


      let cObj={
        x : pointer.clientX,
        y : pointer.clientY,
      }

      const cSObj = {
        mL : cStyle.width.split("px",1),
        mT : cStyle.height.split("px",1),
      }

      cursor.style.marginLeft = -(cSObj.mL/2)+"px";
      cursor.style.marginTop = -(cSObj.mT/2)+"px";
      cursor.style.left = cObj.x + "px";
      cursor.style.top = cObj.y + "px"; 


      m1.style.left = cObj.x + "px";
      m1.style.top = cObj.y + "px";
      m1.style.marginLeft = cSObj.mL-(cSObj.mL/2)+"px";
      m1.style.marginTop = -(cSObj.mT/2)+"px";

      m2.style.left = cObj.x + "px";
      m2.style.top = cObj.y + "px";
      m2.style.marginLeft = cSObj.mL-(cSObj.mL/2)+"px";
      m2.style.marginTop = cSObj.mT-(cSObj.mL/2)+"px";

      m3.style.left = cObj.x + "px";
      m3.style.top = cObj.y + "px";
      m3.style.marginLeft = -(cSObj.mL/2)+"px";
      m3.style.marginTop = cSObj.mT-(cSObj.mL/2)+"px";
    });