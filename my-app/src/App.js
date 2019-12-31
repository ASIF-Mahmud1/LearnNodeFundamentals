import React, { Component } from 'react'
import CreateTopic from './Math/CreateTopic'
import TinMce from './Math/TinyMce'
export default class App extends Component {
  constructor(props) {
    super(props);
    
  }
 

  render() {
    return (

      <>
      <TinMce/>
      {/* <CreateTopic/> */}
      </>
    )
  }
}