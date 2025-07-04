📝 Blogify Backend
A robust blogging platform backend built with Node.js, Express, and MongoDB. Blogify lets users create, manage, and share blog posts, with full CRUD operations and planned authentication with JWT.

🚀 Features
🧱 RESTful API for Posts

📚 MongoDB (Mongoose) Models

🔒 (Coming Soon) JWT Auth & Role-based Access

⏱️ Timestamps for post creation & updates

🌱 Simple and modular code structure

📁 Project Structure
bash
Copy
Edit
blogify-backend/
│
├── controllers/       # Route handlers (logic)
│   └── postController.js
│
├── models/            # Mongoose models
│   └── Post.js
│
├── routes/            # API route definitions
│   └── postRoutes.js
│
├── .env               # Environment variables
├── server.js          # Entry point
└── package.json
🔧 Tech Stack
Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Environment: dotenv, nodemon

Testing Tools: Postman / Thunder Client

⚙️ Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/chinmayjjg/blogify-backend.git
cd blogify-backend
2. Install dependencies
bash
Copy
Edit
npm install
3. Setup .env
env
Copy
Edit
PORT=5000
MONGO_URL=mongodb://localhost:27017/blogify
4. Run the server
bash
Copy
Edit
npm run dev
📡 API Endpoints
Base URL: /api/posts
Method	Endpoint	Description
POST	/	Create new post
GET	/	Get all posts
(Coming Soon)	/id	Get, Update, Delete single post

🛣️ Roadmap
 Post CRUD API

 Add User Authentication (JWT)

 Role-based Access (Admin/Writer)

 Connect to React Frontend

 Deploy on Render / Vercel

🙌 Author
Made with 💻 by Chinmay Pradhan (@pradhanchinmay510@gmail.com)
Open to collaboration, feedback, and improvement ideas!
