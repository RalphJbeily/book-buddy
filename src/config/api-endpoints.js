const URLs = {
  GOOGLE_BOOKS: 'https://www.google.com/books/jsapi.js',
  USER_INFO: 'https://www.googleapis.com/oauth2/v3/userinfo',
  VOLUME_DETAILS: (id) => `https://www.googleapis.com/books/v1/volumes/${id}`,
  VOLUMES_LIST: 'https://www.googleapis.com/books/v1/volumes',
};

export default URLs;
