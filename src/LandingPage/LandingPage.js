import React , {useState} from 'react';
import './landingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [hashtag , setHashtag] = useState('');
  
    const navigate = useNavigate();

   
    return (
        <div class="google-function">
    
        <div>
          <i class="fas fa-search"> </i> 
            <input 
            type="text"
            id="gsearch"
            name="gsearch"
            value={hashtag}
            onChange={(e)=>setHashtag(e.target.value)}/>
        </div>
  
        <div class="button-group">
          <button class="google-button" type="submit" onClick={()=>{navigate(`/sentiments/:${hashtag}`)}}>Sentiments score</button>
          <button class="google-button" type="submit" onClick={()=>{navigate(`/sentiments-tweets/:${hashtag}`)}}>Related tweets </button>
        </div>

      </div>
    )
}

export default LandingPage ;
