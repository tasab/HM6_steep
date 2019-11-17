import React, { useState } from "react";
import { values } from "mobx";
import { observer } from "mobx-react";
import { Icon } from "../icons/Icon";
import { rootStore } from "../stores/RootStore";
import { isFavorite, defoultStyle } from "../SyledComponent";
import "../index.css";
const TodoBody = props => {
  const [inputValue, setInputValue] = useState("");

  const changeInput = event => {
    setInputValue(event.target.value);
  };
  const addGroup = () => {
    let numberOfTodo = 0;
    if (inputValue !== "") {
      rootStore.todos.add(inputValue);
      setInputValue("");
      let selectedTodo = rootStore.todos.list[numberOfTodo];
      rootStore.groups.groupById(props.match.params.id)[0].add(selectedTodo);
      numberOfTodo++;
    }
  };
  return (
    <div>
      <h1 className="group-title">
        {rootStore.groups.groupById(props.match.params.id)[0].title}
      </h1>
      <p>Complited {rootStore.todos.complited.length}</p>
      <ul>
        {rootStore.groups.groupById(props.match.params.id)[0]
          ? values(
              rootStore.groups.groupById(props.match.params.id)[0].todos
            ).map(todo => (
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
            ))
          : null}
        <li>
          <input
            value={inputValue}
            onChange={changeInput}
            placeholder="Enter Todo"
          />
          <button onClick={addGroup}>Add</button>
        </li>
      </ul>
    </div>
  );
};
export default observer(TodoBody);
