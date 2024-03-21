import React from "react";
import "./about.css";
import { CardBox, BigCardBox } from "../home/home";
// import aboutMe from '../../images/about.png';
import myWorks from '../../images/my-works.png';
// import NextBtn from '../common/next';
import projectsIcon from '../../images/workIcon/projectsIcon.png';
import IconReact from '../common/iconSvgs/iconReact';
import IconNodejs from '../common/iconSvgs/iconNodejs';
import IconDialogflow from '../common/iconSvgs/iconDialogflow';
import IconLogoJavascript from '../common/iconSvgs/iconLogoJavascript';

const AboutBottom = () => {
  return (
    <div className="aboutBottom-container zoomOut">
    
      <div className="aboutBottom-left">
        {/* <CardBox para={'STAY WITH ME'} head2={'Profiles'}          hrefUrl='#' imgSrc={myWorks} imgAlt={'My Works'} /> */}     {" "}
        <CardBox
          para={"SHOWCASE"}
          head2={"Projects"}
          imgHeight={"8.2rem"}
          hrefUrl="/works"
          imgSrc={projectsIcon}
          imgAlt={"Projects"}
          height={"12rem"}
        />
      </div>
      <div className="aboutBottom-center">
        <BigCardBox
          para={"SPECIALIZATION"}
          head2={"Services Offering"}
          hrefUrl="#"
          nextBtn={true}
        >
          <div className="middle-center-icons icon-react">
            <span>
              <IconReact />
            </span>
            <span>
              <IconNodejs />
            </span>
            <span>
              <IconDialogflow />
            </span>
            <span>
              <IconLogoJavascript />
            </span>
          </div>
        </BigCardBox>
      </div>
      <div className="aboutBottom-right">
        <CardBox
          para={"MORE ABOUT ME"}
          head2={"Credentials"}
          hrefUrl="#"
          imgSrc={myWorks}
          imgAlt={"My Works"}
        />
      </div>
    </div>
  );
};
export default AboutBottom;
