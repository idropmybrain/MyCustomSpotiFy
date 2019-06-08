import React,{ Component } from 'react';
import './content.css';

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


class Content extends Component{
  renderCards = () => {
    return dataArr.map((item) => {return(
      <div className="d-flex flex-row px-2 pb-2 pt-1 ">
        <div className="card w-100 p-1 shadow border-0 rounded-0">
          <img src={item.avatar} style={{height:'70px', width:'70px'}}/>
        </div>
      </div>
    )})
  }
  
  
  render(){
    return(
      <div className="container-fluid px-0 pl_2 mb_20" style={{ height:'calc(100vh - 200px)',}}>
        <div className="col-3 h-100 px-0 py-4" style={{backgroundColor:'#DCD4EA'}}>
          {this.renderCards()}
        </div>
      </div>
    )
  }
  
}


export default Content;
