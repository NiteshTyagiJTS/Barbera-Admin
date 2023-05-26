import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './tailwind.config.js';
// PAGES
import Bookings from './pages/bookings/bookings.js';
import Code_management from './pages/code_management/code_management.js';
import Customer_management from './pages/customer_management/customer_management.js';
import Dashboard from './pages/dashboard/dashboard.js';
import Login from './pages/login/login.js';
import Services from './pages/services/services.js';
import User_management from './pages/user_management/user_management.js';

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Bookings" element={<Bookings />} />
          <Route exact path="/Code_management" element={<Code_management />} />
          <Route exact path="/Customer_management" element={<Customer_management />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/User_management" element={<User_management />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
