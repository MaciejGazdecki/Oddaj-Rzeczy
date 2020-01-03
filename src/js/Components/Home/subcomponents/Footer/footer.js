import React, {useState} from "react";
import style from "./footer.modules.scss";
import {Element} from "react-scroll";
import Decoration from "../../../../../images/Decoration.png";
import Background from "../../../../../images/Background-Contact-Form.jpg";
import Facebook from "../../../../../images/Facebook.png";
import Instagram from "../../../../../images/Instagram.png";
import {useForm} from 'react-hook-form';
import axios from "axios";

function Footer() {
    const {register, handleSubmit, errors} = useForm();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] =useState('');

    const onSubmit = async (data) => {
        event.preventDefault();
        await axios.post("https://fer-api.coderslab.pl/v1/portfolio/contact", {...data})
            .then(res => {console.log(res); alert("wysłano wiadomość")})
            .catch(err => console.log(err));
        setName('');
        setEmail('');
        setMessage('')
    };


    return (
        <Element>
            <section className={style.footer} style={{backgroundImage:`url(${Background})`}}>
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
                                            value={name}
                                            onChange={e => setName(e.target.value)}
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
                                            type="text"
                                            placeholder="podaj email"
                                            name="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            ref={register({required:true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/})}
                                        />
                                        {errors.email && errors.email.type === 'required' && (
                                            <p className={style.error}>To pole jest wymagane</p>
                                        )}
                                        {errors.email && errors.email.type === 'pattern' && (
                                            <p className={style.error}>NIepoprawny format email</p>
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
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
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