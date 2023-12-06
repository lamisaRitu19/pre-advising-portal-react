import React from 'react';
import './Home.css';
import ViewCapacity from '../ViewCapacity/ViewCapacity';

const Home = () => {
    return (
        <div className='container'>
            <div className="home">
                <button>View courses</button>
                <button>Select courses</button>
                <button>Make plan</button>
                <button>Add courses</button>
                <button onClick={ViewCapacity}>View capacity</button>
                <button>Change capacity</button>
            </div>
        </div>
    );
};

export default Home;