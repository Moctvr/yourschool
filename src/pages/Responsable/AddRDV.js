import React, { Component } from "react";

import { AppointmentPicker } from "react-appointment-picker";

export default class AddRDV extends Component {
  state = {
    loading: false,
    continuousLoading: false
  };

  addAppointmentCallback = ({
    addedAppointment: { day, number, time, id },
    addCb
  }) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(
          `Added appointment ${number}, day ${day}, time ${time}, id ${id}`
        );
        addCb(day, number, time, id);
        this.setState({ loading: false });
      }
    );
  };

  removeAppointmentCallback = ({ day, number, time, id }, removeCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(
          `Removed appointment ${number}, day ${day}, time ${time}, id ${id}`
        );
        removeCb(day, number);
        this.setState({ loading: false });
      }
    );
  };

  render() {
    const days = [
      [
        { id: 9, number: 1, periods: 3 },
        { id: 10, number: 2, periods: 3 },
        { id: 11, number: 3, isReserved: true, periods: 4 },
            { id: 12, number: "4", periods: 3},
          { id: 16, number: "4", periods: 3 }
      ],
      [
        { id: 9, number: 1, periods: 3 },
        { id: 10, number: 2, periods: 3 },
        { id: 11, number: 3, isReserved: true, periods: 4},
          { id: 12, number: "4", periods: 3 },
           { id: 12, number: "4", periods: 3 },
        
      ],
      [
        { id: 9, number: 1, periods: 3 },
        { id: 10, number: 2, periods: 3 },
        { id: 11, number: 3, isReserved: true, periods: 4 },
          { id: 12, number: "4", periods: 3},
          { id: 16, number: "4", periods: 3 }
      ],
      [
        { id: 13, number: 1, periods: 3 },
        { id: 14, number: 2, periods: 3 },
        { id: 15, number: 3, isReserved: true, periods: 4 },
          { id: 16, number: "4", periods: 3 },
            { id: 16, number: "4", periods: 3 }
        
      ],
      [
        { id: 9, number: 1, periods: 3 },
        { id: 10, number: 2, periods: 3 },
        { id: 11, number: 3, isReserved: true, periods: 4 },
          { id: 12, number: "4", periods: 3 },
          { id: 16, number: "4", periods: 3 }
      ],
      [
        { id: 21, number: 1,  periods: 3 },
        { id: 22, number: 2,  periods: 3 },
       
      ]
    ];
    const { loading, continuousLoading } = this.state;
    return (
      <div>
        <h1>Validez Rendez Vous Semaine du 7/Novembre/2021  au 14/Novembre/2021 </h1>
        <AppointmentPicker
          addAppointmentCallback={this.addAppointmentCallback}
          removeAppointmentCallback={this.removeAppointmentCallback}
          initialDay={new Date("2021-02-01")}
          days={days}
          maxReservableAppointments={10}
          alpha
          visible
          selectedByDefault
          loading={loading}
        />
      </div>
    );
  }
}