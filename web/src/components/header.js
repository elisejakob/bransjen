import {Link} from 'gatsby'
import React from 'react'
import { cn } from '../lib/helpers'
import TransitionLink from 'gatsby-plugin-transition-link'
import styles from './header.module.css'
import { gsap, TweenLite } from 'gsap'

const enterPage = ({node}) => {
  TweenLite.fromTo(node, 1, {xPercent: 100}, {xPercent: 0});
}

const exitPage = ({node}) => {
  TweenLite.fromTo(node, 1, {xPercent: 0}, {xPercent: 100});
}

const Header = ({siteTitle}) => (
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
      <TransitionLink
        to='/prosjekter/'
        activeClassName={styles.active}
        exit={{
          length: 1,
          trigger: ({ exit, node }) =>
            exitPage({ exit, node, direction: "out" }),
        }}
        entry={{
          length: 1,
          trigger: ({ exit, node }) =>
            enterPage({ exit, node, direction: "in" }),
        }}
      >
        Prosjekter
      </TransitionLink>
      <TransitionLink
        to='/div/'
        activeClassName={styles.active}
        exit={{
          length: 1,
          trigger: ({ exit, node }) =>
            exitPage({ exit, node, direction: "out" }),
        }}
        entry={{
          length: 1,
          trigger: ({ exit, node }) =>
            enterPage({ exit, node, direction: "in" }),
        }}
      >
        Div.
      </TransitionLink>
      <TransitionLink
        to='/om/'
        activeClassName={styles.active}
        exit={{
          length: 1,
          trigger: ({ exit, node }) =>
            exitPage({ exit, node, direction: "out" }),
        }}
        entry={{
          length: 1,
          trigger: ({ exit, node }) =>
            enterPage({ exit, node, direction: "in" }),
        }}
      >
        Om Bransjen
      </TransitionLink>
    </nav>
  </div>
)

export default Header
