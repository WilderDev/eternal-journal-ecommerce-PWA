import React from "react"
import { Link } from "gatsby"

import footerStyles from "../styles/footer.module.scss"
// import footerBG from "../images/bg/"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/podcast">Podcast</Link>
        </li>
        {/* <li>
          <Link to="/forum">Forum</Link>
        </li> */}
        <li>
          <Link to="/give-back">Give</Link>
        </li>
        {/* !!!TODO: Newsletter / Blog RSS / Podcast signup / Social Medias */}
      </ul>
    </footer>
  )
}

export default Footer
