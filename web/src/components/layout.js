import React from 'react'
import Header from './header'
import {cn} from '../lib/helpers'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={cn(siteTitle, styles.content)}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.siteInfo}>
        <a href="mailto:hei@bransjen.no" target="_blank">hei@bransjen.no</a>
        <a href="mailto:hei@bransjen.no" target="_blank">Damstredet 8, 0123 Oslo</a>
        <img className={styles.smiley} src="/assets/smiley.svg" alt="Smiley som ser litt psycho ut" />
      </div>
    </footer>
  </>
)

export default Layout
