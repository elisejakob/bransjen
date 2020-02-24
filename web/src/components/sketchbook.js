import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './sketchbook.module.css'

function Sketchbook (props) {
  return (
    <div className={styles.root}>
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li className={styles.sketchthumb} key={node.id}>
              {node.mainImage && node.mainImage.asset && (
                <img
                  src={imageUrlFor(buildImageObj(node.mainImage))
                    .width(600)
                    .url()}
                  alt={node.mainImage.alt}
                />
              )}
            </li>
          ))}
      </ul>
    </div>
  )
}

Sketchbook.defaultProps = {
  title: '',
  nodes: []
}

export default Sketchbook
