import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;

  @media (max-width: 48rem) {
    gap: 12px;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  @media (max-width: 48rem) {
    display: none;
  }
`;

export const WelcomePageImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const RightContainer = styled.div`
  width: 50%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48rem) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const WelcomeText = styled.h2`
  text-align: center;
`;
