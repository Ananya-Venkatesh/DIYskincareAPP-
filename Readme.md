# DIYskincareAPP-

## Overview

DIYskincareAPP- is a responsive full-stack web application for creating, displaying, and storing personalized skincare recipes. Built using **Node.js, Express, MongoDB**, and a modern **Bootstrap UI** with glassmorphism styling, this app allows users to experiment with their own skincare solutions and keep track of recipes.

## Features

- Create custom skincare recipes with ingredients and instructions
- View, update, and delete saved recipes
- User authentication and secure recipe storage
- Stylish glassmorphism UI using Bootstrap
- Responsive design for both desktop and mobile devices

## Tech Stack

- **Frontend:** Bootstrap, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** (If used) Passport.js/JWT

## Setup Instructions

1. **Clone the repository**
git clone https://github.com/Ananya-Venkatesh/DIYskincareAPP-.git
cd DIYskincareAPP-

text

2. **Install dependencies**
npm install

text

3. **Set up MongoDB**
- Make sure you have MongoDB running locally or provide a remote connection string in your `.env` file.

4. **Configure environment variables**
- Create a `.env` file at the root of the project:
  ```
  MONGODB_URI=your_mongodb_connection_string
  PORT=3000
  ```

5. **Start the server**
npm start

text

6. **Access the app**
- Open `http://localhost:3000` in your browser.

## Project Structure

DIYskincareAPP-/
├── models/ # Mongoose models for Recipes, Users, etc.
├── routes/ # Express route handlers
├── public/ # Frontend static files (CSS, JS, images)
├── views/ # EJS or HTML templates
├── app.js/server.js # Main backend entry point
├── package.json # Node.js dependencies and scripts
└── README.md # Project documentation

