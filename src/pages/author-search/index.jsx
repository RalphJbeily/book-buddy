import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';

import listVolumes from '../../api/volume/list';
import { DYNAMIC } from '../../router/routes';
import codes from '../../config/server-codes';
import {
  AUTHOR,
  BOOK_BUDDY,
  NOT_AVAILABLE,
  PUBLISHED_DATE,
  PUBLISHER,
  RATING_COUNT,
  SEARCH_PLACEHOLDER,
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
  NoSearchResultImage,
  RatingContainer,
  RightGridItems,
  StyledSearchInput,
  Title,
  Value,
} from './styles';
import { FILTERS, ORDER_BY } from './config';

const AuthorSearch = () => {
  const [volumes, setVolumes] = useState([]);

  const navigateTo = useNavigate();

  const fetchVolumesList = async (searchValue) => {
    try {
      const result = await listVolumes(
        searchValue,
        ORDER_BY.NEWEST,
        FILTERS.FREE_EBOOKS,
      );

      if (result.status === codes.SUCCESS) setVolumes(result.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const changeValue = (event) => {
    if (event.target.value === '') setVolumes([]);
    else fetchVolumesList(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.target.value !== '' && event.key === 'Enter') {
      fetchVolumesList(event.target.value);
    } else setVolumes([]);
  };

  return (
    <Container>
      <Title>{BOOK_BUDDY}</Title>
      <StyledSearchInput
        type="search"
        name="search"
        placeholder={SEARCH_PLACEHOLDER}
        onChange={changeValue}
        onKeyPress={handleSearch}
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
  );
};

export default AuthorSearch;
