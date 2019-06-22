import React, { Component } from 'react'
import styles from './Media.sass'

class Media extends Component {
  constructor(props) {
    super(props)
    this.state = {
      promo: 0,
      videos: []
    }
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyDRRQQA8xJh1WlfzWe1zP3xwpOXclDY3is&part=snippet&playlistId=PLyUonNA3oh0L4ep7RSOFMqabil1-eFPlT&maxResults=20')
    .then(res => res.json())
    .then(data => {
      this.setState({
        videos: data.items.map(item => item.snippet)
      })
    })
  }

  switch(e) {
    this.setState({
      promo: e.target.parentElement.getAttribute('index')
    })
  }

  render() {
    return (
      <div className="media">
        <div className="promo">
          <div className="iframe">
            { this.state.videos[this.state.promo] ?
              <div>
                <iframe width="960" height="540" src={`https://www.youtube.com/embed/${this.state.videos[this.state.promo].resourceId.videoId}?modestbranding=1`} frameBorder="0"></iframe>
                <p>{ this.state.videos[this.state.promo].title }</p>
              </div>
            : null}
          </div>
        </div>
        <div className="videos">
          { this.state.videos.map((video, index) => (
            <div key={index} index={index} className="thumbnail" onClick={(e) => this.switch(e)}>
              <img width="330" src={video.thumbnails.medium.url}/>
              <p>{ video.title }</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Media
