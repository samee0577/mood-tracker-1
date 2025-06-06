// filepath: c:\Users\Shahid\Desktop\projects\mern-stack\mood-tracker\frontend\mooood\src\components\moodChart.jsx
import React, { useState } from "react";
import { getMood } from "../services/moodServices.js";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export function MoodChart({ moods }) {
    const [zoomOut,setZoomOut] =useState(false)

    const groupedByDate = moods.reduce((acc,mood) => {
        const date = mood.date;
        if(!acc[date]){
            acc[date] = [];
        }
        acc[date].push(mood.moodValue);
        return acc
    },{});

    const dateWiseData = Object.keys(groupedByDate).map(date => ({
        date,
        avgValue: Math.ceil(
            groupedByDate[date].reduce((sum, val) => sum + val, 0) / groupedByDate[date].length
        )
    }));

    return(
        <div className="chart-container">
            <LineChart  className="chart-frame" width={790} height={500} data={(zoomOut)?dateWiseData:moods}>
                <CartesianGrid  strokeDasharray="10 5"/>
                <XAxis dataKey={(zoomOut)?"date":"time"} />
                <YAxis domain={[-2,2]}/>
                <Tooltip />
                <Line type="monotone" dataKey={ (zoomOut)?"avgValue":"moodValue"} stroke={ (zoomOut)?"rgb(225, 31, 31)":"rgb(225, 31, 31)"} />
            </LineChart>
            <button className="submit-button" onClick={() => setZoomOut(!zoomOut)}>
                {zoomOut ? "Show Time-wise" : "Show Date-wise"}
            </button>
        </div>
    )
}