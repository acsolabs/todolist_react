import Button from "./Button";
import "../assets/styles/listContainer.css";

const ListContainer = ({ tasks, onClick }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.name} <Button value="X" onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};

export default ListContainer;
