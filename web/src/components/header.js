import {Link} from 'gatsby'
import React from 'react'
import { cn } from '../lib/helpers'
import TransitionLink from 'gatsby-plugin-transition-link'
import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle, transitionStatus}) => (
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

    <nav className={cn(styles.nav, transitionStatus)}>
      <ul>
        <li>
          <TransitionLink to='/prosjekter/' activeClassName={styles.active}>Prosjekter</TransitionLink>
        </li>
        <li>
          <TransitionLink to='/div/' activeClassName={styles.active}>Div.</TransitionLink>
        </li>
        <li>
          <TransitionLink to='/om/' activeClassName={styles.active}>Om Bransjen</TransitionLink>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
