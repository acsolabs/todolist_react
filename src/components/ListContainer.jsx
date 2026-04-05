import Button from "./Button";
import "../assets/styles/listContainer.css";
const ListContainer = ({ tasks, onDeleteTask, onDoneTask }) => {
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
            <span
              className={task.done ? "is-done" : ""}
              onClick={() => {
                onDoneTask(task.id);
              }}
            >
              {task.name}
            </span>{" "}
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
