import './navbar.css'; 
import Button from './button';
import Logo from './logo';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo imgSrc={"/Logo.png"} altText={"Error"}></Logo>
      <div className='buttons'>
        <Button text={"About me"} targetElementId={'aboutme'}></Button>
        <Button text={"Works"} targetElementId={'projects'}></Button>
        <Button text={"Contacts"} targetElementId={'contacts'}></Button>
      </div>
    </div>
  );
};

export default Navbar;