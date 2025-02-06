"use client";
import useWebSocket from "../hooks/useWebSocket";
import { MapPin, Package, Truck } from "lucide-react";
import ShipmentCard from "./ShipmentCard";

const ShipmentTracker = () => {
  const shipments = useWebSocket();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Real-Time Shipment Tracker
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2 space-y-4 overflow-y-auto max-h-[600px]">
          {shipments.length > 0 ? (
            shipments.map((shipment) => (
              <ShipmentCard key={shipment.id} shipment={shipment} />
            ))
          ) : (
            <div className="text-center text-gray-500 bg-white rounded-lg shadow p-8">
              <Package className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-4 text-lg font-semibold">
                No shipment data available
              </p>
              <p className="mt-2">Waiting for updates...</p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard icon={<Package />} title="Total Shipments" value={shipments.length} />
        <StatCard
          icon={<Truck />}
          title="In Transit"
          value={shipments.filter((s) => s.status === "In Transit").length}
        />
        <StatCard
          icon={<MapPin />}
          title="Delivered"
          value={shipments.filter((s) => s.status === "Delivered").length}
        />
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }) => (
  <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-4">
    <div className="p-3 rounded-full bg-blue-100 text-blue-600">{icon}</div>
    <div>
      <p className="text-gray-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

export default ShipmentTracker;
