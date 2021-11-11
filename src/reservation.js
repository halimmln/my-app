import React from 'react';
import { browserHistory } from 'react-router';
//import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import {Col, Row, Table} from 'react-bootstrap';
export default class Reservation extends React.Component {
    constructor(props) {
      super(props);
      console.log('proooooooooooo', props);
      this.state = {
        id:null,
        fname: '',
        
      };
      
      if(localStorage.getItem('store')){
        this.values =JSON.parse(localStorage.getItem('store'))
      }else{
  this.values=[];}
 
      this.handleInputChange = this.handleInputChange.bind(this);
    }




    handleSubmit = () => {
      alert("id "+this.state.id)
      
      if(this.state.id == undefined || this.state.id == null ){
        if(localStorage.getItem('store')  == null ){
          this.state.id =1;
        }else {
          this.state.id = this.values.length+1;
        }
        this.values.push(this.state);
      }else{
        if(this.state.id != undefined || this.state.id == null)
          {
          let index=  this.values.findIndex((i) => i.id == this.state.id );
          //alert(index);
          }
      }

//alert(JSON.stringify (this.values));
localStorage.setItem('store',JSON.stringify(this.values));
browserHistory.push('/user');
    }




    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
          <div>
        {/* <form name ='studentForm' onSubmit={this.handleSubmit}>
            <h1>Registration Form</h1>
            <input type='hidden' name ='id' />
          <label>
            Your Name:
            <input
              name="fname"
              type="text"
              placeholder ="First Name"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Last Name:
            <input
              name="lname"
              type="text"
              placeholder ="Last Name"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            email Id:
            <input
              name="emailId"
              type="text"
              placeholder ="Email Id"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              name="phone"
              type="text"
              placeholder ="phone Number"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form> */}
        {/* <Container fluid="sm" className="justify-content-md-center" >
        <Form className="justify-content-md-center">
  <Form.Group className="mb-3"  controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container> */}

<Container >
                    <Form onSubmit={this.handleSubmit}>
                       <Form.Group as={Row} >
                            <Form.Group as={Col} controlId="formFirstName">
                                <Form.Label className="label">First Name</Form.Label>
                                <Form.Control
                                type="text"
                                name="fname"
                                onChange={this.handleInputChange} 
                                required
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formLastName">
                                <Form.Label className="label">Last Name</Form.Label>
                                <Form.Control
                                type="text"
                                name="lname"
                                onChange={this.handleInputChange} 
                                required
                                />
                            </Form.Group>
                        
</Form.Group>
<Form.Group as={Row} >
                        <Form.Group as={Col} controlId="formEmail">
                            <Form.Label className="label">Email Address</Form.Label>
                            <Form.Control
                            type="email"
                            name="emailId"
                            onChange={this.handleInputChange} 
                            required
                            />
                        </Form.Group>
</Form.Group>
<Form.Group as={Row} >
                        <Form.Group as={Col} controlId="formPhone">
                            <Form.Label className="label">Phone Number</Form.Label>
                            <Form.Control
                            type="number"
                            name="phone"
                            onChange={this.handleInputChange} 
                            required
                            />
                        </Form.Group>
</Form.Group>
<Form.Group as={Row} >
<Form.Group as={Col} >
                        <Button variant="primary" type="submit" >Next</Button>
                        </Form.Group>
                        </Form.Group>
                    </Form>
                </Container>
        </div>
      );
    }
  }
  
//   ReactDOM.render(
//     <Reservation />,
//     document.getElementById('root')
//   );
  