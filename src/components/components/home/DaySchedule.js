import React from "react";
import AOS from "aos";


class DaySchedule extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {
        const weekday = new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(new Date(this.props.item.date));
        return (
            <div className="day-schedule pb-5" data-aos="fade-up">
                <div className="day-schedule-content">
                    <div className="p-4 row container">
                        <div className="day-info">
                            <h4>{weekday}</h4>
                            <h2>{this.props.item.name} - {this.props.item.date}</h2>
                            <h4><span className="loc">{this.props.item.location}</span></h4>
                            { this.props.item.events && this.props.item.events.map((event, key) => {
                                return <p key={key}><span className="time">{event.time}</span> {event.title}</p>
                            })}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default DaySchedule;

