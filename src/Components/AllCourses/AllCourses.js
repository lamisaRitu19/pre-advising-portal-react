import React from 'react';
import './AllCourses.css';

const AllCourses = () => {
    return (
        <div>
            <div className="allCourses">
                <div className="course-type fundamental">
                    <h3>Fundamental</h3>
                    <div className="courses">
                        <div className="add-course">
                            <input type="checkbox" name="" id="" />
                            <div className="course">
                                <span className='course-code'>CSE301</span>
                                <span>Database</span>
                                <span>3 credits</span>
                            </div>
                        </div>
                        <div className="prerequisite">
                            <span className='course-code'>CSC101</span>
                            <span>Fundamental coding</span>
                        </div>
                    </div>
                    <div className="courses">
                        <div className="add-course">
                            <input type="checkbox" name="" id="" />
                            <div className="course">
                                <span className='course-code'>CSE301</span>
                                <span>Database</span>
                                <span>3 credits</span>
                            </div>
                        </div>
                        <div className="prerequisite">
                            <span className='course-code'>CSC101</span>
                            <span>Fundamental coding</span>
                        </div>
                    </div>
                </div>
                <div className="course-type core">
                    <h3>Core</h3>
                    <div className="courses">
                        <div className="add-course">
                            <input type="checkbox" name="" id="" />
                            <div className="course">
                                <span className='course-code'>CSE301</span>
                                <span>Database</span>
                                <span>3 credits</span>
                            </div>
                        </div>
                        <div className="prerequisite">
                            <span className='course-code'>CSC101</span>
                            <span>Fundamental coding</span>
                        </div>
                    </div>
                    <div className="courses">
                        <div className="add-course">
                            <input type="checkbox" name="" id="" />
                            <div className="course">
                                <span className='course-code'>CSE301</span>
                                <span>Database</span>
                                <span>3 credits</span>
                            </div>
                        </div>
                        <div className="prerequisite">
                            <span className='course-code'>CSC101</span>
                            <span>Fundamental coding</span>
                        </div>
                    </div>
                </div>
                <div className="course-type optional">
                    <h3>Optional</h3>
                    <div className="courses">
                        <div className="add-course">
                            <input type="checkbox" name="" id="" />
                            <div className="course">
                                <span className='course-code'>CSE301</span>
                                <span>Database</span>
                                <span>3 credits</span>
                            </div>
                        </div>
                        <div className="prerequisite">
                            <span className='course-code'>CSC101</span>
                            <span>Fundamental coding</span>
                        </div>
                    </div>
                    <div className="courses">
                        <div className="add-course">
                            <input type="checkbox" name="" id="" />
                            <div className="course">
                                <span className='course-code'>CSE301</span>
                                <span>Database</span>
                                <span>3 credits</span>
                            </div>
                        </div>
                        <div className="prerequisite">
                            <span className='course-code'>CSC101</span>
                            <span>Fundamental coding</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;