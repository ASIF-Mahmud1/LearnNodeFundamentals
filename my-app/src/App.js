import React from 'react';
import logo from './logo.svg';
import './App.css';
import PossibleWords from './permutation'

class  App extends React.Component {
  state= {
    typeWord: '',
  }
  componentDidMount= ()=>{
    
  }
  handleChange=(event)=>{
    this.setState({
      typeWord:event.target.value
    })  //,()=>{console.log(this.state.typeWord)}
  }
  submitWord=()=>{
    fetch("http://localhost:4000",{mode: "no-cors"})
    //  .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
     // console.log("sda" ,JSON.stringify(responseJson))
      })
      ///////////
    //  return fetch(urlToUser, parameters)
// .then(response => {
//   return response.text()
// })
// .then((data) => {
//   console.log(data)
//   //resolve(data ? JSON.parse(data) : {})
// })
// .catch((error) => {
//   //reject(error)
//   console.log(error)
// })
  //  alert(this.state.typeWord)
 // PossibleWords.indexOf(this.state.typeWord)>=0? alert(`Found at index ${PossibleWords.indexOf(this.state.typeWord)}`) : alert("Not Found")
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
