# Chat Application

This project is a simple chat web application developed using the following technologies and tools:

- [Angular](https://angular.io): A framework for building modern web applications.
- [Nx](https://nx.dev): A powerful set of tools for Angular monorepo development.
- [NgRx](https://ngrx.io): A state management library for Angular based on Redux principles.
- [Storybook](https://storybook.js.org): An open-source tool for building and documenting UI components in isolation.
- [ngx-socket-io](https://github.com/rodgc/ngx-socket-io): A library that provides WebSocket capabilities in Angular.

## Project structure

- `./apps/chat-app/src/app` - This directory contains the main Angular application source code.
- `./libs/data-access` - It contains modules responsible for interacting with external data sources.
- `./libs/features` - Feature Modules encapsulate the related components and other resources necessary for that feature.
- `./libs/models` - Directory is responsible for storing data models used within the application.
- `./libs/state` - This directory contains modules responsible for managing the state of the application modules. (NgRx).
- `./libs/styles` - Directory serves as a repository for storing the shared styles and variables utilized throughout the application.
- `./libs/ui` - Reusable UI components are placed here.
- `./libs/util` - Directory is responsible for storing utility functions, services, classes, and modules that provide common or generic functionality used throughout the application.

<br />

---

<br />

## Run the project locally

<br />

1. Clone the repository or download the project files.
2. Open a terminal and navigate to the project's root directory.
3. Run the following command to install the project dependencies:

```
npm install
```

4. To start the development server, run the following command:

```
npm run start
```

<br />

---

<br />

## Docker

<br />

To run the project using Docker, follow these steps:

0. Make sure you have Docker installed on your machine.
1. Run the following command to build the Docker image:

```
docker build -t chat-app .
```

2. After the Docker image has been built, run the following command to start a Docker container:

```
docker run -d -p 8080:80 --name chat-client chat-app:latest
```

This will start the container and map port 8080 on your machine to port 80 inside the container. Open your browser and navigate to http://localhost:8080 to view the application.

<br />

---

<br />

## Storybook

<br />

To start Storybook, follow these steps:

```
npm run storybook
```

This will compile and start Storybook. Open your browser and navigate to http://localhost:4400 to view the Storybook interface and explore the UI components.
