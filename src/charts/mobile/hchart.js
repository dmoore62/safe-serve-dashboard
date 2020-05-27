import React, { Component }from 'react';
import Highcharts from 'highcharts/highstock';
import data from '../../data.json';
import {
  HighchartsStockChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend,
  AreaSplineSeries, SplineSeries, Navigator, RangeSelector, Tooltip, FlagsSeries, PlotBand
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
  		waittime: data.map((d) => d.revenue / 100)
  	});
	}

	render() {
		//defining the data variables
		const {waittime} = this.state;		
		
		return(
			<div>
				
				<HighchartsStockChart>
					<Chart zoomtype="x" />
					<Title> Wait Times by Hour </Title>

					<Legend>
						<Legend.Title> Legend </Legend.Title>
					</Legend>
					<Tooltip />

					<XAxis>
           				 <XAxis.Title >Time</XAxis.Title>
          			</XAxis>

          			<YAxis >
			            <YAxis.Title>Wait Time (mins)</YAxis.Title>
			            
			            <AreaSplineSeries  id="Waittime" name="Waittime" data={waittime}  />
			            
          			</YAxis>

          			<RangeSelector selected={7}>
					    <RangeSelector.Button count={0} type="day">1d</RangeSelector.Button>
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