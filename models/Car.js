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

  make: { type: mongoose.Schema.Types.ObjectId, ref: 'Make', required: true },
});



const MakeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  logo: { type: String, required: true },
})


const CarSearchSchema = new mongoose.Schema({
  Pickup: String,
  Dropoff: String,
  PickupDate: String,
  ReturnDate: String,
});


export const Car = mongoose.models.Car || mongoose.model("Car", CarSchema);
export const Make = mongoose.models.Make || mongoose.model("Make", MakeSchema);
export const CarSearch = mongoose.models.CarSearch || mongoose.model("CarSearch", CarSearchSchema);