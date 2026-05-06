console.clear();

import React, { useState, useRef } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

// 할 일 아이템
function TodoListItem({ todosState, todo, index }) {
const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState(todo.content);
  const editedContentInputRef = useRef(null);
  
  // 할 일 삭제
  const removeTodo = () => {
    todosState.removeTodo(index);
  };

  // 할 일 수정
  const showEditMode = () => {
    setEditMode(true);
  };

  // 수정 완료
  const commitEdit = () => {
    if (editedContent.trim().length == 0) {
      alert("할 일을 입력해 주세요");
      editedContentInputRef.current.focus();
      return;
    }
    
    todosState.modifyTodo(index, editedContent.trim());
    setEditMode(false);
  };
  
  // 수정 취소
  const cancelEdit = () => {
    setEditMode(false);
    setEditedContent(todo.content);
  };

  return (
    <>
      <li key={index}>
        {todo.id}
        &nbsp;
        {todo.regDate}
        &nbsp;
        {editMode || (
          <>
            {todo.content}
            &nbsp;
            <button onClick={showEditMode}>수정</button>
            <button onClick={removeTodo}>삭제</button>
          </>
        )}
        {editMode && (
          <>
            <input
              ref={editedContentInputRef}
              type="text"
              placeholder="할 일을 입력해 주세요."
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <button onClick={commitEdit}>수정완료</button>
            <button onClick={cancelEdit}>수정취소</button>
          </>
        )}
      </li>
    </>
  );
}

// 할 일 리스트
function TodoList ({todosState}) {
  return (
  <>
      <ul>
        {todosState.todos.map((todo, index) => (
        <TodoListItem key={todo.id} todo={todo} index={index} todosState={todosState} />
        ))}
      </ul>
      </>)  
}

// 할 일 입력 폼
function NewTodoForm({ todosState }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    form.content.value = form.content.value.trim();

    if (form.content.value.length == 0) {
      alert("할 일을 입력해 주세요");
      form.content.focus();

      return;
    }

    todosState.addTodo(form.content.value);
    form.content.value = "";
    form.content.focus();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          autoComplete="off"
          name="content"
          type="text"
          placeholder="할 일을 입력해 주세요."
        />
        <input type="submit" value="추가" />
        <input type="reset" value="취소" />
      </form>
    </>
  );
}

function TodoApp({ todosState }) {
  return (
    <>
      <NewTodoForm todosState={todosState} />
      <TodoList todosState={todosState} />
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
      regDate: dateToStr(new Date()),
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
      <TodoApp todosState={todosState} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// 입력받은 날짜 객체를 YYYY-MM-DD hh:mm:ss로 변환하는 함수
function dateToStr(d) {
  const pad = (n) => {
    return n < 10 ? "0" + n : n;
  }

  return (
    d.getFullYear() +
    "-" +
    pad(d.getMonth() + 1) +
    "-" +
    pad(d.getDate()) +
    " " +
    pad(d.getHours()) +
    ":" +
    pad(d.getMinutes()) +
    ":" +
    pad(d.getSeconds())
  );
}
