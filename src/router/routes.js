export const AUTHOR_SEARCH = '/author-search';
export const BOOK_VIEWER = '/book-viewer/:id?';

// Dynamic Routes
export const DYNAMIC = {
  BOOK_VIEWER: (id) => `/book-viewer/${id}`,
};
