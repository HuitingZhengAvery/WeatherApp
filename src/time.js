import React from 'react';
import moment from 'moment';
import 'moment-timezone';


class Time extends React.Component {
    constructor() {
    super();
    this.state = { time: moment.tz().format('dddd HH:mm') };
    }
    componentDidMount() {
    this.displayTime();
    }
    displayTime() {
    setInterval(() => {
    this.setState({ time: moment.tz(this.props.tz).format('dddd HH:mm') });
    }, 1000);
    }
    render() {
    return (
    <div>
        <p>{this.state.time}</p>
    </div>
    );
    }
    }
    export default Time;