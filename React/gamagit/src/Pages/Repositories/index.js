import React, {useEffect, useState } from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

function Repositories(){
    const navigate = useNavigate(); // history
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {

        let repositoriesName = localStorage.getItem('RepositoriesName');

        console.log(repositoriesName);
        
        if(repositoriesName){ // entra se houver algo dentro da variavel que nao seja false
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        }else{
            navigate("/");
        }
    }, [navigate]);

    return(
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List>
                {repositories.map((repository,index) => <S.ListItem key={index}> {repository} </S.ListItem>)}
            </S.List>

            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}

export default Repositories;