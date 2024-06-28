# E-Commerce Back End
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)


## Description

This project is focused on developing the backend infrastructure for an e-commerce website using modern technologies. As a manager at an internet retail company, it is crucial to have a robust and scalable backend to compete effectively with other e-commerce platforms. This project leverages Express.js for the API, PostgreSQL for the database, and Sequelize as the ORM to ensure efficient database management and operations.
This lightweight backend setup provides a solid foundation for developing a e-commerce website, ensuring your company can effectively compete in the online retail market.



## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)



## Features

Environment Configuration:

- Securely manage database credentials and configuration settings using environment variables.
- Seamless connection to a PostgreSQL database using Sequelize ORM.
Efficient and structured data management with support for complex queries and relationships.
Schema and Data Seeding:
- Implement commands to automatically create and populate the development database with product data.
- Use Insomnia (or any API client) to test and validate API endpoints. 
- Confirm successful data retrieval, creation, update, and deletion operations.



## Installation

- Make sure to have node and npm installed to utilitize the application.
- Clone the repository to your local environment using `git clone`.
- Install the required Node.js packages using `npm install`.
- Create a .env file in the root directory of the project.
- Create the database by running the schema in postgres.
- Start the server by running `node server.js`.




## Usage
- Once you have completed the installation steps, you can start using the backend for your e-commerce website. 
- Create a .env file in the root directory of the project containing the following:
`DB_NAME='ecommerce_db'`
`DB_USER='your_postgresql_username'`
`DB_PASSWORD='your_postgresql_password'`
- Create the database by running the schema in postgres on your terminal.
- Use the `node server.js` command in your command-line to launch the application.
- The server will start and sync Sequelize models with your PostgreSQL database. By default, the server will run on http://localhost:3001.
- You can interact with the API using an API client like Insomnia, Postman, or even curl commands.
- For a visual demonstration, please refer to the [tutorial video](https://drive.google.com/file/d/1cM5oYOfpDYJRrLMypQyTjn9Mi5f445gq/view?usp=sharing).



## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:
- Fork the repository.
- Create a new branch for your changes.
- Commit your changes with a descriptive message.
- Submit a pull request.


## License

[MIT]((https://opensource.org/licenses/MIT)) 

Please refer to the [LICENSE](./LICENSE) file for more licensing information.