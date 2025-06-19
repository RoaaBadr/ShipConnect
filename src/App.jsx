import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartupDashboard from './pages/startups/Dashboard';
import Contact from './pages/startups/Contact';
import Offers from './pages/startups/Offers';
import Shipments from './pages/startups/Shipments';
import Setting from './pages/startups/Setting';

function App() {
  return (
    <Router>
      <div className='app'>
        <div className='main'>
          <Routes>
                        {/* Startup Routes */}
            <Route path='/' element={ <StartupDashboard /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/offers' element={ <Offers /> } />
            <Route path='/shipments' element={ <Shipments /> } />
            <Route path='/setting' element={ <Setting /> } />

                        {/* Shipping Routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
