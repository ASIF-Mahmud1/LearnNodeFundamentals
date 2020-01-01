import React from 'react'
import SubTopic from './SubTopic'
const subTopic= {
    subTopicTitle: "Distance between two points",
    overView: "We will figuire out how to find distance between two points using a formula",
    body: "This topic is explained using diagram",
    summary : "That's all for today :) !"

}
export default class Topic extends React.Component{
constructor(props){
    super(props)
    this.state={

    }
}

render()
{
    return(
        <>
        <h2>Topology</h2>
        <SubTopic subTopicTitle={subTopic.subTopicTitle} overView={subTopic.overView} body={subTopic.body} summary={subTopic.summary}/>
        </>
    )
}
}