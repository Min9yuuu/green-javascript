/*
  export function say(user) {
    alert(`안녕하세요,${user}님`);
  }
*/

// 개체 한개만 있는 경우
const app = (user) => {
  return alert(`안녕하세요,${user}님`);
};

// 한개만 내보낼때 default를 붙힘
export default app;
