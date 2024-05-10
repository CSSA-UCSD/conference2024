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

import club from "../../assets/sched_club.png";
import spade from "../../assets/sched_spade.png";
import diamond from "../../assets/sched_diamond.png";
import Day from "../components/schedule/Day";


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
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <img src={crack} className="img-fluid"></img> 
                </div>
                <div className="col-md-7 mx-md-3">
                    <Navbar />
                    <h1>Through the Looking Glass</h1>
                    <div className="row my-5">
                        <p className="col-md-5">CSSA's 17th annual National Cognitive Science Conference is happening from May 11 to May 12!</p>
                        <div className="home-img col-md-7 d-flex align-items-center">
                            <img src={cssaLogo} alt="conference icon" />
                        </div>
                    </div>
                    <div id="about">
                        <h2>About</h2>
                        <p>
                            This year&apos;s conference, Through The Looking Glass, is themed on the fabled tale of Alice&apos;s 
                            Adventures in Wonderland. As anyone who knows cognitive science will tell you, the field in itself 
                            is a series of adventures through different worlds of neuroscience, artificial intelligence, linguistics, 
                            design and so much more. Through the speakers, which include distinguished professors and industry professionals, 
                            learn about the cutting edge work they are doing and learn about ways that you can advance your own career, whether
                            you are planning to continue in academia or work in the industry.
                        </p>    
                    </div> 
                    {/* <div className="home-intro-video py-5">
                            <iframe className="rounded" title="conference-2022" width="100%" height="300" src="https://www.youtube.com/watch?v=Gx60wEdPc7w" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div> */}
                    <div className="speakers">
                        <div>
                            <h2 id="speakers-title"><Link to='/speakers' className='header-link'>Speakers</Link></h2>
                        </div>  
                        <div className="speakers-carousel">
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
                                </div>
                    </div>
                    <div className="schedule">
                        <h2><Link to='/schedule' className='header-link'> Schedule</Link></h2>
                        {/* {ScheduleComponent} */}
                        <div className="row">
                            <div className="col-md-8">
                                <DaySchedule key={DayScheduleData[0].id} item={DayScheduleData[0]}/>
                            </div>
                            <div className="col=md-3">
                                <img src={diamond} className="img-fluid"></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col=md-3">
                                <img src={club} className="img-fluid"></img>
                            </div>
                            <div className="col-md-8">
                                <DaySchedule key={DayScheduleData[1].id} item={DayScheduleData[1]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;
