import React, { useEffect } from "react";
import AOS from "aos";

import Speaker from "../components/speakers/Speaker"
import SpeakerPreview from "../components/home/SpeakerPreview";
import SpeakerData from "../data/SpeakerData";
import DayScheduleData from "../data/home/DayScheduleData";
import Navbar from "../components/Navbar";

function Events() {

    useEffect(() => {
        document.body.className = 'speakers';
        AOS.init({
            duration: 2000
        });
    })

    let dayOneSpeakers = SpeakerData.filter(speaker => speaker.day === 1);
    let dayTwoSpeakers = SpeakerData.filter(speaker => speaker.day === 2);
    let dayThreeSpeakers = SpeakerData.filter(speaker => speaker.day === 3);

    return (
        <div>
            <div className="ps-10">
                <Navbar />
            </div>

            <div className="pt-5">
                <div className="pb-5">
                    <h1 className="text-center">Day <span className="ital">1</span></h1>
                    <div className="row">
                        {dayOneSpeakers.map(item =>
                            <Speaker key={item.id} item={item} />
                        )}
                    </div>
                        <h1 className="text-center">Day <span className="ital">2</span></h1>
                        <div className="row">
                            {dayTwoSpeakers.map(item =>
                                <Speaker key={item.id} item={item} />
                            )}
                        </div>

                        <h1 className="text-center">Day <span className="ital">3</span></h1>
                        <div className="row">
                            {dayThreeSpeakers.map(item =>
                                <Speaker key={item.id} item={item} />
                            )}
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Events;