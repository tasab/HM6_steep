import React, { useState } from "react";
import { rootStore } from "../../stores/RootStore";
import { Icon } from "../../icons/Icon";
import { isFavorite, defoultStyle } from "../../SyledComponent";
import "../../index.css";
import { observer } from "mobx-react-lite";

const AllTodos = props => {
  const [inputValue, setInputValue] = useState("");

  const changeInput = event => {
    setInputValue(event.target.value);
  };
  const addGroup = () => {
    if (inputValue !== "") {
      rootStore.todos.add(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <h1 className="group-title">All Todos</h1>
      <p>Complited {rootStore.todos.complited.length}</p>
      <ul>
        {rootStore.todos.list.map(todo => (
          <li key={todo.id}>
            <p
              className={
                todo.isComplited ? "complited grouptodos" : "grouptodos"
              }
              onClick={() => todo.toggleComplited()}
            >
              {todo.title}
            </p>
            <div
              onClick={() => {
                todo.toggleFavorite();
              }}
            >
              <Icon
                name="remove"
                height="15px"
                width="15px"
                fill={todo.isFavorite ? isFavorite : defoultStyle}
              />
            </div>
          </li>
        ))}
        <li>
          <input
            value={inputValue}
            onChange={changeInput}
            placeholder="Enter Todo"
          />
          <button onClick={addGroup}>Add</button>
        </li>
      </ul>
    </>
  );
};

export default observer(AllTodos);
