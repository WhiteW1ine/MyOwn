import './App.css';
import Navbar from './components/navbar/navbar';
import AboutMe from './components/aboutme/aboutme';
import MyEducation from './components/myeducation/myEducation';
import Projects from './components/projects/projects'
import Contacts from './components/contacts/contacts'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AboutMe></AboutMe>
      <MyEducation></MyEducation>
      <Projects></Projects>
      <Contacts></Contacts>
    </div>

  );
}

export default App;
