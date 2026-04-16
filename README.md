# RealTime API Monitoring System

A simple real-time API monitoring dashboard built using **React, Node.js, Express, MongoDB, and Socket.io**.  
It tracks **API performance, status, and errors in real time** and displays live updates on the frontend.

> [!NOTE]
> Currently, only the **UI part** of this project is completed.  
> Backend integration and real-time monitoring features are still under development.  
> The **group collaboration feature** will be implemented soon in future updates.

## Tech Stack

- **React.js** — Frontend
- **Node.js** — Runtime environment
- **Express.js** — Backend framework
- **MongoDB** — Database
- **Socket.io** — Real-time communication
- **Axios** — API requests

## Features

- Real-time API logging
- Response time tracking
- Error detection for **4xx / 5xx**
- API performance monitoring
- Live alerts using WebSockets
- Dashboard visualization ready

## How It Works

1. Frontend calls API
2. Backend processes request
3. Middleware tracks request data like:
   - Status code
   - Response time
   - Endpoint
4. Server emits event using **Socket.io**
5. Frontend receives real-time updates instantly

## Project Structure

```bash
server/
├── config/
├── routes/
├── middleware/
├── sockets/
├── models/
└── server.js

client/
├── src/
├── components/
├── pages/
├── services/
└── socket.js
```

## Example API Flow

```bash
GET /AppExp/check
   ↓
Backend receives request
   ↓
Logs request data
   ↓
Socket emits "check" event
   ↓
Frontend receives and updates UI
```

## Real-Time Events

- `check` → API test event
- `api-log` → API monitoring data (future use)
- `error-log` → Error tracking (future use)

## Purpose

This project helps to:

- Monitor API health in real time
- Detect slow APIs greater than **500ms**
- Track error rates
- Build a production-level observability dashboard

## Future Improvements

- Live charts with **Recharts**
- Authentication system
- Role-based dashboard
- Advanced logging system
- Group collaboration feature

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- MongoDB
- npm or yarn

### Installation

#### Clone the repository

```bash
git clone https://github.com/ravitharun/ReatimeApiMonitorning
```

#### Setup backend

```bash
cd server
npm install
npm start
```

#### Setup frontend

```bash
cd UI
npm install
npm start
```

## Environment Variables

Create a `.env` file inside the `server` folder and add:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

## Use Cases

- Monitor internal APIs
- Track API failures instantly
- Analyze backend performance
- Build real-time admin dashboards

## Author

**Built by Ravi Tharun 🚀**  
Focused on building real-world full-stack monitoring systems.


> [!NOTE]
> This project is currently in the **UI development phase**.  
> Only the frontend interface has been completed so far.  
> Backend functionality, real-time API tracking, and the **group collaboration feature** will be added in upcoming updates.
