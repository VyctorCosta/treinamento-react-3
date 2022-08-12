import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import LightTheme from "../styles/theme/LightTheme.json"
import DarkTheme from "../styles/theme/DarkTheme.json"
import Card from "../components/Card";
import axios from "axios";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 145rem;
  margin: 0 auto;

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
  const [objUser, setobjUser] = useState({});
  const [objUserFollowers, setObjUserFollowers] = useState([]);
  const [objUserFollowing, setObjUserFollowing] = useState([]);
  
  const toggleTheme = () => {
    setTheme(theme.theme_name === "light" ? DarkTheme : LightTheme);
  }

  useEffect(() => {
    const Requisicao = async () => {
      const resUser = await axios.get("https://api.github.com/users/VyctorCosta");
      setobjUser(resUser.data);
      const resFollowers = axios.get(resUser.data.followers_url);
      const resFollowing = axios.get(resUser.data.following_url.replace("{/other_user}", ""));
      const [followers, following] = await Promise.all([resFollowers, resFollowing])
      setObjUserFollowers(followers.data)
      setObjUserFollowing(following.data)
      console.log(followers.data)
    }
    Requisicao();
  }, [])
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <header>
          <button onClick={toggleTheme}>Mudar Tema</button>
        </header>

        <DivMainCard>
          <Card objUser={objUser} card_type="main_card" avatar_url={objUser.avatar_url}/>
        </DivMainCard>

        <DivSecondaryCard>
          {objUserFollowers.map((obj) => {
            return <Card key={obj.id} login={obj.login} card_type={"follower_card"} />
          })}
          {objUserFollowing.map((obj) => {
            return <Card key={obj.id} login={obj.login} card_type={"following_card"} />
          })}
        </DivSecondaryCard>
      </Main>
    </ThemeProvider>
  );
}
