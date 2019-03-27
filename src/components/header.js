import React from 'react';

let proxyURL = 'https://cors-anywhere.herokuapp.com/';
let targetURL = 'https://www.metaweather.com/api/location/search/?query=';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            input: '',
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
            .then(res => res.json())
            .then(res => this.props.handleLocation(res))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <header>
                <form>
                    <input type='text' onChange={this.handleChange} value={this.state.input} />
                    <input type='submit' onClick={this.handleSubmit} />
                </form>
            </header>
        );
    }
}

export default Header;
