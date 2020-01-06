import React from "react";
import style from "./login.modules.scss";
import Decoration from "./../../../images/Decoration.png";
import {Link} from "react-router-dom";
import useForm from "react-hook-form"

function Login() {
    return (
        <section className={style.loginSection}>
            <div className={style.wrapper}>
                <div>
                    <p className={style.header}>Zaloguj się</p>
                </div>
                <div className={style.decoration}>
                    <img src={Decoration} alt=""/>
                </div>
                <div className={style.formWrapper}>
                    <form>
                        <label>
                            <p>Email</p>
                            <input type="email"/>
                        </label>
                        <label>
                            <p className={style.password}>Hasło</p>
                            <input type="password"/>
                        </label>
                    </form>
                </div>
                <div className={style.buttons}>
                    <Link to="/rejestracja">
                        Zarejestruj się
                    </Link>
                    <label>
                        <input type="submit" value="Zaloguj się"/>
                    </label>
                </div>
            </div>
        </section>
    )
}

export default Login;