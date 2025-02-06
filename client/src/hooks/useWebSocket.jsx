import { useState, useEffect } from "react";

const useWebSocket = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4000");

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    socket.onmessage = (event) => {
      console.log("Received shipment data:", event.data);
      setShipments(JSON.parse(event.data));
    };

    socket.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    return () => {
      socket.close();
    };
  }, []);

  return shipments;
};

export default useWebSocket;
