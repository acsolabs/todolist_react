import "../assets/styles/form.css";

const Form = ({ placeholder, handleNewTask }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      name="text"
      className="input"
      onChange={handleNewTask}
    ></input>
  );
};

export default Form;
