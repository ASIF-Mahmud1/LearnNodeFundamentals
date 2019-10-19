import React from 'react';
import logo from './logo.svg';
import './App.css';
import PossibleWords from './permutation'

class  App extends React.Component {
  state= {
    typeWord: '',
  }
  handleChange=(event)=>{
    this.setState({
      typeWord:event.target.value
    })  //,()=>{console.log(this.state.typeWord)}
  }
  submitWord=()=>{
  //  alert(this.state.typeWord)
  PossibleWords.indexOf(this.state.typeWord)>=0? alert(`Found at index ${PossibleWords.indexOf(this.state.typeWord)}`) : alert("Not Found")
  }
render()
{
 // console.table(PossibleWords)
  console.log(`Found at index ${PossibleWords.indexOf(this.state.typeWord)}`)
  return (
    <div className="App">
      <header className="App-header">
      <label >
          Word:
          <input style={{height: 40, fontSize:20,textAlign:"center"}} placeholder="please enter the word" type="text" value={this.state.typeWord} onChange={(e)=>{this.handleChange(e)}} />
        </label>
        <button style={{marginTop:50,height:50,width: 100, fontSize:20,textAlign:"center"}} onClick ={()=>{this.submitWord()}} > Submit</button>
      </header>
    </div>
  );
}
}

export default App;
