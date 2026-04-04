import Button from "./Button";
import "../assets/styles/listContainer.css";

const ListContainer = ({ tasks, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.name}{" "}
          <Button
            value="X"
            onClick={() => {
              onDeleteTask(task.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListContainer;
