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

export const SearchSection = styled.section`
    background: #fff;
    height: 12.5rem;
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
    height: 12.5rem;
    justify-content: flex-start;
    flex-direction: row;
`;

export const RepositorySection = styled.div`
    margin: 0 auto;
    margin-top: 1rem;
    background: transparent;
    display: grid;
    justify-content: center;
    width: 80%;
    height: 6.25rem;
    grid-template-columns: repeat(1, auto);
    grid-gap: 0.9375rem;
    
    @media(min-width: 900px) {
        grid-template-columns: repeat(2, auto)
    };
    @media(min-width: 1200px) {
        grid-template-columns: repeat(3, auto)
    };
`;

export const UserDescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

export const Button = styled.button`
width: 6.25rem;
height: 2.5rem;
background: #73678a;
border: 0;
border-radius: 0.5rem;
color: #fff;
font-weight: 700;
display: inline-block;
text-align: center;
align-items: center;
text-decoration: none;
font-size: 0.875rem;
line-height: 40px;
transition: filter 0.2s;
    &:hover {
        filter: brightness(90%);
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 2.5rem;
    color: #73678a;
    border: 1px solid #73678a;
    border-radius: 8px;
    padding: 0 24px;
    margin-right: 1rem;
`

export const Avatar = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
`
