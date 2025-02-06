import { useState } from 'react'
import './App.css'
import ShipmentTracker from './components/ShipmentTracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <ShipmentTracker />
    </div>
  )
}

export default App
