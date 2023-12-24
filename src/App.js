import { useState } from 'react';
import './App.css';
import NewStudent from './components/newStudent/NewStudent';
import Registration from './components/registered/Registration';

  //mock data
  const AVAILABLE_COURSES = {
    qa: {
      id: '2',
      name: 'qa',
      displayName: 'QA Course',
      startDate: new Date(2023, 2, 20)
    },
    fullstack: {
        id: '1',
        name: 'fullstack',
        displayName: 'Fullstack Course',
        startDate: new Date(2023, 7, 14)
    },
    cyber: {
        id: '3',
        name: 'cyber',
        displayName: 'Cyber Course',
        startDate: new Date(2023, 4, 5)
    },
    product: {
        id: '4',
        name: 'product',
        displayName: 'Product Course',
        startDate: new Date(2023, 6, 30)
    },
    app: {
      id: '5',
      name: 'app',
      displayName: 'Mobile App Developer Course',
      startDate: new Date(2023, 7, 30)
    },
  }

  const DUMMY_REGISTERED_STUDENTS = [
    {
        id: '1',
        studentName: "Yonit Levi",
        course: "fullstack",
    },
    { id: '2',
        studentName: "Eli Finish",
        course: "qa",
    },
    {
        id: '3',
        studentName: "Eyal Golan",
        course: "cyber",
    },
    {
        id: '4',
        studentName: "Oren Hazan",
        course: "fullstack",
    },
    {
        id: '5',
        studentName: "Rotem Sela",
        course: "product",
    },
  ];

function App(){

  const [registeredStudents, setRegisteredStudents] = useState(DUMMY_REGISTERED_STUDENTS)

  const handleRegistration = (student) => {
    setRegisteredStudents( (prev) => {
      return [student,...prev]
    })
  }

  return(
    <div>
      <NewStudent courses={AVAILABLE_COURSES} register={handleRegistration}/>
      <Registration courses={AVAILABLE_COURSES} students={registeredStudents}/>
    </div>
  )
}

export default App;
