# User Directory - React Application

A simple React application that displays a list of users, allows searching, sorting, and viewing detailed user information. This app was built using React, Tailwind CSS, and integrates various features like dark mode, pagination, and more.

## Features

- Fetches and displays a list of users from a public API (`https://jsonplaceholder.typicode.com/users`).
- Search functionality to filter users by name.
- Sorting functionality to display users in alphabetical order (A-Z, Z-A).
- User details page that shows full user information (name, email, phone, company, and website).
- Dark/Light mode toggle for better user experience.
- Pagination for displaying users in chunks on larger datasets.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework used for styling the application.
- **React Router**: For navigation and routing between the home page and user detail page.
- **Axios**: To make HTTP requests to fetch user data from the API.
- **React Context API**: For managing global application state like the theme (dark/light mode).
- **npm**: Package manager for managing dependencies.
  
## Getting Started

### Prerequisites

- You should have **Node.js** and **npm** installed. You can check if they're installed by running the following commands in your terminal:

    ```bash
    node --version
    npm --version
    ```

- If not installed, you can download them from [Node.js official website](https://nodejs.org/).

### Setup

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/user-directory.git
    ```

2. Navigate into the project folder:

    ```bash
    cd user-directory
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

### Running the Application

Once you've installed the dependencies, you can start the application with:

```bash
npm start
