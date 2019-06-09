import React,{ Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getAlbum,setArtist} from './../../reducer/album'
const dataArr = [{
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
  }, {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
  }, {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
  }]


class SideMenu extends Component{
  
  
  
  render(){
    // return(
    //   <div className="" style={{ height:'80px'}}>
    // 
    //   </div>
    // )
    
    
    // return dataArr.map((item) => {return(
    //   <div className="d-flex flex-row px-2 pb-2 pt-1 ">
    //     <div className="card w-100 p-1 shadow border-0 rounded-0">
    //       <img src={item.avatar} style={{height:'70px', width:'70px'}}/>
    //     </div>
    //   </div>
    // )})
    
    return (
      this.props.data && this.props.data.map((item) => {return(
        <div className="d-flex flex-row px-2 pb-2 pt-1 " onClick={() => {this.props.getAlbum(item);this.props.setArtist(item)}}>
          <div className="card w-100 p-1 shadow border-0 rounded-0 d-flex flex-row">
            {item.images.length > 0 &&<img src={item.images[item.images.length - 1].url} style={{height:'70px', width:'70px'}}/>}
            <div className='d-flex flex-column px-2' style={{fontSize:'10px'}}>
              <span>{item.name}</span>
              <span>Genre</span>
              <span>Popularity : {item.popularity + '%'}</span>
              <span>Followers : {item.followers.total}</span>
            </div>
          </div>
        </div>
      )})
    )
  }
  
}
const mapStateToProps = (state) => {

  return {
    loading: state.search.loading,
    data: state.search.data
  };

};

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    getAlbum,
    setArtist,
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
