import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

class SpeakerPreview extends React.Component {

    render() {
        return (
            <div className="carousel-speaker mx-2">
                <Link smooth to={'/speakers/#' + this.props.item.id} className='nav-link'>
                    
                {/* <Link to={'/speakers/#' + this.props.item.id} className='nav-link'> */}
                <a href={`/speakers/#` + this.props.item.id}>
               
                    <div className="pb-3">
                        <img className="speaker-img" src={require(`../../../img/speakers/${this.props.item.img}`).default}
                            alt={this.props.item.name} ></img>
                        <div className="speaker-title my-3">
                            <h5>{this.props.item.name}</h5>
                            <p className="ital">{this.props.item.title}</p>
                        </div>
                    </div>                    
                </a>
               
                </Link>
            </div>
        );
    }
}

export default SpeakerPreview;

