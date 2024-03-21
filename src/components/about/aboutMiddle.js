

import React from 'react'
import './about.css';
import { BigCardBox } from '../home/home';

const AboutMiddle = () => {
    return (
        <div className='aboutMiddle-container zoomOut'>
            <div className='aboutMiddle-left'>
                <BigCardBox height={'auto'}>
                    <div className='aboutMiddle-experience' >
                        <h3> EXPERIENCE </h3>
                        <ul>
                            <li>
                                <p className="date">2018 - 2021</p>
                                <h2>Technology Analyst</h2>
                                <p className="type">Infosys LTD</p>
                            </li>
                            <li>
                                <p className="date">2021 - 2023</p>
                                <h2>UI-UX Developer</h2>
                                <p className="type">Wipro LTD</p>
                            </li>
                        </ul>
                    </div>
                </BigCardBox>
            </div>
            <div className='aboutMiddle-right'>
                <BigCardBox height={'auto'}>
                    <div className='aboutMiddle-education'>
                        <h3> EDUCATION </h3>
                        <ul>
                            <li>
                                <p className="date">2012 - 2014</p>
                                <h2>Bachelor of Technology </h2>
                                <p className="type">BPS</p>
                            </li>
                            <li>
                                <p className="date">2014 - 2018</p>
                                <h2>Bachelor of Technology </h2>
                                <p className="type">DCRUST</p>
                            </li>
                        </ul>
                    </div>
                </BigCardBox>
            </div>
        </div>
    )
}

export default AboutMiddle


