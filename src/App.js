import { useState } from 'react';
import Banner from'./componentes/Banner';
import Formulario from'./componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: '',
      corPrimaria: '',
      corSecundaria: ''
    }
    {
      nome: '',
      corPrimaria: '',
      corSecundaria: ''
    }
    {
      nome: '',
      corPrimaria: '',
      corSecundaria: ''
    }
    {
      nome: '',
      corPrimaria: '',
      corSecundaria: ''
    }
    {
      nome: '',
      corPrimaria: '',
      corSecundaria: ''
    }
    {
      nome: '',
      corPrimaria: '',
      corSecundaria: ''
    }
    {
      nome: '',
      corPrimaria: '',
      corSecundaria: ''
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Front-end"/>
      <Time nome="Data Science"/>
      <Time nome="Devops"/>
      <Time nome="Ux e Design"/>
    </div>
  );
}

export default App;
