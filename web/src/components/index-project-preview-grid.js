import React from 'react'
import IndexProjectPreview from './index-project-preview'
import IndexSketchPreview from './index-sketch-preview'
import BlockText from '../components/block-text'

import styles from './index-project-preview-grid.module.css'

function IndexProjectPreviewGrid (props) {

  const shuffledProjects = props.projectNodes.sort(() => 0.5 - Math.random());
  let selectedProjects = shuffledProjects.slice(0, 4);

  const shuffledSketches = props.sketchNodes.sort(() => 0.5 - Math.random());
  let selectedSketches = shuffledSketches.slice(0, 4);

  return (
    <div className={styles.root}>
      <div className={styles.about}>
        {props.aboutText && <BlockText blocks={props.aboutText || []} />}<br />
        <a href="mailto:hei@bransjen.no" target="_blank">hei@bransjen.no</a>
        </div>
      <ul className={styles.projectGrid}>
        {props.projectNodes &&
          selectedProjects.map(node => (
            <li key={node.id}>
              <IndexProjectPreview {...node} key={node.id} />
            </li>
          ))}
      </ul>
      <ul className={styles.sketchGrid}>
        {props.sketchNodes &&
          selectedSketches.map(node => (
            <li key={node.id}>
              <IndexSketchPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

IndexProjectPreviewGrid.defaultProps = {
  title: '',
  projectNodes: [],
  sketchNodes: [],
  about: ''
}

export default IndexProjectPreviewGrid
