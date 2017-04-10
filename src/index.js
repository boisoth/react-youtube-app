import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import Footer from './components/footer';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Create API Key from https://console.developers.google.com/

const API_KEY = 'AIzaSyDK2PTxlFwrg7kL6UuoWIP46LgZQPbWmgA';

class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      footerProp: ''
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term }, (videos)=>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // above equals this.setState({ videos: videos }); when key matches data
    });
    // Pass the entire object of videos from API call to VideoList
  }


  render(){

    // debounce from lodash similar to set timeout
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return(
      <div className="row">
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
        <Footer setFooter={footerProp => this.setState({footerProp})} />
      </div>
    )
  }
}



ReactDOM.render(<App />, document.querySelector('.container'));

// npm start
