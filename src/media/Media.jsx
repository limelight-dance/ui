import React, { Component } from 'react'
import './Media.sass'

class Media extends Component {
  constructor(props) {
    super(props)
    this.state = {
      promo: 0,
      videos: [],
    }
  }

  componentDidMount() {
    const params = {
      key: process.env.YOUTUBE_API,
      part: 'snippet',
      playlistId: process.env.PLAYLIST_ID,
      maxResults: 20,
    }

    const url = 'https://www.googleapis.com/youtube/v3/playlistItems?'
      .concat(Object.keys(params)
        .map(param => `${param}=${params[param]}`)
        .join('&'))

    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          videos: data.items.map(item => item.snippet),
        })
      })
  }

  switch(event) {
    this.setState({
      promo: event.target.parentElement.getAttribute('index'),
    })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  render() {
    const { videos, promo } = this.state
    return (
      <div className="media">
        { videos[promo] ? (
          <div className="promo">
            <div className="iframe">
              <iframe
                src={`https://www.youtube.com/embed/${videos[promo].resourceId.videoId}?modestbranding=1`}
                title={videos[promo].title}
                width="1070"
                height="602"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        ) : null }
        <div className="videos">
          { videos.map((video, index) => (
            <div
              className="thumbnail"
              key={video.title}
              index={index}
              onClick={event => this.switch(event)}
            >
              <img src={video.thumbnails.medium.url} width="330" alt="thumbnail" />
              <p>{ video.title }</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Media
