import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
function Navbar() {
  return (
    <header className={classes.header}>
      <div>iwan2meetup</div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">Add New Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">My Favorites</Link>
        </li>
      </ul>
    </header>
  );
}
export default Navbar;
