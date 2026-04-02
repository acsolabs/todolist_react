import "../assets/styles/header.css";
const Header = ({ title }) => {
  return (
    <>
      <header>
        <div className="header">
          <h1>{title}</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
