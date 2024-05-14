# Library

## Background:
During my initial role as a software developer on the Apollo team, I underwent a comprehensive training program aimed at increasing my independent learning skills and gaining in-depth familiarity with the team's technologies.

## Description:
The Library project represents the culmination of knowledge acquired throughout this training journey. It stands as a comprehensive system designed to manage readers, authors, and books, equipped with features to handle the library's data effectively.

## Implementation:

**Server side:**
- Developed in Java Spark.
- Interfaces with MongoDB.
- Designed using a three-tier architecture.
- Includes appropriate logging and retrieval mechanisms for data display in the client.

**Client side (CLIENT):**
- The library management view is implemented in React and TypeScript.
- Utilizes React with Material-UI (MUI) as the design library.
- Manages state using Redux.
- Uses react-router-dom for routing within the system.

#### Folder Structure (Client Side):
- **components**: Houses the design components of the system, containing React components.
- **customHooks**: Contains custom hooks registered for reuse and to separate functionality from design components.
- **models**: Includes interfaces defining structures within the system.
- **redux**: Contains all files related to store management.
- **utils**: Stores code snippets that can be used across various parts of the system.

## Usage:

Before initiating the project, ensure the following prerequisites are met:

- **Node.js**: Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).
- **Java Development Kit (JDK)**: Obtain and install JDK from [https://www.oracle.com/java/technologies/javase-jdk11-downloads.html](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
- **Apache Maven**: Download and install Apache Maven from [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi).

After installing the prerequisites, follow these steps:

1. **Clone the project repository**:
   - `git clone https://github.com/stav1236/Library.git`
   - `cd Library`

2. **Server Side (Java Spark)**:
   - Navigate to the server folder.
   - Execute `mvn clean install` to install dependencies.
   - Run the server in development mode. (`Server/src/main/java/UI/App.java` is the entry point.)

3. **Client Side (React)**:
   - Navigate to the `my-app` folder.
   - Run `npm install` to install dependencies.
   - Execute `npm start` to launch the client in development mode.

## License:
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.
