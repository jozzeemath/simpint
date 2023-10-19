import React, { useState } from 'react'

function User(props) {
    //jscode
    // console.log(props);
  const [color,setColor] =useState({
      first:'Blue',
      second:'Red',
      third:'Green'


  })
 const divStyle ={
        backgroundColor:"grey",
        padding:"10px",
        margin:"40px",
        textAlign:"center"
    }
  return (

    //jsx code

    <div style={divStyle}>
        <h1>inside user functional component</h1>
{ props.uname ==='Maxwell'?      
  <h3>Username is :{props.uname}</h3>:
  <p>user not found</p>}
       <h3>Username age:{props.age}</h3>
    <h2>Color List</h2>
    <ul>
        <li style={{fontSize:'30px'}}>{color.first}</li>
        <li style={{fontSize:'30px'}}>{color.second}</li>
        <li style={{fontSize:'30px'}}>{color.third}</li>

    </ul>

    <button onClick={()=>setColor({...color,second:'Yellow'})} type='button' style={{color:'white',backgroundColor:'black',padding:'20px',margin:'20px',borderRadius:'10px'}}>state Change</button>  
    </div>
  )
}

export default User