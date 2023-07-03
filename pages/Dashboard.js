import React from 'react';
import Header from '../Components/Organisms/Header';
import { NavLink, useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import './dashboard.css'
const Dashboard = () => {

    return (
        <div >
            <div className='maincontainer'>
                <div className='line'>
                    <h6 style={{ color: 'yellow' }}> ---- WELLCOME TO SOFTEC</h6>
                    <h1 style={{ color: 'white' }}>A1-Driven Cyber<br /> Security<br /> Solutions</h1>
                </div>

                <div className='imgcontainer'>
                    <div>
                        <img className='img' src='/hero.png' />
                    </div>
                    <div >
                        <img className='img2' src='/ring.png' />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Dashboard

