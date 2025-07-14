import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schema/login";

import React, { useContext } from "react";
import styles from "../modules/LoginModal.module.css";
import { LoginContext } from "./Header";
import Close from "../icons/Close";

function LoginModal() {
  const { state, dispatch } = useContext(LoginContext);

  if (!state.loginModal?.show) return null;

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div
      className={styles.overlay}
      onClick={() => {
        dispatch({ type: "CloseLoginModal" });
      }}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            onClick={() => {
              dispatch({ type: "CloseLoginModal" });
            }}
          >
            <Close />
          </div>
          <h2>ورود به تورینو</h2>
          <div>
            <p>شماره موبایل خود را وارد کنید</p>
            <input placeholder="0919***8439" {...register("number")} />
            {errors.number && <span>{errors.number?.message}</span>}
          </div>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
