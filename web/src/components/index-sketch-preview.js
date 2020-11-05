import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './index-sketch-preview.module.css'

function IndexSketchPreview (props) {
  return (
    <Link className={styles.sketch} to={`/diverse/`}>
      <div className={styles.sketchThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(400)
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
    </Link>
  )
}

export default IndexSketchPreview
