import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './index.css'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

class MarkdownComponent extends React.Component {
  constructor(){
    super();
    this.state={
      input:`An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and \`monospace\`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺



An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item`,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event){
    this.setState({
      input: event.target.value,
    })
  }
  getMarkdown(){
    var Markup = marked(this.state.input, {sanitize:true})
    return {__html: Markup}
  }
  render(){

    return (
      <div className = "box">
      <div className="text"><textarea value={this.state.input} onChange={this.handleChange}></textarea></div>
      <div className="output" dangerouslySetInnerHTML={this.getMarkdown()} ></div>
      </div>
    );
  }
}
ReactDOM.render(<MarkdownComponent />, document.getElementById('markdown'))
