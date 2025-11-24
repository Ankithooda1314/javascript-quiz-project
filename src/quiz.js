class Quiz {

    constructor (questions, timeLimit, timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }
    
    moveToNextQuestion() {
        this.currentQuestionIndex++
    }

    shuffleQuestions() {
        // for(let i=this.questions.length -1; i > 0; i--) {

        //     const quiz = Math.floor(Math.random()*(i+1))
        //     [this.questions[i], this.questions[quiz]] = [this.questions[quiz], this.questions[i]]
        // }
        this.questions.sort(() => Math.random() - 0.5);
        return this.questions;
    }

    checkAnswer(answer) {
        const currentQuestion = this.getQuestion();
        if(answer === currentQuestion.answer) {
            this.correctAnswers++
        }
    }

    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length
    }
}