import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      videoList: exampleVideoData,

      currentVideo: {
        id: {
          videoId: ''
        },

        snippet: {
          description: '',
          thumbnails: {
            default: {
              url: ''
            },
            title: ''
          }
        }
      }
    };
  }

  
  onClick (event) {
    var idx = Number.parseInt(event.target.dataset.id);
    var currVideo = this.state.videoList[idx];
    var newVideo = {};
    newVideo.id = {
      videoId: currVideo.id.videoId
    };

    newVideo.snippet = {
      title: currVideo.snippet.title,
      description: currVideo.snippet.description,
    };

    this.setState({currentVideo: newVideo});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> Searchbar goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} clickListener={this.onClick.bind(this)} />
          </div>
        </div>
      </div>      
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
