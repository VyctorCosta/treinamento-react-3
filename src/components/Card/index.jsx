import Image from 'next/image';
import { Container } from './styles';

export default function Card() {
  return (
    <Container>
      <Image src="http://github.com/VyctorCosta.png" alt="Foto de perfil do usuario" width={200} height={200} />

      <span>
        <h1>name</h1>
        <h2>company</h2>
      </span>

      <div>
        <p>followers</p>
        <p>following</p>
      </div>
    </Container>
  );
}
