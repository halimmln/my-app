import React, { Component } from 'react';
import { Card, ListGroup,Table } from 'react-bootstrap';
import { values } from '../Values';
import { browserHistory } from 'react-router';
class UserList extends Component {
    constructor(props){
        super(props);
    }
    handleDeleteSubmit =(id) =>{
        console.log(id.target.name);
        values.forEach((k,i)=>{
            if(k.id == id.target.name ){
            values.splice(i);
            }
        })
        localStorage.setItem('store',JSON.stringify(values));
        browserHistory.push('/user');
    }
    handleEditSubmit = (id) => {
       
   // alert(id)
        console.log(id.target.name)
        browserHistory.push('/:id='+id.target.name);
    };
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>User List Page</h2>
                <Table striped bordered hover>
 <thead> 
 <tr>
<th>Sr No.</th> 
  <th>Firstname</th>    
  <th>Lastname</th>   
     <th>Email</th>
	<th>Phone Number</th>
	<th>Option</th>  
   </tr> 
 </thead>
<tbody>  
    {values.map((data , index ) => {
        return <tr > 
 <td>{index}</td>
  <td key={data.fname}>{data.fname}</td> 
 <td key={data.lname}>{data.lname}</td> 
 <td key={data.emailId} >{data.emailId}</td> 
  <td key={data.phone}>{data.phone}</td>
  <td>
<input type='button' value = 'Edit' name={data.id } onClick={this.handleEditSubmit}  />
 <input type='submit' value = 'Delete' name={data.id } onClick={this.handleDeleteSubmit} /> 
</td>   
</tr>

    })}
      
 </tbody>
</Table>
                </div>
            </div>
        );
    }
}

export default UserList;

// import React from 'react';
// import { values } from './Values';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Table from 'react-bootstrap/Table'
// import { browserHistory } from 'react-router';
// function UserList () {

//     const handleDeleteSubmit =(id) =>{
//         console.log(id.target.name);
//         values.forEach((k,i)=>{
//             if(k.id == id.target.name ){
//             values.splice(i);
//             }
//         })
//         localStorage.setItem('store',values);
//         browserHistory.push('/user');
//     }
//    const handleEditSubmit = (id) => {
       
//    // alert(id)
//         console.log(id.target.name)
//         browserHistory.push('/:id='+id.target.name);
//     };

//     return <div>  <div style= {{
//     "paddingRight": '67px',
//     "paddingLeft": '75px',
// }}>

// <Table striped bordered hover>
//  <thead> 
//  <tr>
// <th>Sr No.</th> 
//   <th>Firstname</th>    
//   <th>Lastname</th>   
//      <th>Email</th>
// 	<th>Phone Number</th>
// 	<th>Option</th>  
//    </tr> 
//  </thead>
// <tbody>  
//     {values.map((data , index ) => {
//         return <tr > 
//  <td>{index}</td>
//   <td key={data.fname}>{data.fname}</td> 
//  <td key={data.lname}>{data.lname}</td> 
//  <td key={data.emailId} >{data.emailId}</td> 
//   <td key={data.phone}>{data.phone}</td>
//   <td>
// <input type='button' value = 'Edit' name={data.id } onClick={handleEditSubmit}  />
//  <input type='submit' value = 'Delete' name={data.id } onClick={handleDeleteSubmit} /> 
// </td>   
// </tr>

//     })}
      
//  </tbody>
// </Table>


//         </div></div>
// }
  
// export default UserList;