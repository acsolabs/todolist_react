import "./assets/datas/list";
import { tasksList } from "./assets/datas/list";
import Form from "./components/Form";
import Header from "./components/Header";
import ListContainer from "./components/ListContainer";

const App = () => {
  return (
    <>
      <Header title="Mes missions à accomplir" />
      <Form placeholder="Nouvelle mission ?" />

      <ListContainer tasks={tasksList}>
        {tasksList.map((task) => {
          return <li key={task.id}>{task.name}</li>;
        })}
      </ListContainer>
    </>
  );
};
export default App;
