import React from 'react';

export default class FlightsAirportSelector extends React.Component {
  render() {
    return(
      <div className='flights-app-airport-selector input-group' id={this.props.label}>
        <span className="input-group-addon" id="basic-addon1">{this.props.label}</span>
        <input type="text" className="form-control" placeholder="Select Airport" aria-describedby="basic-addon1"/>
      </div>
    )
  }
}
