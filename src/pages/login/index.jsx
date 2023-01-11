import React from 'react';
import { useNavigate } from 'react-router-dom';

import { GoogleLogin } from '@react-oauth/google';

import {
  BOOK_BUDDY,
  LOGIN_FAILED,
  WELCOME_TEXT,
} from '../../config/strings.js';
import WelcomeImage from '../../assets/images/online-library.jpeg';

import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  WelcomePageImage,
  WelcomeText,
} from './styles.js';
import { AUTHOR_SEARCH } from '../../router/routes.js';

const Login = () => {
  const navigateTo = useNavigate();

  return (
    <Container>
      <LeftContainer>
        <WelcomePageImage src={WelcomeImage}></WelcomePageImage>
      </LeftContainer>
      <RightContainer>
        <Title>{BOOK_BUDDY}</Title>
        <WelcomeText>{WELCOME_TEXT}</WelcomeText>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            sessionStorage.setItem(
              'credentialResponse',
              JSON.stringify(credentialResponse),
            );

            navigateTo(AUTHOR_SEARCH);
          }}
          onError={() => {
            console.error(LOGIN_FAILED);
          }}
          theme="filled_blue"
        />
      </RightContainer>
    </Container>
  );
};

export default Login;
