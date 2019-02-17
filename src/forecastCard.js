import React, { Component } from "react";
import moment from 'moment';
import Grid from '@material-ui/core/Grid';


class WeatherForecast extends Component {
render() {
    const {forecastList} =this.props;
    const list = forecastList.forecast.forecastday;

    return(
<div className='forecast-container'>
<Grid container spacing={0} direction='row' justify='center' alignItms='center' maxWidth = {30} >
     {list.map(forecast => (         
      <Grid item lg={3} zeroMinWidth>
      <div className='day'>

        {moment.unix(forecast.date_epoch).format("dddd")}
      </div>
      <img src={forecast.day.condition.icon} alt="" />
      <div className="forecast-temp">{forecast.day.avgtemp_c}°C</div>
      </Grid>
  ))}

</Grid>
</div>

            
    
              

    )

}}

export default WeatherForecast;