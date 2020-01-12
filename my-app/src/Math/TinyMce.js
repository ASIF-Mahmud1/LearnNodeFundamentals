import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import MathJax from 'react-mathjax-preview'
import { read, create, getTopic } from './api-math'


const asciimath = '`sum_(i=1)^n i^3=((n(n+1))/2)^2`'
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      math: asciimath,
      allTopics: `<ul><li><p>Soone </p></li><li><p>Soone </p></li><li><p>Soone </p></li> </ul>` // allTopics not needed
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(content, editor) {
    this.setState({ content, math: content });
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
  getTopicFromServer = () => {
    //  alert("Just a trick")
    getTopic().then(data => {
      if (data.error) {
        console.log("Error Occured")
      } else {
        console.log("mah Topic:  ", data)
        ////////////////////////////////////   
        let temp = ''
        data.map((item, index) =>
          temp = `${temp} <li>${item.body}</li>`
        );
        temp = `<ul>` + temp + `</ul>`

        ////////////////////////////////////

        // let temp
        // data.map((item,index)=>{
        //   temp=temp+it
        // })
        //  temp= `<ul>${temp}</ul>`
        //  temp=temp
        this.setState({ allTopics: temp, content: temp })
      }
    })
  }
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div >
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
</div>
        {/* <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
        <div>{ " $ f(x) = x^2$ is an example"}</div> */}
        <div style={{overflowY: "scroll", height: 500}} >

          <label>  <br /><b> Output :</b>     <MathJax math={this.state.math} >  {" $ f(x) = x^2$ is an example"} </MathJax> </label>
          <textarea style={{ height: 100, width: 600 }} type="text" value={this.state.math} onChange={(event) => this.handleChange(event)} />
          <br />  <button onClick={() => { this.postData() }} >Save Data </button>
          <br />  <button onClick={() => { this.getTopicFromServer() }} >Call Server Asap </button>
          <div dangerouslySetInnerHTML={{ __html: this.state.allTopics }} />
        </div>
      </div>
    )
  }
}

export default MyComponent