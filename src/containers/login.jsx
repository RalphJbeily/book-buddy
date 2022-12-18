import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';

import URLs from '../config/api-endpoints';

import { Login as LoginScreen } from '../pages';
import { AUTHOR_SEARCH } from '../router/routes';

const Login = () => {
  const navigateTo = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(URLs.USER_INFO, {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      });

      localStorage.setItem('userInfo', userInfo);

      navigateTo(AUTHOR_SEARCH);
    },
    onError: (errorResponse) => console.error(errorResponse),
  });

  return <LoginScreen loginWithGoogle={googleLogin}></LoginScreen>;
};

export default Login;
