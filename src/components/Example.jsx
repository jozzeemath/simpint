import './Style.css'
import Styles from '../myStyle.module.css'
import { useState  } from 'react';
// function Example(props){
//     //js code
//     console.log(props);
//     return (
//       <>
//            { subject ==='REACT' &&
//            <div className='divStyle'>
//                 <h1>Inside Example functional component</h1>
//                 <h3>subject is :<span className={Styles.react}>{props.subject}</span></h3>
//             </div>
//             }
//       </>
//     )
// }

// export default Example;

// object destructuring

function Example({subject}){
    const [concept,setConcept]= useState("react js")
    console.log(concept);

    const [user,setUser] = useState('')

    const userArray =[
        {username:'Max',age:'23'},,
        {username:'Max Millar',age:'25'},
        {username:'Manuel',age:'28'},
        {username:'Manu',age:'30'},
        {username:'Mini',age:'33'},
    ]
    const handleSumbit = (e) =>{
        e.preventDefault() // prevent refresh or re-render
        console.log(`username is ${user}`);
    }
    return (


<>
        {subject ==='REACT' &&
        <div>
            <h1>Inside Example functional component</h1>
            <h3>subject is :<span className={Styles.reactsubject}>{subject}</span></h3>
        </div>} 
<h3>Example component states:{concept}</h3>
<button  onClick={()=>setConcept('angular')}
type='button' style={{backgroundColor:'blue',padding:'10px',margin:'10px',color:'black',borderRadius:'10px'}} >Value change</button>
        <h2>user list</h2>
        <table style={{backgroundColor:'grey',borderRadius :'10px',borderColor:'black'}}>
            <thead >

                <th>sl no</th>
                <th>Username</th>
                <th>age</th>
            </thead>
            <tbody>
                {
                userArray.map((item,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.username}</td>
                        <td>{item.age}</td>
                    </tr>
                ))
}
            </tbody>
        </table>
        <div>
            <h2>React form</h2>
            <form  onSubmit={handleSumbit}>
                <label htmlFor="username">
                <input value ={user} onChange={(e)=>setUser(e.target.value) }type="text" id="username" placeholder='Username please' style= {{backgroundColor:'white',padding:'10px',margin:'10px',color:'black',borderRadius:'10px'}}/>
                </label>
                <input onClick={handleSumbit} style={{backgroundColor:'white',padding:'10px',margin:'10px',color:'black',borderRadius:'10px'}} type="submit" value={"submit"}/>
                
            </form>
        </div>
</>
    )
}

export default Example;