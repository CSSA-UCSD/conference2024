import React from "react";
import socialMedia from "../data/socialMedia";
import SocialIcons from "./SocialIcons";
import CSSALogo from "../../img/logos/Wordmark_White.svg"

class Footer extends React.Component {
    render() {
        const socialIconComponent = socialMedia.map(item => < SocialIcons key={item.id} item={item}/>);
        return (
            <footer className="page-footer font-small cyan darken-3" id="social-media">
                <div className="footer-copyright justify-content-center pt-2 d-flex align-items-center">
                    <div className="col py-3">
                        <div className="mb-1 d-flex justify-content-center">
                            { socialIconComponent }
                        </div>
                    </div>
                </div>

                <div className="footer-copyright justify-content-center py-3 d-flex align-items-center" id="footer-logo">
                    <div>
                        <a href="https://cssa-ucsd.org/"> <img id="logo" src={CSSALogo} alt="CSSA"></img></a>
                    </div>
                    <div className="copywrite">© 2024</div> 
                </div>

            </footer>   
        );
    }
}

export default Footer;