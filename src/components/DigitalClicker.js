import React from 'react';

<<<<<<< HEAD
class DigitalClicker extends React.Component {
=======
class YouTubeDebugger extends React.Component {
>>>>>>> 3a2813d52330bc1933d5a99db86a0923fe12a178
  constructor() {
    super();

    this.state = {
<<<<<<< HEAD
      timesClicked: 0,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked+1
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
=======
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleChangeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleChangeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    });

    /*
    Or this can be defined using the Object.assign method:
    
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    });
    
    */
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleChangeBitrate}>
          Change bitrate
        </button>
        <button className="resolution" onClick={this.handleChangeResolution}>
          Change resolution
        </button>
      </div>
>>>>>>> 3a2813d52330bc1933d5a99db86a0923fe12a178
    );
  }
}

<<<<<<< HEAD
export default DigitalClicker;
=======
export default YouTubeDebugger;
>>>>>>> 3a2813d52330bc1933d5a99db86a0923fe12a178
