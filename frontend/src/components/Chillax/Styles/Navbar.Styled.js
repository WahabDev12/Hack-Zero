import styled from "styled-components";

export const NavbarStyled  = styled.header`

@import url('https://fonts.googleapis.com/css2?family=Epilogue&family=Inter:wght@300;400&family=Karla&display=swap');
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Epilogue", sans-serif;
}

body{
    background-color: #E7E5DC;
}


.navbar input[type="checkbox"],
.navbar .hamburger-lines {
  display: none;
}

.container {
  max-width: 1200px;
  width: 90%;
  margin: auto;
}

.navbar {
  position: fixed;
  width: 100%;
  background: #F7F7F7;
  color: #344963;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.menu-items {
  order: 2;
  display: flex;
}
.logo {
  font-size: 32px;
  letter-spacing: 1px;
  font-weight: 700;
  line-height: 51px;

}

.menu-items li,
button {
  list-style: none;
  margin-left: 1.5rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}

.navbar a {
  color: #344963;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

button {
  padding: 12px 24px;
  margin-right: 20px;
  background-color: #FFDE3B;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color:#344963;    
  transition: all ease-in-out 0s;
}



@media (max-width: 768px) {
  .navbar-container input[type="checkbox"],
  .navbar-container .hamburger-lines {
    display: block;
  }

  .navbar-container {
    display: block;
    position: relative;
    height: 64px;
    
  }

  .navbar-container input[type="checkbox"] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .navbar-container .hamburger-lines {
    display: block;
    height: 28px;
    width: 35px;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #344963;
  }

  .navbar-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar-container .hamburger-lines .line2 {
    transition: transform 0.1s ease-in-out;
  }

  .navbar-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 90px;
    background: #F7F7F7;
    height: 100vh;
    max-width: 300px;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 40px;
    transition: transform 0.5s ease-in-out;
  }

  .navbar .menu-items li {
    margin-bottom: 1.3rem;
    font-size: 1rem;
    font-weight: 500;
    padding:5px;
  }

  button {
    width: fit-content;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  .logo {
    position: absolute;
    top: 12px;
    right: 2px;
    font-size: 1.7rem;
  }

  .navbar-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }
}

@media (max-width: 500px) {
  .navbar-container input[type="checkbox"]:checked ~ .logo {
    display: none;
  }
}


`