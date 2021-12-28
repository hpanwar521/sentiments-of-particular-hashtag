import React,{useState,useEffect} from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './sentimentsChart.css'
import exporting from 'highcharts/modules/exporting';
import ExportData from "highcharts/modules/export-data.js"
import { Col, Container,Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//sentiment images
import first from '../images/1.gif';
import second from '../images/2.gif';
import third from '../images/3.gif';
import forth from '../images/4.gif';
import fifth from '../images/5.gif';


exporting(Highcharts);
ExportData(Highcharts);
const SentimentsChart = () => {
  const {hashtag} = useParams();
  const [apiRes , setApiRes] = useState({});
  
  


    const options = {
        chart: {
            styledMode: true
          },
        
          title: {
            text: `Sentiments of ${hashtag}`
          },
        
          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
        
          series: [{
            type: 'pie',
            allowPointSelect: true,
            keys: ['name', 'y', 'selected', 'sliced'],
            data: [
            
              ['Negative', apiRes && apiRes.Sentiment && Math.round(apiRes.Sentiment.negative), false],
              ['Positive', apiRes && apiRes.Sentiment && Math.round(apiRes.Sentiment.positive), true, true],
              ['Neutral', apiRes && apiRes.Sentiment && Math.round(apiRes.Sentiment.neutral), false]
            ],
            showInLegend: true
          }]
    }

    useEffect(()=>{
      const apiHandler = async () =>{
        const res = await axios.get(`https://twitter-sa-api.herokuapp.com/?query=${hashtag}`);
        console.log(res.data);
        setApiRes(res.data);
      }
      apiHandler();
    },[hashtag]);

    return (
    <div className='sentimentsChart'>
      <HighchartsReact
      highcharts={Highcharts}
      options={options}
      />
      <Container className='sentimentsImages'>
        <Row>
          <Col><img src={fifth} alt="fifth" /></Col>
          <Col><img src={forth} alt="forth" /></Col>
          <Col><img src={third} alt="third" /></Col>
          <Col><img src={second} alt="second" /></Col>
          <Col><img src={first} alt="first" /></Col>
        </Row>
        <Row>
          <Col className='sentiments-negative'>Negative</Col>
          <Col className='sentiments-neutral'>Neutral</Col>
          <Col className='sentiments-positive'>Positive</Col>
        </Row>
        <Row>
          <Col className='sentiment-percentage'>{apiRes && apiRes.Sentiment && Math.round(apiRes.Sentiment.negative)}</Col>
          <Col className='sentiment-percentage'>{apiRes && apiRes.Sentiment && Math.round(apiRes.Sentiment.neutral)}</Col>
          <Col className='sentiment-percentage'>{apiRes && apiRes.Sentiment && Math.round(apiRes.Sentiment.positive)}</Col>
        </Row>
      </Container>
    </div>
    )
}

export default SentimentsChart
