
  
// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import CarForm from "../CarForm/CarForm";
  
// EditCar Component
const EditCar = (props) => {
  const [formValues, setFormValues] = useState({
    BrandName: "",
    ModelName: "",
    year: 0,
    mileage: 0,
    condition:0,
    price:0,
    description:""
  });
    
  //onSubmit handler
  const onSubmit = (carObject) => {
    axios
      .put(
        "http://localhost:4000/cars/update-car/" +
          props.match.params.id,
        carObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Car successfully updated");
          props.history.push("/car-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize car form
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/cars/update-car/" 
        + props.match.params.id
      )
      .then((res) => {
        const { BrandName, ModelName, year, mileage, condition,price, description  } = res.data;
        setFormValues({ BrandName, ModelName, year, mileage, condition,price, description  });
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return car form
  return (
    <CarForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Car
    </CarForm>
  );
};
  
// Export EditCar Component
export default EditCar;