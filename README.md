# RealTime API Monitoring System

A simple real-time API monitoring dashboard built using **React, Node.js, Express, MongoDB, and Socket.io**.  
It is designed to track **API performance, status, and errors in real time** and display live updates on the frontend.

> [!NOTE]
> This project is currently **still in the implementing stage**.  
> At present, only the **UI part** has been completed.  
> Backend integration, real-time API tracking, and advanced monitoring logic are under development.  
> The **group collaboration feature** and **team-based smart notification system** will be implemented soon in upcoming updates.

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
- Team-based smart alert architecture *(in progress)*

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
- `api-log` → API monitoring data *(future use)*
- `error-log` → Error tracking *(future use)*
- `team-alert` → Team notification event *(planned)*

## Team-Based Smart Notification System

### Real-Time + Email Hybrid Alert System

This project also aims to support a **team-based smart notification system** for monitoring API issues in collaborative environments.

### Case 1: Multiple Users Online (Team Active)

- You and your teammate are online
- API issue occurs in the system
- ✅ All online users receive real-time socket notifications
- 📧 All team members also receive email alerts for critical issues

### Case 2: Only One User Online (Partial Team Active)

- Only one user is active in the web app
- Other teammate is offline
- ✅ Active user gets instant in-app notification through WebSocket
- 📧 Offline teammate receives an email notification

### Smart Notification Behavior

- 🟢 Online users → Real-time alerts using **Socket.io**
- 🔴 Offline users → Email fallback system
- 🔔 Critical events → Both socket + email alerts

### System Idea

This notification system is designed to ensure that **no team member misses important API issues**, whether they are currently online or offline.

## Purpose

This project helps to:

- Monitor API health in real time
- Detect slow APIs greater than **500ms**
- Track error rates
- Build a production-level observability dashboard
- Improve team awareness with smart alert delivery

## Future Improvements

- Live charts with **Recharts**
- Authentication system
- Role-based dashboard
- Advanced logging system
- Group collaboration feature
- Team-based smart notification system
- Email + socket hybrid alert engine
- Online/offline user activity tracking

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
- Send alerts to active and inactive team members
- Improve incident response in collaborative systems

## Author

**Built by Ravi Tharun 🚀**  
Focused on building real-world full-stack monitoring systems.

> [!NOTE]
> This project is currently in the **implementation phase**.  
> So far, only the **frontend UI** has been completed.  
> Core backend functionality, real-time API monitoring, group collaboration features, and the **Team-Based Smart Notification System** are planned for upcoming versions.