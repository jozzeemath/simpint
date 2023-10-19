import React from "react"; 

class Random extends React.Component{

        constructor(){//intialize the property
            super()
            this.state={cname:'Polo Gt'}//state to store the property 
        }

         change = (data)=>{
            this.setState({cname:data})
         }

    //js code
    render(){//render is method
        return(
            //jsx code
            <div>
                <h1>Inside Random Class component</h1>
                <h3>username is :<span style={{color:'red'}}>{this.state.cname}</span></h3>

                <button onClick={()=>this.change('Auto')} type="button" style={{backgroundColor:'black',padding:'10px',margin:'10px',color:'white',borderRadius:'10px'}}>Click</button>
            </div>

        )
    }

}
export default Random;