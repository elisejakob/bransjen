import React from 'react'
import IndexProjectPreview from './index-project-preview'
import IndexSketchPreview from './index-sketch-preview'
import BlockText from '../components/block-text'

import styles from './index-project-preview-grid.module.css'

function IndexProjectPreviewGrid (props) {

  const shuffledProjects = props.projects.sort(() => 0.5 - Math.random());
  let selectedProjects = shuffledProjects.slice(0, 4);

  const shuffledSketches = props.sketches.sort(() => 0.5 - Math.random());
  let selectedSketches = shuffledSketches.slice(0, 4);

  return (
    <div className={styles.projectGrid}>
      <div className={styles.about}>
        {props.aboutText && <BlockText blocks={props.aboutText || []} />}<br />
        <a href="mailto:hei@bransjen.no" target="_blank">hei@bransjen.no</a>
      </div>
      {props.projects &&
        selectedProjects.map((project, index) => (
          <div key={project.id} style={{order: index + (index + 1)}}>
            <IndexProjectPreview {...project} key={project.id} />
          </div>
        ))}
      {props.sketches &&
        selectedSketches.map((sketch, index) => (
          <div key={sketch.id} style={{order: index + (index + 2)}}>
            <IndexSketchPreview {...sketch} />
          </div>
        ))}
    </div>
  )
}

IndexProjectPreviewGrid.defaultProps = {
  title: '',
  projects: [],
  sketches: [],
  about: ''
}

export default IndexProjectPreviewGrid
