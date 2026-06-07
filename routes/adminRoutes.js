const express = require("express");
const User = require("../models/User");
const Event = require("../models/Event");
const Booking = require("../models/Booking");

const router = express.Router();

router.get("/stats", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalEvents = await Event.countDocuments();

    const totalBookings =
      await Booking.countDocuments();

    const bookings =
      await Booking.find()
        .populate("eventId");

    let totalRevenue = 0;

    bookings.forEach((booking) => {
      if (booking.eventId) {
        totalRevenue +=
          booking.eventId.price *
          booking.tickets;
      }
    });

    res.json({
      totalUsers,
      totalEvents,
      totalBookings,
      totalRevenue,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message:
        "Error fetching stats",
    });
  }
});

module.exports = router;