import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='col-md-6 mx-auto'>
            <nav className=" navbar navbar-expand-lg navbar-light bg-light"> 
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">
                        <Link to="/">Home</Link></a>
                        <a className="nav-item nav-link active" href="create">
                        <Link to="/create">create user</Link></a>
                        <a className="nav-item nav-link active" href="edit">
                        <Link to="/edit">update user</Link></a>    
                                        
                </div>
                </div>
            </nav>
        </div >
    )
}

export default Nav