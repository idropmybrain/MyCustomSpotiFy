import React,{ Component } from 'react';
import './header.css'


class Header extends Component{
  
  
  
  render(){
    return(
      <div className="container-fluid p-0" style={{ height:'80px'}}>
        <div className="col-12 col-md-3 p-0 d-flex flex-column h-100 justify-content-center">
          <div className="searchBox d-flex">
            <input className="searchBoxInput border-0"/>

          </div>

        </div>
      </div>
    )
  }
  
}


export default Header;
