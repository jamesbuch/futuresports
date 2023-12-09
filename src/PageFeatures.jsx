import * as React from 'react'
import EmbeddedVideo from './EmbeddedVideo'
import ImageCarousel from './ImageCarousel'

const MainPageTopRow = (props) => {
  return (
    <div className="container">
      <div className="row">
        <EmbeddedVideo title="Matildas" videoURL="https://www.youtube.com/embed/5uHC420UdD4" />
        <ImageCarousel />
      </div>
    </div>
  )
}

export default MainPageTopRow
