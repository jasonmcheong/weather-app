import React, { Component } from 'react';
import './App.css';
import LocationList from './components/location-list';
import Header from './components/header';
import WeatherDisplay from './components/weather-display';

class App extends Component {
    state = {
        locationList: [],
        locationArr: [],
        locationTitle: '',
    };

    constructor(props) {
        super(props);

        this.handleLocation = this.handleLocation.bind(this);
        this.handleLocationID = this.handleLocationID.bind(this);
        this.handleLocationTitle = this.handleLocationTitle.bind(this);
    }

    // gets the location array from <Header/>
    handleLocation(value) {
        this.setState({
            locationList: value,
        });
    }

    handleLocationID(value) {
        this.setState({
            locationArr: value,
        });
    }

    handleLocationTitle(value) {
        this.setState({
            locationTitle: value,
        });
    }

    render() {
        return (
            <div className='App'>
                <Header handleLocation={this.handleLocation} />
                <LocationList
                    locationList={this.state.locationList}
                    getLocationID={this.handleLocationID}
                    getLocationTitle={this.handleLocationTitle}
                />
                <WeatherDisplay temperature={this.state.locationArr} title={this.state.locationTitle} />
            </div>
        );
    }
}

export default App;
