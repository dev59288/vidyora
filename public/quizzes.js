
/* ==========================================
   VIDYORA — QUIZ & MCQ ENGINE
   ========================================== */

window.VIDYORA_QUIZZES = {

  database: {},

  sessions: {},

  createKey(board, classNumber, subject, chapterId) {
    return `${board}_${classNumber}_${subject}_${chapterId}`;
  },

  registerQuiz({
    board,
    classNumber,
    subject,
    chapterId,
    title,
    language = "hinglish",
    difficulty = "mixed"
  }) {
    const key = this.createKey(
      board,
      classNumber,
      subject,
      chapterId
    );

    if (!this.database[key]) {
      this.database[key] = [];
    }

    const quiz = {
      id: `quiz-${this.database[key].length + 1}`,
      title,
      language,
      difficulty,
      questions: [],
      createdAt: new Date().toISOString()
    };

    this.database[key].push(quiz);

    return quiz;
  },

  addQuestion(quiz, question) {
    if (
      !quiz ||
      !question.text ||
      !Array.isArray(question.options) ||
      question.options.length < 2 ||
      !Array.isArray(question.correctAnswers) ||
      question.correctAnswers.length === 0
    ) {
      return false;
    }

    const validAnswers = question.correctAnswers.every(
      answer => Number.isInteger(answer) &&
        answer >= 0 &&
        answer < question.options.length
    );

    if (!validAnswers) return false;

    quiz.questions.push({
      id: `question-${quiz.questions.length + 1}`,
      text: question.text,
      hindi: question.hindi || "",
      options: question.options,
      correctAnswers: [...new Set(question.correctAnswers)],
      explanation: question.explanation || "",
      difficulty: question.difficulty || "medium",
      marks: Number(question.marks) > 0 ? Number(question.marks) : 1
    });

    return true;
  },

  getQuizzes(board, classNumber, subject, chapterId) {
    const key = this.createKey(
      board,
      classNumber,
      subject,
      chapterId
    );

    return this.database[key] || [];
  },

  startQuiz(quiz) {
    if (!quiz || !quiz.questions.length) return null;

    const sessionId = `session-${Date.now()}`;

    this.sessions[sessionId] = {
      quizId: quiz.id,
      currentQuestion: 0,
      answers: {},
      submitted: false
    };

    return sessionId;
  },

  submitAnswer(sessionId, questionId, selectedAnswers) {
    const session = this.sessions[sessionId];

    if (!session || session.submitted) return false;

    if (!Array.isArray(selectedAnswers)) return false;

    session.answers[questionId] = [...new Set(selectedAnswers)];

    return true;
  },

  calculateResult(quiz, sessionId) {
    const session = this.sessions[sessionId];

    if (!quiz || !session || session.submitted) {
      return null;
    }

    let score = 0;
    let totalMarks = 0;
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    const review = quiz.questions.map(question => {
      const selected = session.answers[question.id] || [];

      const expected = [...question.correctAnswers].sort(
        (a, b) => a - b
      );

      const actual = [...selected].sort(
        (a, b) => a - b
      );

      const isCorrect =
        expected.length === actual.length &&
        expected.every((value, index) => value === actual[index]);

      totalMarks += question.marks;

      if (selected.length === 0) {
        unanswered++;
      } else if (isCorrect) {
        correct++;
        score += question.marks;
      } else {
        incorrect++;
      }

      return {
        questionId: question.id,
        selectedAnswers: selected,
        correctAnswers: expected,
        isCorrect,
        explanation: question.explanation
      };
    });

    session.submitted = true;

    return {
      score,
      totalMarks,
      correct,
      incorrect,
      unanswered,
      percentage: totalMarks
        ? Math.round((score / totalMarks) * 100)
        : 0,
      review
    };
  },

  getStatistics() {
    const quizzes = Object.values(this.database).flat();

    return {
      totalQuizzes: quizzes.length,
      totalQuestions: quizzes.reduce(
        (sum, quiz) => sum + quiz.questions.length,
        0
      )
    };
  }

};

console.log("VIDYORA Quiz Engine Loaded");
