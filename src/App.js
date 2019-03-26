import React, { Component } from 'react';
import './App.css';
import LocationList from './components/location-list';
import Header from './components/header';

class App extends Component {
    state = {
        locationList: [],
    };

    // Sets location received from Header input
    handleLocation(loc) {
        this.setState({
            locationList: loc,
        });
    }

    render() {
        return (
            <div className='App'>
                <Header handleLocation={this.handleLocation} />
                <LocationList />
            </div>
        );
    }
}

export default App;
