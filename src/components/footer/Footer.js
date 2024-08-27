import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <>

            <div class="rounded-5 p-5" style={{ backgroundColor: "#fef9f4",  margin:"3%", marginBottom: "-50px",position: "relative", zIndex: "2",  boxShadow:" rgba(0,0,0,0.1) 0 10px 20px 0px"}}>
                <h1>Contact Form</h1>
                <form id="contact_form" name="contact_form" method="post">
                    <div class="mb-5 row">
                        <div class="col">
                            <label>First Name</label>
                            <input type="text" required maxlength="50" class="form-control" id="first_name" name="first_name" />
                        </div>
                        <div class="col">
                            <label>Last Name</label>
                            <input type="text" required maxlength="50" class="form-control" id="last_name" name="last_name" />
                        </div>
                    </div>
                    <div class="mb-5 row">
                        <div class="col">
                            <label for="email_addr">Email address</label>
                            <input type="email" required maxlength="50" class="form-control" id="email_addr" name="email"
                                placeholder="name@example.com" />
                        </div>
                        <div class="col">
                            <label for="phone_input">Phone</label>
                            <input type="tel" required maxlength="50" class="form-control" id="phone_input" name="Phone"
                                placeholder="Phone" />
                        </div>
                    </div>
                    <div class="mb-5">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" name="message" rows="5"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary px-4 btn-lg">Post</button>
                </form>
            </div>





            <footer class="text-center text-lg-start text-black pt-5 rounded-top-5" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", color: 'black' }}>
                <div class="container p-4 ">
                    <div class="row my-4">
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <div class="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: "150px", height: "150px" }}>
                                <img src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png" height="70" alt=""
                                    loading="lazy" />
                            </div>

                            <p class="text-center">Homless animal shelter The budgetary unit of the Capital City of Warsaw</p>

                            <ul class="list-unstyled d-flex flex-row justify-content-center">
                                <li>
                                    <a class="text-black px-2" href="#!">
                                        <i class="fab fa-facebook-square"></i>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-black px-2" href="#!">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a class="text-black ps-2" href="#!">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>

                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase mb-4">Animals</h5>

                            <ul class="list-unstyled">
                                <li class="mb-2">
                                    <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>When your pet is missing</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>Recently found</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>How to adopt?</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>Pets for adoption</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>Material gifts</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>Help with walks</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>Volunteer activities</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase mb-4">Animals</h5>

                            <ul class="list-unstyled">
                                <li class="mb-2">
                                    <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>General information</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>About the shelter</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>Statistic data</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>Job</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>Tenders</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#!" class="text-black"><i class="fas fa-paw pe-3"></i>Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase mb-4">Contact</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <p><i class="fas fa-map-marker-alt pe-2"></i>Warsaw, 57 Street, Poland</p>
                                </li>
                                <li>
                                    <p><i class="fas fa-phone pe-2"></i>+ 01 234 567 89</p>
                                </li>
                                <li>
                                    <p><i class="fas fa-envelope pe-2 mb-0"></i>contact@example.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="text-center text-white p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
                    © 2020 Copyright:
                    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>


        </>
    )
}

export default Footer
