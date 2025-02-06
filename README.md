# 📦 Real-Time Shipment Tracking UI

This project is a **React.js-based real-time shipment tracking UI** that receives live shipment updates using WebSockets.

## 🚀 Features
- Fetches **shipment updates every 5 seconds** from a WebSocket server.
- Displays shipment **ID, location, status, and timestamp** in a **responsive UI**.
- Uses **WebSockets for real-time updates**.
- Simple and **clean UI with Tailwind CSS**.

---

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, WebSockets (ws library)
- **Tools:** Vite, ESLint

---

## 📂 Folder Structure
📂 shipment-tracker ┣ 📂 client # React Frontend ┣ 📂 server # Node.js WebSocket Backend


---

## 🔧 Setup Instructions

### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/shipment-tracker.git
cd shipment-tracker


2️⃣ Install Dependencies
📌 Frontend
bash
Copy
Edit
cd client
npm install

📌 Backend
bash
Copy
Edit
cd ../server
npm install

3️⃣ Run the Project
🚀 Start the Backend Server
bash
Copy
Edit
cd server
node server.js

Server will start on ws://localhost:4000.

🚀 Start the Frontend
bash
Copy
Edit
cd ../client
npm run dev

Open http://localhost:5173 in your browser.

![Image Alt](https://github.com/Abdul100-han/shipment-tracker/blob/main/shipment-tracker.png?raw=true)


✨ Author
Abdulsalam Muhammad Abubakar
