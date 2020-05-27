import React, { Component } from 'react';
import axios from 'axios';
import '../top.css'
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown ,faEye , faFire, faSignal, faUsers ,faFunnelDollar ,faHamburger} from '@fortawesome/free-solid-svg-icons'

class top extends Component{
  state = {
    data : []
  }

  componentDidMount(){
    axios.get("http://localhost:3003/all")
    .then(res => {
      const data = res.data;
      this.setState({data})

      //testing api call
      // console.log(data)

      const clicks = []
      const impressions =[]
      const ctr = []
      const rank = []

      for (var i in data)
      {
      clicks.push(data[i].Clicks)
      impressions.push(data[i].Impressions)
      ctr.push(data[i].CTR)
      rank.push(data[i].Position)
      }

      //checking api call works

      // console.log(clicks)
      // console.log(impressions)
      // console.log(ctr)
      // console.log(rank)

      //sum of clicks
      const sumclick = "$80,476.78"
      this.setState({kpi1: sumclick})

      //sum of impressions
      const sumimpr = 3700;
      this.setState({kpi2: sumimpr})

      // console.log('Sum of clicks is' + ' ' + sumclick)
      // console.log('Sum of Impression is' + ' ' + sumimpr)

      //Creating average function
      function getAvg(avg) {
        const total = avg.reduce((acc, c) => acc + c, 0);
          return total / avg.length;
        }

      //CTR avg
      const avgctr = getAvg(ctr);
      //rounding number
      var roundedctr = 45
      this.setState({kpi3:roundedctr})
      // console.log("average ctr is " + avgctr)

      //Ranking AVG
      const avgrank = getAvg(rank);
      //rounding number
      var roundedrank = "Fair"
      this.setState({kpi4:"Fair"})
      // console.log("average rank is " + avgrank
      
    })
  }




  render(){
    //Here i add the state to render
    const {kpi1} = this.state;
    const {kpi2} = this.state;
    const {kpi3} = this.state;
    const {kpi4} = this.state;
    return(
      <Row>
        <Col className='top'>
          <div className='box'>
            <FontAwesomeIcon className="ic" icon={faFunnelDollar} />
          </div>
          <p>Daily Revenue:</p> 
          <strong><h2>$80,592.47</h2>
          </strong>
        </Col>
        <Col className='top'>
          <div className='box'>
            <FontAwesomeIcon className="ic" icon={faUsers} />
          </div> 
          <p>Daily Guest Count:</p>
          <strong><h2>3765</h2></strong>
        </Col>
        <Col className='top'>
          <div className='box'>
            <FontAwesomeIcon className="ic" icon={faHamburger} />
          </div>
          <p>Food Cost:</p>
          <strong><h2>42.3%</h2> </strong>
        </Col>
        <Col className='top'>
          <div className='box'>
            <FontAwesomeIcon className="ic" icon={faSignal} />
          </div>
          <p>Daily Health:</p>
          <strong><h2>Fair</h2></strong>
        </Col>
      </Row>
    )
  }
}


export default top;