import React from 'react'

function Nav() {
    return (
        <div className='col-md-6 mx-auto'>
            <nav className=" navbar navbar-expand-lg navbar-light bg-light"> 
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">Home <span className="sr-only"></span></a>
                        <a className="nav-item nav-link active" href="create">create User</a>
                        <a className="nav-item nav-link active" href="edit">Update User</a>                            
                </div>
                </div>
            </nav>
        </div >
    )
}

export default Nav