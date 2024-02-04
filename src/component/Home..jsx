import React from 'react'
import { Button, Table } from 'react-bootstrap'


function Home() {
  return (
    <div>
      <div>
        <h3 className='text-center mt-2'>User List</h3>
      </div>
      <div className='col-md-6 mx-auto mt-2'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td className='d-flex align-item-center justify-content-center gap-2'>
                <Button variant="warning">Update</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

    </div>
  )
}

export default Home