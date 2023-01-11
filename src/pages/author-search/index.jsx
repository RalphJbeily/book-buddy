import React from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import Rating from '@mui/material/Rating';
import LogoutIcon from '@mui/icons-material/Logout';

import { DYNAMIC, LOGIN } from '../../router/routes';
import {
  AUTHOR,
  BOOK_BUDDY,
  NOT_AVAILABLE,
  PUBLISHED_DATE,
  PUBLISHER,
  RATING_COUNT,
} from '../../config/strings';
import NoSearchResult from '../../assets/images/no-search-result.jpeg';

import {
  BookImage,
  Container,
  GridContainer,
  GridItem,
  GridItemDetails,
  Label,
  LabelValueContainer,
  LogoutContainer,
  NoSearchResultImage,
  RatingContainer,
  RightGridItems,
  Title,
  Value,
} from './styles';
import { SearchBar } from '../../components';

const AuthorSearch = ({ volumes, fetchVolumesList }) => {
  const navigateTo = useNavigate();

  const Logout = () => {
    googleLogout();
    sessionStorage.removeItem('credentialResponse');
    navigateTo(LOGIN);
  };

  return (
    <>
      <LogoutContainer>
        <LogoutIcon onClick={() => Logout()} />
      </LogoutContainer>
      <Container>
        <Title>{BOOK_BUDDY}</Title>
        <SearchBar
          fetchVolumes={(searchResults) => fetchVolumesList(searchResults)}
        />
        {volumes?.length > 0 ? (
          <GridContainer>
            {volumes?.map((volume) => {
              const {
                authors,
                averageRating,
                imageLinks,
                publisher,
                publishedDate,
                ratingsCount,
              } = volume?.volumeInfo || {};

              return (
                <GridItem
                  key={volume?.id}
                  onClick={() => navigateTo(DYNAMIC.BOOK_VIEWER(volume?.id))}
                >
                  <GridItemDetails>
                    <BookImage src={imageLinks?.smallThumbnail}></BookImage>
                    <RightGridItems>
                      <LabelValueContainer>
                        <Label>{PUBLISHER}</Label>
                        <Value>{publisher || NOT_AVAILABLE}</Value>
                      </LabelValueContainer>
                      <LabelValueContainer>
                        <Label>{PUBLISHED_DATE}</Label>
                        <Value>{publishedDate || NOT_AVAILABLE}</Value>
                      </LabelValueContainer>
                      {authors?.map((author, index) => (
                        <LabelValueContainer key={`Author-${index}`}>
                          <Label>{`${AUTHOR} ${index + 1}:`}</Label>
                          <Value>{author}</Value>
                        </LabelValueContainer>
                      ))}
                    </RightGridItems>
                  </GridItemDetails>
                  <RatingContainer>
                    <LabelValueContainer>
                      <Label>{RATING_COUNT}</Label>
                      <Value>{ratingsCount || NOT_AVAILABLE}</Value>
                    </LabelValueContainer>
                    <Rating
                      name="half-rating-read"
                      defaultValue={averageRating}
                      precision={0.5}
                      readOnly
                    />
                  </RatingContainer>
                </GridItem>
              );
            })}
          </GridContainer>
        ) : (
          <NoSearchResultImage src={NoSearchResult}></NoSearchResultImage>
        )}
      </Container>
    </>
  );
};

export default AuthorSearch;
