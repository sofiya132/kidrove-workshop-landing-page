# Kidrove AI & Robotics Summer Workshop

A responsive workshop landing page built as part of the Kidrove Frontend + Backend Assignment.

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

### Frontend

* React.js
* Tailwind CSS
* JavaScript

### Backend

* Node.js
* Express.js

## API Endpoint

### POST /api/enquiry

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

## Setup

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm start
```

## Future Improvements

* MongoDB integration for storing enquiries
* Email notifications
* Admin dashboard
* Workshop seat availability tracking
* Authentication and analytics

## Author

Created for the Kidrove Workshop Landing Page Assignment.
