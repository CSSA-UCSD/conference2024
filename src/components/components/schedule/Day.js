import React, { useEffect } from "react";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import AOS from "aos";
import StickyBox from "react-sticky-box";

import Event from "../../components/schedule/Event";
import DayScheduleData from "../../data/home/DayScheduleData";

import heartIcon from "../../../assets/heartDay1.png";
import clubIcon from "../../../assets/clubDay2.png";
import spadeIcon from "../../../assets/spadeDay3.png";

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
                            <Link smooth to="#1">
                                <img src={heartIcon}></img>
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="#2">
                                <img src={clubIcon}></img>
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="#3">
                                <img src={spadeIcon}></img>
                            </Link>
                        </li>
                    </ul>
                    {/* </div> */}
                </StickyBox>
                <div className="content">
                    {DayScheduleData.map(day => {
                        return <div className="day" key={day.id} id={day.id}>
                            <div className="content">
                                <h1>{day.name}</h1>
                                <h6>
                                    {getWeekday(day.date, "short")} {day.date} | {day.time}
                                    <br/>
                                    <span className="location">{day.location}</span>
                                </h6>
                                <div className="event-list">
                                    {day.events.map((item, key) => {
                                        return < Event key={key} item={item} />
                                    })
                                    }
                                </div>
                                {day.recording ?
                                    <div>
                                        <button className="gradient-button">
                                                <a className="" href={day.recording} target="_blank" rel="noopener noreferrer">Recordings</a>
                                        </button>
                                    </div>
                                    : null
                                }
                                </div>
                        </div>
                    })}
                    <div className="day">
                        <div className="thank-you">
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

