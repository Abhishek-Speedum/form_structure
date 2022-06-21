import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DatePickers extends Component {

    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {

        return (
            <div>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    minDate={new Date()}
                    className="spd_infield"
                />
            </div>
        )
    };
}

export default DatePickers;