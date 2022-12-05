import { useState } from "react";
import Box from "./components/Box";
import Input from "./components/Input";

function App() {
  const [todo, setTodo] = useState([]);

  const removeTodo = (id) => {
    // console.log(id)
    const newTodo = todo.filter((d, index) => {
      if (index !== id) return true;
      else return false;
    });
    setTodo(newTodo);
  };
  const addTodo = (item) => {
    // console.log(item);
    setTodo([
      ...todo,
      {
        item,
        time: new Date().toLocaleTimeString(),
      },
    ]);
  };

  // console.log(todo)
  return (
    <div className="bg-gray-300 h-screen">
      <h1 className="flex justify-center p-5 text-4xl font-bold text-[#3b233b]">
        Todo List
      </h1>
      <div className="mx-auto max-w-[750px] min-h-[550px] bg-violet-400">
        <Input handler={addTodo} />
        <Box data={todo} removeHandler={removeTodo} />
      </div>
    </div>
  );
}

export default App;
