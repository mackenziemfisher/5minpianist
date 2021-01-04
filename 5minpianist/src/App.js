import React, { useEffect, useState } from "react";
import "./App.css";
import Piano from "./Piano";

function App() {
  return (
    
    <div className="app-container">
      <h1>Learn To Play Ode To Joy In Under 5 Minutes</h1>
      <Piano />
      <div className="app-text">
      <h3>
      Directions:
    </h3>
    <h5>
    <a class="btn" href="https://youtu.be/GPtuREcjl1M">1. Listen To The Recording!</a>
    </h5>
    <h5>2. Press The Following Keys: M M , . . , M N B B N M M N N  MM , . . , M N B B N M N B B N N M B N M , M N B N . M M , . . , M N B B N M N B B</h5>
    <h5>2. Try It 4 Times In A Row(don't be afraid to press the wrongs keys)</h5>
    <h5>3. Play It For A Final Time </h5>
    <h5>4. Boom! You Can Play A Beethoven Song!</h5>
      </div>
    </div>
 
  );
  
}

export default App;
