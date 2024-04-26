import React from "react";
import "./TimeTable.css";

export default function TimeTable({ data }) {
    // Function to calculate the maximum number of subjects for any given day
    const maxSubjectsPerDay = () => {
        let max = 0;
        for (const streamData of Object.values(data)) {
            for (const dayData of Object.values(streamData)) {
                if (dayData.length > max) {
                    max = dayData.length;
                }
            }
        }
        return max;
    };

    const maxSubjects = maxSubjectsPerDay();

    return (
        <>
            <div className="container">
                <div style={{ textAlign: 'center', fontSize: '35px', fontWeight: 'bolder' }}>TIMETABLE GENERATOR</div>
                <div className="container mt-4" style={{ width: '100%' }}>
                    {Object.keys(data).map((stream, index) => (
                        <div key={index} className="timetable-heading mt-4">
                            <div style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>STREAM {stream}</div>
                            <div className='mt-1' style={{ backgroundColor: '#3D3D3D', height: 'auto', borderRadius: '5px' }}>
                                <table id={`timetable-${stream}`}>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            {Array.from({ length: maxSubjects }, (_, i) => i + 1).map((hour) => (
                                                <th key={hour}>Hour {hour}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(data[stream]).map((day, index) => (
                                            <tr key={index}>
                                                <th>{day.toUpperCase()}</th>
                                                {data[stream][day].map((subject, index) => (
                                                    <td key={index}>{subject.subject}<br />{subject.teacher}</td>
                                                ))}
                                                {/* Add empty cells for remaining hours */}
                                                {Array.from({ length: maxSubjects - data[stream][day].length }).map((_, index) => (
                                                    <td key={`empty-${index}`} />
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
