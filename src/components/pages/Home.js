import React, { useEffect } from "react";
import AOS from "aos";
import '../../style/main.scss'
import { Link } from "react-router-dom";

import DaySchedule from "../components/home/DaySchedule";
import DayScheduleData from "../data/home/DayScheduleData";

import SpeakerPreview from "../components/home/SpeakerPreview";
import SpeakerData from "../data/SpeakerData";

import Navbar from "../components/Navbar";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import cssaLogo from "../../assets/cssaLogo.png";
import crack from "../../assets/crack.png";

const Home = () => {

    useEffect(() => {
        document.body.className = "home";
        AOS.init({
            duration: 2000
        });
    })


    const ScheduleComponent = DayScheduleData.map(item => < DaySchedule key={item.id} item={item} />);
    const SpeakerComponent = SpeakerData.map(item => < SpeakerPreview key={item.id} item={item} />);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const ButtonGroup = ({ next, previous }) => {
        return (
            <div className="custom-button-group row d-flex">
                {/* <div className="buttons pr-3">
                        <button className="pr-3 carousel-arrows" onClick={() => previous()}><p>&#8249;</p></button>
                        <button className="carousel-arrows" onClick={() => next()}><img src="src/assets/planetIcon.png" /></button>
                    </div> */}
            </div>
        );
    };

    return (
        <div className="container">
            <div className="sideImg">
                <img src={crack}></img> 
            </div>
            <div className="right-content">
                <Navbar />
                <div className="row flex-nowrap py-5 home-title">
                    <div className="col-sm-3 p-0">
                        <h1>Through the Looking Glass</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className="home-img col-sm-6 d-flex align-items-center">
                        <img src={cssaLogo} alt="conference icon" />
                    </div>
                    {/* <div className="col-sm-3 p-0 d-flex align-items-end">
                        <h1 className="text-center ital" id="subhead">Cognitive Capacities</h1>
                    </div> */}
                </div>
                <div id="about">
                    <h2>About</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident.
                    </p>    
                </div> 
                {/* <div className="home-intro-video py-5">
                        <iframe title="conference-2022" width="100%" height="500" src="https://drive.google.com/file/d/1aVVW13imnnutBcy_ufSnogzBe6UB2o7D/view?pli=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div> */}
                <div className="speakers">
                    <div className="container py-5">
                        <div className="speakers-title header-gradient">
                            <h2><Link to='/speakers' className='header-link'>Speakers of the Day</Link></h2>
                            {/* <p className="px-5 mt-4">Soon to be released!</p> */}
                            {/* <div className="speakers-carousel">
                                <Carousel 
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={3500}
                                centerMode={true}
                                arrows={true}
                                renderButtonGroupOutside={true} 
                                customButtonGroup={<ButtonGroup />}
                                >
                                {SpeakerComponent}
                                </Carousel>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="schedule">
                    <h2><Link to='/schedule' className='header-link'> Schedule</Link></h2>
                    {ScheduleComponent}
                </div>
            </div>
        </div>
    );
}

export default Home;
