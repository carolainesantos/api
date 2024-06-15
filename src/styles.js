import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 2.5rem;
  row-gap: 3rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 220px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weigth: bold;
    font-size: 120%;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.05);
  }
`;

export const AppContainer = styled.div`
  background-color: #1a1a1a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const RoutesContainer = styled.div`
  flex: 1;
  height: 100%;
`;

export const LoginContent = styled.section`
  border: 1px solid #365e32;
  border-radius: 8px;
  padding: 24px;
  width: 500px;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginTitle = styled.h2`
  color: #365e32;
  text-align: center;
  margin-bottom: 30px;
`;

export const LoginForm = styled.form`
  color: #365e32;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.footer`
  background-color: #365e32;
  padding: 16px;
  color: #81a263;
  text-align: center;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

export const FooterAbout = styled.p`
  width: 50%;
`;

export const FooterAuthor = styled.p`
  display: flex;
  align-items: flex-end;
  flex: 1;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  gap: 16px;
`;

export const MovieTitle = styled.p`
  color: white;
  font-size: 24px;
  text-align: center;
`;
