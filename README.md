# Backend for Application-based Courses on Airtribe

This repository contains the backend code for managing application-based courses on Airtribe.

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
