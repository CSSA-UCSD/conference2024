import React, { useEffect } from "react";
import AOS from "aos";
import '../../style/main.scss'
import { Link } from "react-router-dom";

import DaySchedule from "../components/home/DaySchedule";
import DayScheduleData from "../data/home/DayScheduleData";

import SpeakerPreview from "../components/home/SpeakerPreview";
import SpeakerData from "../data/SpeakerData";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import IconSVG from '../../assets/logo2023SVG.svg';

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
            <div className="row flex-nowrap py-5 home-title">
                <div className="col-sm-3 p-0">
                    <h1>Beyond</h1>
                    <h1 className="text-nowrap ital" id="ital">
                        The Mind
                    </h1>
                    <p><i>CSSA's National Cognitive Science Conference is happening from May 1st to May 3rd!</i></p>
                </div>
                <div className="home-img col-sm-6 d-flex align-items-center">
                    <img src={IconSVG} alt="conference icon" />
                </div>
                <div className="col-sm-3 p-0 d-flex align-items-end">
                    <h1 className="text-center ital" id="subhead">Cognitive Capacities</h1>
                </div>
            </div>
            <div id="about">
                <h3><span className="ital">01</span> About</h3>
                <p>
                    Delving into the depths of the brain, this year’s Conference aims to explore the abilities of the mind.
                    This year’s theme of <strong><em>"Beyond the Mind: Cognitive Capacities"</em></strong> will focus on comparing
                    and contrasting phenomena in the real world and weighing logic vs creativity.
                </p>
                <p>
                    Attendees and presenters include distinguished researchers and scientists, reputable companies in related industries,
                    and lab representatives. This annual conference is the perfect event to attend if you are interested in academic
                    and career advancement opportunities, or simply want to deepen your knowledge of how the diverse applications of
                    Cognitive Science are shaping the future.
                </p>
            </div> 
            {/* <div className="home-intro-video py-5">
                    <iframe title="conference-2022" width="100%" height="500" src="https://drive.google.com/file/d/1aVVW13imnnutBcy_ufSnogzBe6UB2o7D/view?pli=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> */}
            <div className="speakers">
                <div className="container py-5">
                    <div className="speakers-title header-gradient">
                        <h3><Link to='/speakers' className='nav-link'><span className="ital">02</span> Speakers</Link></h3>
                        {/* <p className="px-5 mt-4">Soon to be released!</p> */}
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
                </div>
            </div>
            <div className="schedule">
                <h3><Link to='/schedule' className='nav-link'><span className="ital">03</span> Schedule</Link></h3>
                {ScheduleComponent}
            </div>

        </div>
    );
}

export default Home;
