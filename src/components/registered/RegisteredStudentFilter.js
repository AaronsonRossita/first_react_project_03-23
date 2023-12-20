import React from "react";
import "./RegisteredStudentFilter.css";

function RegisteredStudentFilter(props){

    const handleSelect = (event) => {
        props.onChangeFilter(event.target.value)
    }

    return(
        <div className="registrations-filter">
            <div className="registrations-filter__control">
                <label>Filter by Course Name</label>
                <select onChange={handleSelect}>
                    {Object.keys(props.courses).map( (course) => {
                        return(
                            <option value={course}>{props.courses[course].displayName}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default RegisteredStudentFilter;