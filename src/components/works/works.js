import React, { useState } from "react";
import "./works.css";
import { CardBox } from "../home/home";
import ChildFormatForPopUp from "./childFormatForPopUp";
import myWorks from "../../images/my-works.png";
import jnjIcon from "../../images/workIcon/jnjIcon.png";
import ishelfInsightIcon from "../../images/workIcon/ishelfInsightIcon.png";
import cciIcon from "../../images/workIcon/cciIcon.png";
import maxisIcon from "../../images/workIcon/maxisIcon.png";
import ccaiIcon from "../../images/workIcon/ccaiIcon.png";
import coeIcon from "../../images/workIcon/coeIcon.png";
import oracleIcon from "../../images/workIcon/oracleIcon.png";
import ntIcon from "../../images/workIcon/ntIcon.png";

const workData = [
  {
    para: "MORE ABOUT ME",
    head2: "Oracle",
    imgHeight: "14rem",
    hrefUrl: "#",
    imgSrc: oracleIcon,
    imgAlt: "My Works",
    height: "18.7rem",
    popUpTriggerKey: "oracle",
  },
  {
    para: "MORE ABOUT ME",
    head2: "Northern Trust",
    imgHeight: "14rem",
    hrefUrl: "#",
    imgSrc: ntIcon,
    imgAlt: "My Works",
    height: "18.7rem",
    popUpTriggerKey: "northern_trust",
  },
];
const Works = () => {
  const [projectPopupTrigger, setProjectPopupTrigger] = useState(false);
  const [projectWorkDataKey, setProjectWorkDataKey] = useState("false");
  const handleTriggerProjectPopUp = (projectWorkKey) => {
    let getWorkPageId = document.getElementById("work-fragment-id");
    getWorkPageId.classList.add("blur-work-fragment");
    setProjectWorkDataKey(projectWorkKey);
    setProjectPopupTrigger(true);
  };
  const handleCloseProjectPopUp = () => {
    let getWorkPageId = document.getElementById("work-fragment-id");
    getWorkPageId.classList.remove("blur-work-fragment");
    setProjectPopupTrigger(false);
  };

  return (
    <>
         {" "}
      <div className="works-fragment" id="work-fragment-id">
             {" "}
        <div className="works-section">
                 {" "}
          <div className="works-left">
                     {" "}
            <div
              className="works-left-top"
              onClick={() => handleTriggerProjectPopUp("johnson_n_johnson")}
            >
                         {" "}
              <CardBox
                para={"MORE ABOUT ME"}
                head2={"Johnson & Johnson"}
                imgHeight={"18rem"}
                hrefUrl="#"
                imgSrc={jnjIcon}
                imgAlt={"My Works"}
                height={"22rem"}
              />
                       {" "}
            </div>
                     {" "}
            <div
              className="works-left-bottom"
              onClick={() => handleTriggerProjectPopUp("maxis")}
            >
                         {" "}
              <CardBox
                para={"MORE ABOUT ME"}
                head2={"Maxis"}
                imgHeight={"18rem"}
                hrefUrl="#"
                imgSrc={maxisIcon}
                imgAlt={"My Works"}
                height={"22rem"}
              />
                       {" "}
            </div>
                   {" "}
          </div>
                         {" "}
          <div className="works-right">
                      <h1 className="works-right-top-h1"> * ALL PROJECTS *</h1> 
                   {" "}
            <div className="works-right-top">
                         {" "}
              <div
                className="works-right-top-left"
                onClick={() => handleTriggerProjectPopUp("ishelf_insight")}
              >
                             {" "}
                <CardBox
                  para={"MORE ABOUT ME"}
                  head2={"ISHELF INSIGHT"}
                  imgHeight={"14rem"}
                  hrefUrl="#"
                  imgSrc={ishelfInsightIcon}
                  imgAlt={"My Works"}
                  height={"18.7rem"}
                />
                           {" "}
              </div>
                         {" "}
              <div
                className="works-right-top-right"
                onClick={() =>
                  handleTriggerProjectPopUp("cognitive_case_intake")
                }
              >
                             {" "}
                <CardBox
                  para={"MORE ABOUT ME"}
                  head2={"Cognitive Case Intake"}
                  imgHeight={"14rem"}
                  hrefUrl="#"
                  imgSrc={cciIcon}
                  imgAlt={"My Works"}
                  height={"18.7rem"}
                />
                           {" "}
              </div>
                       {" "}
            </div>
                     {" "}
            <div
              className="works-right-bottom"
              onClick={() => handleTriggerProjectPopUp("ccai")}
            >
                         {" "}
              <div className="works-right-bottom-left">
                             {" "}
                <CardBox
                  para={"MORE ABOUT ME"}
                  head2={"CCAI"}
                  imgHeight={"14rem"}
                  hrefUrl="#"
                  imgSrc={ccaiIcon}
                  imgAlt={"My Works"}
                  height={"18.7rem"}
                />
                           {" "}
              </div>
                         {" "}
              <div
                className="works-right-bottom-right"
                onClick={() => handleTriggerProjectPopUp("coe_portal")}
              >
                             {" "}
                <CardBox
                  para={"MORE ABOUT ME"}
                  head2={"COE Portal"}
                  imgHeight={"14rem"}
                  hrefUrl="#"
                  imgSrc={coeIcon}
                  imgAlt={"My Works"}
                  height={"18.7rem"}
                />
                           {" "}
              </div>
                       {" "}
            </div>
                   {" "}
          </div>
               {" "}
        </div>
             {" "}
        <div className="works-json-outer-bottom">
                 {" "}
          {workData.map((eachWork, index) => {
            return (
              <div
                className="works-json-inner-bottom"
                key={index}
                onClick={() =>
                  handleTriggerProjectPopUp(eachWork.popUpTriggerKey)
                }
              >
                             {" "}
                <CardBox
                  para={eachWork.para}
                  head2={eachWork.head2}
                  imgHeight={eachWork.imgHeight}
                  hrefUrl={eachWork.hrefUrl}
                  imgSrc={eachWork.imgSrc}
                  imgAlt={eachWork.imgAlt}
                  height={eachWork.height}
                />
                           {" "}
              </div>
            );
          })}
               {" "}
        </div>
           {" "}
      </div>
             {" "}
      {projectPopupTrigger && (
        <ChildFormatForPopUp
          handleCloseProjectPopUp={handleCloseProjectPopUp}
          projectWorkDataKey={projectWorkDataKey}
        />
      )}
         {" "}
    </>
  );
};
export default Works;
