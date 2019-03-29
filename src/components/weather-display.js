/*
 *
 *   TODO: display the weather when the component receives props
 *
 */

import React from 'react';

const imgURL = 'https://www.metaweather.com/static/img/weather/';
const imgExt = '.svg';

const WeatherDisplay = (props) => {
	return (
		<div className="weather-display">
			<h2>
				{props.temperature.map((temp) => {
					return (
						<div key={temp.id}>
							<img src={`${imgURL}${temp.weather_state_abbr}${imgExt}`} alt="" />
							<h3>{temp.weather_state_name}</h3>
							<p>{temp.applicable_date}</p>
							<h2>{temp.the_temp}</h2>
							<p>{temp.min_temp}</p>
							<p>{temp.max_temp}</p>
						</div>
					);
				})}
			</h2>
		</div>
	);
};

export default WeatherDisplay;
