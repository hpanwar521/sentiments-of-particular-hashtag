import React , {useState} from 'react';
import './landingPage.css';
import axios from 'axios';

const LandingPage = () => {
    const [hashtag , setHashtag] = useState('');
    
    const apiHandler = async () =>{
       
        const res = await axios.get(`https://twitter-sa-api.herokuapp.com/?query=${hashtag}`);
        
    }
    return (
        <div class="google-function">
        <form>
        <div>
          <i class="fas fa-search" onClick={apiHandler}> </i> 
            <input 
            type="text"
            id="gsearch"
            name="gsearch"
            value={hashtag}
            onChange={(e)=>setHashtag(e.target.value)}/>
        </div>
  
        <div class="button-group">
          <button class="google-button" type="submit">Sentiments score</button>
          <button class="google-button" type="submit">Related tweets </button>
        </div>
      </form>
      </div>
    )
}

export default LandingPage
