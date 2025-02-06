import { MapPin, Package, Clock } from "lucide-react";

const ShipmentCard = ({ shipment }) => {
  const statusColor = {
    "In Transit": "text-yellow-600 bg-yellow-100",
    Delivered: "text-green-600 bg-green-100",
    Delayed: "text-red-600 bg-red-100",
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Shipment - {shipment.id}
        </h2>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor[shipment.status]}`}>
          {shipment.status}
        </span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-5 w-5 mr-2" />
          <span>{shipment.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Package className="h-5 w-5 mr-2" />
          <span>{shipment.items} items</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-5 w-5 mr-2" />
          <span>{new Date(shipment.timestamp).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ShipmentCard;
