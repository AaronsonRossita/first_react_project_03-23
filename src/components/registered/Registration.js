import React, { useState } from "react";
import "./Registration.css"
import RegisteredStudentList from "./RegisteredStudentList";
import RegisteredStudentFilter from "./RegisteredStudentFilter";
import RegisteredStudentChart from "./RegisteredStudentChart";

function Registration(props){

    const [filteredCourse, setFilteresCourse] = useState(Object.keys(props.courses)[0]);

    const filteredStudentList = props.students.filter( (student) => {
        return student.course === filteredCourse;
    })

    const handleFilter = (course) => {
        setFilteresCourse(course)
    }

    return(
        <div className="registrations card">
            <RegisteredStudentChart courses={props.courses} students={props.students}/>
            <RegisteredStudentFilter courses={props.courses} onChangeFilter={handleFilter}/>
            <RegisteredStudentList students={filteredStudentList} courses={props.courses}/>
        </div>
    )
}

export default Registration;