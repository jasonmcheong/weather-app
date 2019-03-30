import React from 'react';

let proxyURL = 'https://cors-anywhere.herokuapp.com/';
let targetURL = 'https://www.metaweather.com/api/location/search/?query=';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            input: '',
            fetchInProgress: false,
        };
    }

    handleChange(evt) {
        this.setState({
            input: evt.target.value,
        });
    }

    handleSubmit = (evt) => {
        // fetching the data from the weather API
        evt.preventDefault();
        fetch(`${proxyURL}${targetURL}${this.state.input}`)
            .then(this.setState({ fetchInProgress: true }))
            .then((res) => res.json())
            .then((res) => {
                this.setState({ fetchInProgress: false });

                // calling the parent method to transfer data from child->parent
                this.props.handleLocation(res);
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    fetchInProgress: false,
                });
            });
    };

    render() {
        return (
            // gets the values of the form then appends it to the url that is being fetched
            <header>
                <h1>Weather App</h1>
                <form className="inner-header">
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.input}
                        placeholder="Type in a city"
                    />
                    <input type="submit" onClick={this.handleSubmit} />
                </form>
                {/* placeholder loading message when fetching data */}
                {this.state.fetchInProgress && <h2>Please wait...</h2>}
            </header>
        );
    }
}

export default Header;
