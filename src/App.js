import './App.css';
import Register from './components/Exa';
import Example from './components/Example';
import Random from './components/Random';
import User from './components/User';
import style from './myStyle.module.css'
import InterestCalculator from './components/Calculator';



function App() {
  //js code
  const subject = 'REACT '
  const username = 'Maxwell'

  const show = ()=>{
    alert('button click')
  }

  const add = (user)=>{
    alert(`${user}add`)
  }

  const getname=(e)=>{
    console.log(e.target.value);
    
  }

 

  return (
    //jsx code
    
   <>
   <InterestCalculator />


   
   <Register/>

     < h1 style={{textAlign:"center",color:"red"}}>Heading</h1>
     <div>
     <h3>subject is :<span className={style.react}>{subject}</span></h3>
     <button onClick={show} type='button' style={{color:'white',backgroundColor:'black',padding:'20px',margin:'20px',borderRadius:'10px'}}>Click</button>
     <button onClick={()=>add('Jen')} type='button' style={{color:'white',backgroundColor:'black',padding:'20px',margin:'20px',borderRadius:'10px'}}>Add</button>

<input onChange={(e)=>getname(e)} type="text" placeholder='enter the username' style={{padding:'20px',margin:'20px',width:'400px',borderRadius:'10px'}} />
     
        <h1 style={{textAlign:"center",color:"blue"}}>Welcome to React </h1>
        <ul>
          <li><Example subject={subject}/></li>
          <li><Random/></li>
          <li><User uname={username} age='27'/></li>
        </ul>
      </div>
   </>
  );
}

export default App;
