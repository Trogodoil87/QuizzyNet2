import { useEffect, useState } from "react";
import * as quizzService from "../../services/quizzServices";

import './Create.css'

const Create = () => {
    const [err, setErr] = useState({});
    const [quizz, setQuizz] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        quizzService.create(quizz)
            .then(res => res.json())
            .then(newQuizz => {
                if (newQuizz.code === 403) {
                    throw new Error('Invalid acess');
                }
            })
            .catch(err => {
                // console.log(err);
            })

    }






    const onBlurHandler = (e) => {
        const value = e.target.value;
        if (value === "") {
            setErr((oldState) => ({
                ...oldState,
                [e.target.id]: true
            }));
        } else {
            setErr((oldState) => ({
                ...oldState,
                [e.target.id]: false

            }));
        }
        setQuizz((oldState) => ({
            ...oldState,
            [e.target.id]: e.target.value
        }));
        // console.log(e.target.parentElement.childNodes[1].classList.add("error"));
    }
    return (
        <section className="create" >
            <h2>Create Quizz</h2>
            <form onSubmit={onSubmitHandler}>
                <div className="input-box">
                    <div className="input-field field">
                        <input onBlur={onBlurHandler} type="text" placeholder="Title" id="title" className="item" value={quizz?.title} />
                        {err.title === true ? <div className="error-txt">Title can't be blank</div> : ""}

                    </div>
                    <div className="input-field field">
                        <input onBlur={onBlurHandler} type="text" placeholder="Question" id="question" className="item" value={quizz?.question} />
                        <div className="error-txt error">Question can't be blank</div>
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-field field">
                        <input onBlur={onBlurHandler} type="text" placeholder="Answer A" id="answerA" className="item" value={quizz?.answerA} />
                        <div className="error-txt">Answer A can't be blank</div>
                    </div>
                    <div className="input-field field">
                        <input onBlur={onBlurHandler} type="text" placeholder="Answer B" id="answerB" className="item" value={quizz?.answerB} />
                        <div className="error-txt">Answer B can't be blank</div>
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-field field">
                        <input onBlur={onBlurHandler} type="text" placeholder="Answer C" id="answerC" className="item" value={quizz?.answerC} />
                        <div className="error-txt">Answer C can't be blank</div>
                    </div>
                    <div className="input-field field">
                        <input onBlur={onBlurHandler} type="text" placeholder="Answer D" id="answerD" className="item" value={quizz?.answerD} />
                        <div className="error-txt">Answer D can't be blank</div>
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-field field">
                        <input onBlur={onBlurHandler} type="text" placeholder="Correct Answer" id="answer" className="item" value={quizz?.correctAnswer} />
                        <div className="error-txt">Correct Answer can't be blank</div>
                    </div>
                </div>
                <button>Create</button>
            </form>
        </section >
    );
}

export default Create;