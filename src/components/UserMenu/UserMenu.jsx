import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={s.box}>
      <p className={s.description}>Welcome to Phonebook {user.name} </p>{" "}
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>{" "}
    </div>
  );
};

export default UserMenu;
