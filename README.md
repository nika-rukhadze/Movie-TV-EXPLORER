"Movie/TV Show Explorer"
Movie/TV Show Explorer is a Single Page Application (SPA) built with React, TypeScript, and SCSS. It allows users to explore movies and TV shows by fetching data from an external API. Users can search, view details, and enjoy an interactive experience with dark/light mode and multi-language support.

🚀 Features
Search for movies and TV shows by title.
View detailed information about each movie/show (overview, cast, release date, etc.).
Dark/Light mode toggle for a personalized experience.
Multi-language support (Georgian & English).
Responsive design for desktop and mobile views.
Fetching data from TMDb API.


🛠️ Technologies & Tools Used
React: JavaScript library for building user interfaces.
TypeScript: Superset of JavaScript providing static typing and better tooling.
SCSS: CSS preprocessor that extends CSS with variables, nested rules, and more.
React Router: For handling routing and navigation in the application.
React Hooks: For managing state and lifecycle in functional components.
i18next: Library for handling internationalization and language switching.
TMDb API: Movie and TV show database API for fetching media data.
Git & GitHub: For version control and hosting the project code.

⚙️ Installation Instructions
Prerequisites
Node.js installed on your machine. You can download it from Node.js.
npm (Node Package Manager) comes with Node.js, so you don’t need to install it separately.


 Install Dependencies
Navigate into the project directory and install the required dependencies:

bash
Copy
Edit
cd movie-tv-explorer
npm install
 Run the Project Locally
To start the project on your local machine:

bash
Copy
Edit
npm start
This will run the app on http://localhost:3000/ by default.

🌍 Internationalization
The app supports both Georgian and English languages. You can toggle between languages using the language selector at the top of the page.

To set up i18n, we are using the react-i18next library for easy language switching.

🎨 Dark/Light Mode
The project includes a dark/light mode toggle, which allows users to switch between light and dark themes for a better visual experience, especially in low-light environments.

🖼️ Screenshots
Below are some screenshots of the app in action:

Home Page
Main screen with search bar and featured movies.

Movie Details
Details view for a selected movie.

Language Toggle
Language selector (Georgian & English).

Dark Mode
Dark mode view of the app.

🔧 Technologies Used
React: For building the interactive UI.
TypeScript: For better maintainability and error prevention.
React Router: For navigation between pages.
i18next: For internationalization (language switching).
TMDb API: For fetching movie and TV show data.
SCSS: For modular and scalable styling.
📝 Usage Instructions
Upon loading the app, you can search for your favorite movies or TV shows using the search bar.
After searching, click on a movie or TV show to view more details, including the cast, release date, and ratings.
You can toggle between dark and light mode using the theme toggle in the top-right corner.
Switch languages by using the language selector dropdown to switch between English and Georgian.
💡 Future Features
Favorite List: Users can save their favorite movies and TV shows to a list.
Watchlist: Add movies/shows to a personal watchlist for later viewing.
Advanced Search Filters: Filters by genre, rating, release date, etc.
User Reviews: Allow users to add reviews for movies/shows.
🔗 Links
Project Repository on GitHub
Live Version of the App
📜 License
This project is licensed under the MIT License - see the LICENSE file for details.
