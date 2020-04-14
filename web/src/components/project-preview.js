import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './project-preview.module.css'

function ProjectPreview (props) {
  return (
    <Link className={styles.project} to={`/prosjekt/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div className={styles.projectDetails}>
        <h3 className={styles.title}>{props.title}</h3>
        <span className={styles.category}>Kategori</span>
      </div>
    </Link>
  )
}

export default ProjectPreview
