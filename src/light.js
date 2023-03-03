import React,{Component} from "react";
//

class Light extends Component{
    
    render(){
        
        const toggleClass = 'wall ' + (this.props.isOn===true?'turn-on':"")
        return(
    <div className={toggleClass}>   
        <div className='light'>
        <div className='screw'></div>
            <div className='switch'>
            <div onClick={this.props.turnOnOff} className='toggle'></div>
            </div>
        <div className='screw'></div>
        </div>
    </div>    
        )
    }
}
export default Light;