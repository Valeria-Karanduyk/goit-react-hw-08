import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });

    form.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={s.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={s.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button className={s.btn} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
