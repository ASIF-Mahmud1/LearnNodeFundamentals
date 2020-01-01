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
             <h3>
                     {this.props.SubTopicTitle}
                </h3>
                <h3>OverView:
                     <h4>
                        {this.props.overView}
                    </h4>
                </h3>
        <h3>{this.props.body}</h3>
        <h3>Summary :{this.props.summary}</h3>

            </>
        )
    }
}