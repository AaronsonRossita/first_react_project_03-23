import React from "react";

function List(props){

    return(
        <ol>
            {props.students.map( (student) => {
                return(
                    <li>{student.studentName}</li>
                )
            })}
        </ol>
    )
}

export default List