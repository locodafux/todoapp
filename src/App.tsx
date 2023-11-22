import Task from "./components/Task";
import { useRef } from "react";
import { useState } from "react";

const App = () => {
  const ref: any = useRef(null);
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);

  function addItem() {
    if (text === "") {
      alert("Please enter a task");
      ref.current?.focus();
      return;
    }
    setItems([...items, text]);
    setText("");
    ref.current?.focus();
  }

  function deleteItem(i: number) {
    var array = [...items];
    if (i !== -1) {
      array.splice(i, 1);
      setItems(array);
      ref.current?.focus();
    }
  }

  function updateItem(i: number) {
    var array = [...items];
    if (i !== -1) {
      array[i] = text;
      setItems(array);
      setText("");
      ref.current?.focus();
    }
  }
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  return (
    <div className="container-fluid mx-auto h-screen bg-gray-500 flex items-center justify-center">
      <div className="max-w-lg w-[600px] p-5 rounded overflow-hidden shadow-lg bg-slate-700">
        <h1 className="text-4xl font-bold text-white text-center">Todo List</h1>
        <div>
          <div className="flex my-5">
            <input
              ref={ref}
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="h-[3rem] me-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Task"
              required
              onKeyDown={handleKeyDown}
            />
            <button
              type="button"
              onClick={addItem}
              className="h-[3rem] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add
            </button>
          </div>
          <hr className="py-3"></hr>
          {items.map((item, index) => (
            <Task item={item}>
              <button
                type="button"
                onClick={() => updateItem(index)}
                className="absolute right-[90px]  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => deleteItem(index)}
                className="absolute right-0 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
            </Task>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
