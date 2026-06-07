import { useEffect, useState } from "react";
import API from "../services/api";
import AdminNavbar from "../components/AdminNavbar";
import { useNavigate } from "react-router-dom";


function AdminDashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalEvents: 0,
    totalBookings: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    fetchStats();

    const interval = setInterval(
      fetchStats,
      5000
    );

    return () => clearInterval(interval);
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get(
        "/admin/stats"
      );

      setStats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <AdminNavbar />
    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl p-8 mb-8 shadow-2xl">
  <h1 className="text-4xl font-bold">
    Welcome Admin 👋
  </h1>

  <p className="mt-2 text-lg">
    Manage events, bookings, users and revenue from one place.
  </p>
</div>
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white p-8">

    <div className="flex justify-between items-center mb-10">
  <h1 className="text-5xl font-bold">
    📊 Admin Dashboard
  </h1>

  <button
    onClick={() => navigate("/admin/add-event")}
    className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-xl font-bold hover:scale-105 transition shadow-lg"
  >
    ➕ Add Event
  </button>
</div>

    <div className="grid md:grid-cols-4 gap-6">

      {/* Total Events */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl hover:scale-105 transition">
        <h3 className="text-gray-300 text-lg">
          Total Events
        </h3>

        <p className="text-5xl font-bold text-cyan-400 mt-3">
          {stats.totalEvents}
        </p>
      </div>

      {/* Total Bookings */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl hover:scale-105 transition">
        <h3 className="text-gray-300 text-lg">
          Total Bookings
        </h3>

        <p className="text-5xl font-bold text-green-400 mt-3">
          {stats.totalBookings}
        </p>
      </div>

      {/* Total Users */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl hover:scale-105 transition">
        <h3 className="text-gray-300 text-lg">
          Total Users
        </h3>

        <p className="text-5xl font-bold text-pink-400 mt-3">
          {stats.totalUsers}
        </p>
      </div>
      

      {/* Revenue */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl hover:scale-105 transition">
        <h3 className="text-gray-300 text-lg">
          Total Revenue
        </h3>

        <p className="text-5xl font-bold text-yellow-400 mt-3">
          ₹{stats.totalRevenue}
        </p>
      </div>

    </div>

  </div>
    </>
);
}

export default AdminDashboard;