import React, {useState} from "react";
import style from "./register.modules.scss";
import Decoration from "./../../../images/Decoration.png";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form"

function Register() {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        alert(`Zarejestrowano poprawnie ${JSON.stringify(data)}`)
    };

    const [password, setPassword] = useState('');

    return (
        <section className={style.registerSection}>
            <div className={style.wrapper}>
                <div>
                    <p className={style.header}>Zarejestruj się</p>
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
                                   onChange={event => setPassword(event.target.value)}
                                   ref={register({required:true, minLength: 6})}
                            />
                            {errors.password && errors.password.type === 'required' && (
                                <p className={style.error}>To pole jest wymagane</p>
                            )}
                            {errors.password && errors.password.type === 'minLength' && (
                                <p className={style.error}>Minimalna długość wiadomości to 6 znaków</p>
                            )}
                        </label>
                        <label>
                            <p className={style.password}>Hasło</p>
                            <input type="password"
                                   name="passwordRepeat"
                                   ref={register({required:true, minLength: 6, validate: value => value === password})}
                            />
                            {errors.passwordRepeat && errors.passwordRepeat.type === 'required' && (
                                <p className={style.error}>To pole jest wymagane</p>
                            )}
                            {errors.passwordRepeat && errors.passwordRepeat.type === 'minLength' && (
                                <p className={style.error}>Minimalna długość to 6 znaków</p>
                            )}
                            {errors.passwordRepeat && errors.passwordRepeat.type === 'validate' && (
                                <p className={style.error}>Wpisane hasło musi być takie same</p>
                            )}
                        </label>
                    </form>
                </div>
                <div className={style.buttons}>
                    <Link to="/logowanie">
                        Zaloguj się
                    </Link>
                    <label>
                        <input type="submit" value="Załóż konto" form="login"/>
                    </label>
                </div>
            </div>
        </section>
    )
}

export default Register;