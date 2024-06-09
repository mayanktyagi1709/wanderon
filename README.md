This project is a web application designed to facilitate user authentication and authorization. Users can create an account, log in securely, and access protected pages. The backend is built using Node.js, and data is stored in a MongoDB database. Security measures, such as password hashing and JWT authentication, are implemented to protect user data.

## Live project: [Click Me](wanderon-git-main-mayanktyagi1709s-projects.vercel.app)

## Approach

### Backend Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

### Frontend Technologies Used

- **Nextjs**
- **Typescript** 

### Usage
#### Account Creation
- Access the registration page.
- Provide necessary information such as username/email and password.
- Submit the form.
- User account will be created, and password will be securely hashed before storage.
#### User Login
- Access the login page.
- Enter username/email and password.
- Submit the form.
- Upon successful authentication, a JWT is generated and stored as a cookie.
- The user is redirected to the protected page.
#### Accessing Protected Pages
- When accessing protected pages, the JWT stored in the cookie is used for authentication.
- If the JWT is valid, the user is granted access to the protected resource i.e., the **profile page**.
- If the JWT is invalid or expired, the user is redirected to the login page.
- Security Considerations
- Password is securely hashed using **bcrypt.js**
- **Dompurify** library is used for input validation and sanitization to prevent injection attacks and XSS vulnerabilities.

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **MongoDB** installed and running locally or on a remote server.

### Installation
- Clone the repository <br>
```git clone git@github.com:mayanktyagi1709/wanderon.git```
- Install dependencies <br>
```npm install```
- Set up environment variables for database connection and JWT secret.
- Start the server <br>
```npm run dev```
