import '../NavBar/NavBar.css'

const NavBar = () => {
  return (
    <>
        <div className="nav-bar">
          <span className="nav-bar-logo">Travel Bag</span>
          <input type="text" className="nav-bar-search"/>
          <button className="nav-bar-button">Search</button>
          <span className="nav-bar-sign-in">Sign In</span>
          <span className="nav-bar-cart">Cart</span>
        </div>
    </>
  )
}

export default NavBar