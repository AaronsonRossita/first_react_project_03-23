import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props){

    const dataPointCounts = props.dataPoints.map( point => point.count);
    const highestCount = Math.max(...dataPointCounts);

    return(
        <div className="chart">
            {props.dataPoints.map( (point,index) => {
                return(
                    <ChartBar name={point.name} count={point.count} key={index} highest={highestCount}/>
                )
            })}
        </div>
    )
}

export default Chart;