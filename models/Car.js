import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  image: String,
  description: String,
  year: Number,
  color: String,
  transmission: String,
  mileage: Number,
  fuel: String,
  engine: String,
  doors: Number,
  seats: Number,

  make: { type: mongoose.Schema.Types.ObjectId, ref: "Makes" },
});

const MakeSchema = new mongoose.Schema({
  make: String,
})
export const Car = mongoose.models.Car || mongoose.model("Car", CarSchema);
export const Make = mongoose.models.Make || mongoose.model("Make", MakeSchema);