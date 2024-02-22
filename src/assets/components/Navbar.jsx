import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!" style={{ fontFamily:"Protest Riot",fontSize: "70px", color: "purple",}}>Creamy Dream</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!"> <Link to='/' style={{textDecoration:"none", fontSize:"30px", color:"crimson",fontFamily:"Protest Riot" , marginLeft:"200px"}}> Home</Link></a></li>
                        <li class="nav-item"><a class="nav-link" href="#!"> <Link to='/products' style={{textDecoration:"none", fontSize:"30px", color:"crimson",fontFamily:"Protest Riot", marginLeft:"240px"}}>Products</Link></a></li>
                
              </ul>    
              <br />
                </div>
            </div>
        </nav>
<br />

   </div>
            
        
    );
};

export default Navbar;