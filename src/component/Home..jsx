import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from './user/UserSlice';
import { Link } from 'react-router-dom';


function Home() {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const deleteUserusemail =(e) => {
    // console.log(e);
     dispatch(deleteUser(e));
  };

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
            {user.map((element) => {
              const {title,email} = element;
              return <tr>
                <td>{title}</td>
                <td>{email}</td>
                <td className='d-flex align-item-center justify-content-center gap-2'>
                  <Link to="/edit" state={{title,email}} > <Button variant="warning">Update</Button></Link>
                  < Button variant="danger" onClick={()=>{deleteUserusemail(email)}} >Delete</Button>
                </td>
              </tr>
            })}
          </tbody>
        </Table>
      </div>

    </div>
  )
}

export default Home