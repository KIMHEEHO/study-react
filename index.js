console.clear();

import React, { useState, useRef } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function TodoApp({todosState}) {
  
  const onBtnAddTodoClick = () => {
    todosState.addTodo("리액트공부");
  };

  const onBtnDeleteTodoClick = () => {
    todosState.removeTodo(1);
  };

  const onBtnModifyTodoClick = () => {
    todosState.modifyTodo(1, "정처기 공부");
  };
  return (
    <>
      <button onClick={onBtnAddTodoClick}>추가</button>
      <button onClick={onBtnModifyTodoClick}>수정</button>
      <button onClick={onBtnDeleteTodoClick}>삭제</button>
      <h1>todos:</h1>
      <ul>
        {todosState.todos.map((todo, index) => (
          <li key={index}>
            {todo.id} {todo.regDate} {todo.content}
          </li>
        ))}
      </ul>
    </>
  );
}

// 커스텀 훅의 이름은 use~State로 짓는다!
// 커스텀 훅을 사용하여 ui와 관계 없는 핵심 로직과 상태들을 묶을 수 있다!
function useTodosState() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;
    const newTodo = {
      id,
      content: newContent,
      regDate: "2026-05-05 21:19:00"
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodo = todos.filter((_, _index) => _index != index);
    setTodos(newTodo);
  };

  const modifyTodo = (index, newContent) => {
    const newTodo = todos.map((todo, _index) =>
      _index != index ? todo : { ...todo, content: newContent }
    );
    setTodos(newTodo);
  };

  return { todos, addTodo, removeTodo, modifyTodo };
}

function App() {
  const todosState = useTodosState();

  return (
    <>
      <TodoApp
        todosState={todosState}
      />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
