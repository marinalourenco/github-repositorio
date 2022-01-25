import React from 'react';
import * as S from './styles';
import {FaGithubAlt} from "react-icons/fa"

function InitialSection({children}) {
  return (
    <S.InitialSection>
        <FaGithubAlt size={42}/>
        <div><strong>{children}</strong></div>
    </S.InitialSection> 
  );
}

export default InitialSection;