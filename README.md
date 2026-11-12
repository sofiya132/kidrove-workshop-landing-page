# Kidrove AI & Robotics Summer Workshop

A responsive workshop landing page built for the Kidrove Frontend + Backend Assignment. Parents can read about the workshop, check the FAQ and register their interest through a validated enquiry form that submits to an Express API.

**Live demo: [kidroveworkshoplandingpage.netlify.app](https://kidroveworkshoplandingpage.netlify.app/)**

## Features

* Responsive UI for all screen sizes
* Hero section with workshop overview
* Workshop details section
* Learning outcomes section
* FAQ section
* Registration form
* Express.js API endpoint for enquiry submissions
* Form validation and error handling
* Clean component-based React architecture

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Tailwind CSS, JavaScript |
| Backend | Node.js, Express.js |
| Hosting | Netlify (frontend) |

## API Endpoint

### `POST /api/enquiry`

Accepts registration details:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

Response:

```json
{
  "success": true,
  "message": "Enquiry submitted successfully"
}
```

## Project Structure

```
kidrove-workshop-landing-page/
├── client/    # React + Tailwind frontend
└── server/    # Express API
```

## Run Locally

Requires Node.js 18 or later and npm. Start the backend and the frontend in two separate terminals.

### Backend

```bash
cd server
npm install
npm start
```

### Frontend

```bash
cd client
npm install
npm run dev
```

Open the local address Vite prints (usually `http://localhost:5173`).

## Future Improvements

* MongoDB integration for storing enquiries
* Email notifications
* Admin dashboard
* Workshop seat availability tracking
* Authentication and analytics

## Author

**Sofiya Sindgi**
[GitHub](https://github.com/sofiya132) · [LinkedIn](https://www.linkedin.com/in/sofiyasindgi/)

Created for the Kidrove Workshop Landing Page Assignment.
