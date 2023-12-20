import React, { useState } from "react";
import "./Registration.css"
import RegisteredStudentList from "./RegisteredStudentList";
import RegisteredStudentFilter from "./RegisteredStudentFilter";

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
            <h3>chart will be here</h3>
            <RegisteredStudentFilter courses={props.courses} onChangeFilter={handleFilter}/>
            <RegisteredStudentList students={filteredStudentList} courses={props.courses}/>
        </div>
    )
}

export default Registration;