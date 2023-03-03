import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Light from './light.js'
class App extends Component {
  state = {isOn:false}
  turnOnOff = ()=>{
    const curState = this.state.isOn;
    this.setState({isOn: !curState});

  }
  render(){
  const toggleClass = 'wall ' + (this.state.isOn===true?'turn-on':"")
  return (
    <div className={toggleClass} >
      <Light isOn={this.state.isOn} turnOnOff={this.turnOnOff}/>
      <Light isOn={this.state.isOn} turnOnOff={this.turnOnOff}/>
    </div>
  );
}
}

export default App;
