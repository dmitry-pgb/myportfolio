# Portfolio Project Setup Guide

## Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory with the following variables:
```
USER_NAME=your-email@gmail.com
USER_PASS=your-app-password
```

**Important Notes for Gmail Setup:**
- You need to use an App Password, not your regular Gmail password
- To generate an App Password:
  1. Enable 2-factor authentication on your Google account
  2. Go to Google Account settings > Security > App passwords
  3. Generate a new app password for "Mail"
  4. Use that password in the USER_PASS variable

### 3. Running the Project

#### Frontend (React + Vite)
```bash
npm run dev
```
This will start the frontend development server, typically on `http://localhost:5173`

#### Backend (Express Server)
```bash
npm start
```
This will start the backend server on `http://localhost:3001`

### 4. Available Scripts
- `npm run dev` - Start frontend development server
- `npm run build` - Build the project for production
- `npm start` - Start the backend server
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

### 5. Project Structure
- `src/` - Frontend React application
- `api/` - Backend Express server
- `public/` - Static assets
- `src/components/` - React components

### 6. Features
- Personal portfolio website
- Contact form with email functionality
- Project showcase
- Responsive design with Tailwind CSS
- Analytics integration with Vercel Analytics

## Troubleshooting

### Common Issues:
1. **Email not working**: Make sure you've set up the `.env` file with correct Gmail credentials and App Password
2. **Port conflicts**: If ports 3001 or 5173 are in use, the servers will automatically use the next available port
3. **Dependencies issues**: Try deleting `node_modules` and `package-lock.json`, then run `npm install` again

### Development Tips:
- The frontend and backend run on different ports
- The contact form sends emails through the backend API
- All styling is done with Tailwind CSS
- The project uses Vite for fast development and building


