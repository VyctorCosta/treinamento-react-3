import Image from 'next/image';
import { Container } from './styles';

export default function Card() {
  return (
    <Container>
      <Image src="http://github.com/VyctorCosta.png" alt="Foto de perfil do usuario" width={200} height={200} />
    </Container>
  );
}
