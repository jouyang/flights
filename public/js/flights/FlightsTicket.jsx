import React from 'react';
import FlightsTicketTimeline from './FlightsTicketTimeline.jsx';

export default class FlightsTicket extends React.Component {
  render() {
    return(
      <div className='flights-app-ticket'>
        <img src={'/images/ticketTable.png'} className="img-responsive"/>
      </div>
    )
  }
}
