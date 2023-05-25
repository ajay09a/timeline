import { NavLink } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftDiv}>
        <NavLink to="/">
          <img
            alt=""
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          />
        </NavLink>
      </div>

      <div className={styles.rightNav}>
        <div className={styles.user}>
          <NavLink to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt=""
              className={styles.userDp}
            />
          </NavLink>
          <span>Ajay</span>
        </div>

        <div className={styles.navLinks}>
          <ul>
            <li>
              <NavLink to="/login">Log in</NavLink>
            </li>
            <li>
              <NavLink to="/">Log out</NavLink>
            </li>
            <li>
              <NavLink to="/">Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
