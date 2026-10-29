# MERN Stack Web Application

## Project Overview

This project is a web application developed as part of my MERN Stack internship. It demonstrates backend development using Node.js, Express.js, and MongoDB, with a modular structure for managing users, products, carts, and orders.

## Technologies Used

- **MongoDB** – Database
- **Express.js** – Backend web framework
- **React.js** – Frontend technology (to be documented when integrated)
- **Node.js** – JavaScript runtime
- **JavaScript** – Application programming language
- **Git and GitHub** – Version control and source code management

## Features

- User-related operations
- Product management
- Shopping cart operations
- Order data models
- User role-based authentication middleware
- Modular backend architecture using controllers, models, and routers

## Project Structure

```text
my-mern-app/
├── .gitignore
├── README.md
└── backend/
    ├── config/
    │   └── db.js
    ├── controllers/
    │   ├── CartController.js
    │   ├── ProductController.js
    │   └── UserController.js
    ├── middleware/
    │   └── userRoleAuth.js
    ├── models/
    │   ├── cart.js
    │   ├── orders.js
    │   ├── product.js
    │   └── users.js
    ├── routers/
    │   ├── UserRouter.js
    │   ├── cartRouter.js
    │   └── productRouter.js
    ├── package.json
    ├── package-lock.json
    └── server.js
```

## Installation and Setup

### Prerequisites

- Node.js and npm
- MongoDB
- Git

### 1. Clone the repository

```bash
git clone https://github.com/LalithaSetty12/my-mern-app.git
cd my-mern-app
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend` folder and add the configuration required by your application.

Do not upload your `.env` file or share database passwords, API keys, or other secrets publicly.

### 4. Start the backend server

Check `backend/package.json` for the available scripts, then run the appropriate command. For example:

```bash
npm start
```

If the project uses a development script, use the script defined in `package.json`.

## Learning Outcomes

- Understanding backend application architecture
- Working with Node.js and Express.js
- Organizing controllers, models, and routes
- Learning database connectivity and data management
- Using Git and GitHub for version control

## Internship Details

- **Domain:** MERN Stack Development
- **Organization:** Council for Skills and Competencies (CSC India)
- **Internship Period:** 4 May 2026 – 27 June 2026

## GitHub Repository

[View the source code on GitHub](https://github.com/LalithaSetty12/my-mern-app)

## Future Enhancements

- Integrate the React frontend
- Improve input validation and error handling
- Add application testing and documentation
- Deploy the complete application online
