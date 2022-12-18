import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Router from './router';
import { CLIENT_ID } from './config/auth';

const App = () => {
  return (
    // ? Change CLIENT_ID in ./config/auth
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Router></Router>
    </GoogleOAuthProvider>
  );
};

export default App;
