import React from 'react';
import './AddCourses.css';
import coursesIcon from '../../images/courses.jpg';
import crossIcon from '../../images/crossIcon.png';

const AddCourses = () => {
    return (
        <div className='container-addCourseForm'>
            <p className='notify'>
                ✅ The course has been added
                <img src={crossIcon} alt="" />
            </p>
            <h2><img src={coursesIcon} alt="" /> Add Course</h2>
            <div className='addCourseForm'>
                <div>
                    <span>Course Title: </span>
                    <input type="text" />
                </div>
                <div>
                    <span>Course Code: </span>
                    <input type="text" />
                </div>
                <div>
                    <span>Course Type: </span>
                    <input type="text" />
                </div>
                <div>
                    <span>Credit Hour: </span>
                    <input type="text" />
                </div>
                <div>
                    <span>Seat Capacity: </span>
                    <input type="text" />
                </div>
                <button>Save</button>
            </div>
        </div>
    );
};

export default AddCourses;