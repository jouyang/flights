import React from 'react';

export default class FlightsTypeSelector extends React.Component {
  render() {
    return(
      <div className='flights-app-type-selector btn-group-vertical' data-toggle="buttons">
        <label className="btn btn-primary active">
          <input type="radio" name="options" id="FlightTypeOneWay" autoComplete="off"/> One Way
        </label>
        <label className="btn btn-primary">
          <input type="radio" name="options" id="FlightTypeRoundTrip" autoComplete="off"/> Round Trip
        </label>
      </div>
    )
  }
}
