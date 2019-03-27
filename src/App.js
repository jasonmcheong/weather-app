import React, { Component } from 'react';
import './App.css';
import LocationList from './components/location-list';
import Header from './components/header';

class App extends Component {
    state = {
        locationList: [],
    };

    constructor(props) {
        super(props);

        this.handleLocation = this.handleLocation.bind(this);
    }

    // Sets location received from Header input
    handleLocation(value) {
        this.setState({
            locationList: value,
        });
    }

    render() {
        return (
            <div className='App'>
                <Header handleLocation={this.handleLocation} />
                <LocationList allLocations={this.state.locationList} />
            </div>
        );
    }
}

export default App;
