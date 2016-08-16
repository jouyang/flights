import React from 'react';
import FlightsAirportSelector from './FlightsAirportSelector.jsx';
import FlightsClassSelector from './FlightsClassSelector.jsx';
import FlightsDateSelector from './FlightsDateSelector.jsx';
import FlightsNonStopSelector from './FlightsNonStopSelector.jsx';
import FlightsPassengerAmountSelector from './FlightsPassengerAmountSelector.jsx';
import FlightsTypeSelector from './FlightsTypeSelector.jsx';
import FlightsTicketTable from './FlightsTicketTable.jsx';

export default class FlightsAppContainer extends React.Component {
  render() {
    return(
      <div className='flights-app-container'>
        <FlightsTypeSelector/>
        <FlightsClassSelector/>
        <FlightsPassengerAmountSelector/>
        <FlightsNonStopSelector/>
        <FlightsAirportSelector label="Departure"/>
        <FlightsAirportSelector label="Destination"/>
        <FlightsDateSelector label="Departure Date" htmlId="DepartureDate"/>
        <FlightsDateSelector label="Return Date" htmlId="ReturnDate"/>
        <FlightsTicketTable/>
      </div>
    )
  }
}
