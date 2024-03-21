

import React from 'react';
import "./popUp.css";

const PopUp = (props) => {
  return (
    <div className='popup-container-outer'>
        <div className='popup-container-innner'>
            <div> {props.children} </div>
        </div>
    </div>
  )
}

export default PopUp


