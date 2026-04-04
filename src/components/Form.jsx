import "../assets/styles/form.css";

const Form = ({ placeholder, handleNewTask, handleSubmit }) => {
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        name="text"
        className="input"
        onChange={handleNewTask}
      ></input>
    </form>
  );
};

export default Form;
