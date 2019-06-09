import React,{ Component,Fragment } from 'react';
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
          this.props.data.items && <Fragment>
            <span>Albums</span>
            <div className="d-flex flex-row flex-wrap">
              { this.props.data.items.map((item)=>
                (
                  <div className=" d-flex p-2" style={{'width':'33%'}}>
                    <div>
                      <img style={{height:'100%', width:'100%'}} src={item.images[0].url}/>
                    </div>
                  </div>
                )
              )
              }
            </div>
          </Fragment>
        }
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
