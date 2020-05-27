import React, { Component }from 'react';
import Highcharts from 'highcharts/highstock';
import mockData from '../../data.json';
import {
  HighchartsStockChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend,
  AreaSplineSeries, SplineSeries, Navigator, RangeSelector, Tooltip
} from 'react-jsx-highstock';


import axios from 'axios'


class ch2 extends Component {
	constructor(){
	    super();
	    this.state = {
	    	
	     
	    }
	}

  componentDidMount(){
    this.getChartData();
  }

  getChartData(){
  	this.setState({
  		guestCount: mockData.map((d) => d.revenue / 22)
  	});	    
	}

	render() {
		//defining the data variables
		const {guestCount} = this.state;		
		
		return(
			<div>
				
				<HighchartsStockChart>
					<Chart zoomtype="xy" />
					<Title> Hourly Guest Count </Title>

					<Legend>
						<Legend.Title> Legend </Legend.Title>
					</Legend>
					<Tooltip />

					<XAxis>
           				 <XAxis.Title >Time</XAxis.Title>
          			</XAxis>

          			<YAxis>
    					<YAxis.Title>Guest Count </YAxis.Title>
    					<AreaSplineSeries  id="Guests" name="Guests" data={guestCount}  />
  					</YAxis>         			
	


          			<RangeSelector selected={7}>
					    <RangeSelector.Button count={1} type="day">1d</RangeSelector.Button>
					    <RangeSelector.Button count={7} type="day">7d</RangeSelector.Button>
					    <RangeSelector.Button count={1} type="month">1m</RangeSelector.Button>
					    <RangeSelector.Button type="all">All</RangeSelector.Button>
					    <RangeSelector.Input boxBorderColor="#7cb5ec" />
					 </RangeSelector>
				</HighchartsStockChart>
		
			</div>
			);
	}
}


export default withHighcharts(ch2, Highcharts);