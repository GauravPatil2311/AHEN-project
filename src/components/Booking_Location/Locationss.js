import React, { Component } from 'react';
import Location from './Location';
import './Locationss.css'; 

class Locationss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const locations = [
      { name: 'Rahatni' },
      { name: 'Pimple Saudagar' },
      { name: 'Pimple Gurav' },
      { name: 'Dapodi' },
      { name: 'Wakad' },
      { name: 'Kalewadi' },
      { name: 'Ravet' },
      { name: 'Chinchwad Gaon' },
    ];

    const filteredLocations = locations.filter((location) =>
      location.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return (
      <div className="locationss-centered-container">
        <h2 className="locationss-section-heading">Learn and Drive in Your Preferred Location</h2>

        <div className="locationss-location-search">
          <form className="custom-search-box" role="search">
            <input
              className="custom-search-input"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={this.state.searchTerm}
              onChange={this.handleSearchChange}
            />
            <button className="custom-search-button" type="submit">
              Search
            </button>
          </form>
        </div>
          <br/>
        

        <div className="locationss-locations-container">
          {filteredLocations.map((location, index) => (
            <Location key={index} locationName={location.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Locationss;
