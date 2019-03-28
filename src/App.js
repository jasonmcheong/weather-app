import React, { Component } from 'react';
import './App.css';
import LocationList from './components/location-list';
import Header from './components/header';
import WeatherDisplay from './components/weather-display';

class App extends Component {
    state = {
        locationList: [],
        locationObj: [],
    };

    constructor(props) {
        super(props);

        this.handleLocation = this.handleLocation.bind(this);
        this.handleLocationID = this.handleLocationID.bind(this);
    }

    // gets the location array from <Header/>
    handleLocation(value) {
        this.setState({
            locationList: value,
        });
    }

    handleLocationID(value) {
        this.setState({
            locationObj: value,
        });
    }

    render() {
        return (
            <div className='App'>
                <Header handleLocation={this.handleLocation} />
                <LocationList locationList={this.state.locationList} getLocationID={this.handleLocationID} />
                <WeatherDisplay weather={this.state.locationObj} />
            </div>
        );
    }
}

export default App;
