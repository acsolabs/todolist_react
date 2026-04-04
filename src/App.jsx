import { useState } from "react";
import { tasksList } from "./assets/datas/list";
import Form from "./components/Form";
import Header from "./components/Header";
import ListContainer from "./components/ListContainer";

const App = () => {
  const [tasks, setTasks] = useState(tasksList);

  const handleDeleteId = (id) => {
    const tasksUpdated = tasks.filter((task) => task.id !== id);
    console.log(tasksUpdated);
    setTasks(tasksUpdated);
  };
  return (
    <>
      <Header title="Mes missions à accomplir" />
      <Form placeholder="Nouvelle mission ?" />
      <ListContainer tasks={tasks} onDeleteTask={handleDeleteId} />
    </>
  );
};

export default App;
