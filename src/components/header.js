import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <div className="navList">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/all-products">All</Link>
      </li>
      <li>
        <Link to="/guided-journal">Guided Journals</Link>
      </li>
      <li>
        <Link to="/sub-boxes">Subscription Boxes</Link>
      </li>
      <li>
        <Link to="/sub-boxes">Blog</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Eternal Journal`,
}

export default Header
