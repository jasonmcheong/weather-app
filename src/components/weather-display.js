import React from 'react';

const imgURL = 'https://www.metaweather.com/static/img/weather/';
const imgExt = '.svg';

const WeatherDisplay = props => {
    return (
        <div>
            <p className='location-title'>{props.title}</p>
            <div className='weather-display'>
                {props.temperature.map(temp => {
                    return (
                        <div key={temp.id} className='panel'>
                            <div className='status'>
                                <img src={`${imgURL}${temp.weather_state_abbr}${imgExt}`} alt='' />
                                <h3>{temp.weather_state_name}</h3>
                            </div>
                            <div className='info'>
                                <h2>{temp.applicable_date}</h2>
                                <div className='temperature-container'>
                                    <p className='temperature'>{temp.the_temp.toFixed(0)}&deg;C</p>
                                    <div className='hi-lo'>
                                        <h2 className='hi'>{temp.max_temp.toFixed(0)}&deg;C</h2>
                                        <h2 className='lo'>{temp.min_temp.toFixed(0)}&deg;C</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WeatherDisplay;
