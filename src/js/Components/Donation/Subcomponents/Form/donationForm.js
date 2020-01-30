import React, {useState} from 'react';
import style from './donationForm.modules.scss';
import Bear from '../../../../../images/Background-Form.jpg';
import {useForm,FormContext} from "react-hook-form";
import {StateContext} from "./FormStateContext";
import {carousel} from "./Carousel/carousel";
import StepOne from "./stepOne/stepOne";
import StepTwo from "./StepTwo/stepTwo";
import StepThree from "./stepThree/stepThree";
import StepFour from "./stepFour/stepFour";
import Resume from "./Resume/resume";
import Confirmation from "./Confirmation/confirmation";
import axios from "axios";

function DonationForm() {

    const initialState = {
        things:'ubrania, które nadają się do ponownego użycia',
        quantity:'',
        localization:'',
        children:false,
        mothers:false,
        homeless:false,
        disabled:false,
        olderPeople:false,
        organizationName:'',
        street:'',
        city:'',
        zipCode:'',
        phoneNumber:'',
        pickUpDate:'',
        pickUpHour:'',
        remarks:'',
    };
    const [state,setState] = useState(initialState);
    const [page, setPage] = useState(1);
    const methods = useForm();
    const perPage = 1;

    const onSubmit = async () => {
        await axios.post('https://oddaj-rzeczy-27d1f.firebaseio.com/records.json', state)
            .then(res => {console.log(res); alert('wysłano formularz')})
            .catch(err => console.log(err));
        setPage(prevState => prevState +1)
    };

    const onChangeHandler = (evt) => {
        const value =
            evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };


    // eslint-disable-next-line react/jsx-key
    const formComponents = [<StepOne/>, <StepTwo/>, <StepThree/>, <StepFour/>, <Resume/>,<Confirmation/>];

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
                    <div className={style.formWrapper}>
                        <div className={style.pageCounter}>
                            <p>{page <= 4 ? `Krok: ${page}/4`: null}</p>
                        </div>
                        <FormContext {...methods}>
                            <form id="mainForm"
                                  onSubmit={methods.handleSubmit(onSubmit)}
                                  onChange={onChangeHandler}
                            >
                                {formComponents.slice(page*perPage - perPage, page*perPage).map((el,ix) =>
                                    <div key={ix}>{el}</div>)}
                            </form>
                        </FormContext>
                        <div className={style.buttons}>
                            {page <=5 && page >=2 ? <button onClick={onClickPreviousHandler}>Wstecz</button> : null}
                            {page <=4 ? <button onClick={onClickNextHandler}>Dalej</button>: null}
                        </div>
                        </div>
                </div>
            </section>
        </StateContext.Provider>
    )
}

export default DonationForm;