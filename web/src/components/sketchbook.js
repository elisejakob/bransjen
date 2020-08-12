import {Link} from 'gatsby'
import React, { useState } from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import SketchModal from './sketch-modal'

import styles from './sketchbook.module.css'

function Sketchbook (props) {
  let [showModal, toggleModal] = useState(false);
  let [currentSketch, setCurrentSketch] = useState(0);
  let handleModal = (index) => {
    toggleModal(showModal = true);
    setCurrentSketch(index);
  }
  let closeModal = (index) => {
    toggleModal(showModal = false);
  }
  return (
    <div className={styles.root}>
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map((node, index) => (
            <li className={styles.sketchthumb} key={node.id} onClick={() => handleModal(index)}>
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
      { showModal &&
        <>
          <SketchModal currentSketch={props.nodes[currentSketch]} />
          <div className={styles.modalNav}>
            {currentSketch > 0 && <div className={styles.modalNavLeft} onClick={() => handleModal(currentSketch-1)}>&larr;</div> }
            {currentSketch < props.nodes.length-1 && <div className={styles.modalNavRight} onClick={() => handleModal(currentSketch+1)}>&rarr;</div> }
          </div>
          <div className={styles.closeModal} onClick={closeModal}>
            <div className={styles.closeModal__icon}></div>
          </div>
        </>
      }
    </div>
  )
}

Sketchbook.defaultProps = {
  title: '',
  nodes: []
}

export default Sketchbook
