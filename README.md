# Welcome to Book Buddy

 Your online book author search engine

## Running the project

First, make sure to change the `CLIENT_ID` located in the below path:

`/src/config/auth.js`

Now in the project root directory, run:

```cmd
npm start
```

## What is Book Buddy?

Book Buddy is an online search engine for book authors that helps individuals locate books digitally.

### How to use Book Buddy

1. The user must login with Google account credentials
2. Then the user is redirected to the author search page
3. The user can search for a specific author and get the list of results
4. Once the user clicks on one of the books it will redirect to the book viewer page
5. In the book viewer page the user will see an overview of the book along with its details and will be able to download the book either epub or pdf

## Project Structure

This project was created using `create-react-app`

### Directories and Files

1. The `api` directory contains the two endpoints used to `get` and `list` the volume details and volumes list respectively
2. The `assets` directory contains the images used in the project
3. The `config` directory contains configurations required for the project:  
   a. `api-endpoints.js` file for all the endpoints used for the apis  
   b. `auth.js` file for everything authentication related  
   c. `server-codes.js` file for all the server response statuses  
   d. `strings.js` file for all the texts used across all the pages
4. The `containers` directory contains the pages initialization and api calls.
5. The `pages` directory contains the UI for the pages and data rendering
6. The `router` directory contains the logic and routes used to navigate across the pages

## Packages Used

* `react-oauth/google` for Google sign in and authentication
* `react-router-dom` for pages navigation
* `styled-components` for components styling
* `mui/material` and `mui/icons-material` for components
* `axios` http client for api calls
