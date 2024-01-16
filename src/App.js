import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
<<<<<<< HEAD
import { v4 as uuidv4 } from 'uuid';
=======
import { v4 as uuidv4 } from 'uuid'
>>>>>>> e198ff12fc4fd4223dd782552a9f58ff1bca5bb8

function App() {

  const [times, setTimes] = useState ([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      nome: 'Front-end',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    }
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador]);
  };

  function mudarCorDoTime(cor, id) {
    console.log(cor)
    console.log(id)
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => 
        <Time 
          mudarCor={mudarCorDoTime}
          key={time.nome} 
          id={time.id}
          nome={time.nome} 
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;