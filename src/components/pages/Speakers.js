import React, { useEffect } from "react";
import AOS from "aos";

import Speaker from "../components/speakers/Speaker"
import SpeakerPreview from "../components/home/SpeakerPreview";
import SpeakerData from "../data/SpeakerData";
import DayScheduleData from "../data/home/DayScheduleData";

function Events() {

    useEffect(() => {
        document.body.className = 'speakers';
        AOS.init({
            duration: 2000
        });
    })

    return (
        <div className="container pb-5">
            { DayScheduleData.map((day) => {
                    let daySpeakers = SpeakerData.filter(speaker => speaker.day === day.id);
                    return <div className="mt-5" key={day.id}>
                        <h1 className="mb-5">Day <span className="ital">0{day.id}</span></h1>
                        <div className="row justify-content-center">
                        {
                            daySpeakers.map(item => <Speaker key={item.id} item={item} />)
                        }
                        </div>
                    </div>
                })}
        </div>
    )
}

export default Events;