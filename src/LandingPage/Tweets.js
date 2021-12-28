import React,{useState,useEffect} from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './tweets.css';

const Tweets = () => {
    const {hashtag} = useParams();
    const [apiRes , setApiRes] = useState({});

    useEffect(()=>{
        const apiHandler = async () =>{
          const res = await axios.get(`https://twitter-sa-api.herokuapp.com/?query=${hashtag}`);
          console.log(res.data);
          setApiRes(res.data);
        }
        apiHandler();
      },[hashtag]);
  

    return (
        <Container>
            {apiRes && apiRes.Tweets && apiRes.Tweets.tweets.length > 0 && apiRes.Tweets.tweets.slice(0, 5).map((tweet, index)=>{
                return (
                    <Row className='mb-5'>
                    <Card>
                        <span><img variant="top" src={tweet.profile_image} className='card-image'/></span>
                        <span className='user-info'>{tweet.name}</span>
                        <span className='user-info'>{tweet.created_at}</span>
                        
                        <Card.Body  className='card-body-button'>
                        <Card.Text>
                           {tweet.Tweet_Text}
                        </Card.Text>
                        <a href={tweet.url}>
                        <Button variant="primary">Visit on twitter</Button>
                        </a>
                        </Card.Body>
                    </Card>
                    </Row>
                )

                })}
            
        </Container>
    )
}

export default Tweets
