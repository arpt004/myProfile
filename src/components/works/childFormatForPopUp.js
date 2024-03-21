import React from "react";
import PopUp from "../common/popUp/popUp";
import projectWorkData from "./projectWorkData.json";
const ChildFormatForPopUp = ({
  handleCloseProjectPopUp,
  projectWorkDataKey,
}) => {
  console.log(projectWorkData[projectWorkDataKey]);
  return (
    <div>
             {" "}
      <PopUp>
                   {" "}
        <button
          className="child-format-for-popup-close-btn"
          onClick={handleCloseProjectPopUp}
        >
          {" "}
          &times;{" "}
        </button>
                   {" "}
        <h1 className="child-format-for-popup-h1">
          {" "}
          {projectWorkData[projectWorkDataKey].header}{" "}
        </h1>
                   {" "}
        <div>
                         {" "}
          <h3 className="child-format-for-popup-rar">
            {" "}
            Roles and Responsibilities
          </h3>
                         {" "}
          <ul className="child-format-for-popup-ul">
                               {" "}
            {projectWorkData[projectWorkDataKey].responsibilities.map(
              (eachResponsibily, index) => {
                return <li key={index}> {eachResponsibily} </li>;
              }
            )}
                           {" "}
          </ul>
                     {" "}
        </div>
               {" "}
      </PopUp>
         {" "}
    </div>
  );
};
export default ChildFormatForPopUp;
