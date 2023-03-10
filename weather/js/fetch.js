//getUltraSrtNcst(초단기실황),getVilageFcst(단기예보)
const castBox = document.querySelector("#container");
let statusText, rainIcon, locText;
rainIcon = [`<i class='bi bi-cloud'></i>`, `<i class="bi bi-cloud-drizzle-fill"></i>`, `<i class="bi bi-cloud-lightning-fill"></i>`, `<i class="bi bi-cloud-snow"></i>`];

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
  return data;
}

async function setPosts() {
  const posts = await getPosts();
  const datas = posts.response.body.items.item;
  // 동적요소 생성
  const castEl = document.createElement("table");
  castEl.classList.add("table");
  const tr = document.createElement("tr");

  let cast = {
    baseDate: datas[0].baseDate,
    rain: datas[0].obsrValue,
    rainInfo: function () {
      let info = this.rain + 6;

      if (info == 0) {
        statusText = "맑음";
        rainIcon = rainIcon[0];
      } else if (info == 1) {
        statusText = "비";
        rainIcon = rainIcon[1];
      } else if (info == 2) {
        statusText = "비/눈";
        rainIcon = rainIcon[2];
      } else if (info == 6) {
        statusText = "눈";
        rainIcon = rainIcon[3];
      }
    },
    temperature: datas[3].obsrValue,
    wind: datas[5].obsrValue,
    nx: datas[0].nx,
    ny: datas[0].ny,
    loc: function () {
      let point = [this.nx, this.ny];
      console.log(point);
      if (point[0] == 73 && point[1] == 134) {
        locText = "강원도";
      }
    },
  };
  cast.rainInfo();
  cast.loc();
  tr.innerHTML = `
    <td>오늘날짜 : ${cast.baseDate}</td>
    <td>지역 : ${locText}</td>
    <td>강수형태 : ${statusText}${rainIcon}</td>
    <td>기온 : ${cast.temperature}°C</td>
    <td>바람 : ${cast.wind}</td>
  `;
  castEl.appendChild(tr);
  castBox.appendChild(castEl);
}
setPosts();
