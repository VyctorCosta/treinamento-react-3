import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 25rem;
  min-height: 30rem;
  background-color: ${({ theme }) => theme.card.bg_color};
  color: ${({ theme }) => theme.card.text_color};

  img {
    border-radius: 50%;
  }
`;

export const DivInfoString = styled.span`
  display: flex;
`;

export const DivInfoNumbers = styled.div`
  display: flex;
`;