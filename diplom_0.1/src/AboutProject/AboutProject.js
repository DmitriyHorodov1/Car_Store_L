import React, {Component, useState} from 'react';
import "./AboutProject.css"
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-tsparticles";


function AboutProject() {


    

    return (
        <>

            <ul class="cards">
  <li>
    <a href="" class="card">
      <img src="https://mma.prnewswire.com/media/1015261/FCA_Dodge_Powers_Past_Goal.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          
          <div class="card__header-text">
            <h3 class="card__title">What the topic of web_site?</h3>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="card">
      <img src="https://storage.googleapis.com/production-justhost-v1-0-3/623/387623/tB7mfWuO/fc7e907b6cae44d7aa9ed2bd6ea01cb9" class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
         
          <div class="card__header-text">
            <h3 class="card__title">How am I ?</h3>
            <span class="card__status">3 hours ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
  <a href="" class="card">
      <img src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          
          <div class="card__header-text">
            <h3 class="card__title">Find bug ?</h3>            
            <span class="card__status">сontact me</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a> 
  </li>
    
</ul>



        </>


    );

}

export default AboutProject;