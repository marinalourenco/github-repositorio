import React, {useState} from 'react';

import {FaGithubAlt} from "react-icons/fa"
import * as S from "./styles"
import { useGithubInfo } from './hooks';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

// import { Container } from './styles';

function Home() {
  const navigate = useNavigate()
  const [login, setLogin] = useState("")
  const {user, repositories, setSearchLogin, loading} = useGithubInfo()

  const handleSubmit = (e) =>{
      e.preventDefault()
      setSearchLogin(login)
  }

  const handleNavigateToDetail = (repos) => {
    
    navigate(`/detail/${repos.full_name}`)
  }

  return (
  <S.Container>
      <S.SearchSection>
          <S.Input
            placeholder="Usuário do GitHub"
            value={login}
            onChange={e=> setLogin(e.target.value)}
          />
          <S.Button onClick={handleSubmit} type="submit">Pesquisar</S.Button>
      </S.SearchSection>
      {loading?(
        <Loading />   
    ):(
      !user.login?(
        <S.InitialSection>
          <FaGithubAlt size={42}/>
          <div><strong>#OneStudio Github Repositório</strong></div>
        </S.InitialSection> 
      ):(
        <>
        <S.UserSection>
        <S.Avatar src={user.avatar_url}/>
        <S.UserDescriptionBox>
        <div><strong>{user.name || user.login}</strong></div>
        <div>{`Followers: ${user.followers} Following: ${user.following}`}</div>
        <div>{`Quantidade de Repositórios: ${user.public_repos}`}</div>
        </S.UserDescriptionBox>
      </S.UserSection>
      <S.RepositorySection>
        {repositories.map(repos => (
         <S.RepositoryBox key={repos.id} onClick={() => handleNavigateToDetail(repos)}>
            <FaGithubAlt size={42}/>
            <div>{repos.full_name}</div>
            </S.RepositoryBox>
        ))}
        </S.RepositorySection>
      </>
      ))}
      
  </S.Container>
  );
}

export default Home;