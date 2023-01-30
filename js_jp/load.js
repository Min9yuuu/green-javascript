      addEventListener("DOMContentLoaded", () => {
        //load.html 에 요소를 담을 변수를 초기화
        var news1 = document.querySelector("#newsWrap_1");
        var news2 = document.querySelector("#newsWrap_2");
        //기본 url설정 (전화번호)
        const url = "01_news.html";
        //ajax 작업을 위한 XMLHttpRequest() 객체를 생성해서 request 변수에 할당
        let request = new XMLHttpRequest();
        //서버에 요청 -> 전화걸기
        //open(방법,url,동기여부)
        request.open("GET", url);
        // console.log(request.open("GET", url));
        // 응답할 데이터 형식(document -> html,xml)
        request.responseType = "document";

        request.onload = () => {
          //responseXML: 전달받을 데이터를 XML DOM 객체로 반환
          //csv,xml,txt,html,json
          let response = request.response;
          console.log(response);
          // let doc=request.responseXML;
          //반환받은 요소중 id 속성을 모두 변수 ids에 저장
          let ids = response.querySelectorAll("[id]");
          console.log(ids);

          news1.innerHTML = ids[0].innerText;
          news2.innerHTML = ids[1].innerText;
        };
        //전화걸기 버튼 누름
        request.send();
      });
