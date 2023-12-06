import React from 'react';
import editIcon from '../../images/editIcon.png';
import crossIcon from '../../images/crossIcon.png';
import './Plan.css';

const Plan = () => {
    return (
        <div className="plan">
            <div className="semester">
                <div className='semester-title'>
                    <h4>Autumn 2022</h4>
                    <p>Total credit: <span>10</span></p>
                    <img src={editIcon} alt="" />
                </div>
                <div className="semester-courses">
                    <div className="del-course">
                        <div className="course">
                            <span className='course-code'>CSE301</span>
                            <span>Database</span>
                            <span className='course-credit'>3 credits</span>
                        </div>
                        <img src={crossIcon} alt="" />
                    </div>
                    <div className='buttons'>
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;