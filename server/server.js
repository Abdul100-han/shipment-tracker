// server.js - Updated Backend with Enhanced Data Simulation and Error Handling
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 4000 });

console.log("WebSocket server running on port 4000");

let shipmentData = [
  { id: "1", location: "Lagos", status: "In Transit", timestamp: new Date() },
  { id: "2", location: "Abuja", status: "Delivered", timestamp: new Date() },
  { id: "3", location: "Kaduna", status: "Delivered", timestamp: new Date() },
];

const statuses = ["In Transit", "Out for Delivery", "Delivered", "Delayed"];

function generateRandomShipmentUpdate() {
  shipmentData = shipmentData.map((shipment) => ({
    id: shipment.id,
    location: shipment.location === "Lagos" ? "Kaduna" : "Abuja",
    status: statuses[Math.floor(Math.random() * statuses.length)],
    timestamp: new Date(),
  }));
}

wss.on("connection", (ws) => {
  console.log("New client connected");

  const interval = setInterval(() => {
    generateRandomShipmentUpdate();
    ws.send(JSON.stringify(shipmentData));
  }, 5000);

  ws.on("close", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

