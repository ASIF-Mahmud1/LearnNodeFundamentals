import React, { Component } from 'react'
import CreateTopic from './Math/CreateTopic'

export default class App extends Component {
  constructor(props) {
    super(props);
    
  }
 

  render() {
    return (

      <>
       <CreateTopic />
       <CreateTopic />
      </>
    )
  }
}