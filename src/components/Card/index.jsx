import Image from 'next/image';
import { Container } from './styles';

export default function Card({ card_type }) {
  return (
    <Container card_type={card_type}>
      <Image
        src="http://github.com/VyctorCosta.png"
        alt="Foto de perfil do usuario"
        width={110}
        height={110}
      />

      <div className="wrapper">
        <span>
          <h1>name</h1>
          <h2>company</h2>
        </span>

        <div className="divFollowers">
          <p>followers: </p>
          <p>following: </p>
        </div>
      </div>
    </Container>
  );
}
