import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const CarTableRow = (props) => {
const { _id, BrandName, ModelName, type_car } = props.obj;

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
	<tr>
	<td>{BrandName}</td>
	<td>{ModelName}</td>
	<td>{type_car}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-car/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteCar}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default CarTableRow;
