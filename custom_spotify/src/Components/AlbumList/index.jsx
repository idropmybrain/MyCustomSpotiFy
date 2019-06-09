import React,{ Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getAlbum} from './../../reducer/album';
// import AlbumList from './../AlbumList'

class AlbumList extends Component{
  
  render(){
    console.log(this.props.data)
    return (
      
      <div>
        {this.props.data &&
          <div>This is albumList.</div>}
      </div>
    )
  }
  
}
const mapStateToProps = (state) => {

  return {
    loading: state.search.loading,
    data: state.album.data
  };

};

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    // getAlbum,
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
