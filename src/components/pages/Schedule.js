import React from "react";
import '../../style/main.scss';
import Day from "../components/schedule/Day";
import Event from "../components/schedule/Event";
import EventData from "../data/event/EventData";

class Team extends React.Component {
    render() {
        const EventComponent = EventData.map(item => < Event key={item.id} item={item}/>);
        
        return (
            <div className="schedule pt-5">
                <div className="container pb-5">
                    <h1 className="text-center">Schedule</h1>
                    <Day />
                    {/* {EventComponent} */}

                </div>
            </div>
        );
    }
}

export default Team;