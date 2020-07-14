import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {Link} from 'gatsby'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'

import styles from './about.module.css'

function About (props) {
  const {_rawExcerpt, mainImage} = props
  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        <div className={styles.mainContent}>
          {_rawExcerpt && <BlockText blocks={_rawExcerpt || []} />}
        </div>
        {props.mainImage && mainImage.asset && (
          <div className={styles.mainImage}>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(600)
                .fit('crop')
                .url()}
              alt={mainImage.alt}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default About
