import React, { Component } from 'react';
import { values } from '../Values';
import { browserHistory } from 'react-router';
import {Col, Row, Table, Form, Button, Container} from 'react-bootstrap';
class AddUser extends Component {
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
  browserHistory.push('/UserList');
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
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Add User Page</h2>
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
          </div>
        );
      }
    }
export default AddUser;
