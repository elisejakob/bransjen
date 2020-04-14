import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <Link to='/om/'>Bransjen</Link> er et lite designstudio som gjør så godt de kan. Noen ganger lager de bæsjeanimasjoner og noen ganger vinner de priser.
      </div>
      <div className={styles.title}>
        <Link to='/'>{siteTitle}</Link>
      </div>
    </div>

    <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
      <Icon symbol='hamburger' />
    </button>

    <nav className={cn(styles.nav, showNav && styles.showNav)}>
      <ul>
        <li>
          <Link to='/prosjekter/'>Prosjekter</Link>
        </li>
        <li>
          <Link to='/skisseboka/'>Skisseboka</Link>
        </li>
        <li>
          <Link to='/bransjenytt/'>Bransjenytt</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
