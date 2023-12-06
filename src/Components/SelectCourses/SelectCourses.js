import React from 'react';
import AllCourses from '../AllCourses/AllCourses';
import Plan from '../Plan/Plan';
import coursesIcon from '../../images/courses.jpg';
import planIcon from '../../images/planIcon.png';

const SelectCourses = () => {
    return (
        <div className='container'>
            <div className="makePlan">
                <div>
                    <h2><img src={coursesIcon} alt="" /> Offered Courses</h2>
                    <AllCourses></AllCourses>
                </div>
                <div>
                    <h2><img src={planIcon} alt="" /> Select Courses</h2>
                    <Plan></Plan>
                </div>
            </div>
        </div>
    );
};

export default SelectCourses;