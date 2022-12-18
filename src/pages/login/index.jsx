import React from 'react';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

import {
  BOOK_BUDDY,
  WELCOME_TEXT,
  SIGN_IN_WITH_GOOGLE,
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

const Login = (loginWithGoogle: { [key: string]: any }) => {
  return (
    <Container>
      <LeftContainer>
        <WelcomePageImage src={WelcomeImage}></WelcomePageImage>
      </LeftContainer>
      <RightContainer>
        <Title>{BOOK_BUDDY}</Title>
        <WelcomeText>{WELCOME_TEXT}</WelcomeText>
        <Button
          variant="contained"
          size="medium"
          startIcon={<GoogleIcon />}
          onClick={() => loginWithGoogle}
        >
          {SIGN_IN_WITH_GOOGLE}
        </Button>
      </RightContainer>
    </Container>
  );
};

export default Login;
