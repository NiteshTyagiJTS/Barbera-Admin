import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
// COMPONENTS
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
// PAGES
import Bookings from './pages/bookings/bookings';
import Code_management from './pages/code_management/code_management';
import Customer_management from './pages/customer_management/customer_management';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import Services from './pages/services/services';
import User_management from './pages/user_management/user_management';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="bg-slate-950">
      <Router>
        {loggedIn && (
          <>
            <Navbar onLogout={handleLogout}/>
            {/* <Sidebar /> */}
            <div className="flex flex-col mt-24 mx-4 sm:hidden">
              <Routes>
                <Route path="/Bookings" element={<Bookings />} />
                <Route path="/Code_management" element={<Code_management />} />
                <Route path="/Customer_management" element={<Customer_management />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/User_management" element={<User_management />} />
              </Routes>
            </div>
            <div className="absolute right-20 bottom-16 left-80 top-32 hidden sm:block">
              <Routes>
                <Route path="/Bookings" element={<Bookings />} />
                <Route path="/Code_management" element={<Code_management />} />
                <Route path="/Customer_management" element={<Customer_management />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/User_management" element={<User_management />} />
              </Routes>
            </div>
          </>
        )}

        <Routes>
          <Route
            path="/"
            element={loggedIn ? <Navigate to="/Dashboard" /> : <Login onLogin={handleLogin} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
