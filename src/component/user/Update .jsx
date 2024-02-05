import React from 'react'
import { useState } from 'react';
import { Form , Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { updateUserDate } from './UserSlice';

function Update() {
  const location = useLocation();
  const [user, setuser] = useState({email:location.state.email, title:location.state.title});
  const [newAuthor, setNewAuthor] = useState("");
  const newUser = {email: user?.email, title: newAuthor };
  console.log(newUser);
   const dispatch = useDispatch();

  const updateUser =()=>{
   dispatch(updateUserDate(newUser));
  }

  return (
    <div>
      <h3 className='text-center mt-2'>User Update</h3>
      <div className='col-md-4 mt-2 mx-auto'>
        <Form onSubmit={updateUser()} >          
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control defaultValue={user.title} onChange={(e)=>setNewAuthor(e.target.value)} type="text" placeholder="Enter Title" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
               Edit Submit
            </Button>
        </Form>
      </div>
    </div>
  )
}

export default Update