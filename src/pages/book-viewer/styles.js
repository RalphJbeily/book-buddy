import styled from 'styled-components';

export const Container = styled.div`
  gap: 24px;
  padding: 24px;
  display: flex;

  @media (max-width: 48rem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ViewerCanvas = styled.div`
  width: 50%;
  height: 500px;

  @media (max-width: 48rem) {
    width: 100%;
    height: 350px;
  }
`;

export const RightContainer = styled.div`
  gap: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 48rem) {
    align-items: center;
  }
`;

export const LabelValueContainer = styled.div`
  gap: 6px;
  display: flex;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 900;
`;

export const Value = styled.span`
  font-size: 16px;
`;

export const Link = styled.a``;

export const ScriptNotLoaded = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`;
