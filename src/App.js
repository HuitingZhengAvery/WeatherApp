import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Spinner from 'react-spinner-material'; 
import WeatherForecast from './forecastCard';
// import Time from './time';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
    isLoading: false,
    data: null,
    city: 'Melbourne',
    // timezone: 'Australia/Melbourne',
    };
    }
handleChange = event => {  
    this.setState({
      city: event.target.value, 
      // timezone: event.target.timezone
    });
    console.log(this.state.city);
    const { city } = this.state;
    this.fetchData(city); 
    event.preventDefault();    
    };


fetchData = async () => {
    await this.setState({isLoading: true});
    const { data } = await axios.get("https://api.apixu.com/v1/forecast.json?", {
    params: {
    key: "0b111b0769da40aab75133349191502",
    q: (this.state.city),
    days: '4'
    }
 });
    this.setState({data,isLoading: false});
}



renderData() {
    const { data } = this.state;
    const forecastList = data;
    


    return (
    <div>
        <div className='App-status'>Today<br/>{data.current.condition.text}</div>
        <img className='today-img'src={data.current.condition.icon} alt=''/>
        <div className='App-degree'>{data.current.temp_c}°C</div>
        <div className='App-sub1'>Humidity<br/>{data.current.humidity}%</div>
        <div className='App-sub2'>Feels Like<br/>{data.current.feelslike_c}°C</div>
        <WeatherForecast forecastList={forecastList}/>
    </div>
    );
    }
componentDidMount() {
    const { city } = this.state;
    this.fetchData(city);
}


render() {  
return (
<div className="App">
<div className='App-container'>
      <section>
      <select value={this.state.city} 
      // timezone={this.state.timezone} 
      onChange={this.handleChange}>
      <option value="Melbourne" content = 'Australia/Melbourne'>Melbourne</option>
      <option value="Paris" content = 'France/Paris'>Paris</option>
      <option value='New York' content = 'America/New_York'>New York</option>
      <option value='Tokyo' content = 'Asia/Tokyo'>Tokyo</option>
      </select>

      </section>


      {/* <Time tz={this.state.timezone}/> */}

<div className = 'Loading'>
{this.state.isLoading && <Spinner size={20} spinnerColor={"white"} spinnerWidth={2} visible={true} />}
</div>
{this.state.data && this.renderData()}


</div>

</div>
);
}}
