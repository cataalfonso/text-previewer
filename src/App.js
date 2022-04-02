
import { marked } from 'marked';
import React from 'react';
import Prism from './prism.js'


marked.setOptions({
  breaks: true,
  gfm: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const r = new marked.Renderer()
r.link = function (href,title,text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder,
      formatedResult:'',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
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
          <button><i class="fas fa-eraser"></i></button>
          </div>  
        <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
       </div>
       <div class="wrapper">
       <div class="textbox-header">
       <i class="fab fa-markdown"></i>
          <p>Previewer</p>
          </div>  
        <Preview markdown={this.state.input}/>
      </div>
        </main>  
    </div>
  );
}}

const Preview = (props) => {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, {renderer: r} )
      }}
    />
  );
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

//TODO 
// set the table and code formats in previewer
// fix the box titles
// handle changes on buttons--> clean