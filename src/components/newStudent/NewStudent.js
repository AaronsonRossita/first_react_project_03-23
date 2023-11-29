import React from "react";
import './NewStudent.css';
import StudentForm from "./StudentFrom";

function NewStudent(props){

    return(
        <div className="new-registration">
            <StudentForm/>
        </div>
    )
}

export default NewStudent;