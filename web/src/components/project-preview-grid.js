import React from 'react'
import ProjectPreview from './project-preview'

import styles from './project-preview-grid.module.css'

function ProjectPreviewGrid (props) {
  return (
    <div className={styles.root}>
      <nav className={styles.categories}>
        <ul className={styles.categoryFilter}>
          {props.categories &&
            props.categories.map(category => (
              <li className={styles.categoryFilterButton} key={category.id}>
                {category.title}
              </li>
            ))}
          </ul>
      </nav>
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  categories: []
}

export default ProjectPreviewGrid
