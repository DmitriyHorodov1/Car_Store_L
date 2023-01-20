import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import './CarTableRow.css'

const CarTableRow = (props) => {
const { _id, BrandName, ModelName, year, mileage, condition, price, description } = props.obj;

const deleteCar = () => {
	axios
	.delete(
"http://localhost:4000/cars/delete-car/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Car successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<ul  className="card" style={{borderRadius:'10%', backgroundColor:'#415A77'}} >
	<li>{BrandName}</li>
	<li>{ModelName}</li>
	<li>Year {year}</li>
	<li>Price {price}</li>
	<li>Miles {mileage}</li>
	<li>
		<Link className="edit-link"
		to={"/edit-car/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteCar}
		size="sm" variant="danger">
		Delete
		</Button>
	</li>
	</ul>
);
};

export default CarTableRow;
