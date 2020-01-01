import React from 'react'
export default class SubTopic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    

    render() {
        return (
            <>
             <h2>
                  SubTopic:   {this.props.subTopicTitle? this.props.subTopicTitle: "Add SubTopic" }
                </h2>
                <h3>OverView: { this.props.overView? " "+this.props.overView: "Add OverView"}
                    
                </h3>
        <h3>{this.props.body ?this.props.body: "Add Content!"}</h3>
        <h3>Summary :{this.props.summary ?this.props.summary:"Add Summary" }</h3>

            </>
        )
    }
}