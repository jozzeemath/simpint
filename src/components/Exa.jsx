import { useState } from "react";

function Register()
{
    const divstyle={
        textAlign:"center"
    }
    const [userData,setUserData] = useState(
        {
            username:"",
            gender:"",
            course:""
        }
    )
    const getUserData = (e)=>{
        const{name,value  } = e.target
        console.log(name,value);
        setUserData({...userData,[name]:value})
    }
    console.log(userData);

    const handleSumbit =(e)=>{
       alert(`student name is:${userData.username}
       email is:${userData.Email}
       age is:${userData.age}
       gender is:${userData.gender}
       course is:${userData.course}
       `)
    }
return(
<div style={divstyle}>
            <h1 style={{fontSize:'40px',fontWeight:"700" ,padding:'10px'}}>Student Registration form</h1>
        <form action="">
            <label  htmlFor="username">Name</label>
            <input onChange={(e)=>getUserData(e)} name='username' style={{padding:"10px",margin:'10px',borderRadius:"10px",width:"200px"}} type="text" placeholder='Enter name'/> <br />
            <label  htmlFor="age">Age   </label>
            <input onChange={(e)=>getUserData(e)} name='age' style={{padding:"10px",margin:'10px',borderRadius:"10px",width:"200px"}} type="number" placeholder='Enter age'/>
            <br />
        <label style={{fontSize:'20px',fontWeight:"500" ,padding:'10px'}}>Gender:</label>
        <input name='gender'  type="radio" value={'male'} onChange={(e)=>getUserData(e)} />
        <label  htmlFor="username">male</label>

        <input name='gender'  type="radio" value={'female'} onChange={(e)=>getUserData(e)} />
        <label  htmlFor="username">female</label>

        <input name='gender'  type="radio" value={'others'} onChange={(e)=>getUserData(e)} />
        <label  htmlFor="username">others</label>
        

        <br />
            <label htmlFor="course">Choose a Course:</label>
            <select name="course"   style={{padding:"10px",margin:'10px',borderRadius:"10px",width:"200px"}}  onChange={(e)=>getUserData(e)}>
                <option value="Mern">Mern stack</option>
                <option value="Mean">Mean stack</option>
                <option value=".net">.Net full stack</option>
                <option value="Python">Pyhton Django</option>
            </select><br />

            <label  htmlFor="Email">Email:   </label>
            <input onChange={(e)=>getUserData(e)} name='Email' style={{padding:"10px",margin:'10px',borderRadius:"10px",width:"200px"}} type="email" placeholder='Enter Email id'/> <br />
            <input onClick={handleSumbit} style={{backgroundColor:'white',padding:'10px',margin:'10px',color:'black',borderRadius:'10px'}} type="submit" value={"submit"}/>
        </form>
        </div>
)
}



            export default Register;