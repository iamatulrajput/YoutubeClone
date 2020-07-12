import React, { Component,Fragment } from 'react';
import HeaderComponent from './Component/Header/headerComponent';
import  youtubeApi ,{baseParams}from './youtubeApi.js'
import VideoList from './Component/VideoComponent/VideoList';
import VideoDetails from './Component/VideoComponent/VideoDetails';
class App extends Component {
    constructor(props)
    {
    super(props);
    this.state ={
        videos:[],
        loading:false,
        selectedVideo :null,
    }
    }
 formSubmit  = async term =>
 {
    const response = await youtubeApi.get("/search", {
        params: {
          q: term,
          ...baseParams
        }
    })
    this.setState({videos: response.data.items, loading: true,
    selectedVideo : response.data.items[1]} )
 }

 onSelectedVideo = (video) =>
 {
 this.setState ({selectedVideo: video})
 }


componentDidMount()
{
    this.formSubmit("batman")
}

    render() {
        return (
            <Fragment>
                    <header>
                    <HeaderComponent handleFormSubmit = {this.formSubmit}/>
                    </header>
                  

                <main className ="container-fluid my-4">
                  <section id="dataList">
                      <article>
                        <div className="player_Block">
                            
                    <VideoDetails video ={this.state.selectedVideo}/>
               
                        </div>
                        
                        <div className ="list_Block">
                        <VideoList videos = {this.state.videos}  onSelectedVideo={this.onSelectedVideo}/> 
                        </div>

                      </article>
                  </section>
                  


                </main>
                
            </Fragment>
        );
    }
}

export default App;