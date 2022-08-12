import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Container } from './styles';

export default function Card({ card_type, login }) {
  const [objUser, setObjUser] = useState({})

  useEffect(() => {
    axios.get(`https://api.github.com/users/${login}`)
      .then(({ data }) => setObjUser(data))
  }, []);

  return (
    <Container card_type={card_type}>
      <Image
        // src={`http://github.com/${objUser?.login}.png`}
        src={objUser.avatar_url}
        alt="Foto de perfil do usuario"
        width={110}
        height={110}
      />

      <div className="wrapper">
        <span>
          <h1>{objUser.name ? objUser?.name : objUser.login}</h1>
          <h2>{objUser.company}</h2>
        </span>

        <div className="divFollowers">
          <p>followers: {objUser.followers}</p>
          <p>following: {objUser.following}</p>
        </div>
      </div>
    </Container>
  );
}
