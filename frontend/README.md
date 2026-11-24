# KaziConnect – CommunityHub

KaziConnect is a community platform built with React. It allows users to explore community posts and share opportunities, ideas and updates.

## Features

- Responsive navigation with React Router.
- Home page introducing the platform.
- Opportunities page displaying posts from JSONPlaceholder.
- Individual post details using dynamic route parameters.
- Create Post form with title and content fields.
- Local storage for saving user-created posts.
- Loading and error states when fetching posts.
- Reusable Navbar and Footer components.
- Custom useFetch and useLocalStorage hooks.

## Technologies Used

- React
- JavaScript
- Vite
- React Router DOM
- CSS
- JSONPlaceholder API
- Browser Local Storage

## Getting Started

Install dependencies:

    npm install

Start the development server:

    npm run dev

Build the project:

    npm run build

Run lint checks:

    npm run lint

## Application Routes

| Route | Description |
|---|---|
| / | Home page |
| /posts | Explore community posts |
| /posts/:id | View an individual post |
| /create-post | Create a community post |
| /about | About KaziConnect |

## API

Posts are retrieved from:

https://jsonplaceholder.typicode.com/posts

## Contributors

This project is part of the IYF Season 12 Week 9 CommunityHub team assignment.
