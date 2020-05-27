import React, { Component }from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsStockChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend,
  AreaSplineSeries, SplineSeries, Navigator, RangeSelector, Tooltip
} from 'react-jsx-highstock';

import Highcharts2 from 'highcharts';
import {
  HighchartsChart,  LineSeries
} from 'react-jsx-highcharts';


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
	    	rank:[ 3.4, -1.4, 10, 3, 5.6, -2, 5, 6 ]
	    })
	}

	render() {
		//defining the data variables
		const {rank} = this.state;
		
		
		
		return(
			<div>
				
				<HighchartsStockChart>
					<Chart zoomtype="x" />
					<Title> Impression Trend </Title>

					<XAxis>
           				 <XAxis.Title >Time</XAxis.Title>
          			</XAxis>

          			<YAxis >
			            <YAxis.Title>Impression Trend</YAxis.Title>
			            
			          
			            <AreaSplineSeries id="Rank" name="Avg Ranks" data={rank} />
			            
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