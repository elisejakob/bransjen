import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link to='/'>
          <img src="static/assets/bransjen.gif" alt={siteTitle} />
        </Link>
      </div>
      <div className={styles.about}>
        <Link to='/om/'>Bransjen</Link> er et lite designstudio som gjør så godt de kan. Noen ganger lager de bæsjeanimasjoner og noen ganger vinner de priser.
        <br /><a href="mailto:hei@bransjen.no" target="_blank">hei@bransjen.no</a>
      </div>
    </div>

    <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
      <Icon symbol='hamburger' />
    </button>

    <nav className={cn(styles.nav, showNav && styles.showNav)}>
      <ul>
        <li>
          <Link to='/prosjekter/' activeClassName={styles.active}>Prosjekter</Link>
        </li>
        <li>
          <Link to='/skisseboka/' activeClassName={styles.active}>Skisseboka</Link>
        </li>
        <li>
          <Link to='/bransjenytt/' activeClassName={styles.active}>Bransjenytt</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
