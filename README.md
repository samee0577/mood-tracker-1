# Mood Tracker Project

## Overview
The Mood Tracker project is a full-stack application that allows users to track their moods over time. It consists of a backend built with Node.js and Express, and a frontend developed using React and Vite. Users can submit their moods, view a list of past moods, and visualize mood trends through charts.

## Project Structure
```
mood-tracker
├── backend
│   ├── .env
│   ├── package.json
│   ├── server.js
│   ├── models
│   │   └── mood.js
│   └── routes
│       └── moodRoutes.js
├── frontend
│   └── mooood
│       ├── .gitignore
│       ├── eslint.config.js
│       ├── index.html
│       ├── package.json
│       ├── README.md
│       ├── vite.config.js
│       └── src
│           ├── App.css
│           ├── App.jsx
│           ├── main.jsx
│           ├── components
│           │   ├── moodCard.jsx
│           │   ├── moodChart.jsx
│           │   ├── moodForm.jsx
│           │   └── moodList.jsx
│           ├── pages
│           └── services
│               └── moodServices.js
└── README.md
```

## Backend
- **Environment Variables**: The `.env` file contains sensitive information such as the MongoDB connection string.
- **Server**: The `server.js` file sets up the Express server and connects to the MongoDB database.
- **Models**: The `mood.js` file defines the Mongoose schema for mood data.
- **Routes**: The `moodRoutes.js` file handles API requests related to moods.

## Frontend
- **Main Entry**: The `index.html` file serves as the entry point for the React application.
- **Components**: The application consists of several components, including `MoodForm`, `MoodList`, and `MoodChart`, which manage mood submissions, display lists of moods, and visualize mood data, respectively.
- **Styling**: The `App.css` file contains styles for the application.

## Getting Started
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd mood-tracker
   ```

2. **Install Backend Dependencies**:
   Navigate to the `backend` directory and install the dependencies:
   ```
   cd backend
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the `backend` directory and add your MongoDB connection string:
   ```
   PORT=3000
   MONGO_URI="your_mongodb_connection_string"
   ```

4. **Run the Backend**:
   Start the backend server:
   ```
   node server.js
   ```

5. **Install Frontend Dependencies**:
   Navigate to the `frontend/mooood` directory and install the dependencies:
   ```
   cd ../frontend/mooood
   npm install
   ```

6. **Run the Frontend**:
   Start the frontend development server:
   ```
   npm run dev
   ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.