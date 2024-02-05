import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './UserSlice.js';
import { useNavigate } from 'react-router-dom';


function Create() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({ email: "", title: "" });
  // console.log(newUser)

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = newUser;
    // console.log(user)
    dispatch(addUser(user));
    navigate("/",{replace: true});
  }


  return (
    <div>
      <h3 className='text-center mt-2'>Create user</h3>
      <div className='col-md-4 mt-2 mx-auto'>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Email</Form.Label>
            <Form.Control type="text" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" onChange={(e) => setNewUser({ ...newUser, title: e.target.value })} placeholder="Enter Title" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </div>
    </div>
  )
}

export default Create