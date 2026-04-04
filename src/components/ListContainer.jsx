import Button from "./Button";
import "../assets/styles/listContainer.css";
const ListContainer = ({ tasks, onDeleteTask }) => {
  if (tasks.length === 0) {
    return (
      <>
        <p className="no-result">Aucune mission en cours</p>
      </>
    );
  } else {
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
  }
};

export default ListContainer;
