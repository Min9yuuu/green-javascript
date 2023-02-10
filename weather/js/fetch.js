let date = new Date();
let year = String(date.getFullYear());
let month = String(date.getMonth() + 1).padStart(2, "0");
let day = String(date.getDate()).padStart(2, "0");

let today = year + month + day;

var url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst"; /*URL*/
var queryParams = "?" + encodeURIComponent("serviceKey") + "=" + "PWUe17fmnNxUysZ3O9Qs%2Fsvr7SyvLPPD4wb8XBBumdrGHIYhulxjKxCkOESgu%2FkIV8ONgt1c6AgygWS3XWOK4Q%3D%3D"; /*Service Key*/
queryParams += "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
queryParams += "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("1000"); /**/
queryParams += "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("JSON"); /**/
queryParams += "&" + encodeURIComponent("base_date") + "=" + encodeURIComponent(today); /**/
queryParams += "&" + encodeURIComponent("base_time") + "=" + encodeURIComponent("0600"); /**/
queryParams += "&" + encodeURIComponent("nx") + "=" + encodeURIComponent("61"); /**/
queryParams += "&" + encodeURIComponent("ny") + "=" + encodeURIComponent("128"); /**/

setPosts();

async function getPosts() {
  const res = await fetch(`${url}${queryParams}`);
  //res에 값이 담겨있으니까 res 에 json()
  const data = await res.json(); //json, text
  return data;
}

async function setPosts() {
  const posts = await getPosts();
  const datas = posts.response.body.items.item;
  datas.forEach((data) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
    <div class="area">지역: 강남</div>
    <div class="number">측정시간:${data.baseTime}</div>
    <h2 class="post-title">카테고리:${data.category}</h2>
    <div class="post-body">측정값:${data.obsrValue}</div>
    `;
    document.body.appendChild(postEl);
  });
}
setPosts();
