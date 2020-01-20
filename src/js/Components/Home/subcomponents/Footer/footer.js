import React, {useReducer,useContext, useEffect} from "react";
import style from "./footer.modules.scss";
import {Element} from "react-scroll";
import Decoration from "../../../../../images/Decoration.png";
import Background from "../../../../../images/Background-Contact-Form.jpg";
import Facebook from "../../../../../images/Facebook.png";
import Instagram from "../../../../../images/Instagram.png";
import {useForm} from 'react-hook-form';
import axios from "axios";
import {SetHomeContext} from "../../../../App/Context/setHomeContext";
import {HomeActiveContext} from "../../../../App/Context/homeActiveContext";

function Footer() {
    const {register, handleSubmit, errors} = useForm();
    const homeActive = useContext(HomeActiveContext);
    const setHome = useContext(SetHomeContext);

    const initialState = {
      name:'',
      email:'',
      message:''
    };

    useEffect(() => setHome(true));

    const reducer = (state, action) => {
        if (action.type === "CLEAR") {
            return initialState
        }
        if (action.type === "SET_VALUE") {
            return {
                ...state,
                [action.name]: action.value
            }
        }
    };

    const [state, dispatch] = useReducer(reducer,initialState);

    const onSubmit = async () => {
        event.preventDefault();
        await axios.post("https://fer-api.coderslab.pl/v1/portfolio/contact", state)
            .then(res => {console.log(res); alert("wysłano wiadomość")})
            .catch(err => console.log(err));
        dispatch({type:"CLEAR"})
    };
    const onChangeHandler = (e) => {
        dispatch({type:"SET_VALUE", name: e.target.name, value: e.target.value});
    };


    return (
        <Element name="footer" className="element">
            <section className={style.footer} style={homeActive ? {backgroundImage:`url(${Background})`, top: '4054px'}
            :{backgroundImage:`url(${Background})`, top: '2025px'} }>
                <div className={style.background}>
                    <div className={style.wrapper}>
                        <div className={style.internalWrapper}>
                            <div>
                                <p>
                                    Skontaktuj się z nami
                                </p>
                                <img src={Decoration} alt=""/>
                            </div>
                            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                                <div className={style.inputs}>
                                    <label>
                                        <p>Wpisz swoje imię</p>
                                        <input
                                            type="text"
                                            placeholder="Podaj imię"
                                            name="name"
                                            value={state.name}
                                            onChange={onChangeHandler}
                                            ref={register({required:true, pattern: /^\S+$/ })}
                                        />
                                        {errors.name && errors.name.type === 'required' && (
                                            <p className={style.error}>To pole jest wymagane</p>
                                        )}
                                        {errors.name && errors.name.type === 'pattern' && (
                                            <p className={style.error}>To pole nie może zawierać spacji</p>
                                        )}
                                    </label>
                                    <label>
                                        <p>Wpisz swój email</p>
                                        <input
                                            type="email"
                                            placeholder="podaj email"
                                            name="email"
                                            value={state.email}
                                            onChange={onChangeHandler}
                                            ref={register({required:true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/})}
                                        />
                                        {errors.email && errors.email.type === 'required' && (
                                            <p className={style.error}>To pole jest wymagane</p>
                                        )}
                                        {errors.email && errors.email.type === 'pattern' && (
                                            <p className={style.error}>Niepoprawny format email</p>
                                        )}
                                    </label>
                                </div>
                                <div className={style.textarea}>
                                    <p>Wpisz swoją wiadomość</p>
                                    <textarea
                                        id=""
                                        cols="30"
                                        rows="10"
                                        placeholder="Tutaj wpisz swoją wiadomość"
                                        name="message"
                                        value={state.message}
                                        onChange={onChangeHandler}
                                        ref={register({required:true, minLength: 120})}
                                    >
                                    </textarea>
                                    {errors.message && errors.message.type === 'required' && (
                                        <p className={style.error}>To pole jest wymagane</p>
                                    )}
                                    {errors.message && errors.message.type === 'minLength' && (
                                        <p className={style.error}>Minimalna długość wiadomości to 120 znaków</p>
                                    )}
                                </div>
                                <div className={style.submit}>
                                    <input
                                        type="submit"
                                        value="Wyślij"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={style.icons}>
                        <img src={Facebook} alt=""/>
                        <img src={Instagram} alt=""/>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Footer;