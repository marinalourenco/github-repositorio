import React from 'react';
import { useParams } from "react-router-dom"
import Loading from '../../components/Loading';
import { useGithubrepos } from './hooks';
import * as S from './styles'

function Detail() {
  const { repos_author, repos_name } = useParams()
  const {repositorio,languages,loading} =useGithubrepos(repos_author,repos_name)
  return (
    <S.Container>
        {loading?(
            <Loading />
        ):(
            repositorio.id?(
                <div>repositorio</div>
            ):(<div>nao existe</div>)
        )}
    </S.Container>
  );
}

export default Detail;