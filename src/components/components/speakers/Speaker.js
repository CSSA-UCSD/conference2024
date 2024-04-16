import React from "react";
import AOS from "aos";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class Speaker extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {
        return (
            <Popup
                trigger={
                // <button className="button col-md-6 col-lg-3 py-3"> 
                <button className="button speaker-button col py-3"> 
                <div className="speaker" data-aos="fade-up" id={this.props.item.id}>
                    <div className="speaker-img">
                        <img src={ require(`../../../img/speakers/${this.props.item.img}`).default } 
                            alt={this.props.item.name} ></img>
                    </div>
                    <div className="speaker-title">
                        <h5>{this.props.item.name}</h5>
                        <p>{this.props.item.title}</p>
                    </div>
                </div>
                </button>}
                modal
                nested
            >
                {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                    &times;
                    </button>
                    <div className="header"> <h5>{this.props.item.name}</h5>
                    </div>
                    <div className="content row">
                        <div className="col-md-6 d-flex align-items-center pl-3" style={{'margin': 'auto'}}>
                            <div className="header-description">
                            <img src={ require(`../../../img/speakers/${this.props.item.img}`).default } 
                                alt={this.props.item.name} ></img>
                                <p className="header-description-title">
                                    <a className="header-description-link" href={this.props.item.link}>{this.props.item.title}</a>
                                </p>
                                <p className="header-description-event">{this.props.item.event}</p>
                            </div>
                        </div>
                        {/* <div className="col-md-6 bio">
                            <p>{this.props.item.bio}</p>
                        </div> */}
                    </div>
                </div>
                )}
            </Popup> 
        );
    }
}

export default Speaker;