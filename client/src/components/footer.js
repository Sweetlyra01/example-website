import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faTwitter, faTiktok} from '@fortawesome/free-brands-svg-icons';
class Footer extends Component {
    render() {
        return (
            <>
                <div className="gold">
                    <footer className="footer black">
                        <div className="margin">
                            <div>
                                <img src= {logo} alt="logo" className="logo"/>
                                <span className="brand">FitFinity</span>
                            </div>
                            <div>
                                <p className="tagline-par">Take the first step towards a healthier and stronger you by joining us! Achieve your fitness goals with FitFinity.</p>
                            </div>
                            <div className="socials">
                            <FontAwesomeIcon icon={faFacebook} className="footer-icon"/>
                            <FontAwesomeIcon icon={faYoutube} className="footer-icon"/>
                            <FontAwesomeIcon icon={faTwitter} className="footer-icon"/>
                            <FontAwesomeIcon icon={faTiktok} className="footer-icon"/>

                    
                            </div>
                        </div>
                        <div className="margin">
                            <div className="column">
                                <h2>Quick Links</h2>
                                <span className="gold-text">HOME</span>
                                <a href="/program"><span className="gold-text">PROGRAMS</span></a>
                                <a href="/product"><span className="gold-text">PRODUCTS</span></a>
                                <a href="/secretAdminPage"><span className="gold-text">ABOUT</span></a>
                            </div>
                        </div>
                        <div className="margin">
                            <div className="column">
                                <h2>COMPANY</h2>
                                <a href="/"><span className="gold-text">Business</span></a>
                                <a href="/"><span className="gold-text">Franchise</span></a>
                                <a href="/"><span className="gold-text">Partnership</span></a>
                                <a href="/"><span className="gold-text">Network</span></a>
                            </div>
                        </div>
                        <div className="margin">
                            <div className="column">
                                <h2>ABOUT US</h2>
                                <a href="/"><span className="gold-text">Blogs</span></a>
                                <a href="/"><span className="gold-text">FAQ</span></a>
                                <a href="/"><span className="gold-text">Security</span></a>
                            </div>
                        </div>
                        <div className="margin">
                            <div className="column">
                                <h2>CONTACT</h2>
                                <a href="/"><span className="gold-text">Contact</span></a>
                                <a href="/"><span className="gold-text">Privacy Policy</span></a>
                                <a href="/"><span className="gold-text">Terms & Conditions</span></a>
                                <a href="/bmi"><span className="gold-text">BMI Calculator</span></a>
                            </div>
                        </div>
                    
        
                    </footer>
                </div>
            </>
        )
    }
}

export default Footer;