// 오늘 날짜 생성

let date = new Date();
let year = String(date.getFullYear());
let month = String(date.getMonth() + 1).padStart(2, "0");
let day = String(date.getDate()).padStart(2, "0");

let today = year + month + day;

/* Javascript 샘플 코드 */
var xhr = new XMLHttpRequest();
var url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst"; /*URL*/
var queryParams = "?" + encodeURIComponent("serviceKey") + "=" + "PWUe17fmnNxUysZ3O9Qs%2Fsvr7SyvLPPD4wb8XBBumdrGHIYhulxjKxCkOESgu%2FkIV8ONgt1c6AgygWS3XWOK4Q%3D%3D"; /*Service Key*/
queryParams += "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
queryParams += "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("1000"); /**/
queryParams += "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("JSON"); /**/
queryParams += "&" + encodeURIComponent("base_date") + "=" + encodeURIComponent(today); /**/
queryParams += "&" + encodeURIComponent("base_time") + "=" + encodeURIComponent("0600"); /**/
queryParams += "&" + encodeURIComponent("nx") + "=" + encodeURIComponent("61"); /**/
queryParams += "&" + encodeURIComponent("ny") + "=" + encodeURIComponent("128"); /**/
xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    alert("Status: " + this.status + "nHeaders: " + JSON.stringify(this.getAllResponseHeaders()) + "nBody: " + this.responseText);
  }
};

xhr.send("");
