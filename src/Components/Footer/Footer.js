import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return <footer>
        <div className="container">
            <div className="row text-white">
                <div className="col-12 col-lg-6 py-4">
                    <h4 className="m-0 ms-3">BrandName</h4>
                </div>
                <div className="col-12 col-lg-6 d-lg-flex justify-content-end py-4">
                    <a href="#" className="btn">
                        <FontAwesomeIcon icon={faFacebook} className="text-primary fs-3" />
                    </a>
                    <a href="#" className="btn">
                        <FontAwesomeIcon icon={faInstagram} className="text-primary fs-3" />
                    </a>
                    <a href="#" className="btn">
                        <FontAwesomeIcon icon={faTwitter} className="text-primary fs-3" />
                    </a>
                </div>
                <hr />
                <div className="col-12 col-lg-2 py-5">
                    <ul className="list-group">
                        <li className="list-group-item"><h5>Company Info</h5></li>
                        <li className="list-group-item"><a href="#" className="btn">About Us</a></li>
                        <li className="list-group-item"><a href="#" className="btn">Carrier</a></li>
                        <li className="list-group-item"><a href="#" className="btn">We are hiring</a></li>
                        <li className="list-group-item"><a href="#" className="btn">Blog</a></li>
                    </ul>
                </div>
                <div className="col-12 col-lg-2 py-5">
                    <ul className="list-group">
                        <li className="list-group-item"><h5>Legal</h5></li>
                        <li className="list-group-item"><a href="#" className="btn">About Us</a></li>
                        <li className="list-group-item"><a href="#" className="btn">Carrier</a></li>
                        <li className="list-group-item"><a href="#" className="btn">We are hiring</a></li>
                        <li className="list-group-item"><a href="#" className="btn">Blog</a></li>
                    </ul>
                </div>
                <div className="col-12 col-lg-2 py-5">
                    <ul className="list-group">
                        <li className="list-group-item"><h5>Features</h5></li>
                        <li className="list-group-item"><a href="#" className="btn">Business Marketing</a></li>
                        <li className="list-group-item"><a href="#" className="btn">User Analytic</a></li>
                        <li className="list-group-item"><a href="#" className="btn">Live Chat</a></li>
                        <li className="list-group-item"><a href="#" className="btn">Unlimited Support</a></li>
                    </ul>
                </div>
                <div className="col-12 col-lg-2 py-5">
                    <ul className="list-group">
                        <li className="list-group-item"><h5>Resources</h5></li>
                        <li className="list-group-item"><a href="#" className="btn">IOS and Android</a></li>
                        <li className="list-group-item"><a href="#" className="btn">Watch a Demo</a></li>
                        <li className="list-group-item"><a href="#" className="btn">Customers</a></li>
                        <li className="list-group-item"><a href="#" className="btn">API</a></li>
                    </ul>
                </div>
                <div className="col-12 col-lg-4 py-5">
                    <h5>Get In Touch</h5>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Your Email"></input>
                        <button className="btn btn-primary py-3 px-4">Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit</p>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;