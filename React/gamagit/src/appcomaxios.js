//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios  from 'axios';


function App(props) {
  const [usuario, setUsuario] = useState('');

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }
  return (

    

    <>
      <p>{usuario}</p>
      <h1>{props.title}{props.user}</h1>
      <input placeholder="Usuário" className="usuarioInput" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
    
  );
}

export default App;
