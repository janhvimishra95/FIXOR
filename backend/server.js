import serviceRoutes from "./routes/serviceRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

app.use("/api/services", serviceRoutes);
app.use("/api/bookings", bookingRoutes);