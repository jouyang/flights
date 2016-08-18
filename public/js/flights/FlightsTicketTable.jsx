// @flow

import React from 'react';
import FlightsTicket from './FlightsTicket.jsx';

export default class FlightsTicketTable extends React.Component {
  render() {
    return(
      <div className='flights-app-ticket-table'>
        <FlightsTicket/>
      </div>
    )
  }
}
