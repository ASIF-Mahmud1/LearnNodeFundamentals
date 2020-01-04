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
                <Editor value={this.state.content} onEditorChange={this.handleEditorChange} 
                 init={{
                    height: '400',
                    fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
                    //  width: "800",
                    plugins:
                      'link image code table lists advlist wordcount anchor autolink codesample  textcolor',
                    advlist_number_styles:
                      'default lower-alpha lower-greek lower-roman upper-alpha upper-roman',
                    toolbar:
                      'undo redo | bold italic | alignleft aligncenter alignright | code | bullist numlist outdent indent wordcount fontsizeselect | anchor | codesample | fontselect | forecolor backcolor',
                    font_formats:
                      'Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva;    Webdings=webdings; Wingdings=wingdings,zapf dingbats',
                  }}
                />

                {/* <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
        <div>{ " $ f(x) = x^2$ is an example"}</div> */}

        <label>  <br /><b> Output :</b>     <MathJax math={this.state.math} >  {" $ f(x) = x^2$ is an example"} </MathJax> </label>
        <textarea style={{ height: 100, width: 600 }} type="text" value={this.state.math} onChange={(event) => this.handleChange(event)} />

            </>
        )
    }
}

export default MyComponent