import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: { cars: [] },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    addCar: (state, action) => {
      state.cars.push(action.payload);
    },
    removeCar: (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
    updateCar: (state, action) => {
      const index = state.cars.findIndex((car) => car.id === action.payload.id);
      if (index !== -1) {
        state.cars[index] = action.payload;
      }
    }
  },
});

export const { setCars, addCar } = carSlice.actions;
export default carSlice.reducer;
 export const selectCars = (state) => state.car.cars;
