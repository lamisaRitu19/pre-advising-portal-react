import React from 'react';
import capacityIcon from '../../images/seats.png';

const ViewCapacity = () => {
    return (
        <div className='container-addCourseForm'>
            <h2><img src={capacityIcon} alt="" /> View Seat Capacity</h2>
            <div className='addCourseForm'>
                <div>
                    <span>Course Title: </span>
                    <input type="text" />
                </div>
                <div>
                    <span>Seat Capacity: <span></span> </span>
                </div>
            </div>
        </div>
    );
};

export default ViewCapacity;