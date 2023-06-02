import { createContext, useState } from "react";
import carsData from "./cars.json";

// fetch('cars.json')
// .then((res) => {
//   return res.json();
// })
// .then((data) => console.log(data));

const initialState = {
  cars: [],
  setCars: () => {},
};

export const CarsContext = createContext(initialState);

export const CarsContextProvider = (props) => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("carsdata")) ||
      carsData.map((car) => {
        const storedData = {
          id: car.id,
          name: car.name,
          class: car.class,
          image: car.image,
          description: car.description,
          seats: car.seats,
          luggage: car.luggage,
          num: 0,
        };
        return storedData;
      })
  );

  return (
    <CarsContext.Provider value={{ cars: state, setCars: setState }}>
      {props.children}
    </CarsContext.Provider>
  );
};
