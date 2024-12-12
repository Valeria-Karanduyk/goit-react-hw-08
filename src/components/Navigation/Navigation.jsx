import { useAuth } from "../../useAuth";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.link} to="/contacts">
          Contacts
        </NavLink>
      )}{" "}
    </nav>
  );
};

export default Navigation;
