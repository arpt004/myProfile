import React from "react";
import "./home.css";
import { CardBox, BigCardBox } from "./home";
import myWorks from "../../images/my-works.png"; 
// import NextBtn from '../common/next';
import profileIcon from '../../images/workIcon/profileIcon.png';
import IconReact from '../common/iconSvgs/iconReact';
import IconNodejs from '../common/iconSvgs/iconNodejs';
import IconDialogflow from '../common/iconSvgs/iconDialogflow';
import IconLogoJavascript from '../common/iconSvgs/iconLogoJavascript';

const MiddleComponent = () => {
  return (
    <div className="middleComponent-container zoomOut">
      <div className="middle-left">
        <CardBox
          para={"BLOG"}
          head2={"GFonts"}
          hrefUrl="#"
          imgSrc={myWorks}
          imgAlt={"Blog"}
        />{" "}
      </div>
      <div className="middle-center">
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
      <div className="middle-right">
        {/* <CardBox para={'STAY WITH ME'} head2={'Profiles'}                 hrefUrl='#' imgSrc={myWorks} imgAlt={'My Works'} />  */}{" "}
        <CardBox
          para={"STAY WITH ME"}
          head2={"Profiles"}
          imgHeight={"8.2rem"}
          hrefUrl="/about"
          imgSrc={profileIcon}
          imgAlt={"Profiles"}
          height={"12rem"}
        />
      </div>
    </div>
  );
};
export default MiddleComponent;
