import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import LightTheme from "../styles/theme/LightTheme.json"
import DarkTheme from "../styles/theme/DarkTheme.json"
import Card from "../components/Card";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  header {
    display: flex;
    justify-content: flex-end;
    padding: 2rem 4rem;

    button {
      padding: 1.5rem 2rem;
      border: none;
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.main_card.bg_color};
      color: ${({ theme }) => theme.main_card.text_color};
      cursor: pointer;
    }
  }
`;

const DivMainCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
`;

const DivSecondaryCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
`;

export default function Home() {
  const [theme, setTheme] = useState(LightTheme);

  const toggleTheme = () => {
    setTheme(theme.theme_name === "light" ? DarkTheme : LightTheme);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <header>
          <button onClick={toggleTheme}>Mudar Tema</button>
        </header>

        <DivMainCard>
          <Card card_type="main_card"/>
        </DivMainCard>

        <DivSecondaryCard>
          <Card card_type="follower_card" />
          <Card card_type="follower_card" />
          <Card card_type="follower_card" />
          <Card card_type="follower_card" />
          <Card card_type="follower_card" />
          <Card card_type="following_card" />
          <Card card_type="following_card" />
          <Card card_type="following_card" />
          <Card card_type="following_card" />
          <Card card_type="following_card" />
        </DivSecondaryCard>
      </Main>
    </ThemeProvider>
  );
}
