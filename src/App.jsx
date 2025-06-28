import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartupDashboard from './pages/startups/Dashboard';
import Contact from './pages/startups/Contact';
import Setting from './pages/startups/Setting';
import OffersList from './pages/startups/OffersList';
import ShipmentList from './pages/startups/ShipmentList';
import ShipmentDetails from './pages/startups/ShipmentDetails';
import AddShipment from './components/AddShipment';

import { mockShipments } from './data/mockShipments'

function App() {
  const [shipments, setShipments] = useState(mockShipments)

  const handleAddShipment = (newShipment) => {
    setShipments(prev => [newShipment, ...prev])
  }
  return (
    <Router>
      <div className='app'>
        <div className='main'>
          <Routes>
            {/* Startup Routes */}
            <Route path='/' element={<StartupDashboard />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/offers' element={<OffersList />} />
            <Route path='/shipments' element={<ShipmentList shipments={shipments} setShipments={setShipments}/>} />
            <Route path='/shipment/:id' element={<ShipmentDetails />} />
            <Route path='/setting' element={<Setting />} />
            <Route path="/add-shipment" element={<AddShipment onAddShipment={handleAddShipment} />} />

            {/* Shipping Routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
