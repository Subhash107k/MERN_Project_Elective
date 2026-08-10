# Day 17 — Real-Time WebSockets & Event Broadcasting [Advanced Extension / Planned Feature]

## 🎯 Learning Objectives
* Understand HTTP request-response limitations vs full-duplex persistent WebSocket TCP connections.
* Install and set up `socket.io` on Express server and React client (`socket.io-client`).
* Handle socket connection events (`connection`, `disconnect`, `join_room`).
* Broadcast real-time notifications (`io.emit`) to connected React clients upon database updates.

## ⏱️ Session Schedule

| Activity | Duration |
|---|---:|
| Theory | 1 hour |
| Guided Coding | 1 hour |
| Practical Lab | 30 minutes |
| **Total** | **2.5 hours** |

## 📚 Prerequisites
* Completion of [Day 15](./day-15.md).

## 🧠 Theory
> **Note:** This module represents an *Advanced Extension / Planned Feature*. The baseline application operates over REST HTTP APIs. Today's guide demonstrates how to install `socket.io` to add real-time bidirectional WebSockets to your application.

WebSockets establish persistent TCP connections between clients and servers. Unlike traditional HTTP polling, the server can proactively push live event data to connected browser clients instantly.

## 🔑 Key Concepts
* **WebSocket Protocol (`ws://`):** Full-duplex persistent connection over a single TCP socket.
* **Socket.io:** Event-driven WebSocket framework supporting automatic reconnection and room broadcasting.
* **`io.emit()` vs `socket.emit()`:** `io.emit()` broadcasts events to ALL connected clients.

## 🏗️ Project Structure
* [`../backend/package.json`](../backend/package.json)
* [`../frontend/package.json`](../frontend/package.json)

## ⚙️ Installation / Setup
To add WebSockets to your project, install packages:
```bash
# In backend/
cd backend
npm install socket.io

# In frontend/
cd ../frontend
npm install socket.io-client
```

## 💻 Step-by-Step Coding

### Step 1: Initialize Socket.io Server (`backend/src/server.js`)
```javascript
import { createServer } from 'http';
import { Server } from 'socket.io';
import app from './app.js';

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: 'http://localhost:5173' } });

io.on('connection', (socket) => {
    console.log(`Client Connected: ${socket.id}`);
});

export const notifyNewUser = (user) => io.emit('user_created', user);

httpServer.listen(8000);
```

### Step 2: Connect React Client Socket Listener (`frontend/src/pages/Home.jsx`)
```jsx
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Home = () => {
    const [alertMsg, setAlertMsg] = useState('');

    useEffect(() => {
        const socket = io('http://localhost:8000');
        socket.on('user_created', (data) => setAlertMsg(`New user joined: ${data.name}`));
        return () => socket.disconnect();
    }, []);

    return <div>{alertMsg && <p>{alertMsg}</p>}</div>;
};

export default Home;
```

## 🧪 API / Application Testing
Open two browser windows at `http://localhost:5173`. Register a user in Window 1 and observe live notification in Window 2 without refreshing!

## 🔬 Practical Lab
Broadcast a `product_added` event whenever a new product is saved to MongoDB.

## ✅ Expected Result
Real-time bidirectional event broadcasting triggering instant UI alerts across multiple clients.

## ⚠️ Common Errors
* WebSocket connection failed: CORS origin mismatch between React dev server port (5173) and Socket.io options.

## 🔧 Troubleshooting
Verify `cors.origin` matches client URL. Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Practice Exercise
Create a live active user count badge that increments on client connection and decrements on disconnect.

## 📦 Daily Deliverable
Configured Socket.io real-time WebSocket event extension.

## ✅ Completion Checklist
- [ ] Theory completed
- [ ] Code implemented
- [ ] Application runs successfully
- [ ] Feature tested
- [ ] Practical exercise completed
- [ ] Errors resolved
- [ ] Daily deliverable completed
