import React, { Component } from 'react';
import './preview.css';

class Preview extends Component {
  updatePreview() {
  	document.querySelector("iframe").contentDocument.querySelector("style").innerHTML = this.props.styles;
  	document.querySelector("iframe").contentDocument.getElementById("preview").innerHTML = this.props.source;
  	document.querySelector("iframe").contentDocument.getElementById("scripts").innerHTML = this.props.scripts;
  	this.js=false;
  }
  render() {
    return (
	    <div className="row">
	      <div className="col-xs-12">
	      	<div className="browser-preview">
	      		<iframe title="preview" src="preview-page.html">

	      		</iframe>
	      	</div>
	      </div>
	    </div>
    );
  }
  componentDidMount(){
  	var self=this;
  	this.js=false;
  	document.querySelector("iframe").onload = function(){
	self.updatePreview();
	}
  }
  componentDidUpdate(prevProps, prevState){
  	if(prevProps.scripts!=this.props.scripts) {
  		this.js=true;
  		document.querySelector("iframe").contentWindow.location.reload()
  	}
  	else if(!this.js) {
  		document.querySelector("iframe").contentDocument.querySelector("style").innerHTML = this.props.styles;
  		document.querySelector("iframe").contentDocument.getElementById("preview").innerHTML = this.props.source;
  	}
  }
}

export default Preview;