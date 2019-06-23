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
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.YOUTUBE_API}&part=snippet&playlistId=${process.env.PLAYLIST_ID}&maxResults=20`)
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
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  render() {
    return (
      <div className="media">
        { this.state.videos[this.state.promo] ?
          <div className="promo">
            <div className="iframe">
              <iframe width="1070" height="602" src={`https://www.youtube.com/embed/${this.state.videos[this.state.promo].resourceId.videoId}?modestbranding=1`} frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        : null}
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
