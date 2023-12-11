import './App.css';
import Navbar from './components/navbar/navbar';
import AboutMe from './components/aboutme/aboutme';
import MyEducation from './components/myeducation/myEducation';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AboutMe></AboutMe>
      <MyEducation></MyEducation>
    </div>

  );
}

export default App;
