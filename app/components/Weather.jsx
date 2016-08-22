import React, { Component } from 'react';

class Weather extends Component {
  onCityChange() {
    this.props.setCity(this.refs.select.value);
  }
  render() {
    const { weather, settings } = this.props;
    var options = settings.cities.map((city) => {
      return (
        <option key={city.id} value={city.id}>{city.name}</option>
      );
    });
    return (
      <div className="weather">
        <h3>{weather.tmp}℃</h3>
        <select ref="select"
          value={settings.currentCity.id}
          onChange={this.onCityChange.bind(this)}>
          {options}
        </select>
        <p>{weather.cond} {weather.wind}</p>
        <p>空气湿度:{weather.hum}%</p>
      </div>
    );
  }
}

export default Weather;
