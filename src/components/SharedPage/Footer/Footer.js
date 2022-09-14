import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="container-fluid bg-slide text-white ">
            <footer className="py-5 px-4">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <ul className="nav flex-column">
                            <h5>Menu</h5>
                            <li className="nav-item mb-2"><Link to="" className="nav-link p-0 text-muted">Home</Link></li>
                            <li className="nav-item mb-2"><Link to='' className="nav-link p-0 text-muted">All Inventory</Link></li>
                            <li className="nav-item mb-2"><Link to="" className="nav-link p-0 text-muted">Blogs</Link></li>
                            <li className="nav-item mb-2"><Link to="" className="nav-link p-0 text-muted">FAQs</Link></li>
                            <li className="nav-item mb-2"><Link to="" className="nav-link p-0 text-muted">About</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Services</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="" className="nav-link p-0 text-muted">Bikes</Link></li>
                            <li className="nav-item mb-2"><Link to='' className="nav-link p-0 text-muted">Engine Oil</Link></li>
                            <li className="nav-item mb-2"><Link to="" className="nav-link p-0 text-muted">Services</Link></li>
                            <li className="nav-item mb-2"><Link to="" className="nav-link p-0 text-muted">Contact</Link></li>
                            <li className="nav-item mb-2"><Link to="" className="nav-link p-0 text-muted">Career</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Policy</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="" className="nav-link p-0 text-muted">News</Link></li>
                            <li className="nav-item mb-2"><Link to='' className="nav-link p-0 text-muted">Legal Policy</Link></li>
                            <li className="nav-item mb-2"><Link to="" className="nav-link p-0 text-muted">Warranty Policy</Link></li>
                            <li className="nav-item mb-2"><Link to="" className="nav-link p-0 text-muted">Terms and Condition</Link></li>
                            <li className="nav-item mb-2"><Link to="" className="nav-link p-0 text-muted">Become a Dealer</Link></li>
                        </ul>
                    </div>





                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="text-center pt-4  border-top ">
                    <p>&copy; 2022 Dream Bike ||  All rights reserved || Created By Ab Hamid</p>
                </div>
            </footer>
        </div>


    );
};

export default Footer;