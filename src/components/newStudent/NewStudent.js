import React, { useState } from "react";
import './NewStudent.css';
import StudentForm from "./StudentFrom";

function NewStudent(props){

    const [isEditing, setIsEditing] = useState(false);

    const handleRegister = () => {
        setIsEditing(true);
    }

    return(
        <div className="new-registration">
            {isEditing ? <StudentForm courses={props.courses}/> : <button onClick={handleRegister}>Register Student</button>}
        </div>
    )
}

export default NewStudent;