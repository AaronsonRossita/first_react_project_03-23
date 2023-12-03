import React, { useState } from "react";
import './StudentForm.css';
import dateFormatting from "../../utils/dateUtils";

function StudentForm(props){

    console.log("Student form is rendered");

    const [name, setName] = useState("");
    const [courseDate, setCourseDate] = useState("");

    const handleNameInput = (event) => {
        setName(event.target.value)
    }

    const handleCourseSelection = (event) => {
        setCourseDate(dateFormatting(props.courses[event.target.value].startDate));
    }

    return(
        <div>
            <form>
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
                    <button type="button">Cancel</button>
                    <button type="submit">Register Student</button>
                </div>
            </form>
        </div>
    )
}

export default StudentForm;