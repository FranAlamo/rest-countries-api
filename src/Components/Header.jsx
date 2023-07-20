import React from "react";
import SunIcon from "../assets/sun.svg";
import MoonIcon from "../assets/moon.svg";

const Header = () => {
  const changeTheme = () => {
    const header = document.querySelector(".header");
    const details = document.querySelectorAll(".details");
    const borders = document.querySelectorAll(".border");

    details.forEach((detail) => {
      detail.classList.toggle("light-theme");
    });
    header.classList.toggle("light-theme");
    borders.forEach((border) => {
      border.classList.toggle("light-theme");
    });
    document.body.classList.toggle("light-theme");
  };

  const isLightTheme = document.body.classList.contains("light-theme");

  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>

        <div>
          <button className="btn-moon" onClick={() => changeTheme()}>
            {isLightTheme ? (
              <img src={SunIcon} alt="Sun Icon" width="20" height="20" />
            ) : (
              <img src={MoonIcon} alt="Moon Icon" width="20" height="20" />
            )}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
