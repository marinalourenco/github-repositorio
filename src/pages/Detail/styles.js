import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: #571089 repeat;
`;

export const DetailSection = styled.section`
    background: #fff;
    height: 80%;
    width: 80%;
    margin-top: 1rem;
    border-radius: 1rem;
    border: 1px solid #ccc;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    position: relative;
    
    filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.06));
`;

export const DetailArea = styled.div`
    margin-top: 1rem;
    height: 3.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const DetailBox = styled.div`
    height: 3.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const DetailInfo = styled.div`
    margin-left: 10px;
    
`

export const DetailTitle = styled.h1`
    font-size: 1rem;
    color: #571089;
`

export const DetailAuthor = styled.h2`
    font-size: 0.75rem;
`

export const Avatar = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
`

export const LanguagesBox = styled.div`
  align-items: center;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  width: 250px;
  @media (max-width: 768px) {
    margin-top: 10px;
    border: 2px solid #fff;
    width: 300px;
  }
`;

export const LanguagesText = styled.h3`
  font-size: 10px;
  margin-top: 5px;
`;

export const LanguagesTitle = styled.h2`
  font-size: 16px;
  margin: 5px auto;
`;