# React Portfolio App

## Overview
This is a **React-based portfolio application** built using the **Atomic Design methodology**. The app showcases projects, skills, and contact information in a modular and scalable way.

## Features
- **Component-based architecture** following Atomic Design principles.
- **Responsive design** ensuring a great user experience on all devices.
- **Reusable and scalable components** for easy maintenance and extension.
- **React Router** for seamless navigation.
- **Styled Components** for styling.

## Technologies Used
- React
- Atomic Design
- React Hooks (useState, useEffect, etc.)
- prop-types

## Atomic Design Structure
The project follows Atomic Design, breaking UI into five levels:

1. **Atoms** – Basic UI elements (buttons, inputs, typography, icons).
2. **Molecules** – Groups of atoms forming simple components (search bar, card, form field).
3. **Organisms** – Complex UI sections (navbar, footer, project list).
4. **Templates** – Layout structures for pages (homepage layout, project grid layout).
5. **Pages** – Full pages that bring everything together (Home, About, Projects, Contact).

## Project Structure
```
/src
  |-- components
  |    |-- atoms
  |    |-- molecules
  |    |-- sections
  |-- Contexts
  |-- assets
  |-- App.js
  |-- index.js
```

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/react-portfolio.git
   ```
2. Navigate to the project directory:
   ```sh
   cd react-portfolio
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Deployment
To build and deploy the app:
```sh
npm run build
```
You can deploy using **Vercel, Netlify, or GitHub Pages**.

## Contributing
You are welcome to clone, but no PR because this is a personal portfolio

