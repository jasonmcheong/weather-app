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

    handleSubmit = evt => {
        evt.preventDefault();
        fetch(`${proxyURL}${targetURL}${this.state.input}`)
            .then(this.setState({ fetchInProgress: true }))
            .then(res => res.json())
            .then(res => {
                this.setState({ fetchInProgress: false });
                this.props.handleLocation(res);
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    fetchInProgress: false,
                });
            });
    };

    render() {
        return (
            <header>
                <form>
                    <input type='text' onChange={this.handleChange} value={this.state.input} />
                    <input type='submit' onClick={this.handleSubmit} />
                </form>
                {this.state.fetchInProgress && <h2>Please wait...</h2>}
            </header>
        );
    }
}

export default Header;
