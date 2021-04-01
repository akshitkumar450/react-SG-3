import React from 'react'
import './SeasonDisplay.css'

//  a regular function
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    console.log(season);
    return (
        <div className={`season-display ${season}`}>
            <i className={season === 'winter' ? 'icon-left massive snowflake icon' : 'massive sun icon'}></i>
            <h1>{season === 'winter' ? 'burr it\'s chilly ' : 'let\'s hit the beach'}</h1>
            <i className={season === 'winter' ? 'icon-right massive snowflake icon' : 'massive sun icon'}></i>
        </div>
    )
}

export default SeasonDisplay