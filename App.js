import React, { Component } from 'react';
import './App.css';
import * as Student from './Student/Student';

class App extends Component {


  state = {
    student:[
      {name:"", marks:""}
    ]
};

addHandler = props =>{
  this.setState({
      student:[
          {name:nameInputted, marks:marksInputted}
      ]
  })
  }

  changedNameHandler = event =>{
    const nameInputted = event.target.value;
  }

  changedMarksHandler = event =>{
    const marksInputted = event.target.value;
    
  }
  render() {
    const name1=this.state.name;
    const marks1 = this.state.marks;
    return (
      <div className="App">        
        <Student.Data name={name1} marks={marks1} changedName={this.changedNameHandler} changedMarks={this.changedMarksHandler} click={this.addHandler.bind(this, marksInputted, nameInputted)}></Student.Data>      
      </div>
    );
  }
}

export default App; 
