import React, {useState} from 'react';
import * as S from "./styles"
import { useGithubInfo } from './hooks';
import Loading from '../../components/Loading';
import InitialSection from '../../components/InitialSection';
import RepositoryBox from '../../components/RepositoryBox';

// import { Container } from './styles';

function Home() {
  const [login, setLogin] = useState("")
  const {user, repositories, setSearchLogin, loading, error} = useGithubInfo()

  const handleSubmit = (e) =>{
      e.preventDefault()
      setSearchLogin(login)
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
        <InitialSection>
          {!error?"#OneStudio Github Repositório":"Algo de errado, não encontramos seu usuario"}
        </InitialSection>
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
          <RepositoryBox {...repos}/>
        ))}
        </S.RepositorySection>
      </>
      ))}
      
  </S.Container>
  );
}

export default Home;