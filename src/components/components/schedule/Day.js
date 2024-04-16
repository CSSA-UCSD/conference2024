import React, { useEffect } from "react";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import AOS from "aos";
import StickyBox from "react-sticky-box";

import Event from "../../components/schedule/Event";
import DayScheduleData from "../../data/home/DayScheduleData";
import PlanetIcon from "../../../assets/planetIcon.png";

function Day() {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    })

    /** 
     * Gets the weekday from the given date and word length option
     * @param {string | number | Date} date - date to get the weekday of 
     * @param {string} length - long, short, or narrow form of weekday in words (e.g. Monday vs. Mon)
     * @returns weekday in English words
     */
    const getWeekday = (date, length) => {
        return new Intl.DateTimeFormat("en-US", { weekday: length }).format(new Date(date));
    }


    return (
        <div className="day-schedule pb-5" data-aos="fade-up">
            <div className="row" style={{ display: 'flex' }}>
                <StickyBox offsetBottom={40} className="sidebar mt-2 mb-4" >
                    {/* <div className=""> */}
                    <ul>
                        <li>
                            <Link smooth to="#day1">Day 1</Link>
                        </li>
                        <li>
                            <Link smooth to="#day2">Day 2</Link>
                        </li>
                        <li>
                            <Link smooth to="#day3">Day 3</Link>
                        </li>
                    </ul>
                    {/* </div> */}
                </StickyBox>
                <div className="content">
                    {DayScheduleData.map(day => {
                        return <div className="day" key={day.id}>
                            <img className="planet mx-3" src={PlanetIcon} alt="Planet Image"/>
                            <div className="content">
                                <h1>{day.name}</h1>
                                <h4>{getWeekday(day.date, "short")} {day.date} | {day.time}</h4>
                                <span className="location">{day.location}</span>
                                <div className="my-5">
                                    {day.events.map((item, key) => {
                                        return < Event key={key} item={item} />
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    })}
                    <div className="day">
                        <img className="planet mx-3" src={PlanetIcon} alt="Planet Image"/>
                        <div className="content">
                            <h1>THANK YOU FOR VISITING!</h1>
                            <h4>CSSA@UCSD</h4>
                            <h4 id="cssa">Cognitive Science Student Association</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Day;

