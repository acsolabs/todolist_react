import "../assets/styles/form.css";

const Form = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      name="text"
      className="input"
    ></input>
  );
};

export default Form;
