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



class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { content: '' };
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }

    handleEditorChange(content, editor) {
        this.setState({ content });
    }

    render() {
        return (
            <>
                <Editor value={this.state.content} onEditorChange={this.handleEditorChange} />

                <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
        <div>{ " $ f(x) = x^2$ is an example"}</div>
            </>
        )
    }
}

export default MyComponent