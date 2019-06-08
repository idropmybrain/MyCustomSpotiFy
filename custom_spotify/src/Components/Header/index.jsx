import React,{ Component } from 'react';
import './header.css'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {searchArtist} from './../../reducer/search'


class Header extends Component{
  
  
  
  render(){
    return(
      <div className="container-fluid p-0" style={{ height:'80px'}}>
        <div className="col-12 col-md-3 p-0 d-flex flex-column h-100 justify-content-center">
          <div className="searchBox d-flex">
            <input className="searchBoxInput border-0" onChange={(e)=> this.props.searchArtist(e.target.value)}/>

          </div>

        </div>
      </div>
    )
  }
  
}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    searchArtist,
  }, dispatch);

};

export default connect('', mapDispatchToProps)(Header);
