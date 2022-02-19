import React from "react"
import { useState  } from "react"
import "../styles/Assessment.css"
import { qBank, scoreMatch } from "../questions/questionBank";
import ResponsiveAppBar from '../components/Basic/js/ResponsiveAppBar';

function Assessment() {

    const questions = qBank
    const colorSeverity = ["green", "yellow", "orange", "orangered", "red"]
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0)


	const handleAnswerOptionClick = (severity) => {
		setScore(score + severity)

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    return (
        <div>
            <ResponsiveAppBar/>
            <div className="page">
                <div className='assessment'>
                    {showScore ? (
                        <>
                            <div className='score-section'>
                                Your result: {score}
                            </div>
                            <div className="interpretation" style={{color: colorSeverity[ score > 24 ? 4 : Math.floor(score / 5) ]}}>
                                {scoreMatch[ score > 24 ? 4 : Math.floor(score / 5)].Interpretation}
                            </div>

                            <div className="recommendation">
                                <span>Recommendation: </span>
                                {scoreMatch[ score > 24 ? 4 : Math.floor(score / 5) ].Suggestion}
                            </div>
                        </>

                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>
                                </div>
                                <div>Over the past 2 weeks, how often have you been bothered by any of the following problems: </div>
                                <div className='question-text'>
                                    {questions[currentQuestion].question}
                                </div>
                            </div>
                            <div className='answer-section'>
                                {questions[currentQuestion].answers.map((answerOption) => (
                                    <button onClick={() => handleAnswerOptionClick(questions[currentQuestion].answers.indexOf(answerOption))}>{answerOption}</button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
                {showScore ?  (
                    <div className="mental-help">
                        <div className="prompt">
                            <h2>Need mental health services? </h2>
                        </div>
                        <div className="link">
                            <a href="https://www.camh.ca/en/health-info/guides-and-publications/looking-for-mental-health-services"> Visit here </a>
                        </div>
                    </div>
                ):
                    <></>
                }

            </div>
        </div>
    )


}

export default Assessment