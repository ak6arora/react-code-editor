import React, { Component } from 'react';
import CodeEditor from '../CodeEditor/CodeEditor';
import Preview from '../preview/preview';
import './container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      styles: '',
      scripts: '',
      activeTab: 0
    };
  };

  handleKeyUp(e) {
    switch(this.state.activeTab){
      case 0: this.setState({
                code:e.target.innerText
              });
              break;
      case 1: this.setState({
                styles:e.target.innerText
              });
              break;
      case 2: this.setState({
                scripts: e.target.innerText
              });
              break;
      default: break;
    }
    
  };

  handleTabs(id){
    var code;
    this.setState({
      activeTab: id
    });
    switch(id){
      case 0: code = this.state.code
              break;

      case 1: code = this.state.styles
              break;

      case 2: code = this.state.scripts
              break;
      default: break;
    }
    document.querySelector('code').innerText = code;
  };

  render() {
    var activeTab = this.state.activeTab,
        tabs = ['HTML','CSS','JS'],
        tabItems = tabs.map((tab,index) =>
          <li key={index} onClick={this.handleTabs.bind(this,index)} className={activeTab===index ? "active" : ""}>{tab}</li>
          ),
        nav = <ul className="tabs">{tabItems}</ul>
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 editor">
            {nav}
            <CodeEditor onKeyUp={this.handleKeyUp.bind(this)}/>
          </div>
          <div className="col-xs-12 col-sm-6">
            <Preview source={this.state.code} styles={this.state.styles} scripts={this.state.scripts} />
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
