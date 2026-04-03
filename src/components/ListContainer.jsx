import Button from "./Button";
import "../assets/styles/listContainer.css";

const ListContainer = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.name} <Button value="X" />
        </li>
      ))}
    </ul>
  );
};

export default ListContainer;
