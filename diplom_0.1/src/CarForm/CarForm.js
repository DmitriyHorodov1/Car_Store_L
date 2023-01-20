import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Typography from '@mui/material/Typography';
import { FormGroup, FormControl, Button } from "react-bootstrap";
import "./CarForm.css"
const CarForm = (props) => {
const validationSchema = Yup.object().shape({
  BrandName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
    .required("Required"),
  ModelName: Yup.string()
  .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
  .required("Required"),
  year: Yup.number()
    .required("Required")
    .min(1900, 'Year must be greater than 1900').max(new Date().getFullYear(), 'Year must be less than or equal to current year'),
  mileage: Yup.number()
    .required("Required")
    .min(0, 'Mileage must be greater than or equal to 0'),
  condition: Yup.string()
    .required("Required"),
  price: Yup.number().
    required("Required")
    .min(0, 'Price must be greater than or equal to 0'),
  description: Yup.string()
    .required("Required"),


});
console.log(props);


  return (
    <>
  
    <div className="form-wrapper spasing-form ">

      <Formik {...props} validationSchema={validationSchema}>
        <Form   >
          <FormGroup>
            <label htmlFor="exampleFormControlTextarea1" > 
            <Typography variant="h4" gutterBottom>Brand name</Typography>
            </label>
            <Field name="BrandName" type="text" 
                className="form-control form-control-lg spasing-field " />
                
            <ErrorMessage
              name="BrandName"
              className="d-block invalid-feedback"
              component="span"
              style={{fontSize:'1.5em'}}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="exampleFormControlTextarea1" > 
            <Typography variant="h4" gutterBottom>Model name</Typography>
            </label>
            <Field name="ModelName" type="text" 
                className="form-control form-control-lg spasing-field " />
            <ErrorMessage
              name="ModelName"
              className="d-block invalid-feedback"
              component="span"
              style={{fontSize:'1.5em'}}
            />
          </FormGroup>
              <FormGroup>
          <label htmlFor="exampleFormControlTextarea1" ><Typography variant="h4" gutterBottom>
        Year
      </Typography></label>
          <Field name="year" type="year" 
                className="form-control form-control-lg spasing-field "  />
          <ErrorMessage
            name="year"
            className="d-block invalid-feedback"
            component="span"
            style={{fontSize:'1.5em'}}
          />
        </FormGroup>

                <FormGroup>
          <label htmlFor="exampleFormControlTextarea1" ><Typography variant="h4" gutterBottom>
        Mileage
      </Typography></label>
          <Field name="mileage" type="number" 
              className="form-control form-control-lg spasing-field "  />
          <ErrorMessage
            name="mileage"
            className="d-block invalid-feedback"
            component="span"
            style={{fontSize:'1.5em'}}
          />
        </FormGroup>

                <FormGroup>
          <label htmlFor="exampleFormControlTextarea1" ><Typography variant="h4" gutterBottom>
        Condition
      </Typography></label>
          <Field as="select" name="condition" className="form-control form-control-lg spasing-field">
            <option value="">Select a condition</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </Field>
          <ErrorMessage
            name="condition"
            className="d-block invalid-feedback"
            component="span"
            style={{fontSize:'1.5em'}}
          />
        </FormGroup>

                <FormGroup>
          <label htmlFor="exampleFormControlTextarea1" ><Typography variant="h4" gutterBottom>
        Price
      </Typography></label>
          <Field name="price" type="number" 
              className="form-control form-control-lg spasing-field "  />
          <ErrorMessage
            name="price"
            className="d-block invalid-feedback"
            component="span"
            style={{fontSize:'1.5em'}}
          />
        </FormGroup>

                <FormGroup>
          <label htmlFor="exampleFormControlTextarea1" ><Typography variant="h4" gutterBottom>
          Description
      </Typography></label>
          <Field as='textarea' rows='5' name="description"
              className="form-control form-control-lg spasing-field "  />
          <ErrorMessage
            name="description"
            className="d-block invalid-feedback"
            component="span"
            style={{fontSize:'1.5em'}}
          />
        </FormGroup>
        <Button variant="danger" size="lg" 
            block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
    </>
    
  );
};

export default CarForm;
