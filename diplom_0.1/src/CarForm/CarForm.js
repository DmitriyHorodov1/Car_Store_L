import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import "./CarForm.css"
const CarForm = (props) => {
const validationSchema = Yup.object().shape({
	BrandName: Yup.string().required("Required"),
    ModelName: Yup.string().required("Required"),
    type_car: Yup.string().required("Required"),
});
console.log(props);
return (
  <div className="form-wrapper spasing-form ">
  <Formik {...props} validationSchema={validationSchema}>
    <Form>
      <FormGroup  >
      <label for="exampleFormControlTextarea1" class="form-label">Brand Name</label>
        <Field name="BrandName" type="text" 
            className="form-control form-control-lg spasing-field" />
        <ErrorMessage
          name="BrandName"
          className="d-block invalid-feedback"
          component="span"
        />
      </FormGroup>
      <FormGroup>
      <label for="exampleFormControlTextarea1" class="form-label">Model Name</label>
        <Field name="ModelName" type="text" 
            className="form-control form-control-lg spasing-field " />
        <ErrorMessage
          name="ModelName"
          className="d-block invalid-feedback"
          component="span"
        />
      </FormGroup>
      <FormGroup>
      <label for="exampleFormControlTextarea1" class="form-label">Car type</label>
        <Field name="type_car" type="text" 
            className="form-control form-control-lg spasing-field "  />
        <ErrorMessage
          name="type_car"
          className="d-block invalid-feedback"
          component="span"
        />
      </FormGroup>
      <Button variant="danger" size="lg" 
        block="block" type="submit">
        {props.children}
      </Button>
    </Form>
  </Formik>
</div>
);
};

export default CarForm;
