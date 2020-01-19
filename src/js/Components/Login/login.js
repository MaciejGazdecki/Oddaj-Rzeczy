import React, {useState,useEffect} from "react";
import style from "./login.modules.scss";
import Decoration from "./../../../images/Decoration.png";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import firebase from "firebase";

function Login() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    };

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                 setUser(user.email);
            } else {
                // User is signed out.
                console.log("Użytkownik wylogowany")
            }
        });
    });
    console.log(user);
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
                                   onChange={event => setEmail(event.target.value)}
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