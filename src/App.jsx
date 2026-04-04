import { useState } from "react";
import { tasksList } from "./assets/datas/list";
import Form from "./components/Form";
import Header from "./components/Header";
import ListContainer from "./components/ListContainer";

const App = () => {
  const [tasks, setTasks] = useState(tasksList);
  const [newTask, setNewTask] = useState("");

  const handleDeleteId = (id) => {
    const tasksUpdated = tasks.filter((task) => task.id !== id);
    console.log(tasksUpdated);
    setTasks(tasksUpdated);
  };

  const handleNewTask = (e) => {
    if (!e.target.value) return;
    setNewTask(e.target.value);
  };

  //   const handleSubmit = (e)=>{
  // console.log
  //   }
  return (
    <>
      <Header title="Mes missions à accomplir" />
      <Form placeholder="Nouvelle mission ?" handleNewTask={handleNewTask} />
      <ListContainer tasks={tasks} onDeleteTask={handleDeleteId} />
    </>
  );
};

export default App;
