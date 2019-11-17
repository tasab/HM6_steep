import React, { useState } from "react";
import { rootStore } from "../../stores/RootStore";
import { values } from "mobx";
import "../../index.css";
import { isFavorite, defoultStyle } from "../../SyledComponent";
import { Icon } from "../../icons/Icon";
import { observer } from "mobx-react-lite";

const Favorite = props => {
  const [inputValue, setInputValue] = useState("");

  const changeInput = event => {
    setInputValue(event.target.value);
  };

  const addGroup = () => {
    if (inputValue !== "") {
      setInputValue("");
      let todoNumber = 0;
      rootStore.todos.add(inputValue);
      rootStore.todos.list[todoNumber].toggleFavorite();
      todoNumber++;
    }
  };

  return (
    <>
      <h1 className="group-title">Favorite</h1>
      <p>Complited {rootStore.todos.complited.length}</p>
      <ul>
        {values(rootStore.todos.list).map(todo =>
          todo.isFavorite ? (
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
          ) : null
        )}
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
export default observer(Favorite);
