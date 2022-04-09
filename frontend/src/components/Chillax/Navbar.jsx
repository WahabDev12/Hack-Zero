import { NavbarStyled } from "./Styles/Navbar.Styled";

const Navbar = () => {
    return ( 
    <>
        <NavbarStyled>
        <nav className="navbar">

            <div className="navbar-container container">

                <input type="checkbox" name="" id="" />

                <div className="hamburger-lines">

                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>

                </div>
                <ul className="menu-items">

                    <li><a href="#"></a></li>
                    <button><a href="#">Pomodoro ⏰</a></button>
                    <li><a href="#">My Todo 📘</a></li>
                    <li><a href="#">Dashboard</a></li>

                </ul>
                <h1 className="logo">
                    Chillax😌
                </h1>
            </div>

      </nav>
      </NavbarStyled>
    </>

     );
}
 
export default Navbar;