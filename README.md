# Backend for Application-based Courses on Airtribe

This repository contains the backend code for managing application-based courses on Airtribe.

## Introduction

Airtribe is an online platform that offers application-based courses taught by experienced instructors. This backend server is responsible for handling course management, lead registration, instructor management, and associated functionalities.

## Technologies Used

- **Node.js**: A JavaScript runtime environment for building server-side applications.
- **Express.js**: A minimalist web framework for Node.js used for building RESTful APIs.
- **SQLite3**: A lightweight, file-based SQL database used for storing application data.
- **Sequelize**: An ORM (Object-Relational Mapping) library for Node.js used for database management.

## Features

- **Course Management**: Create and update course details such as name, maximum seats, and start date.
- **Lead Registration**: Allow users to apply for courses by providing their name, email, phone number, and LinkedIn profile.
- **Lead Management**: Instructors can update lead status (Accept / Reject / Waitlist) and search for leads by name or email.
- **Instructor Management**: Create new instructors and add comments to leads associated with courses.

## Database Schema

The database schema includes the following tables:

1. **Courses**: Stores course details such as name, maximum seats, and start date.
2. **Leads**: Stores lead information including name, email, phone number, LinkedIn profile, and status.
3. **Instructors**: Stores instructor details like name and email.

## Getting Started

To run the backend server, follow the instructions in the "Getting Started" section above. Make sure to have Node.js and npm installed on your machine.

## API Documentation

API endpoints are documented in the "API Endpoints" section above. You can use tools like Postman to interact with the APIs and test their functionality.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to submit pull requests or raise issues in the repository.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Steps to Run the Application:

1. Clone the repository:
   git clone <repository_url>

2. Install dependencies:
   cd backend
   npm install


3. Start the server:
npm start


## API Endpoints:

- **Create Course:**
- POST /courses

- **Update Course Details:**
- PUT /courses/:id

- **Course Registration:**
- POST /leads/:courseId/register

- **Lead Update:**
- PUT /leads/:leadId/update

- **Lead Search:**
- GET /leads/search?q=<query>

- **Add Comment:**
- POST /comments


