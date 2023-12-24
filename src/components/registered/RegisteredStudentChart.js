import React from "react";
import Chart from "../chart/Chart";

function RegisteredStudentChart(props){

    let courseDataPoints = [];
    
    for( let course in props.courses){
        let countStudents = props.students.filter( (student) => {return student.course === course}).length
        courseDataPoints.push(
            {name: props.courses[course].displayName.replace(" Course", ""), count: countStudents}
        )
    }

    console.log(courseDataPoints)
   
    return(
        <Chart dataPoints={courseDataPoints}/>
    )
}

export default RegisteredStudentChart;