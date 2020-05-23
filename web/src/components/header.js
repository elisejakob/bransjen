import {Link} from 'gatsby'
import React from 'react'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link to='/'>
          <img src="/assets/bransjen.gif" alt={siteTitle} />
        </Link>
      </div>
      <div className={styles.about}>
        <Link to='/om/'>Bransjen</Link> er et lite designstudio som gjør så godt de kan. Noen ganger lager de bæsjeanimasjoner og noen ganger vinner de priser.
        <br /><a href="mailto:hei@bransjen.no" target="_blank">hei@bransjen.no</a>
      </div>
    </div>

    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to='/prosjekter/' activeClassName={styles.active}>Prosjekter</Link>
        </li>
        <li>
          <Link to='/div/' activeClassName={styles.active}>Div.</Link>
        </li>
        <li>
          <Link to='/om/' activeClassName={styles.active}>Om Bransjen</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
