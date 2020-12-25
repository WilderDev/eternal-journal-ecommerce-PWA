import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// import { CartContext } from "../context/cart"

import headerStyles from "../styles/header.module.scss"

const Header = ({ siteTitle }) => {
  // const [cart, updateCart] = useContext(CartContext)
  // const [cartCount, updateCartCount] = useState(0)

  // useEffect(() => {
  //   updateCartCount(cart.reduce((acc, next) => acc + next.quantity, 0))
  // }, [cart])
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <h3>Crystal Clarity Delivered</h3>
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName={headerStyles.navActive}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/all-products" activeClassName={headerStyles.navActive}>
              All
            </Link>
          </li>
          <li>
            <Link to="/guided-journal" activeClassName={headerStyles.navActive}>
              Guided Journals
            </Link>
          </li>
          <li>
            <Link to="/sub-boxes" activeClassName={headerStyles.navActive}>
              Subscription Boxes
            </Link>
          </li>
          <li>
            <Link to="/sub-boxes" activeClassName={headerStyles.navActive}>
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={headerStyles.cart}
              activeClassName={headerStyles.navActive}
            >
              Cart
            </Link>
          </li>
          {/* <li>
            {cart.length > 0 ? <CartTotal className="cart">{cartCount}</CartTotal> : null}
            <Link to="/cart">Cart</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Eternal Journal`,
}

export default Header
