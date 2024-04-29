import React from "react";
import '../../style/main.scss';
import Day from "../components/schedule/Day";
import Event from "../components/schedule/Event";
import EventData from "../data/event/EventData";
import Navbar from "../components/Navbar";

class Team extends React.Component {
    render() {
        const EventComponent = EventData.map(item => < Event key={item.id} item={item}/>);
        
        return (
            <div >
                <div className="ps-10">
                    <Navbar/>
                </div>
                <div className="schedule pt-5 d-flex flex-column align-items-center">
                    <div className="container pb-5">
                        {/* <h2 className="bd">Schedule</h2> */}
                        <Day />
                        {/* {EventComponent} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;