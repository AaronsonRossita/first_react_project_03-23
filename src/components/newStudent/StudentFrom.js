import React, { useState } from "react";
import './StudentForm.css';
import dateFormatting from "../../utils/dateUtils";

function StudentForm(props){

    const [name, setName] = useState("");
    const [chosenCourse, setChosenCourse] = useState("");
    const [courseDate, setCourseDate] = useState("");

    const handleNameInput = (event) => {
        setName(event.target.value);
    }

    const handleCourseSelection = (event) => {
        setCourseDate(dateFormatting(props.courses[event.target.value].startDate));
        setChosenCourse(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const student = {
            studentName: name,
            course: chosenCourse
        }

        console.log(student);
        props.register(student);
        props.cancel();
    }



    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="new-registration__control">
                    <label>Student name</label>
                    <input 
                        type="text"
                        required
                        value={name}
                        onChange={handleNameInput}
                    />
                </div>
                <div className="new-registration__control">
                    <label>Course Name</label>
                    <select className="course-selection" onChange={handleCourseSelection}>
                        <option disabled selected>Please Choose A Course</option>
                        {Object.keys(props.courses).map( (element, index) => {
                            return(
                                <option value={element} key={index}>{props.courses[element].displayName}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="new-registration__control">
                    <label>Course Start Date</label>
                    <input type="date" disabled value={courseDate}/>
                </div>
                <br/><br/>
                <div className="new-registration__actions">
                    <button type="button" onClick={props.cancel}>Cancel</button>
                    <button type="submit">Register Student</button>
                </div>
            </form>
        </div>
    )
}

export default StudentForm;