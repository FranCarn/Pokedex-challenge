import React, { useEffect } from "react";
import { useLogin } from "../../auth/hooks/useLogin";
import { LoginLayout } from "../../auth/layout";
import styles from "./Login.module.css";
import { Loader } from "../../components";

export const Login = () => {
  const {
    onInputChange,
    onSubmit,
    email,
    password,
    loginSuccesfull,
    loading,
    wrongLogin,
  } = useLogin({
    email: "",
    password: "",
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      loginSuccesfull();
      return;
    }
  }, []);

  return (
    <LoginLayout>
      <div className={styles.form__container}>
        {loading && <Loader speed={1} />}
        <form onSubmit={(e) => onSubmit(e)}>
          <h1>ꞏ POKEAPP ꞏ</h1>
          <div className={styles.input__container}>
            <label htmlFor="email">
              <i className="fa-solid fa-at" />
            </label>
            <input
              onChange={(e) => onInputChange(e)}
              value={email}
              name={"email"}
              type="email"
              id="email"
              placeholder="example@gmail.com"
              required
              maxLength={50}
              minLength={5}
            />
          </div>
          <div className={styles.input__container}>
            <label htmlFor="password">
              <i className="fa-solid fa-key" />
            </label>
            <input
              onChange={(e) => onInputChange(e)}
              value={password}
              name={"password"}
              type="password"
              id="password"
              placeholder="*******"
              required
              maxLength={30}
              minLength={5}
            />
          </div>
          {wrongLogin && <div>Wrong email or password</div>}
          <button
            disabled={loading}
            className={styles.login__button}
            type="submit"
          >
            LOGIN
          </button>
        </form>
      </div>
    </LoginLayout>
  );
};
