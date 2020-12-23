import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from  './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({ cars: initialCars }) => {

    const [ cars, setCars ] = useState(initialCars.concat())

    const addCar = (car) => {

        setCars(cars.concat({
            ...car,
            id: Math.max(...cars.map(c => c.id)) + 1,
        }));
    };

    const deleteCar = carId => {
        setCars(cars.filter(car => car.id !== carId ));
    };

    return (
      <>
      
       <ToolHeader headerText="Car Tool" />
       <CarTable cars={cars} onDeleteCar={deleteCar}/>
       <CarForm buttonText="Add Car" onSubmitCar={addCar} />
     </>  
 );

};