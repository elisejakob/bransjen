import React from 'react'

import styles from './newsfeed.module.css'

function Newsfeed (props) {
  return (
    <div className={styles.root}>
      <ul className={styles.feed}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <blockquote className={styles.quote}>{node.quote}</blockquote>
              <a href={node.source.url} target="_blank">{node.source.text}</a>
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
