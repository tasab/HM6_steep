import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { rootStore } from "../stores/RootStore";
import "../index.css";

export const NavBar = () => {
  const [inputValue, setInputValue] = useState("");

  const inputChange = event => {
    setInputValue(event.target.value);
  };

  const addInput = () => {
    setInputValue("");
    if (inputValue !== "") {
      rootStore.groups.add(inputValue);
    }
  };

  return (
    <div className="NawBar">
      <ul>
        <li>
          <NavLink to={"/favorite"}>Favorite</NavLink>
        </li>
        <li>
          <NavLink to={"/all-todos"}>All Todos</NavLink>
        </li>
        <hr />
        {rootStore.groups.list.map(item => (
          <li key={item.id}>
            <NavLink to={"/" + item.id}>{item.title}</NavLink>
          </li>
        ))}
        <li>
          <input
            type="text"
            placeholder="Enter Group"
            onChange={inputChange}
            value={inputValue}
          />
          <button onClick={addInput}>Add</button>
        </li>
      </ul>
    </div>
  );
};
