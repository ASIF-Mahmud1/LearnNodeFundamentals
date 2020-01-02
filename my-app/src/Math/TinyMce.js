import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import MathJax from 'react-mathjax-preview'

// class App extends React.Component {
// constructor(props){
// super(props)
// this.state={
//     topicContent: ''
// }
// }
//   handleEditorChange = (e) => {
//       this.setState({topicContent: e.target.getContent()})
//     console.log('Content was updated:', e.target.getContent());
//   }

//   render() {
//       console.log(Editor)
//     return (
//       <>
//         <Editor
//         initialValue={this.state.topicContent}
//         init={{
//           height: 500,
//           menubar: false,
//           plugins: [
//             'advlist autolink lists link image charmap print preview anchor',
//             'searchreplace visualblocks code fullscreen',
//             'insertdatetime media table paste code help wordcount'
//           ],
//           toolbar:
//             'undo redo | formatselect | bold italic backcolor | \
//             alignleft aligncenter alignright alignjustify | \
//             bullist numlist outdent indent | removeformat | help'
//         }}
//         onEditorChange={this.handleEditorChange}
//       />
//       <h3>Preview: </h3>
//       {this.state.topicContent}
//       </>
//     );
//   }
// }

// export default App;


const asciimath = '`sum_(i=1)^n i^3=((n(n+1))/2)^2`'
class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { content: '' ,   math: asciimath};
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }

    handleEditorChange(content, editor) {
        this.setState({ content, math:content });
    }
    handleChange = (event) => {
        {
          this.setState({
            math: event.target.value
          })
        }
    
    
      }

    render() {
        return (
            <>
                <Editor value={this.state.content} onEditorChange={this.handleEditorChange} />

                <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
        <div>{ " $ f(x) = x^2$ is an example"}</div>

        <label>  <br /><b> Output :</b>     <MathJax math={this.state.math} >  {" $ f(x) = x^2$ is an example"} </MathJax> </label>
        <textarea style={{ height: 100, width: 600 }} type="text" value={this.state.math} onChange={(event) => this.handleChange(event)} />

            </>
        )
    }
}

export default MyComponent