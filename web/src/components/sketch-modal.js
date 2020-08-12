import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import styles from './sketch-modal.module.css'

function SketchModal (props) {
  return (
    <div className={styles.modal}>
      <div className={styles.gallery}>
        {props.currentSketch.mainImage && (
          <img
            src={imageUrlFor(buildImageObj(props.currentSketch.mainImage))
              .width(600)
              .url()}
            alt={props.currentSketch.mainImage.alt}
            className={styles.image}
          />
        )}
      </div>
    </div>
  )
}

SketchModal.defaultProps = {
  currentSketch: ''
}

export default SketchModal
