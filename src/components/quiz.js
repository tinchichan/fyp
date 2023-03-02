import React, { Component }  from 'react';
import { useState } from 'react';
import {Container, Box, Grid, Divider} from '@mui/material'


export default function Quiz (props){
    const [currentIndex, setCurrectIndex] = useState(0)
    const [displayScore, setdisplayScore] = useState(false)
    const [score, setScore] = useState(0)
    const [incorrect, setIncorrect] = useState([])

    const checkAnswer = (correct) => {
        if (correct) {
            setScore(score + 1);
        } else {
            setIncorrect([...incorrect, props.questions[currentIndex].question])
        }

        const nextQuestionIndex = currentIndex + 1;
        if (nextQuestionIndex < props.questions.length) {
            setCurrectIndex(nextQuestionIndex)
        } else {
            setdisplayScore(true)
        }
    };
    
    return (
        <div>
            {displayScore ? (
                <>
                    <div>
                        You got {score} point
                        <div>
                        Unfortunately, you got these questions incorrect:
                        </div>
                    </div>

                    <ul>
                        {
                            incorrect.map((val) => {
                                return (<li>{val}</li>)
                            })
                        }
                    </ul>
                </>   
                    
            ) : (
                <>
                <span>Question {currentIndex + 1}</span> / {props.questions.length}
                <div>{props.questions[currentIndex].question}</div>
                <Divider component="div" role="presentation"/>
                <div>
                    {props.questions[currentIndex].options.map((selectedAnswer) => (
                        <li>
                            <button onClick={() => checkAnswer(selectedAnswer.correct)} > {selectedAnswer.answer}</button>
                        </li>
                        ))
                    }
                </div>
                </>
            )}
        </div> 
    )
}