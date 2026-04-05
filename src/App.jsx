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
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const newTaskObject = { id: Date.now(), name: newTask, done: false };
    setTasks([...tasks, newTaskObject]);
    setNewTask("");
  };
  const handleTaskDone = (id) => {
    const tasksDoneUpdated = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(tasksDoneUpdated);
  };

  return (
    <>
      <Header title="Mes missions à accomplir" />
      <Form
        placeholder="Nouvelle mission ?"
        handleNewTask={handleNewTask}
        handleSubmit={handleSubmit}
        value={newTask}
      />
      <ListContainer
        tasks={tasks}
        onDoneTask={handleTaskDone}
        onDeleteTask={handleDeleteId}
      />
    </>
  );
};

export default App;
