// import React, { Component } from 'react';

// import { AppointmentPicker } from 'react-appointment-picker';

// export default class PrendreRDV extends Component {
//   state = {
//     loading: false,
//     continuousLoading: false
//   };

//   addAppointmentCallback = ({
//     addedAppointment: { day, number, time, id },
//     addCb
//   }) => {
//     this.setState(
//       {
//         loading: true
//       },
//       async () => {
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//         console.log(
//           `Added appointment ${number}, day ${day}, time ${time}, id ${id}`
//         );
//         addCb(day, number, time, id);
//         this.setState({ loading: false });
//       }
//     );
//   };

//   removeAppointmentCallback = ({ day, number, time, id }, removeCb) => {
//     this.setState(
//       {
//         loading: true
//       },
//       async () => {
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//         console.log(
//           `Removed appointment ${number}, day ${day}, time ${time}, id ${id}`
//         );
//         removeCb(day, number);
//         this.setState({ loading: false });
//       }
//     );
//   };

//   addAppointmentCallbackContinuousCase = ({
//     addedAppointment: { day, number, time, id },
//     addCb,
//     removedAppointment: params,
//     removeCb
//   }) => {
//     this.setState(
//       {
//         continuousLoading: true
//       },
//       async () => {
//         if (removeCb) {
//           await new Promise((resolve) => setTimeout(resolve, 1000));
//           console.log(
//             `Removed appointment ${params.number}, day ${params.day}, time ${params.time}, id ${params.id}`
//           );
//           removeCb(params.day, params.number);
//         }
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         console.log(
//           `Added appointment ${number}, day ${day}, time ${time}, id ${id}`
//         );
//         addCb(day, number, time, id);
//         this.setState({ continuousLoading: false });
//       }
//     );
//   };

//   removeAppointmentCallbackContinuousCase = (
//     { day, number, time, id },
//     removeCb
//   ) => {
//     this.setState(
//       {
//         continuousLoading: true
//       },
//       async () => {
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//         console.log(
//           `Removed appointment ${number}, day ${day}, time ${time}, id ${id}`
//         );
//         removeCb(day, number);
//         this.setState({ continuousLoading: false });
//       }
//     );
//   };

//   render() {
//     const days = [
//       [
//         { id: 1, number: 1, isSelected: true, periods: 2 },
//         { id: 2, number: 2 },
//         null,
//         { id: 3, number: '3', isReserved: true },
//         { id: 4, number: '4' },
//         null,
//         { id: 5, number: 5 },
//         { id: 6, number: 6 }
//       ],
//       [
//         { id: 7, number: 1, isReserved: true, periods: 3 },
//         { id: 8, number: 2, isReserved: true },
//         null,
//         { id: 9, number: '3', isReserved: true },
//         { id: 10, number: '4' },
//         null,
//         { id: 11, number: 5 },
//         { id: 12, number: 6 }
//       ],
//       [
//         { id: 13, number: 1 },
//         { id: 14, number: 2 },
//         null,
//         { id: 15, number: 3, isReserved: true },
//         { id: 16, number: '4' },
//         null,
//         { id: 17, number: 5 },
//         { id: 18, number: 6 }
//       ],
//       [
//         { id: 19, number: 1 },
//         { id: 20, number: 2 },
//         null,
//         { id: 21, number: 3 },
//         { id: 22, number: '4' },
//         null,
//         { id: 23, number: 5 },
//         { id: 24, number: 6 }
//       ],
//       [
//         { id: 25, number: 1, isReserved: true },
//         { id: 26, number: 2 },
//         null,
//         { id: 27, number: '3', isReserved: true },
//         { id: 28, number: '4' },
//         null,
//         { id: 29, number: 5 },
//         { id: 30, number: 6, isReserved: true }
//       ]
//     ];
//     const { loading, continuousLoading } = this.state;
//     return (
//       <div>
        
//         <AppointmentPicker
//           addAppointmentCallback={this.addAppointmentCallback}
//           removeAppointmentCallback={this.removeAppointmentCallback}
//           initialDay={new Date('2021-10-1')}
//           days={days}
//           maxReservableAppointments={3}
//           alpha
//           visible
//           selectedByDefault
//           loading={loading}
//         />
        
//       </div>
//     );
//   }
// }
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
export default class PrendreRDV extends React.Component {
    render() {
        return <ScheduleComponent>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
</ScheduleComponent>;
    }
}



