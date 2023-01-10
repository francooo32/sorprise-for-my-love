import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import "./firstquestion.css"


const FirstQuestion = () => {

    const date = new Date();
    const actualDate = date.getDate();
    const actualMonth = date.getMonth();

    const[ selectedOption, setSelectedOption ] = useState();

    const opciones1 = [
      {label: 'Nier Automata', value: 'nier'},
      {label: 'Battlefield', value: 'battlefield'},
      {label: 'Final Fantasy', value: 'final'},
      {label: 'League of Legends', value: 'lol'}
    ]

    const opciones2 = [
      {label: 'Man Ray', value: 'mr'},
      {label: 'Brassaï', value: 'brs'},
      {label: 'Ansel Adams', value: 'asad'},
      {label: 'Robert Capa', value: 'rbcp'},
      {label: 'Imogen Cunningham', value: 'imogen'},
      {label: 'Dorothea Lange', value: 'doro'},
      {label: 'Annie Leibovitz', value: 'anie'},
      {label: 'Sebastião Salgado', value: 'sebi'}
    ]

    const handleEventChange = ({value}) => {
      console.log(value);
      setSelectedOption(value);
    }
    const navigation = useNavigate();

  if(selectedOption === "final" && actualDate <= 9)  {
        return (
          <div className="select-container">
            <h1>Elegiste bien!</h1>
            <h2> Mañana podras continuar!</h2>
          </div>
      );
    }else if(selectedOption === "final" && actualDate > 9){
      return (
        <div className="select-container">
        <h1>Excelente! podes proseguir amor</h1>
        <h3>Quien fue el o la renovadora del movimiento de fotografia directa?</h3>
        <div>
          <Select 
          className='select-box'
            options = {opciones2}
            onChange = {handleEventChange}
          />
          </div>
        </div>
  );
    }else if(selectedOption === "imogen" && actualDate <= 10){
      return (
        <div className="select-container">
          <h1>Elegiste bien!</h1>
          <h2>Mañana podras continuar!</h2>
        </div>
    );
    }else if(selectedOption === "imogen" && actualDate > 10){

    }

  return (
        <div className="select-container">
        <h1>Cual es mi juego favorito?</h1>
        <div>
          <Select 
          className='select-box'
            options = {opciones1}
            onChange = {handleEventChange}
          />
          </div>
        </div>
  );
}

export default FirstQuestion