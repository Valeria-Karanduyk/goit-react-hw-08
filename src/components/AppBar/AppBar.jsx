import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { useAuth } from "../../useAuth";
import s from "./AppBar.module.css";

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}{" "}
    </header>
  );
};

export default AppBar;
