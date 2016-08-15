import React from 'react';
import {render} from 'react-dom';

class FlightsApp extends React.Component {
  render() {
    return <p> Hello World, Welcome to Flights! </p>;
  }
}

render(<FlightsApp/>, document.getElementById('flights-app-root'));
