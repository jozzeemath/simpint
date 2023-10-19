import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  //jscode
  const [Interest ,setInterest]= useState(0)
  const [Principle ,setPrinciple]= useState(0)
  const [Rate ,setRate]= useState(0)
  const [Year ,setYear]= useState(0)
  const[IsPrinciple,setIsPrinciple]=useState(true)
  const[IsRate,setIsRate]=useState(true)
  const[IsYear,setIsYear]=useState(true)

  const validate = (e)=>{
    const{name,value} =e.target
    /*console.log(name,value);*/
   
   /*
console.log(value.match(/^[0-9]+$/)); //regular exp*/

if(!!value.match(/^[0-9]+$/))
{
  if(name==='principle'){
  setPrinciple(value)
  setIsPrinciple(true)
  }
else if(name==='rate')
{
  setRate(value)
  setIsRate(true)
}
else{
  setYear(value)
  setIsYear(true)
}
}
else{
  if(name==='principle'){
  setPrinciple(value)
  setIsPrinciple(false)
  }
  else if(name==='rate')
  {
    setRate(value)
  setIsRate(false)
  }
  else{
    setYear(value)
  setIsYear(false)
  }

}





  }
const handleCalculate=(e)=> {
e.preventDefault()
if(!Principle || !Rate || !Year)
{
  alert('fill the form')
}
else{
  /*alert('submitted')*/
  setInterest(Principle*Rate*Year/100)
}

}
const handleReset=(e)=> {

setInterest(0)
setRate(0)
setYear(0)
setPrinciple(0)
setIsPrinciple(true)
setIsRate(true)
setIsYear(true)


}


  return (
    <div style ={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div style ={{width:'500px'}} className ='bg-light p-5 rounded'>
      <h1>
        Simple Interest App
      </h1>
      <p>
        Calculate Your Simple interest Easily
        <div style ={{height:'150px'}} className ='flex-coloum mt-5 bg-warning d-flex justify-content-center'>
          <h1 >
₹{''} {Interest}
<p >
  Total Simple Interest
</p>
          </h1>
        </div>
      </p>

      <form className='mt-4' onSubmit={handleCalculate} > 
      <div clasName='mb-3'>
        <TextField name='principle' className='w-100 ' value={Principle || '' } id='outlined-basic' label="₹Priciple amount" variant="outlined" onChange={(e)=>validate(e)} /> 
        </div>
        {!IsPrinciple &&
        <div>
          <p>
            invalid input</p>        </div>
}
        <div clasName='mb-3'>
        <TextField className='w-100 ' name="rate" value={Rate || '' } id='outlined-basic' label="₹Rate of interest" variant="outlined" onChange={(e)=>validate(e)} /> 
        </div>
        {!IsRate &&
        <div>
          <p>
            invalid input</p>        </div>
}
        
        <div clasName='mb-3'>
        <TextField className='w-100 'value={Year || '' }id='outlined-basic' label="Year" variant="outlined"  onChange={(e)=>validate(e)} /> 
        </div>

        {!IsYear &&
        <div>
          <p>
            invalid input</p>        </div>
}
        <div clasName='mb-3'>
        <Stack direction="row" spacing={2}>
        <Button  type="submit" disabled ={IsPrinciple && IsRate  && IsYear?false:true} className='bg-success' style={{ width:'200px', height:'50px'}} variant="contained">Calculate</Button>
         <Button onClick={handleReset} style={{ width:'200px', height:'50px'}} variant="outlined">Reset</Button>
</Stack>
        </div>
      </form>
      </div>
     
    
     
    </div>
  );
}

export default App;
