import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AUTHOR_SEARCH, BOOK_VIEWER } from './routes';
import { Login, AuthorSearch, BookViewer } from '../containers';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path={AUTHOR_SEARCH} element={<AuthorSearch />} />
      <Route path={BOOK_VIEWER} element={<BookViewer />} />
      <Route path="*" element={<AuthorSearch />} />
    </Routes>
  );
};

export default Router;
