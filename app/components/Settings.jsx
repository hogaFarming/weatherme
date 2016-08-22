import React, { Component } from 'react';
import { Link } from 'react-router';

class Settings extends Component {
  handleAddCity() {
    var name = this.refs.input.value;
    if (!name) return;
    this.props.addCity(name);
    this.refs.input.value = '';
  }
  render() {
    const { settings, setCity } = this.props;
    var cities = settings.cities.map((city) => {
      return (
        <li key={city.id}>
          <span>{city.name}</span>
          <button onClick={() => { setCity(city.id); }}>set</button>
        </li>
      );
    });
    return (
      <div className="settings">
        <Link to="/">完成</Link>
        <div>
          <input type="text" ref="input" placeholder="添加城市"/>
          <button onClick={this.handleAddCity.bind(this)}>add</button>
        </div>
        <ul className="settings-cityList">
          {cities}
        </ul>
      </div>
    );
  }
}

export default Settings;
