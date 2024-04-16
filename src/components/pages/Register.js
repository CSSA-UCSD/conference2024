import React from "react";
import AOS from "aos";

class Register extends React.Component {
    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {

        return (
            <div className="register">
                <div className="container py-5">
                    <div className="register-title header-gradient pt-5">
                        <h1 className="">Register</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 pb-5">
                            <h3>How to Register</h3>
                            <p>Register for the conference by filling in the Zoom form.</p>
                            <button className="gradient-button">
                                <a className="" href="http://tinyurl.com/cogsconference2023" target="_blank" rel="noopener noreferrer">Register Here</a>
                            </button>
                        </div> 
                        <div className="col-sm-6 pb-5">
                            <h3>Socials</h3>
                            <p>Keep in touch by following us on social media.</p>
                            <button className="gradient-button">
                                <a className="" href="https://linktr.ee/CSSA_UCSD" target="_blank" rel="noopener noreferrer">Socials</a>
                            </button>
                        </div>
                        <div className="col-sm-6 pb-5">
                            <h3>Newsletter</h3>
                            <p>Be the first to know about our upcoming events by subscribing to our newsletter.</p>
                            <button className="gradient-button">
                                <a className="" href="https://ucsd.us15.list-manage.com/subscribe?u=0be7335fcd3adf9f817456791&id=0d419c2303" target="_blank" rel="noopener noreferrer">Subscribe</a>
                            </button>
                        </div>
                        <div className="col-sm-6 pb-5">
                            <h3>Main Site</h3>
                            <p>Navigate back to the original CSSA at UCSD site.</p>
                            <button className="gradient-button">
                                <a className="" href="https://cssa-ucsd.org" target="_blank" rel="noopener noreferrer">CSSA at UCSD</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;