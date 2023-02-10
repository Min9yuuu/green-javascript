//getUltraSrtNcst(초단기실황),getVilageFcst(단기예보)

let url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/"; /*URL*/
let params = {
  type: ["getUltraSrtNcst", "getVilageFcst"], //(초단기실황)(단기예보)
  key: "8rEO4GGvAt50j%2B%2Fb%2F76L2LAN6mSFS33XGW0VY7fcQ6bbjViMesdAHDqY%2FaYbLhlx6EWslHKL77QpvQG4ldLVIg%3D%3D",
  pageNo: "1",
  numOfRow: "1000",
  dataType: "json",
  base_date: today,
  base_time: "0600",
  nx: "73",
  ny: "134",
};

url = `${url}${params.type[0]}?serviceKey=${params.key}&pageNo=${params.pageNo}&numOfRow=${params.numOfRow}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`;

async function getPosts() {
  const res = await fetch(url);
  //res에 값이 담겨있으니까 res 에 json()
  const data = await res.json(); //json, text
  console.log(data);
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
