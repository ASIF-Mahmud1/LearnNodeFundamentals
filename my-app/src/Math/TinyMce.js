import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import MathJax from 'react-mathjax-preview'
import { read, create } from './api-math'


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
      postData = () => {

        let blog = {
          a: this.state.math
        }
        create(blog).then(data => {
          if (data.error) {
            console.log("Error Occured")
          } else {
            console.log("Data  ", data)
          }
        })
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
       <br/>  <button onClick={() => { this.postData() }} >Save Data </button>

            </>
        )
    }
}

export default MyComponent