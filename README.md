# Customer Support Agent

This project is a customer support agent designed to process data, resolve queries, and notify users about critical issues.

## Features

- Scrapes data from specified URLs using JSoup and serves it through a RESTful API.
- Integrates LLM Gemini for query resolution and sentiment analysis to enhance customer interactions.
- Sends email notifications with LLM-generated reports, highlighting critical issues.
- Implements secure user authentication with Spring Security and JWT.
- Stores data in MongoDB.
- Built with React.js for the front-end interface.
- Containerized with Docker for deployment.

## Technologies Used

- Java, Spring Boot, Spring Security, JWT
- JSoup
- MongoDB
- React.js
- Docker
- LLM Gemini

## How to Run

1. Clone the repository:
   git clone https://github.com/your-username/customer-support-agent.git

2. Navigate to the project directory:
   cd customer-support-agent

3. Build and run the backend:
   mvn spring-boot:run

4. Navigate to the frontend directory, install dependencies, and start the server:
   cd frontend
   npm install
   npm start

5. Ensure Docker is installed and running for containerized deployment.

## Contribution

Contributions are welcome! Fork the repository, submit issues, or open pull requests.

## License

This project is licensed under [Your Preferred License]. Check the LICENSE file for details.
