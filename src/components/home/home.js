

import React from 'react';
import './home.css';
// import me from '../../images/me.png';
import me from '../../images/arpit.jpg';
import myWorks from '../../images/my-works.png';
import projectsIcon from '../../images/workIcon/projectsIcon.png';
import NextBtn from '../common/next';
import MiddleComponent from './middleComponent';
import BottomComponent from './bottomComponent';

export const CardBox = (props) => {
    const hg = props.height ? props.height : '12rem';
    const imghg = props.imgHeight ? props.imgHeight : '';
    const imgwt = props.imgWidth ? props.imgWidth : '100%';
    return(
        <div className='card-box' style={{'height':hg}}>
            <div>
                <img src={props.imgSrc} alt={props.imgAlt} style={{'height':imghg, 'width':imgwt}} />
            </div>
            <div className='home-right-credential-text'>                                
                <div  className='home-right-credential-btn'>
                    <p> {props.para} </p>
                    <h2> {props.head2} </h2>
                </div>
                <div className='home-right-credential-nextbtn'>
                    <a href={props.hrefUrl}>
                        <NextBtn />
                    </a>
                </div>
            </div>
        </div>
    )
}

export const BigCardBox = (props) => {
    let hg = props.height ? props.height : '12rem';
    return(
        <div className='card-box' style={{'height':hg}}>
            {props.children}
            <div className='home-right-credential-text'> 
                { props.para &&                               
                    <div  className='home-right-credential-btn'>
                        <p> {props.para} </p>
                        <h2> {props.head2} </h2>
                    </div>
                }
                { props.nextBtn &&
                    <div className='home-right-credential-nextbtn'>
                        <a href={props.hrefUrl}>
                            <NextBtn />
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}

const Home = () => {
  return (
    <div className='home-fragment'>
        <div className='home-container'>
            <div className='home-left-container zoomOut  '> 
                <div className='home-left-me-img'>
                    <img src={me} alt='profile'/>
                </div>
                <div className='home-left-div-text'>
                    <h4> A WEB Developer </h4>
                    <h1> Arpit Jain. </h1>
                    <p> Web Developer based in India. </p>
                    <div className='home-left-btn'>
                        <br /><br />
                        <a href='#'>
                            <NextBtn />
                        </a>
                    </div>
                </div>
            </div>

            <div className='home-right-container zoomOut'> 
                <div className='home-right-moving-text-container'>
                    <div className='home-right-moving-text'>
                        <p> 
                            <nobr>  
                                LATEST WORK AND <strong> FEATURED * </strong> &nbsp; &nbsp;
                                LATEST WORK AND <strong> FEATURED * </strong> &nbsp; &nbsp;
                                LATEST WORK AND <strong> FEATURED * </strong> &nbsp; &nbsp;
                                LATEST WORK AND <strong> FEATURED </strong>
                            </nobr> 
                        </p>
                    </div>                
                </div>

                <div className='home-right-top-body'>
                    <div className='home-right-credential-box'>
                        <CardBox para={'MORE ABOUT ME'} head2={'Credentials'} 
                            hrefUrl='/about' imgSrc={myWorks} imgAlt={'My Works'} />
                    </div>
                    <div className='home-right-myWorks-box'>
                        {/* <CardBox para={'SHOWCASE'} head2={'Projects'} 
                            hrefUrl='/works' imgSrc={myWorks} imgAlt={'My Works'} /> */}
                        <CardBox para={'SHOWCASE'} head2={'Projects'} imgHeight={'8.2rem'}
                            hrefUrl='/works' imgSrc={projectsIcon} imgAlt={'Projects'} height={'12rem'} />
                    </div>
                </div>
            </div>
        </div>
        <MiddleComponent />
        <BottomComponent />
    </div>
  )
}

export default Home


