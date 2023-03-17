import React , {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navmenu.module.css";
import { icons, navDown, navUser, navWork } from "./Navmenu.helpers";
import SignOut from "../UserDropDown/SignOut";

export default function Navmenu() {
  const [isDown, setIsDown] = useState(false);
  const handleClick = () => {
    setIsDown(prevState => !prevState)
  }
  return (
    <div className={styles.navMenu}>
      <ul className={styles.navLists}>
        {icons.map((icon) => {
          return (
            <li className={styles.navList}>
              <NavLink
                exact
                to={icon.to}
                className={styles.navListLink}
                activeClassName={styles.active}
              >
                <img src={icon.value} alt="Nav-Home" />
                <span>{icon.name}</span>
              </NavLink>
            </li>
          );
        })}
        <li className={styles.user} onClick = {handleClick}>
          <NavLink exact to="" className={styles.userLink}>
            <img src={navUser} alt="userlogo" />
            <div className={styles.desc}>
              <span>Me</span>
              <img src={navDown} alt="down arrow" />
            </div>
          </NavLink>
          {isDown && <SignOut/>}
        </li>
        <li className={styles.work}>
          <NavLink exact to="" className={styles.workLink}>
            <img src={navWork} alt="work logo" />
            <div className={styles.desc}>
              <span>Work</span>
              <img src={navDown} alt="down arrow" />
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
