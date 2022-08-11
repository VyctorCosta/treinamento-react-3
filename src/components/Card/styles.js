import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-width: 25rem;
  /* max-height: 20rem; */
  background-color: ${({ theme, card_type }) => theme[card_type].bg_color};
  color: ${({ theme, card_type }) => theme[card_type].text_color};
  padding: 2rem 0;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    border-radius: 50%;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .divFollowers {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    
    p {
      font-size: 2rem;
    }
  }
`;

export const DivInfoString = styled.span`
  display: flex;
`;

export const DivInfoNumbers = styled.div`
  display: flex;
`;