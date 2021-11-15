import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import LocalStorage from '../../services/localStorageService';


const UserList = () => {
 
 const [count, setCount] = useState(0);
  const history = useHistory();
  const LocalStorage1 = new LocalStorage();
 
 let values = LocalStorage1.getData('store');
  const handleDeleteSubmit = (id) => {
    console.log(id);
    values.forEach((k, i) => {
      if (k.id === id) {
        values.splice(i,1);
        
      }
    });
    LocalStorage1.setData('store',values);
    setCount(prevCount => prevCount + 1)
   
  };

  const handleEditSubmit = (id) => {
    
    console.log(id);
    history.push(`/userForm/${id}`);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
      <div>
        <h2>User List Page</h2>
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
            {values && values.map((data, index) => {
              return (
                <tr>
                  <td>{index}</td>
                  <td key={data.fname}>{data.fname}</td>
                  <td key={data.lname}>{data.lname}</td>
                  <td key={data.email}>{data.email}</td>
                  <td key={data.phone}>{data.phone}</td>
                  <td>
                    <input
                      type="button"
                      value="Edit"
                      name={data.id}
                      onClick={() => handleEditSubmit(data.id)}
                    />
                    <input
                      type="button"
                      value="Delete"
                      name={data.id}
                      onClick={() => handleDeleteSubmit(data.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;

