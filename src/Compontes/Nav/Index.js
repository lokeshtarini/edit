import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-transpent br">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
        <Link class="nav-link" to={"/Home"}>Home</Link>
        <Link class="nav-link" to={"/Service"}>Service</Link>
        <Link class="nav-link" to={"/Users"}>Users</Link>
        <Link class="nav-link" to={"/Login"}>Login</Link>
        {/* <Link class="nav-link" href="#">Pricing</Link> */}
    
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Nav
