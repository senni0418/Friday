const answers = ["Not At All", "Several Days", "More than half the days", "Nearly Everyday"]
const qBank = [
    {
      question:
        "Little interest or pleasure in doing things?",
      answers: answers,
      questionId: "01"
    },
    {
      question:
        "Feeling down, depressed or hopless?",
      answers: answers,
      questionId: "02"
    },
    {
      question:
        "Trouble falling asleep, staying asleep, or sleeping too much?",
      answers: answers,
      questionId: "03"
    },
    {
      question:
        "Feeling tired or having little energy?",
      answers: answers,
      questionId: "04"
    },
    {
      question:
        "Poor appetite or overeating?",
        answers: answers,
      questionId: "05"
    },
    {
      question:
        "Feeling bad about yourself - or that you're a failure or have let yourself or your family down?",
        answers: answers,
      questionId: "06"
    },
    {
      question:
        "Trouble concentrating on things, such as reading the newspaper or watching television?",
        answers: answers,
      questionId: "07"
    },
    {
      question:
        "Moving or speaking so slowly that other people could have noticed. Or, the opposite - being so fidgety or restless that you have been moving around a lot more than usual?",
        answers: answers,
      questionId: "08"
    },
    {
      question:
        "Thoughts that you would be better off dead or of hurting yourself in some way?",
        answers: answers,
      questionId: "09"
    }
    
  ];

const scoreMatch = [
    {
        Interpretation: "Minimal or none",
        Suggestion: "Monitor; may not require treatment"
    },
    {
        Interpretation: "Mild",
        Suggestion: "Ongoing monitoring; self-help resources (like apps) may be relevant"
    },
    {
        Interpretation: "Moderate",
        Suggestion: "Speak with your health-care provider; self-help resources (like apps) may also be relevant"
    },
    {
        Interpretation: "Moderately Severe",
        Suggestion: "Speak with your health-care provider"
    },
    {
        Interpretation: "Severe",
        Suggestion: "Speak with your health-care provider; if you have symptoms like suicidal thoughts, you should go to your ED"
    }
  ]

  export {
      qBank, scoreMatch
  }