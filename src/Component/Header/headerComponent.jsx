 import React, { Component,Fragment } from 'react';
import './headerStyle.css' 
import SearchComponent from '../Search/searchComponent';
class HeaderComponent extends Component {
    constructor(props)
    {
      super(props);
      this.state={}
    } 

  
  render() {
    console.log(this.props.handleFormSubmit)
        return (
         
            <Fragment>
                <nav >
                <div className="hNav">
                <div>
                <i class="fa fa-bars " aria-hidden="true"></i>
                  <img src="/image/youtube.png" alt=""/>
                  </div>
                 <div className="search">
                  <SearchComponent formSubmit ={this.props.handleFormSubmit} />
                  </div>
                 <div  >
                 <i class="fa fa-video-camera " aria-hidden="true"></i>
                 <i class="fa fa-th  " aria-hidden="true"></i>
                 <i class="fa fa-bell" aria-hidden="true"></i>
                 <i class="fa fa-user-circle-o " aria-hidden="true"></i>
                   
                   </div>
                </div>
                </nav>


                    {/* <nav style={{width:"70px" }}>
                    <div className="vNav">
                    <div><i className="fa fa-home" ></i><br/>Home</div>
                    <div> <i className="fa fa-fire" ></i><br/>Trending</div>
                    <div><i className="fa fa-youtube-play"></i><br/> Subscribtions</div>
                    <div><i className="fa fa-folder-open-o"></i> <br/>Libray</div>
                  </div>
                    </nav> */}
             

                
            </Fragment>
        );
    }
}

export default HeaderComponent;
