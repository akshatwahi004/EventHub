import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import MyBookings from "./pages/MyBookings";
import AdminDashboard from "./pages/AdminDashboard";
import AddEvent from "./pages/AddEvent";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

import PaymentSuccess from "./pages/PaymentSuccess";

import AdminReports from "./pages/AdminReports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}

        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* User Protected Routes */}

        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />

        {/* Admin Protected Routes */}

        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
        <Route
  path="/payment-success"
  element={<PaymentSuccess />}
/>

<Route
  path="/admin/reports"
  element={
    <AdminProtectedRoute>
      <AdminReports />
    </AdminProtectedRoute>
  }
/>

        <Route
          path="/admin/add-event"
          element={
            <AddEvent />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;