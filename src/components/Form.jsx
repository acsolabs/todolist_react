import "../assets/styles/form.css";

const Form = ({ placeholder, handleNewTask, handleSubmit, value }) => {
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        name="text"
        className="input"
        onChange={handleNewTask}
        value={value}
      ></input>
    </form>
  );
};

export default Form;
