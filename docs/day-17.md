# Day 17 — Real-Time WebSockets & Event Broadcasting [Advanced Extension / Planned Feature]

## 🎯 What Was Learned
* Understood HTTP request-response limitations vs full-duplex persistent WebSocket TCP connections.
* Studied setting up `socket.io` on Express server and React client (`socket.io-client`).
* Handled socket connection events (`connection`, `disconnect`, `join_room`).
* Learned real-time notification broadcasting (`io.emit`) to connected React clients.

## 🧠 Theory & Concepts
> **Note:** This module represents an *Advanced Extension / Planned Feature*. The baseline application operates over REST HTTP APIs. Today's notes document how to install `socket.io` to add real-time bidirectional WebSockets to your application.

WebSockets establish persistent TCP connections between clients and servers. Unlike traditional HTTP polling, the server can proactively push live event data to connected browser clients instantly.

## 🔑 Key Takeaways
* **WebSocket Protocol (`ws://`):** Full-duplex persistent connection over a single TCP socket.
* **Socket.io:** Event-driven WebSocket framework supporting automatic reconnection and room broadcasting.
* **`io.emit()` vs `socket.emit()`:** `io.emit()` broadcasts events to ALL connected clients.

## 🏗️ Project Structure
* [`../backend/package.json`](../backend/package.json)
* [`../frontend/package.json`](../frontend/package.json)

## ⚙️ Setup & Configuration
To add WebSockets extension to your project, install packages:
```bash
# In backend/
cd backend
npm install socket.io

# In frontend/
cd ../frontend
npm install socket.io-client
```

## 💻 Implementation

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

## 🧪 Testing & Verification
Open two browser windows at `http://localhost:5173`. Register a user in Window 1 and observe live notification in Window 2 without refreshing!

## 🔬 Practical Work
Broadcast a `product_added` event whenever a new product is saved to MongoDB.

## ✅ What Was Completed
* Documented WebSocket full-duplex TCP protocol concepts.
* Designed Socket.io event broadcasting patterns.
* Built real-time React event listener integration blueprint.

## ⚠️ Problems Encountered
* WebSocket connection failed: Occurred when CORS origin mismatched between React dev server port (5173) and Socket.io options.

## 🔧 Troubleshooting & Fixes
Verify `cors.origin` matches client URL. Refer to [Troubleshooting Guide](./troubleshooting.md).

## 📝 Additional Practice
Create a live active user count badge that increments on client connection and decrements on disconnect.

## 📦 Day Deliverable
Configured Socket.io real-time WebSocket event extension design.

## ✅ Verification Checklist
- [ ] What was learned reviewed
- [ ] Code extension documented
- [ ] Socket integration verified
- [ ] Testing verified
- [ ] Practical work completed
- [ ] Problems resolved
- [ ] Day deliverable completed
