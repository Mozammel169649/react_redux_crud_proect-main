import React from 'react'
import { Form , Button } from 'react-bootstrap'

function Create() {
  return (
    <div>
      <h3 className='text-center mt-2'>Create user</h3>
      <div className='col-md-4 mt-2 mx-auto'>
        <Form >
          
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter UserName" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" />
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