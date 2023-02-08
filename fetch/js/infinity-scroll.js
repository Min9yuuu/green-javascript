//스크립트를 적용할 요소를 상수에 저장.

const postContainer = document.querySelector("#posts-container"),
  loading = document.querySelector(".loader"),
  filter = document.querySelector("#filter");

let limit = 5,
  page = 1;

//api 에서 게시글을 fetch로 취득
// async는 function 선언 앞에 사용
async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
  const data = await res.json();
  return data;
}

showPosts();
//DOM에 보여주는 함수
async function showPosts() {
  const posts = await getPosts();
  posts.forEach((post) => {
    console.log(post);
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
    <div class="number">${post.id}</div>
    <div class="post-info">
      <h2 class="post-title">${post.title}</h2>
      <p class="post-body">${post.body}</p>
    </div>
    `;
    postContainer.appendChild(postEl);
  });
}

//loader 애니메이션 함수
function showLoading() {
  loading.classList.add("show");
  setTimeout(() => {
    loading.classList.remove("show");
    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

//검색키워드 필터링 함수
function filterPosts(e) {
  const term = e.target.value.toUpperCase();
  posts = document.querySelectorAll(".post");
  posts.forEach((post) => {
    const title = post.querySelector(".post-title").innerText.toUpperCase();
    const body = post.querySelector(".post-body").innerText.toUpperCase();
    // filter
    // indexOf 같은 문자열 1, indexOf와 다른 문자열 -1
    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = "flex";
    } else {
      post.style.display = "none";
    }
  });
}

//filter 값 받아오는 이벤트
filter.addEventListener("input", filterPosts);

// window-scroll
window.addEventListener("scroll", () => {
  /*
   * scrollTop : DOM의  맨 처음부터 현재 화면에 보이는 부분까지의 길이
   * scrollHeight : 전체 문서의 길이
   * clientHeight : 화면에서 보이는 height의 부분
   */
  // key와 속성이 일치하면 속성이 key로 들어간다.
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  // 아래의 코드를 한줄로 줄인코드가 위의 코드
  // console.log(document.documentElement.scrollTop);
  // console.log(document.documentElement.scrollHeight);
  // console.log(document.documentElement.clientHeight);

  // console.log(scrollTop, scrollHeight, clientHeight);

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});
