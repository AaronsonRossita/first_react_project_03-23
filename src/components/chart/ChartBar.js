import React from "react";
import "./ChartBar.css";

function ChartBar(props){

    let barHight = '0%'

    if(props.highest > 0){
        barHight = Math.round((props.count / props.highest) * 100) + '%'
    }

    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barHight}}></div>
            </div>
            <div className="chart-bar__label">{props.name}</div>
        </div>
    )
}

export default ChartBar;