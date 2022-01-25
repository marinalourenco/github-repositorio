import React from 'react';
import {FaGithubAlt} from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

function RepositoryBox(repos) {
    const navigate = useNavigate()
    const handleNavigateToDetail = () => {
        navigate(`/detail/${repos.full_name}`)
     }
  return (
    <S.RepositoryBox onClick={()=> handleNavigateToDetail()}>
        <FaGithubAlt size={42}/>
        <div>{repos.full_name}</div>
    </S.RepositoryBox>
  );
}

export default RepositoryBox;