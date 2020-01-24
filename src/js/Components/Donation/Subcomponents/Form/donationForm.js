import React, {useReducer, useState, useContext} from 'react';
import style from './donationForm.modules.scss';
import Bear from '../../../../../images/Background-Form.jpg';
import {useForm,FormContext} from "react-hook-form";
import {StateContext} from "./FormStateContext";
import {carousel} from "./Carousel/carousel";
import StepOne from "./stepOne/stepOne";
import StepTwo from "./StepTwo/stepTwo";
import StepThree from "./stepThree/stepThree";

function DonationForm() {
    const methods = useForm();
    const [page, setPage] = useState(1);
    const perPage = 1;

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    };

    const initialState = {
        things:'ubrania, które nadają się do ponownego użycia',
        quantity:1,
        localization:'',
        purpose:'',
        organizationName:'',
        street:'',
        city:'',
        zipCode:'',
        phoneNumber:'',
        pickUpDate:'',
        pickUpHour:'',
        remarks:'',
    };

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

    const onChangeHandler = (e) => {
        dispatch({type:"SET_VALUE", name: e.target.name, value: e.target.value});
    };

    const [state, dispatch] = useReducer(reducer,initialState);

    // eslint-disable-next-line react/jsx-key
    const formComponents = [<StepOne/>, <StepTwo/>, <StepThree/>];

    const onClickNextHandler = () => {
        if (formComponents.length === page) {
            setPage(prevState => prevState);
        } else {
            setPage(prevState => prevState +1);
        }
    };

    const onClickPreviousHandler = () => {
        if(page > 1) setPage(prevState => prevState -1);
    };

    return (
        <StateContext.Provider value={state}>
            <section className={style.formSection}>
                <div className={style.info}>
                    {carousel.slice(page*perPage - perPage, page*perPage).map((el,ix) => <div key={ix}>{el}</div>)}
                </div>
                <div style={{backgroundImage: `url(${Bear})`}} className={style.formBackground}>
                    <div>
                        <p>Krok:</p>
                        <p>{page}/4</p>
                    </div>
                    <FormContext {...methods}>
                        <form id="mainForm" onSubmit={methods.handleSubmit(onSubmit)} onChange={onChangeHandler}>
                            {formComponents.slice(page*perPage - perPage, page*perPage).map((el,ix) => <div key={ix}>{el}</div>)}
                        </form>
                        <input type="submit" value="submit" form="mainForm"/>
                    </FormContext>
                    <button onClick={onClickPreviousHandler}>Wstecz</button>
                    <button onClick={onClickNextHandler}>Dalej</button>
                </div>
            </section>
        </StateContext.Provider>
    )
}

export default DonationForm;