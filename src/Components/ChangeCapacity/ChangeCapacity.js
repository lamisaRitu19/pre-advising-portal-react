import React from 'react';
import crossIcon from '../../images/crossIcon.png';
import capacityIcon from '../../images/seats.png';

const ChangeCapacity = () => {
    return (
        <div className='container-addCourseForm'>
            <p className='notify'>
                ✅ The course's seat capacity has been changed
                <img src={crossIcon} alt="" />
            </p>
            <h2><img src={capacityIcon} alt="" /> Change Seat Capacity</h2>
            <div className='addCourseForm'>
                <div>
                    <span>Course Title: </span>
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

export default ChangeCapacity;