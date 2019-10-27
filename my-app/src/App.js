import React from 'react';
import './App.css';
class  App extends React.Component {
  state= {
    typeWord: '',
    wordList:[],
    wordFound: ''
  }
  componentDidMount= ()=>{

    fetch("http://localhost:4000/listWords")
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson)
      this.setState({wordList:responseJson.words})
    })

  }
  handleChange=(event)=>{
    //this.state.wordList.indexOf(event.target.value)
    this.setState({
      typeWord:event.target.value
    },()=>{this.checkIfWordFound() }) 
  }
  checkIfWordFound=()=>{
    //alert(this.state.typeWord)
    
    let index=this.state.wordList.findIndex((word)=>{
      return word=== this.state.typeWord
    }) 

    if(  index>=0 )
    {
    // alert(`Word found at  index ${index}`)
     this.setState({wordFound:`${this.state.typeWord} found at  index ${index}`})
    }
    else
    {
     this.setState({wordFound:"Not Found" })

    }
     
  }
render()
{
 //this.state.wordList.length>0 ? console.log(this.state.wordList): console.log("wordList Empty")
  return (
    <div className="App">
      <header className="App-header">
      <label >
          Word:
          <input style={{height: 40, fontSize:20,textAlign:"center"}} placeholder="please enter the word" type="text" value={this.state.typeWord} onChange={(e)=>{this.handleChange(e)}} />
        </label>
        {/* <button style={{marginTop:50,height:50,width: 100, fontSize:20,textAlign:"center"}} onClick ={()=>{alert("Button works")}} > Submit</button> */}
        {
          this.state.wordFound !== '' &&
          <label>{this.state.wordFound} </label>
        }
      </header>
    </div>
  );
}
}

export default App;
