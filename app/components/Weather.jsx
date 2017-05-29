var React = require('react');
var GetWeatherForm = require('GetWeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },
//   toCelcius: function(temp){
//     return{
//
//     }
//   //  debugger;
//
// //console.log('hi');
//
//
//
//
//         // var fah = this.state.temp;
//         // var celcius = (fah - 32) / 1.8;
//         //
//         //   this.props.onCelcius(celcius);
//
//
//
//   },
  render: function()  {
    var {isLoading, temp, location} = this.state;
    temp =(temp - 32) / 1.8;
    temp = temp.toFixed(2);

    function renderMessage() { //conditionally render stuff inside in your components pde gawen sa gantong nested function, something you define inside your render function kagaya neto

      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      }else if(temp && location){ //kung c temp at location both exists at kung c isLoading ay false\
        return  <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <GetWeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
