import React, { useEffect, useState } from 'react';
import "./giftstep.css"
import FirstQuestion from '../../../components/firstquestion/firstquestion.jsx';
import aboutPhoto from '../../../public/media/bannerRegalo.jpg';



const GiftStep = () => {

  return (
    <div className="giftstep-container">
      <img src={aboutPhoto} alt="aboutImg"></img>
        <div className="giftstep-text">
            <h1>RESPONDE Y GANÁ!</h1>
        </div>
        <FirstQuestion/>
    </div>
  )
}

export default GiftStep