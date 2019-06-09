import React,{ Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getAlbum} from './../../reducer/album';
import AlbumList from './../AlbumList'
import './AlbumMenu.css';

class AlbumMenu extends Component{
  
  render(){
    return (
      <div>
        {this.props.artistData &&
          <div className="col-12 p-0">
            <img style={{width: '100%', height: '260px',objectFit:'cover'}} src={this.props.artistData.images[0].url}></img>
          </div>
        }
        <div className="col-6 p-0 customScroll" style={{backgroundColor:'#E8DCFE'}}>
          <AlbumList/>

        </div>
        <div className="col-6" style={{backgroundColor:'#E8DCFE'}}>
        </div>
      </div>
    )
  }
  
}
const mapStateToProps = (state) => {

  return {
    loading: state.search.loading,
    artistData: state.album.selectedArtist
  };

};

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    getAlbum,
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumMenu);
