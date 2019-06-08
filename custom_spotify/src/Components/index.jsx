import React,{ Component } from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import Content from './Content';
import FooterPlayer from './FooterPlayer';

class MySpotify extends Component{
  
  componentDidMount() {

	  let hashParams = {};
	  let e, r = /([^&;=]+)=?([^&;]*)/g,
	    q = window.location.hash.substring(1);
	  while ( e = r.exec(q)) {
	    hashParams[e[1]] = decodeURIComponent(e[2]);
	  }

	  if(!hashParams.access_token) {
	    window.location.href = 'https://accounts.spotify.com/authorize?client_id=4054972931f64a02ac67dd408391548d&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/callback';
	  } else {
	    // this.props.setToken(hashParams.access_token);
	  }

	}
  
  render(){
    return(
      // #ebebeb
      <div style={{height:'100vh',width:'100vw', backgroundColor:'#FFF'}}>


        <Header/>
        <div>
          {/* <SideMenu/> */}
          <Content/>
        </div>
        <FooterPlayer/>
      </div>
    )
  }
  
} 

export default MySpotify;