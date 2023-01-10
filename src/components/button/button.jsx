import React from "react";
import { useState, useEffect } from 'react';
import {useRef} from 'react';
import {Navigate} from "react-router-dom"
import { BUTTON_TYPES } from "../../common/data/buttonConst";
import "./button.css"

const Button = (props) => {
  
  const {type, btnText}= props;

  const [goToPortfolio, setGoToPorfolio] = useState(false);

    const getButtonClass=()=>{
      switch(type){
        case BUTTON_TYPES.PRIMARY:
        return "primaryBtn button";

        case BUTTON_TYPES.SECONDARY:
            return 'secondaryBtn button';

            default:
              return 'tertiaryBtn button';
      }
    };

    if (goToPortfolio){
      
      return <Navigate to="/giftstep" />

    }

    if(type == BUTTON_TYPES.PRIMARY){

      return (
        <div className={`${getButtonClass()}`} onClick={() => {
          setGoToPorfolio(true);
        }} >
          {btnText}
        </div>
      )

    }

  }
  
  export default Button