import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import CarTableRow from "../CarTableRow/CarTableRow";
import FilterSideBar from "../FilterSideBar/FilterSideBar";
import "./carList.css"  
const CarList = () => {
  const [cars, setCars] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/cars/")
      .then(({ data }) => {
        setCars(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return cars.map((res, i) => {
      return <CarTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <><div className="table-spacing  ">
      {DataTable()} 
    </div>
    <FilterSideBar />
      </>
  );
};
  
export default CarList;