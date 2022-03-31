
import { marked } from 'marked';
import React from 'react';


marked.setOptions({
  breaks: true,
});


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
        __html: marked(props.markdown)
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
// handle changes on buttons--> clean