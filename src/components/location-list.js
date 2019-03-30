import React from 'react';
import Loading from './loading';

let proxyURL = 'https://cors-anywhere.herokuapp.com/';
let targetURL = 'https://www.metaweather.com/api/location/';

class LocationList extends React.Component {
    state = {
        fetchInProgress: false,
    };

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        fetch(`${proxyURL}${targetURL}${evt.target.dataset.id}`)
            .then(this.setState({ fetchInProgress: true }))
            .then(res => res.json())
            .then(res => {
                this.setState({ fetchInProgress: false });
                this.props.getLocationID(res.consolidated_weather);
                this.props.getLocationTitle(res.title);
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    fetchInProgress: false,
                });
            });
        // this.props.getLocationID(evt.target.dataset.id);
    }

    render() {
        return (
            // outputs an unordered list of all the possible locations based on user input
            <ul className='location-list'>
                {this.state.fetchInProgress && <Loading />}
                {this.props.locationList.map(location => {
                    return (
                        // outputs list items that will output the weather upon clicking
                        <li key={location.woeid} data-id={location.woeid} onClick={this.handleClick}>
                            {location.title}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default LocationList;
