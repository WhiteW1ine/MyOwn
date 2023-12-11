import './navbar.css'; // Assuming you have a CSS file for styling
import Button from './button';
import Logo from './logo';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo imgSrc={"/Logo.png"} altText={"Error"}></Logo>
      <div className='buttons'>
        <Button text={"About me"}></Button>
        <Button text={"Works"}></Button>
        <Button text={"Contacts"}></Button>
      </div>
    </div>
  );
};

export default Navbar;