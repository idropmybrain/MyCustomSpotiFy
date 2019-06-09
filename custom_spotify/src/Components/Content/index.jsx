import React,{ Component } from 'react';
import './content.css';
import SideMenu from './../SideMenu'
import AlbumMenu from './../AlbumMenu'


class Content extends Component{
  
  render(){
    return(
      <div className="container-fluid px-0 pl_2 mb_20 d-flex" style={{ height:'calc(100vh - 200px)',}}>

        <div className="col-12 col-md-3 h-100 px-0 py-4" style={{backgroundColor:'#DCD4EA', overflow:'scroll'}}>
          <SideMenu/>
          {/* {this.renderCards()} */}
        </div>
        <div className="col-md-9 col-12 h-100 px-3" style={{backgroundColor:'#FFF', overflow:'scroll'}}>
          <AlbumMenu/>
          {/* {this.renderCards()} */}
        </div>
      </div>
    )
  }
  
}


export default Content;
