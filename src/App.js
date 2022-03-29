
import React from 'react';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'Myfirst Input',
      formatedResult:'',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render(){
  return (
    <div className="App">
      <header>
        Use this MarkDown Previewer!
      </header>
      <main>
        <div class="wrapper">
        <div class="textbox-header">
        <i class="far fa-keyboard"></i>
          <p>Editor</p>
          <button><i class="far fa-window-maximize"></i></button>
          </div>  
        <textarea id="editor" value={this.state.input} onChange={this.handleChange}>MyDummyText</textarea>
       </div>
       <div class="wrapper">
       <div class="textbox-header">
       <i class="fab fa-markdown"></i>
          <p>Previewer</p>
          <button><i class="far fa-window-maximize"></i></button>
          </div>  
        <textarea id="preview" value={this.state.input}>MyDummyText2</textarea>
      </div>
        </main>  
    </div>
  );
}}

//TODO 
//change the text area in preview for a div, create an independent conmponet to construct the previewer
// handle changes on buttons