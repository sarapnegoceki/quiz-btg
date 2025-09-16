import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-screen',
  imports: [],
  templateUrl: './quiz-screen.html',
  styleUrl: './quiz-screen.scss'
})
export class QuizScreen implements OnInit {
  quizQuestions = [
    {
      question: 'Qual é o resultado da soma de 2 + 2?',
      options: [2, 3, 4, 5],
      answer: 4,
      selectOption: 0
    },
    {
      question: 'Qual é o resultado da soma de 1 + 2?',
      options: [2, 3, 4, 5],
      answer: 3,
      selectOption: 0
    }
  ];

  questionAtual = 0;
  finalScore = 0;

  putSelectOption(question: any, option: any){
    this.quizQuestions[question].selectOption = option;
  }

  ngOnInit() {
    this.restartQuiz();
  }

  setQuestion(index: number) {
    document.getElementById('question' + index)?.classList.remove('hidden');
  }

  nextQuestion(){
    this.questionAtual++;
    if(this.questionAtual === (this.quizQuestions.length)){
      this.showScore();
    }
  }

  previousQuestion(questionId: number){
    this.questionAtual = questionId - 1;
  }

  showScore(){
    this.quizQuestions.forEach((q) => {
      q.selectOption === q.answer ? this.finalScore = this.finalScore + 1 : null;
    });
  }

  restartQuiz() {
    this.questionAtual = this.finalScore = 0;

    this.quizQuestions.forEach((question) => {
      question.selectOption = 0;
    });

    this.setQuestion(this.questionAtual);
  }
}
