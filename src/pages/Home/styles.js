import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: #571089;
`;

export const SearchSection = styled.section`
    background: #fff;
    height: 200px;
    width: 80%;
    margin-top: 1rem;
    border-radius: 1rem;
    border: 1px solid #ccc;
    padding: 0 2rem;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: center;

    filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.06));
`;

export const UserSection = styled(SearchSection)`
    height: 400px;
    justify-content: flex-start;
    flex-direction: row;
`;

export const RepositorySection = styled.div`
    background: transparent;
`;

export const LoadingSection = styled(SearchSection)`
    height: 60%;
    flex-direction: column;
    justifiy-content: space-around;
`;

export const InitialSection = styled(SearchSection)`
    height: 60%;
    flex-direction: column;
    justifiy-content: space-around;
`;

export const UserDescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

export const Button = styled.button`
width: 200px;
height: 40px;
background: #e02041;
border: 0;
border-radius: 8px;
color: #fff;
font-weight: 700;
display: inline-block;
text-align: center;
align-items: center;
text-decoration: none;
font-size: 18px;
line-height: 40px;
transition: filter 0.2s;
    &:hover {
        filter: brightness(90%);
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    margin-right: 1rem;
`

export const Avatar = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
`
