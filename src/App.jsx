import { useState, useEffect } from "react";
import ToDoItem from "./Components/ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("todoItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  //Load items from localStorage on first mount
  useEffect(() => {
    const storedItems = localStorage.getItem("todoItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  //Save items to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    var val = inputText.trim();
    if (val !== "") {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
    }
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
