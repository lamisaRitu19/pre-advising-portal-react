import React from 'react';
import AllCourses from '../AllCourses/AllCourses';
import './ViewCourses.css';

const ViewCourses = () => {
    return (
        <div className='container'>
            <h2>View Courses</h2>
            <AllCourses></AllCourses>
        </div>
    );
};

export default ViewCourses;