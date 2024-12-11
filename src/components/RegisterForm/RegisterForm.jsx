import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={s.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={s.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={s.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button className={s.btn} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
