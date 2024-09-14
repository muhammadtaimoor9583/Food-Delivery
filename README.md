# Food Delivery Website

A modern and efficient food delivery website built using React. Users can browse various food categories, filter food by name, and place orders after signing up and logging into their account.

## Features

- **User Authentication:**  
  Users must sign up to create an account and then log in to access the website's features.
  
- **Browse and Order Food:**  
  Explore a variety of food items categorized by types (e.g., Fast Food, Desserts, Beverages, etc.).

- **Food Filtering:**  
  Quickly filter food items by name for a better browsing experience.

- **Responsive Design:**  
  The website is designed to work on all screen sizes, making it accessible on both desktop and mobile devices.

## Technologies Used

- **Frontend:**  
  - React.js for building UI components and managing state efficiently.
  - Tailwind for styling.

- **Backend:**  
  Node.js and Express.js are used for the backend.
- **DataBase:**
  MongoDB is used as a Database.
- **State Management:**  
  - React Hooks (`useState`, `useEffect`, etc.) for state management.

- **Routing:**  
  - `react-router-dom` for navigation between different pages.

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/muhammadtaimoor9583/Food-Delivery
   cd food-delivery-website
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Folder Structure

```
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Cards.js
│   │   ├── Carousel.js
│   │   ├── ContextReducer.js
│   │   ├── Footer.js
|   |   ├── Navbar.js
│   │   └── images_links.js
│   ├── screens
│   │   ├── Cart.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── MyOrder.js
│   │   └── Signup.js
│   ├── App.js
│   └── index.js
└── package.json
```

## How to Use

1. **Sign Up / Login**  
   - Navigate to the sign-up page and create an account with your email and password.
   - After successful registration, log in using your credentials.

2. **Browse Food Categories**  
   - Explore various food categories and view items listed under each category.

3. **Filter by Name**  
   - Use the search bar to filter food items by name for quicker access to the food you're looking for.

4. **Place an Order**  
   - Select food items, add them to your cart, and proceed with the order summary.

## Future Enhancements
- Implement payment gateway integration.
- Enhance the UI for a better user experience.

## Contributing
Feel free to fork this repository and create pull requests for any improvements.
