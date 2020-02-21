import React from 'react'

import styles from './newsfeed.module.css'

function Newsfeed (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <h3>{node.title}</h3>
            </li>
          ))}
      </ul>
    </div>
  )
}

Newsfeed.defaultProps = {
  title: '',
  nodes: []
}

export default Newsfeed
