# 🚀 Resume Builder

A full-stack web application that helps users create, customize, and share professional resumes with ease. It includes AI-powered summary enhancement, live preview, and public resume sharing.

## ✨ Features

- 📄 Create and edit resumes with structured sections:
  - Personal Information
  - Professional Summary
  - Work Experience
  - Education
  - Projects
  - Skills
- 🤖 AI-powered enhancement for professional summaries
- 👀 Live resume preview
- 🎨 Multiple templates with accent color customization
- 💾 Save and update resumes anytime
- 🌐 Public resume sharing via unique link

## 🛠 Tech Stack

### Frontend

- React
- Vite

### Backend

- Node.js
- Express

### Database

- MongoDB

### Other Tools

- OpenAI API (AI features)
- Multer (file uploads)
- JWT (authentication & authorization)

## 📁 Project Structure

```
Resume Builder/
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   └── pages/          # Page-level components
│
├── server/                 # Express backend
│   ├── controllers/        # Request handlers
│   ├── models/             # Mongoose schemas
│   └── router/             # API routes
```

## ⚙️ Getting Started

### 📌 Prerequisites

Make sure you have:

- Node.js installed
- npm or yarn
- MongoDB (local or cloud)
- OpenAI API key

### 🔧 Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd "Resume Builder"
```

Install dependencies:

```bash
cd client
npm install

cd ../server
npm install
```

### 🔐 Environment Variables

#### `server/.env`

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4o-mini
```

#### `client/.env`

```env
VITE_BASE_URL=http://localhost:5000
```

### ▶️ Run the Application

Start backend:

```bash
cd server
npm run dev
```

Start frontend:

```bash
cd client
npm run dev
```

Open in browser:

http://localhost:5173

## 🔗 API Notes

Public resume preview endpoint:

`/api/resumes/public/:resumeId`

## ⚠️ Common Issues

If AI summary feels generic:

- Make sure input text is not empty
- Check prompt formatting in backend
- Verify OpenAI API key is working

## 📄 License

MIT License © 2026

Permission is granted to use, modify, and distribute this software freely.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
