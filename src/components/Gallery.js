import React from 'react'
import Image from './Image'
import NoImages from './NoImages'

const Gallery = props => {

    const results = props.data;
    let images;
    let noImages;

    if (results.length > 0) {
        images = results.map(image => {
            let id = image.id;
            let desc = image.alt_description;
            let url = image.urls.regular;
            return <Image url={url} key={id} alt={desc} />
        })
    } else {
        noImages = <NoImages />;
    }

  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  )
}

export default Gallery
