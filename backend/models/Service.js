import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: String,
  price: String,
});

export default mongoose.model("Service", serviceSchema);