import React from 'react';
import marked from 'marked';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText:
        "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n return multiLineCode;\n }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)"
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    this.setState({
      inputText: event.target.value
    });
  }
  render() {
    const tester = { __html: marked(this.state.inputText) };
    return (
      <div>
        
          <h1 id="left-heading" className='top'>Input</h1>
        <h1 id="right-heading" className='top' >Output</h1>
          
          <textarea
            id="editor"
            className="inputPane"
            onChange={this.handleInput}
            value={this.state.inputText}
          />
        

        <div id="preview" dangerouslySetInnerHTML={tester} />
      </div>
    );
  }
}

export default App;
