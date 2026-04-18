# Resume Builder

A full-stack resume builder with AI-assisted professional summary enhancement, customizable resume templates, and public resume preview/sharing.

## Features

- Create and edit resumes with sections for:
  - Personal information
  - Professional summary
  - Work experience
  - Education
  - Projects
  - Skills
- AI enhancement for professional summary content
- Live resume preview
- Template selection and accent color customization
- Save and update resumes
- Public sharing and preview of published resumes

## Tech Stack

- Frontend: React, Vite
- Backend: Node.js, Express
- Database: MongoDB
- AI: OpenAI API
- File upload: multer
- Authentication: JWT-based auth

## Project Structure

- `client/` — React frontend application
- `server/` — Express backend API
- `server/controllers/` — API request handlers
- `server/models/` — Mongoose data models
- `server/router/` — Express route definitions
- `client/src/components/` — Reusable UI components
- `client/src/pages/` — Page-level components

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB database
- OpenAI API key

### Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd "Resume Builder"
   ```

2. Install dependencies:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Create environment variables.

#### `server/.env`

```env
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
OPENAI_API_KEY=<your-openai-api-key>
OPENAI_MODEL=gpt-4o-mini
```

#### `client/.env`

```env
VITE_BASE_URL=http://localhost:5000
```

### Run Locally

From the `server/` folder:
```bash
npm run dev
```

From the `client/` folder:
```bash
npm run dev
```

Open the client URL shown by Vite, usually `http://localhost:5173`.

## Notes

- The public resume preview route is served from `/api/resumes/public/:resumeId`.
- If the AI enhancement feature returns generic text, ensure the prompt is passed correctly and the input summary is not empty.

## License

Add your chosen license here, for example `MIT`.
