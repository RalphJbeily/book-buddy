import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import URLs from '../../config/api-endpoints';
import {
  AUTHOR,
  BOOK_NOT_EMBEDED,
  CANVAS_STILL_LOADING,
  DOWNLOAD_LINKS,
  EPUB,
  LANGUAGE,
  NOT_AVAILABLE,
  PAGE_COUNT,
  PDF,
  PUBLISHER,
  TITLE,
} from '../../config/strings';

import {
  Container,
  Label,
  LabelValueContainer,
  Link,
  RightContainer,
  Value,
  ViewerCanvas,
} from './styles';

const BookViewer = (volumeDetails: { [key: string]: any }) => {
  const { id } = useParams();

  const canvasRef = useRef();

  const { accessInfo, volumeInfo } = volumeDetails?.volumeDetails || {};

  const isEpubAvailable = accessInfo?.epub?.isAvailable;
  const isPdfAvailable = accessInfo?.pdf?.isAvailable;

  const [isLoaded, setIsLoaded] = useState(false);

  function alertNotFound() {
    alert(BOOK_NOT_EMBEDED);
  }

  // Adds Google Books script tag and event listener if the tag has loaded
  useEffect(() => {
    const scriptTag = document.createElement('script');

    scriptTag.src = URLs.GOOGLE_BOOKS;
    scriptTag.addEventListener('load', () => setIsLoaded(true));
    scriptTag.id = 'google-script';

    document.body.appendChild(scriptTag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If Google Books is loaded, create new instance of DefaultViewer and load book information to viewer
  useEffect(() => {
    if (!isLoaded) return;
    else {
      if (window.viewer) {
        let viewer = new window.google.books.DefaultViewer(canvasRef.current);

        viewer.load(id, alertNotFound);
      } else {
        window.google.books.load();

        window.google.books.setOnLoadCallback(() => {
          let viewer = new window.google.books.DefaultViewer(canvasRef.current);

          window.viewer = viewer;
          viewer.load(id, alertNotFound);
        });
      }
    }
  }, [id, isLoaded]);

  return (
    <Container>
      {isLoaded ? (
        <ViewerCanvas ref={canvasRef}></ViewerCanvas>
      ) : (
        <ViewerCanvas>{CANVAS_STILL_LOADING}</ViewerCanvas>
      )}
      <RightContainer>
        <LabelValueContainer>
          <Label>{TITLE}</Label>
          <Value>{volumeInfo?.title || NOT_AVAILABLE}</Value>
        </LabelValueContainer>
        {volumeInfo?.authors?.map((author, index) => (
          <LabelValueContainer key={`${AUTHOR}-${index}`}>
            <Label>{`${AUTHOR} ${index + 1}:`}</Label>
            <Value>{author}</Value>
          </LabelValueContainer>
        ))}
        <LabelValueContainer>
          <Label>{PAGE_COUNT}</Label>
          <Value>{volumeInfo?.pageCount || NOT_AVAILABLE}</Value>
        </LabelValueContainer>
        <LabelValueContainer>
          <Label>{PUBLISHER}</Label>
          <Value>{volumeInfo?.publisher || NOT_AVAILABLE}</Value>
        </LabelValueContainer>
        <LabelValueContainer>
          <Label>{LANGUAGE}</Label>
          <Value>{volumeInfo?.language || NOT_AVAILABLE}</Value>
        </LabelValueContainer>
        {(isEpubAvailable || isPdfAvailable) && (
          <LabelValueContainer>
            <Label>{DOWNLOAD_LINKS}</Label>
            {isEpubAvailable && (
              <Link href={accessInfo?.epub?.acsTokenLink}>{EPUB}</Link>
            )}
            {isPdfAvailable && (
              <Link href={accessInfo?.pdf?.acsTokenLink}>{PDF}</Link>
            )}
          </LabelValueContainer>
        )}
      </RightContainer>
    </Container>
  );
};

export default BookViewer;
