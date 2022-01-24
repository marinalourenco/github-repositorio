import React from 'react';
import ReactLoading from "react-loading";
import * as S from './styles';

function Loading() {
  return ( 
  <S.LoadingSection>
    <ReactLoading type={"spinningBubbles"} color="#571089" />
    <div><strong>loading...</strong></div>
  </S.LoadingSection>
  )
}

export default Loading;