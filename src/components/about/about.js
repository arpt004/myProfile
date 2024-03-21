

import React from 'react';
import './about.css';
import { BigCardBox } from '../home/home';
import aboutMe from '../../images/arpit.jpg';
// import myWorks from '../../images/my-works.png';
import AboutMiddle from './aboutMiddle';
import AboutBottom from './aboutBottom';


const About = () => {
  return (
    <div className='about-fragment' >
        <div className='about-section zoomOut'>
            <div className='about-left-top-container'>
                <BigCardBox height={'auto'}>
                    <img src={aboutMe} alt='About Me' className='about-left-top-img'/>
                </BigCardBox>
            </div>

            <div className='about-right-top-container'>
                <h1 className='about-right-top-h1'> * SELF-SUMMARY *</h1>
                <BigCardBox height={'auto'}>
                    <div>
                        {/* <div className='about-right-top-img'>
                            <img src={myWorks} alt='bottom' />
                        </div> */}
                        <div className='about-right-top-text'>
                            <br/> <br/> <br/> 
                            <h1> Arpit Jain </h1>
                            {/* <p> 
                                I am an Indian Web Developer designer. I have a diverse range of experience having worked across various fields and industries.
                            </p> */}
                            <p>
                            Dynamic and creative engineer with an experience in multiple technologies. Seeking to work in a project where I get
a chance to work on different technologies and an opportunity to improve my technical skills. I am a quick learner
and believe in working hard with dedication and interest to help in the productivity of the organization
                            </p>
                        </div>
                    </div>
                </BigCardBox>
            </div>
        </div>
        <AboutMiddle />
        <AboutBottom />
    </div>
  )
}

export default About


