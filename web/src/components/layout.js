import React from 'react'
import Header from './header'
import { cn } from '../lib/helpers'
import { TransitionState } from "gatsby-plugin-transition-link";

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
      <Header siteTitle={siteTitle} />
      <footer className={styles.footer}>
        <div className={styles.siteInfo}>
          <a href="mailto:hei@bransjen.no" target="_blank">hei@bransjen.no</a>
          <a href="https://goo.gl/maps/Y1dHsNEDPxNDLKij9" target="_blank">Damstredet 8, 0177 Oslo</a>
          <a className={styles.toTop} onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>&uarr;</a>
        </div>
      </footer>
    <TransitionState>
      {({ mount, transitionStatus }) => {
        return (
          <>
            <div className={cn(siteTitle, styles.content, transitionStatus)}>{children}</div>
          </>
        )
      }}
    </TransitionState>
  </>
)

export default Layout
