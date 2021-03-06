import React, { Component } from 'react'

class Media extends Component {
  constructor(props) {
    super(props)
    this.state = {
      promo: 0,
      videos: [],
    }
  }

  componentDidMount() {
    this.getVideos()
  }

  // GET latest 20 videos in the Limelight Covers playlist
  getVideos() {
    const params = {
      key: process.env.YOUTUBE_API,
      part: 'snippet',
      playlistId: process.env.PLAYLIST_ID,
      maxResults: 20,
    }
    const url = 'https://www.googleapis.com/youtube/v3/playlistItems?'.concat(
      Object.keys(params).map(param => `${param}=${params[param]}`).join('&'),
    )

    fetch(url).then(res => res.json()).then((data) => {
      this.setState({
        videos: data.items.map(item => item.snippet).filter(item => item.thumbnails),
      })
    })
  }

  // Replace the promo video with the selected video
  switch(event) {
    this.setState({
      promo: event.target.parentElement.getAttribute('index'),
    })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  render() {
    const { videos, promo } = this.state
    const promoVideo = videos[promo]

    return (
      <div className="media-page">
        { promoVideo ? (
          <div className="promo-video">
            <div className="iframe-container">
              <iframe
                src={`https://www.youtube.com/embed/${promoVideo.resourceId.videoId}?modestbranding=1`}
                title={promoVideo.title}
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
              key={video.resourceId.videoId}
              index={index}
              onClick={event => this.switch(event)}
            >
              <img src={video.thumbnails.medium.url} width="330" alt="" />
              <p>{ video.title }</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Media
