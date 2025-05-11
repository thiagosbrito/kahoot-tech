# kahoot-tech
*Technical Task for Senior Frontend Developer role by Thiago Brito*

## Welcome to Poke Xplr

Poke Xplr is a web application that allows users to explore Pokémon data. The application is built using Angular and TypeScript, and it utilizes the PokeAPI to fetch Pokémon information.

## Getting Started

To get started with the project, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running:
   ```bash
   pnpm install
   ```
4. Start the development server:
   ```bash
    ng serve
    ```
5. Open your browser and navigate to `http://localhost:4200` to view the application.


## Project Structure

The project is structured as follows:
```
├── src
│   ├── app
│   │   ├── home // Home page route
│   │   ├── pokemon // Pokemon page route
│   │   ├── services // Services for API calls
│   │   ├── models // Models for data types
│   │   ├── utils // Utility functions
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── public // Static assets
│   ├── styles // Design system
│   ├── ui // Shared Components
│   ├── index.html // Root HTML file
│   ├── styles.css // Global styles
│   └── main.ts // Entry point for the application
```

## Design System
The design system is located in the `styles` directory. It includes global styles, variables, and mixins that can be used throughout the application. The design system is built using SCSS, and it follows a modular approach to ensure reusability and maintainability.

## API Integration
We use the new `resource` API to fetch data from the PokeAPI. The API calls are made in the `services` directory, where we have created a service for each resource. The services handle the API requests and responses, and they return the data in a format that can be easily consumed by the components. The `resource` API also provide us the capability of tracking request state, which help us to deliver a better UX.
