var React = require('react');

var WeatherMessage = ({temp,location}) => {
  // var location = props.location;
  // var temp = props.temp;
  //var { temp, location} = props; pag var WeatherMessage = (props)

  return (
   <h3>It's it {temp} in the {location}.</h3>
  )
}

module.exports = WeatherMessage;
