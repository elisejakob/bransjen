import React, { useState } from 'react'
import ProjectPreview from './project-preview'

import styles from './project-preview-grid.module.css'

function ProjectPreviewGrid (props) {
  let [currentCategory, setCategory] = useState("all");
  return (
    <div className={styles.root}>
      <nav className={styles.categories}>
        <ul className={styles.categoryFilter}>
          <li className={styles.categoryFilterButton} onClick={() => setCategory('all')}>Alle</li>
          {props.categories &&
            props.categories.map(category => (
              <li
                className={styles.categoryFilterButton}
                key={category.id}
                onClick={() => setCategory(category.title)}
                role="button"
              >
                {category.title}
              </li>
            ))}
          </ul>
      </nav>
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.filter(node => {
            if (currentCategory === "all") {
              return true
            }
            if (!node.categories.length) {
              return false
            }
            return node.categories.some(category => {
              return currentCategory === category.title
            })
          }).map(node => (
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
