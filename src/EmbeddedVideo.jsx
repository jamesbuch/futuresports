import * as React from 'react'

const EmbeddedVideo = (props) => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
      <div className="mb-3">
        <h1>{props.title}</h1>
      </div>
      <div className="mb-1">
        Video not playing? This is an issue with YouTube itself; please open in
        new window.
      </div>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <iframe className="embeddedVideo" src={props.videoURL}></iframe>
      </div>
    </div>
  )
}

export default EmbeddedVideo
