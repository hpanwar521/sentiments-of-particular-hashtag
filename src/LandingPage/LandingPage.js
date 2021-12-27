import React from 'react';
import './landingPage.css';

const LandingPage = () => {
    return (
        <div class="google-function">
        <form>
        <div>
          <i class="fas fa-search"> </i> 
            <input 
            type="text"
            id="gsearch"
            name="gsearch"/>
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
