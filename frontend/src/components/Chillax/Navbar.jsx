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

                    <button className="pomo-btn"><a href="#">Pomodoro ⏰</a></button>
                    <li><a href="#"></a></li>
                    <button className="todo-btn"><a href="#">TodoList 🚀</a></button>

                </ul>
                <h1 className="logo">
                    Chillax🧘‍♂️
                </h1>
            </div>

      </nav>
      </NavbarStyled>
    </>

     );
}
 
export default Navbar;