import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1``;

export const StyledSearchInput = styled.input`
  width: 50%;
  height: 30px;
  padding: 5px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 1px solid black;
  background: lightgray;
`;

export const NoSearchResultImage = styled.img`
  width: 50%;
`;

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  overflow-y: scroll;
  grid-template-columns: auto auto auto;
  padding: 10px;

  @media (max-width: 48rem) {
    width: 60%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 64rem) {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
`;

export const GridItem = styled.div`
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid black;
`;

export const GridItemDetails = styled.div`
  gap: 6px;
  display: flex;
  align-items: flex-start;
`;

export const RightGridItems = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export const LabelValueContainer = styled.div`
  gap: 6px;
  display: flex;
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: 900;
`;

export const Value = styled.span`
  font-size: 12px;
`;

export const BookImage = styled.img`
  width: 50%;
`;

export const RatingContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
