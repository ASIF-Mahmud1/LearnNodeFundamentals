import React from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends React.Component {
  state= {
    typeWord: '',
  }
  handleChange=(event)=>{
    this.setState({
      typeWord:event.target.value
    })
  }
  submitWord=()=>{
    alert(this.state.typeWord)
  }
render()
{
  return (
    <div className="App">
      <header className="App-header">
      <label >
          Word:
          <input style={{height: 40, fontSize:20,textAlign:"center"}} placeholder="please enter the word" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button style={{marginTop:50,height:50,width: 100, fontSize:20,textAlign:"center"}} onClick ={()=>{this.submitWord()}} > Submit</button>
      </header>
    </div>
  );
}
}

export default App;
