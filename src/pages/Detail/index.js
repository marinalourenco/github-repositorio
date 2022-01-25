import React from 'react';
import { useParams } from "react-router-dom"
import Loading from '../../components/Loading';
import { useGithubrepos } from './hooks';
import {FaGithubAlt} from "react-icons/fa"
import * as S from './styles'
import RadarChartArea from '../../components/RadarChartArea';

function Detail() {
  const { repos_author, repos_name } = useParams()
  const {repositorio, languages, loading, error} = useGithubrepos(repos_author,repos_name)
  console.log(repositorio)
  return (
    <S.Container>
        {loading?(
            <Loading />
        ):(
            repositorio.id?(
                <S.DetailSection>
                  <S.DetailArea>
                    <S.DetailBox>
                    <S.Avatar src={repositorio.owner.avatar_url}/>
                    <S.DetailInfo>
                      <S.DetailTitle>{repositorio.name}</S.DetailTitle>
                      <S.DetailAuthor>{repositorio.owner.login}</S.DetailAuthor>
                    </S.DetailInfo>
                    </S.DetailBox>
                    <S.LanguagesBox>
                    <S.LanguagesTitle>Linguagens:</S.LanguagesTitle>
                    <div>
                    {languages.map((content) => (
                      <S.LanguagesText key={content.name}>
                        {`${content.name}: ${content.value} palavras`}
                      </S.LanguagesText>
                    ))}
                    </div>
                  </S.LanguagesBox>
                  </S.DetailArea>
                  <S.DashboardBox>
                      <S.RadarChartContainer>
                        <RadarChartArea data={languages}/>
                      </S.RadarChartContainer>
                  </S.DashboardBox>
                </S.DetailSection>
            ):(
            <div>nao existe</div>
          )
        )}
    </S.Container>
  );
}

export default Detail;