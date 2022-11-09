import "./Navbar.scss"
import logoGrich from "../../assets/g.rich_logo_.png"

const Navbar = () => {
  return (
    <>
    <div className="logo">
        <img className="logo-img" src={logoGrich} alt="logo-grich" />
    </div>
<div className="navbar">
    <ul className="navbar-list">
        <li className="navbar-list-item">
            <span className="navbar-list-span">HOME</span>
        </li>
        <li className="navbar-list-item">
            <span className="navbar-list-span">BIO</span>
        </li>
        <li className="navbar-list-item">
            <span className="navbar-list-span">PHOTOS</span>
        </li>
        <li className="navbar-list-item">
            <span className="navbar-list-span">VIDEO</span>
        </li>
        <li className="navbar-list-item">
            <span className="navbar-list-span">SHOWS</span>
        </li>
        <li className="navbar-list-item">
            <span className="navbar-list-span">CONTACT</span>
        </li>
    </ul>
    </div>
    </>
  )
}

export default Navbar