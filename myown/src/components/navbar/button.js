import './button.css'; 

const Button = ({ text }) => {
  const handleClick = (e) => {
    e.stopPropagation();

  };

  return (
    <button onClick={handleClick} className='button'>
      {text}
    </button>
  );
};

export default Button;