import {useState} from 'react';
import axios  from 'axios';
import * as S from './styled';
import {useNavigate} from 'react-router-dom';


export default function App() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response =>{
        
        const repositories = response.data; // retorna um objeto com as informaçoes solicitadas

        const repositoriesName = []
        repositories.forEach((item) => repositoriesName.push(item.name));
        
        localStorage.setItem('RepositoriesName', JSON.stringify(repositoriesName));  //pega um objeto e transforma numa string
        setErro(false);
        navigate('/repositories');  
        })
      
        .catch(err => setErro(true))

    };

  
  return (

    <S.HomeContainer>
      <S.Content>
      <S.Input placeholder="Usuário" className="usuarioInput" value={usuario} onChange={e => {setUsuario(e.target.value); setErro(false)}} />
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>

      {erro ? <S.ErrorMsg>Ocorreu um erro. Tente de novo!</S.ErrorMsg> : ''}
    </S.HomeContainer>
    
  );
  
}

