import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {Link} from 'gatsby'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'
import Container from './container'

import styles from './project.module.css'

function Project (props) {
  const {_rawExcerpt, title, categories, mainImage, publishedAt, client, gallery, relatedProjects} = props
  return (
    <article className={styles.root}>
      <Container>
        {props.mainImage && mainImage.asset && (
          <div className={styles.mainImage}>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit('crop')
                .url()}
              alt={mainImage.alt}
            />
          </div>
        )}
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawExcerpt && <BlockText blocks={_rawExcerpt || []} />}
          </div>
          <aside className={styles.metaContent}>
            {client &&
              <div>{client}</div>
            }
            {categories && categories.length > 0 && (
              <div className={styles.categories}>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
        {gallery &&
          <div className={styles.gallery}>nanana her er det et galleri egentlig</div>
        }
        {relatedProjects && relatedProjects.length > 0 && (
          <div className={styles.relatedProjects}>
            <h3 className={styles.relatedProjectsHeadline}>Lignende prosjekter</h3>
            <ul>
              {relatedProjects.map(project => (
                <li key={`related_${project._id}`}>
                  {project.slug ? (
                    <Link to={`/prosjekt/${project.slug.current}`}>{project.title}</Link>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </article>
  )
}

export default Project
