console.clear();

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import {
  RecoilRoot,
  atom,
  atomFamily,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue
} from "https://cdn.skypack.dev/recoil";

// atom을 사용하면 페이지가 늘어날 때마다 atom도 늘어나게 됨
// atom 대신 atomFamily를 사용
/*
const page1NoAtom = atom({
  key: "app/page1NoAtom",
  default: 0
});

const page2NoAtom = atom({
  key: "app/page2NoAtom",
  default: 0
});

const page3NoAtom = atom({
  key: "app/page3NoAtom",
  default: 0
});

const page4NoAtom = atom({
  key: "app/page4NoAtom",
  default: 0
});

function Page1() {
  const [no, setNo] = useRecoilState(page1NoAtom);
  return (
    <>
      <h1>페이지 1</h1>
      
      <ul>
        <li>페이지 1의 숫자 : {no}</li>
        <li>
          <button onClick={() => setNo(no + 1)}>증가</button>
        </li>
      </ul>
    </>
  );
}

function Page2() {
  const [no, setNo] = useRecoilState(page2NoAtom);
  return (
    <>
      <h1>페이지 2</h1>
      
      <ul>
        <li>페이지 2의 숫자 : {no}</li>
        <li>
          <button onClick={() => setNo(no + 1)}>증가</button>
        </li>
      </ul>
    </>
  );
}

function Page3() {
  const [no, setNo] = useRecoilState(page3NoAtom);
  return (
    <>
      <h1>페이지 3</h1>
      
      <ul>
        <li>페이지 3의 숫자 : {no}</li>
        <li>
          <button onClick={() => setNo(no + 1)}>증가</button>
        </li>
      </ul>
    </>
  );
}

function Page4() {
  const [no, setNo] = useRecoilState(page4NoAtom);
  return (
    <>
      <h1>페이지 4</h1>
      
      <ul>
        <li>페이지 4의 숫자 : {no}</li>
        <li>
          <button onClick={() => setNo(no + 1)}>증가</button>
        </li>
      </ul>
    </>
  );
}

function App() {
  const [pageNo, setPageNo] = useState(1);
  const switchPage = () => {
    setPageNo(pageNo + 1 <= 4 ? pageNo + 1 : 1);
  };
  const pageName = 'page' + pageNo;

  return (
    <>
      <button onClick={switchPage}>스위치</button>
      {pageName == "page1" && <Page1 />}
      {pageName == "page2" && <Page2 />}
      {pageName == "page3" && <Page3 />}
      {pageName == "page4" && <Page4 />}
      
    </>
  );
}
*/

// atomFamily 사용한 버전(페이지 3,4는 유지, 페이지 1,2는 커스텀 훅 도입)
const pageNoAtomFamily = atomFamily({
  key: "app/pageNoAtom",
  default: (no) => 0
});

const pageCountAtom = atom({
  key: "app/pageCountAtom",
  default: (no) => 0
});

const pageCountAtomFamily = atomFamily({
  key: "app/pageCountAtomFamily",
  default: (pageNo) => 0
})
function usePageCount(pageNo) {
  const [count, setCount] = useRecoilState(pageCountAtomFamily(pageNo));

  const increaseOne = () => setCount(count + 1);
  const decreaseOne = () => setCount(count - 1);
  const increaseTen = () => setCount(count + 10);
  const decreaseTen = () => setCount(count - 10);
  const clear = () => setCount(0);

  return { count, increaseOne, decreaseOne, increaseTen, decreaseTen, clear };
}

function Page1() { 
  const pageCountState = usePageCount(1);
  return (
    <>
      <h1>페이지 1</h1>
      <ul>
        <li> 페이지 1의 숫자 : {pageCountState.count} </li>
        <li>
          <button onClick={pageCountState.increaseOne}>증가 1</button>
          <button onClick={pageCountState.decreaseOne}>감소 1</button>
          <button onClick={pageCountState.increaseTen}>증가 10</button>
          <button onClick={pageCountState.decreaseTen}>감소 10</button>
          <button onClick={pageCountState.clear}>초기화</button>
        </li>
      </ul>
    </>
  );
}
function Page2() {
  const pageCountState = usePageCount(2);
  return (
    <>
      <h1>페이지 2</h1>
      <ul>
        <li> 페이지 2의 숫자 : {pageCountState.count} </li>
        <li>
          <button onClick={pageCountState.increaseOne}>증가 1</button>
          <button onClick={pageCountState.decreaseOne}>감소 1</button>
          <button onClick={pageCountState.increaseTen}>증가 10</button>
          <button onClick={pageCountState.decreaseTen}>감소 10</button>
          <button onClick={pageCountState.clear}>초기화</button>
        </li>
      </ul>
    </>
  );
}
function Page3() {
  const [no, setNo] = useRecoilState(pageNoAtomFamily(3));
  return (
    <>
      <h1>페이지 3</h1>
      <ul>
        <li> 페이지 3의 숫자 : {no} </li>
        <li>
          <button onClick={() => setNo(no + 1)}>증가</button>
        </li>
      </ul>
    </>
  );
}
function Page4() {
  const [no, setNo] = useRecoilState(pageNoAtomFamily(4));
  return (
    <>
      <h1>페이지 4</h1>
      <ul>
        <li> 페이지 4의 숫자 : {no} </li>
        <li>
          <button onClick={() => setNo(no + 1)}>증가</button>
        </li>
      </ul>
    </>
  );
}

function App() {
  const [pageNo, setPageNo] = useState(1);
  const switchPage = () => {
    setPageNo(pageNo + 1 <= 4 ? pageNo + 1 : 1);
  };
  const pageName = "page" + pageNo;

  return (
    <>
      <button onClick={switchPage}>스위치</button>
      {pageName == "page1" && <Page1 />}
      {pageName == "page2" && <Page2 />}
      {pageName == "page3" && <Page3 />}
      {pageName == "page4" && <Page4 />}
    </>
  );
}
function Root() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
