

import React, {useEffect, useState} from 'react';
import './home.css';
import { BigCardBox } from './home';
import myWorks from '../../images/my-works.png';
import NextBtn from '../common/next';

const SmallCard = (props) => {
    return(
        <div className='small-card-container'>
            <h2> {props.count}</h2>
            <p> {props.text1} </p>
            <p> {props.text2} </p>
        </div>
    )
}

const loopFunction = (count, updateFunc) => {
    for(let i=0; i<count; i++){
        setTimeout(() => {
            updateFunc(i+1)
        }, i*300)
    }
}

const BottomComponent = () => {

    const [years, setYears] = useState(0);
    const [clients, setClients] = useState(0);
    const [projects, setProjects] = useState(0);

    useEffect( () => {
        loopFunction(5, setYears)
        loopFunction(10, setClients)
        loopFunction(8, setProjects)
    },[])

  return (
    <div className='bottomComponent-container zoomOut'>
        <div className='bottom-left'>
            <BigCardBox hrefUrl='#' nextBtn={false}>
                <div className='botton-left-container'>
                    <div className='botton-left-container-exp'>
                        <SmallCard count={'+0'+years} text1={'YEARS'} text2={'EXPERIENCE'} />
                    </div>

                    <div className='botton-left-container-clients'>
                        <SmallCard count={'+'+clients} text1={'CLIENTS'} text2={'WORLDWIDE'} />
                    </div>

                    <div className='botton-left-container-projects'>
                        <SmallCard count={'+0'+projects} text1={'TOTAL'} text2={'PROJECTS'} />
                    </div>
                </div>
            </BigCardBox>
        </div>

        <div className='bottom-right'>
            <BigCardBox hrefUrl='#' nextBtn={false}>
                <div className='bottm-right-img-div'>
                    <img src={myWorks} alt='bottom' />
                </div>
                <div className='bottom-right-container'>
                    <h1 className='lets-work'> 
                        Let's <br /> Work <span>together.</span>
                    </h1>

                    <div className='bottom-right-nextbtn'>
                        <a href='/contact'>
                            <NextBtn />
                        </a>
                    </div>
                </div>
                
            </BigCardBox>
        </div>
    </div>
  )
}

export default BottomComponent


