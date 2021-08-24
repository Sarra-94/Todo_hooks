import React, { useState } from "react";
import Add from "./Components/TodoApp/Add";
import ListItems from "./Components/TodoApp/ListItems";

const App = () => {
  const [list, setList] = useState(["item1", "item2"]);
  const addItem = (item) => {
    // setList(list.concat(item));
    setList([item, ...list]);
  };
  const deleteItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };
  return (
    <div>
      <Add addItem={addItem} />
      <ListItems list={list} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
