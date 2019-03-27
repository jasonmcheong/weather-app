import React from 'react';

const LocationList = props => {
    return (
        <div>
            {props.allLocations.map(location => {
                return <h2>{location.title}</h2>;
            })}
        </div>
    );
};

export default LocationList;
