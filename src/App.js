import './App.css';
import NewStudent from './components/newStudent/NewStudent';
import StudentForm from './components/newStudent/StudentFrom';

function App(){

  const students = [
    {id:1, name: "Tom", course: "Fullstack"},
    {id:2, name: "Ann", course: "QA"},
    {id:3, name: "Marry", course: "Cyber"},
    {id:4, name: "John", course: "Cyber"}
  ]

  return(
    <div>
      <NewStudent/>
    </div>
  )
}

export default App;
