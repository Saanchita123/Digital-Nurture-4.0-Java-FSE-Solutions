import React from "react";
const CourseDetails =(props)=>{
    return (
        <div>
            <h1>Course Details </h1>
            <ul>
                {props.courses.map((courses,index)=>(
                    <div key={index}>
                        <h3>{courses.name}</h3>
                        <p>{courses.date}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
}
export default CourseDetails;