# Mood Tracker Frontend

This project is a frontend application for tracking moods, built using React and Vite. It allows users to submit their mood entries, view a list of moods, and visualize mood data through charts.

## Project Structure

The frontend consists of the following key components:

- **Components**: 
  - `MoodForm`: A form for users to submit their mood and optional notes.
  - `MoodList`: Displays a list of submitted moods.
  - `MoodCard`: Represents individual mood entries.
  - `MoodChart`: Visualizes mood data in a line chart.

- **Services**: 
  - `moodServices.js`: Contains functions for making API calls to the backend for mood data.

- **Styling**: 
  - `App.css`: Contains the main styles for the application.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the frontend directory**:
   ```
   cd mood-tracker/frontend/mooood
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the application**:
   ```
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173` to view the application.

## Features

- Submit mood entries with optional notes.
- View a list of all submitted moods.
- Visualize mood data over time with a line chart.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.