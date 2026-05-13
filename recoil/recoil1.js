console.clear();

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import {
  RecoilRoot,
  atom,
  useRecoilState,
  //setter만 필요한 경우
  useSetRecoilState,
  //getter만 필요한 경우
  useRecoilValue
} from "https://cdn.skypack.dev/recoil";

// atom = 전역변수라고 생각하면 됨, 이 atom이 page1의 것이니까 앞에 page1을 붙여줌 
const page1NoAtom = atom({
  key:"app/page1NoAtom",
  default:0
});

const page2NoAtom = atom({
  key: "app/page2NoAtom",
  default:0
})

function Page1() {
  const [no, setNo] = useRecoilState(page1NoAtom);
  const setPage2No = useSetRecoilState(page2NoAtom);
  
  const onClick = () => {
    setPage2No(0);
  }
  return (
    <>
      <h1>페이지 1</h1>
      <div>
        <button onClick={onClick}>페이지 2의 값을 초기화</button>
      </div>
      <ul>
        <li>페이지 1의 숫자 : {no}</li>
        <li>
          <button onClick={() => setNo(no + 10)}>페이지 1의 숫자 증가</button>
        </li>
        <li>
          <button onClick={() => setNo(no - 10)}>페이지 1의 숫자 감소</button>
        </li>
      </ul>
    </>
  );
}

function Page2() {
  //setter 없이 getter만 필요한 경우에는 useRecoilValue를 사용하면 됨!
  const page1No = useRecoilValue(page1NoAtom);
  const [no, setNo] = useRecoilState(page2NoAtom);
  return (
    <>
      <h1>페이지 2</h1>

      <div>페이지 1의 숫자 : {page1No}</div>
      <ul>
        <li>운동 횟수 : {no}</li>
        <li>
          <button onClick={() => setNo(no + 1)}>횟수 증가</button>
        </li>
        <li>
          <button onClick={() => setNo(0)}>횟수 초기화</button>
        </li>
      </ul>
    </>
  );
}

function App() {
  const [pageName, setPageName] = useState("page1");

  const switchPage = () => setPageName(pageName == "page1" ? "page2" : "page1");

  return (
    <>
      <button onClick={switchPage}>스위치</button>
      {pageName == "page1" && <Page1 />}
      {pageName == "page2" && <Page2 />}
    </>
  );
}

// recoil의 범위 적용
function Root() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
