# React Course Project

## Overview
This project is a React application designed for managing and displaying events. It allows users to create events through a form and view them categorized by themes. The application is built using React 19 and utilizes Vite as the build tool.

## Project Structure
```
react-course-project
├── src
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── assets
│   └── components
├── package.json
├── README.md
└── vite.config.js
```

## Files Description

- **src/App.jsx**: The main component of the application that manages the state of events and renders the layout, including the event creation form and the display of events by theme.

- **src/App.css**: Contains styles for the main application component, defining the overall layout and appearance.

- **src/index.css**: Includes global styles for the application, such as font settings and body background color.

- **src/main.jsx**: The entry point of the application that renders the App component inside a StrictMode wrapper and attaches it to the root element in the HTML.

- **src/assets**: A folder containing static assets used in the application, such as images and icons.

- **src/components**: A folder that houses various React components used throughout the application, including form elements, event cards, and thematic displays.

- **package.json**: The configuration file for npm, listing dependencies, scripts, and metadata for the project.

- **vite.config.js**: The configuration file for Vite, specifying build options and plugins for the development environment.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone [tecboard-repository](https://github.com/Lauraellen/tecboard.git)
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173` to view the application.

## Usage
- Fill out the form to create a new event.
- Select a theme from the dropdown menu.
- Click the "Create Event" button to submit the form.
- View the created events displayed by their respective themes.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.