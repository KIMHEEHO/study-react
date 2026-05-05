console.clear();

import React, { useState, useRef } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function TodoApp({todos, addTodo, removeTodo, modifyTodo}) {

  // 추가 버튼 클릭 시 추가 함수 실행
  const onBtnAddTodoClick = () => {
    addTodo("리액트 공부");
  };

  // 삭제 버튼 클릭 시 삭제 함수 실행
  const onBtnDeleteTodoClick = () => {
    removeTodo(1);
  };

  // 수정 버튼 클릭 시 삭제 함수 실행
  const onBtnModifyTodoClick = () => {
    modifyTodo(1, "정처기 공부");
  };
  
  return (
    <>
      <button onClick={onBtnAddTodoClick}>추가</button>
      <button onClick={onBtnModifyTodoClick}>수정</button>
      <button onClick={onBtnDeleteTodoClick}>삭제</button>
      <h1>todos:</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.id} {todo.regDate} {todo.content}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  // 할 일 추가
  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;

    const newTodo = {
      id,
      content: newContent,
      regDate: "2022-04-19 12:12:12"
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  // 할 일 수정
  const modifyTodo = (index, newContent) => {
    const newTodos = todos.map((todo, _index) =>
      _index != index ? todo : { ...todo, content: newContent }
    );
    setTodos(newTodos);
  };

  // 할 일 삭제
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    setTodos(newTodos);
  };

  return (
    <>
     <TodoApp
        todos={todos}
        addTodo={addTodo}
        modifyTodo={modifyTodo}
        removeTodo={removeTodo}
      />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
