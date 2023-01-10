import React from 'react'
import "./cover.css"
import aboutPhoto from "../../public/media/bannerRegalo.jpg"
import Button from '../../components/button/button.jsx';
import { BUTTON_TYPES } from '../../common/data/buttonConst';

const Cover = () => {

  return (
    <div className="cover-container">
        {/* <video className="video" src={testVideo} autoPlay loop muted/> */}
        <img src={aboutPhoto} alt="aboutImg"></img>
        <h1>HOLA MI AMOR</h1>
        <h2>FELIZ CUMPLEAÑOS!</h2>
        <p>Fuiste seleccionada para ganar alto regalo</p>
        <p>Toca el boton para participar!</p>
        <div className="button-wrapper">
          <Button type={BUTTON_TYPES.PRIMARY} btnText="Participar!" />
        </div>
    </div>
  )
}

export default Cover