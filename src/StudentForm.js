
import React from 'react';
import ReactDOM from 'react-dom';
class Employee extends React.Component {

  render(){
    return <div>
      <h2>Employee Details...</h2>
      <p>
        <label>Name : <b>{this.props.Name}</b></label>
      </p>
     
      </div>;
  }
}



const element=<Employee Name="Pragim" />

ReactDOM.render(element,document.getElementById("root"));