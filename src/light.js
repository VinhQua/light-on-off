import React,{Component} from "react";
//

class Light extends Component{
    
    render(){
        
        
        return(
     
        <div className='light'>
        <div className='screw'></div>
            <div className='switch'>
            <div onClick={this.props.turnOnOff} className='toggle'></div>
            </div>
        <div className='screw'></div>
        </div>
   
        )
    }
}
export default Light;