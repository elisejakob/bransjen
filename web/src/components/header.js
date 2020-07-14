import {Link} from 'gatsby'
import React from 'react'
import { cn } from '../lib/helpers'
import styles from './header.module.css'

const Header = ({siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link to='/'>
          <img src="/assets/bransjen.gif" alt={siteTitle} />
        </Link>
      </div>
    </div>

    <nav className={styles.nav}>
      <Link
        to='/om/'
        activeClassName={styles.active}
      >
        Om Bransjen
      </Link>
      <Link
        to='/prosjekter/'
        activeClassName={styles.active}
      >
        Prosjekter
      </Link>
      <Link
        to='/diverse/'
        activeClassName={styles.active}
      >
        Diverse
      </Link>
    </nav>

    <img className={styles.smiley} src="/assets/smiley.svg" alt="Smiley som ser litt psycho ut" />
  </div>
)

export default Header
