import React, { Component } from 'react'
import MathJax from 'react-mathjax-preview'
import { read ,create} from './Math/api-math'
const asciimath = '`sum_(i=1)^n i^3=((n(n+1))/2)^2`'
const math = String.raw`
  <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
    <menclose notation="circle box">
      <mi> x </mi><mo> + </mo><mi> y </mi>
    </menclose>
  </math>

  $\lim_{x \to \infty} \exp(-x) = 0$

   ${asciimath}`

const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`
//const asciimath = '`sum_(i=1)^n i^3=((n(n+1))/2)^2`' // `f(x) = \2int_{-infty}^infty hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi`
let equations =
  [
    " $ f(x) = x^2$ is an example",
    "`" + `U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))` + "`",
    "`" + ` U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))` + "`",
    "`" + `frac{1}{sqrt{x}} ` + "`",
    asciimath
    // `  F(x) =  \2int_{b}^{a}  frac{1}{3}x^3`
  ]
export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      math: asciimath, // equations[1],
      listOfEquation: equations
    }
  }
  handleChange = (event) => {
    {
      this.setState({
        math: event.target.value
      })
    }


  }
  getData = () => {
    read().then((data) => {
      console.log("Hi", data)
    })
  }

  postData=()=>{
    // create().then((response) => response.json())
    // .then((data) => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });

    ///////////////////////////////////

    // const data = { username: 'example' };

    // fetch('http://localhost:5000', {
    //   method: 'POST', // or 'PUT'
    //   mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error, "life");
    // });
    //////////////////////////////////////////
  
  
  ///////////////////////////////////////////////////////////
let blog= {
  a: 'Apple'
}
  create( blog).then(data => {
    if (data.error) {
      console.log("Error Occured")
    } else {
      console.log("Data  ",data)
    }
  })
  //////////////////////////////////////////////////////////
  }

  render() {
    return (

      <>
        <label>
          <textarea style={{ height: 100, width: 600 }} type="text" value={this.state.math} onChange={(event) => this.handleChange(event)} />

        </label>

        <label>  <br /><b> Output :</b>     <MathJax math={this.state.math} />
        </label>

        <h4>Some Equations: </h4>
        <ul>
          {
            this.state.listOfEquation.map((item, index) => (

              <li key={item}>{item}</li>

            ))
          }
        </ul>
        <button onClick={() => { this.getData() }} >Click Me </button>

        <button onClick={() => { this.postData() }} >Save Data </button>
      </>
    )
  }
}