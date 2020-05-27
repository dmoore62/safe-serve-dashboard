import React, { Component }from 'react';
import Highcharts from 'highcharts/highstock';
import mockData from '../../data.json';
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
  		const chartData = mockData.map((d) => d.revenue)

		// setting the state to pass in the render part
		 this.setState({
		 	chartData: chartData
		 })
	}

	render() {
		//defining the data variables
		const {chartData} = this.state;		
		
		return(
			<div>
				
				<HighchartsStockChart>
					<Chart zoomtype="x" />
					<Title> Revenue by Hour </Title>

					<Legend>
						<Legend.Title> Legend </Legend.Title>
					</Legend>
					<Tooltip />

					<XAxis>
           				 <XAxis.Title >Time</XAxis.Title>
          			</XAxis>

          			<YAxis >
			            <YAxis.Title>Revenue ($)</YAxis.Title>
			            
			            <SplineSeries  id="Revenue" name="Revenue" data={chartData}  />
			            
          			</YAxis>

          			<RangeSelector selected={7}>
					    <RangeSelector.Button count={0} type="day">1d</RangeSelector.Button>
					    <RangeSelector.Button count={7} type="day">7d</RangeSelector.Button>
					    <RangeSelector.Button count={1} type="month">1m</RangeSelector.Button>
					    <RangeSelector.Button type="all">All</RangeSelector.Button>
					    <RangeSelector.Input boxBorderColor="#7cb5ec" />
					 </RangeSelector>

					 <Navigator >

      				</Navigator>

			

				</HighchartsStockChart>
		
			</div>
			);
	}
}


export default withHighcharts(ch2, Highcharts);