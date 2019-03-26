import React from 'react';

let proxyURL = 'https://cors-anywhere.herokuapp.com/';
let targetURL = 'https://www.metaweather.com/api/location/search/?query=edmonton';

class Header extends React.Component {
    handleSubmit(evt) {
        evt.preventDefault();
        fetch(proxyURL + targetURL)
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <header>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' />
                    <input type='submit' />
                </form>
            </header>
        );
    }
}

export default Header;
