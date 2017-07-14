import React, { Component } from 'react';
import './CodeEditor.css';

class CodeEditor extends Component {
  
  render() {
    return (
	    <div className="row">
	      <div className="col-xs-12">
	        <code contentEditable="true" onKeyUp={this.props.onKeyUp.bind(this)}></code>
	      </div>
	    </div>
    );
  };  
}

export default CodeEditor;