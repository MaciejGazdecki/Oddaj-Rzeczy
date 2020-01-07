import React from "react";
import style from "./login.modules.scss";
import Decoration from "./../../../images/Decoration.png";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form"

function Login() {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        alert(`Zalogowano poprawnie ${JSON.stringify(data)}`)
    };
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
                    <form onSubmit={handleSubmit(onSubmit)} id="login">
                        <label>
                            <p>Email</p>
                            <input type="text"
                                   name="email"
                                   ref={register({required:true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/})}
                            />
                            {errors.email && errors.email.type === 'required' && (
                                <p className={style.error}>To pole jest wymagane</p>
                            )}
                            {errors.email && errors.email.type === 'pattern' && (
                                <p className={style.error}>Niepoprawny format email</p>
                            )}
                        </label>
                        <label>
                            <p className={style.password}>Hasło</p>
                            <input type="password"
                                   name="password"
                                   ref={register({required:true, minLength: 6})}
                            />
                            {errors.password && errors.password.type === 'required' && (
                                <p className={style.error}>To pole jest wymagane</p>
                            )}
                            {errors.password && errors.password.type === 'minLength' && (
                                <p className={style.error}>Minimalna długość wiadomości to 6 znaków</p>
                            )}
                        </label>
                    </form>
                </div>
                <div className={style.buttons}>
                    <Link to="/rejestracja">
                        Zarejestruj się
                    </Link>
                    <label>
                        <input type="submit" value="Zaloguj się" form="login"/>
                    </label>
                </div>
            </div>
        </section>
    )
}

export default Login;