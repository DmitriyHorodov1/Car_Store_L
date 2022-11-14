import React, {Component, useState} from 'react';
import "./AboutProject.css"
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-tsparticles";


function AboutProject() {


    const [visible1, setVisible1] = useState(false);
    const btnClose1 = () => setVisible1(false);
    const btnShow1 = () => setVisible1(true);

    const [visible2, setVisible2] = useState(false);
    const btnClose2 = () => setVisible2(false);
    const btnShow2 = () => setVisible2(true);

    const [visible3, setVisible3] = useState(false);
    const btnClose3 = () => setVisible3(false);
    const btnShow3 = () => setVisible3(true);

    return (
        <>

            <section className="wrapper"    >

                <div className="container-fostrap"  >
                    <div>
                        <img
                            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png"
                            className="react-logo"/>
                        <h1 className="heading">
                            About me and project
                        </h1>
                    </div>
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4">
                                    <div className="card">
                                        <a className="img-card">
                                            <img
                                                src="https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"/>
                                        </a>
                                        <div className="card-content">
                                            <h4 className="card-title">
                                                Bootstrap 3 Carousel FadeIn Out Effect

                                            </h4>
                                            <p className="">
                                                Tutorial to make a carousel bootstrap by adding more wonderful effect
                                                fadein ...
                                            </p>
                                        </div>
                                        <div className="card-read-more">
                                            <a
                                                className="btn btn-link btn-block"   onClick={btnShow1}>
                                                Read More
                                            </a>

                                            <Modal className="modal-style"  show={visible1} onHide={btnClose1}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>заголовок 1</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body> текст 1</Modal.Body>
                                                <Modal.Footer>
                                                </Modal.Footer>
                                            </Modal>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4">
                                    <div className="card">
                                        <a className="img-card">
                                            <img
                                                src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                                        </a>
                                        <div className="card-content">
                                            <h4 className="card-title">
                                                Material Design Responsive Menu

                                            </h4>
                                            <p className="">
                                                Material Design is a visual programming language made by Google.
                                                Language programming...
                                            </p>
                                        </div>
                                        <div className="card-read-more">
                                            <a
                                                className="btn btn-link btn-block"    onClick={btnShow2}>
                                                Read More
                                            </a>
                                        </div>

                                        <Modal className="modal-style"  show={visible2} onHide={btnClose2}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>заголовок 2</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body> текст 2 </Modal.Body>
                                            <Modal.Footer>
                                            </Modal.Footer>
                                        </Modal>


                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4">
                                    <div className="card">
                                        <a className="img-card"
                                        >
                                            <img
                                                src="https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"/>
                                        </a>
                                        <div className="card-content">
                                            <h4 className="card-title">
                                                5 Button Hover Animation Effects

                                            </h4>
                                            <p className="">
                                                tutorials button hover animation, although very much a hover button is
                                                very beauti...
                                            </p>
                                        </div>
                                        <div  className="card-read-more">

                                            <a className="btn btn-link btn-block"  onClick={btnShow3}>
                                                Read More
                                            </a>

                                        </div>

                                        <Modal className="modal-style"  show={visible3} onHide={btnClose3}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>заголовок 3</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body> текст 3 </Modal.Body>
                                            <Modal.Footer>
                                            </Modal.Footer>
                                        </Modal>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



        </>


    );

}

export default AboutProject;