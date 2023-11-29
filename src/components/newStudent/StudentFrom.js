import React from "react";
import './StudentForm.css';

function StudentForm(props){
    return(
        <div>
            <form>
                <div className="new-registration__control">
                    <label>Student name</label>
                    <input type="text"/>
                </div>
                <div className="new-registration__control">
                    <label>Course Name</label>
                    <select className="course-selection">
                        <option>Fullstack Course</option>
                        <option>QA Course</option>
                        <option>Cyber Course</option>
                    </select>
                </div>
                <div className="new-registration__control">
                    <label>Course Start Date</label>
                    <input type="date"/>
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