import { useState } from "react";

function InterestCalculator() {
    const [principal, setPrincipal] = useState(0);
    const [rate, setRate] = useState(0);
    const [time, setTime] = useState(0);
    const [interest, setInterest] = useState(0);
  
    const calculateInterest = () => {
      const simpleInterest = (principal * rate * time) / 100;
      setInterest(simpleInterest);

    };
  
    const divStyle ={
        backgroundColor:"grey",
        padding:"10px",
        margin:"40px",
        textAlign:"center"
    }
    return (
      <div style={divStyle}>
        <h1>Simple Interest Calculator</h1>
        <label >
          Principal Amount: 
          <input type="number" style={{backgroundColor:'white',padding:'10px',margin:'10px',color:'black',borderRadius:'10px', }} value={principal} onChange={(e) => setPrincipal(e.target.value)} />
        </label>
        <br />
        <label>
          Rate of Interest (per annum %):
          <input type="number" style={{backgroundColor:'white',padding:'10px',margin:'10px',color:'black',borderRadius:'10px'}} value={rate} onChange={(e) => setRate(e.target.value)} />
        </label>
        <br />
        <label>
          Time (in years):
          <input type="number"  style={{backgroundColor:'white',padding:'10px',margin:'10px',color:'black',borderRadius:'10px'}} value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <br />
        <button  style={{backgroundColor:'black',padding:'10px',margin:'10px',color:'brown',borderRadius:'10px'}} onClick={calculateInterest}>Calculate Interest</button>
        <div>
          <p>Interest Amount: {interest}</p>
        </div>
      </div>
    );
  }
  
  export default InterestCalculator;
  
  
  
  