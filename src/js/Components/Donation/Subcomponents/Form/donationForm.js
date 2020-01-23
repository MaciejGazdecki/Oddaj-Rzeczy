import React,{useState} from 'react';
import style from './donationForm.modules.scss';
import Bear from '../../../../../images/Background-Form.jpg';
import {useForm,FormContext} from "react-hook-form";
import {carousel} from "./Carousel/carousel";
import StepOne from "./stepOne/stepOne";
import StepTwo from "./StepTwo/stepTwo";

function DonationForm() {
    const methods = useForm();
    const [page, setPage] = useState(1);
    const perPage = 1;


    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    };

    // eslint-disable-next-line react/jsx-key
    const formComponents = [<StepOne/>, <StepTwo/>];

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
            <section className={style.formSection}>
                <div className={style.info}>
                    {carousel.slice(page*perPage - perPage, page*perPage).map(el => el)}
                </div>
                <div style={{backgroundImage: `url(${Bear})`}} className={style.formBackground}>
                    <div>
                        <p>Krok:</p>
                        <p>{page}/4</p>
                    </div>
                    <FormContext {...methods}>
                        <form id="mainForm" onSubmit={methods.handleSubmit(onSubmit)}>
                            {formComponents.slice(page*perPage - perPage, page*perPage).map(el => el)}
                        </form>
                        <input type="submit" value="submit" form="mainForm"/>
                    </FormContext>
                    <button onClick={onClickPreviousHandler}>Wstecz</button>
                    <button onClick={onClickNextHandler}>Dalej</button>
                </div>
            </section>
    )
}

export default DonationForm;