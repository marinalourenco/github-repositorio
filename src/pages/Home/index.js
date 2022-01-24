import React, {useState} from 'react';
import ReactLoading from "react-loading";
import {FaGithubAlt} from "react-icons/fa"
import * as S from "./styles"
import { useGithubInfo } from './hooks';

// import { Container } from './styles';

function Home() {
  const [login, setLogin] = useState("")
  const {user, repositories, setSearchLogin, loading} = useGithubInfo()

  const handleSubmit = (e) =>{
      e.preventDefault()
      setSearchLogin(login)
  }

  return (
  <S.Container>
      <S.SearchSection>
          <S.Input
            placeholder="Usuario do GitHub"
            value={login}
            onChange={e=> setLogin(e.target.value)}
          />
          <S.Button onClick={handleSubmit} type="submit">Pesquisar</S.Button>
      </S.SearchSection>
      {loading?(
        <S.LoadingSection>
          <ReactLoading type={"spinningBubbles"} color="#571089" />
          <div><strong>loading...</strong></div>
        </S.LoadingSection>      
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
         <div>
            oi
            </div>
        ))}
        </S.RepositorySection>
      </>
      ))}
      
  </S.Container>
  );
}

export default Home;