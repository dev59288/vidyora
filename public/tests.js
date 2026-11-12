
/* ==========================================
   VIDYORA — TEST & EXAMINATION ENGINE
   ========================================== */

window.VIDYORA_TESTS = {

  database: {},
  attempts: {},

  createKey(board, classNumber, subject) {
    return `${board}_${classNumber}_${subject}`;
  },

  createTest({
    board,
    classNumber,
    subject,
    chapterId = null,
    title,
    type = "chapter",
    duration = 30,
    totalMarks = 0,
    instructions = []
  }) {
    const key = this.createKey(board, classNumber, subject);

    if (!this.database[key]) {
      this.database[key] = [];
    }

    const test = {
      id: `test-${Date.now()}-${this.database[key].length}`,
      board,
      classNumber,
      subject,
      chapterId,
      title,
      type,
      duration,
      totalMarks,
      instructions,
      questions: [],
      createdAt: new Date().toISOString()
    };

    this.database[key].push(test);

    return test;
  },

  addQuestion(test, question) {
    if (!test || !question.text) return false;

    const marks = Number(question.marks);

    if (!Number.isFinite(marks) || marks <= 0) {
      return false;
    }

    test.questions.push({
      id: `test-question-${test.questions.length + 1}`,
      text: question.text,
      type: question.type || "descriptive",
      options: question.options || [],
      correctAnswers: question.correctAnswers || [],
      expectedAnswer: question.expectedAnswer || "",
      explanation: question.explanation || "",
      marks
    });

    test.totalMarks = test.questions.reduce(
      (sum, item) => sum + item.marks,
      0
    );

    return true;
  },

  getTests(board, classNumber, subject) {
    const key = this.createKey(board, classNumber, subject);
    return this.database[key] || [];
  },

  getTest(board, classNumber, subject, testId) {
    return this.getTests(board, classNumber, subject).find(
      test => test.id === testId
    ) || null;
  },

  startAttempt(test) {
    if (!test || !test.questions.length) return null;

    const attemptId = `attempt-${Date.now()}`;

    this.attempts[attemptId] = {
      testId: test.id,
      startedAt: new Date().toISOString(),
      answers: {},
      status: "in-progress",
      submittedAt: null
    };

    return attemptId;
  },

  saveAnswer(attemptId, questionId, answer) {
    const attempt = this.attempts[attemptId];

    if (!attempt || attempt.status !== "in-progress") {
      return false;
    }

    attempt.answers[questionId] = answer;
    return true;
  },

  submitAttempt(attemptId) {
    const attempt = this.attempts[attemptId];

    if (!attempt || attempt.status !== "in-progress") {
      return false;
    }

    attempt.status = "submitted";
    attempt.submittedAt = new Date().toISOString();

    return true;
  },

  evaluateObjective(test, attemptId) {
    const attempt = this.attempts[attemptId];

    if (
      !test ||
      !attempt ||
      attempt.testId !== test.id ||
      attempt.status !== "submitted"
    ) {
      return null;
    }

    let score = 0;
    let objectiveMarks = 0;
    let unanswered = 0;
    let manualEvaluation = 0;

    const review = test.questions.map(question => {
      if (
        question.type !== "mcq" &&
        question.type !== "objective"
      ) {
        manualEvaluation += question.marks;

        return {
          questionId: question.id,
          evaluation: "pending",
          marks: null
        };
      }

      objectiveMarks += question.marks;

      const answer = attempt.answers[question.id];

      if (answer === undefined || answer === null || answer === "") {
        unanswered++;

        return {
          questionId: question.id,
          evaluation: "unanswered",
          marks: 0
        };
      }

      const expected = question.correctAnswers;
      const actual = Array.isArray(answer) ? answer : [answer];

      const isCorrect =
        expected.length === actual.length &&
        expected.every(value => actual.includes(value));

      if (isCorrect) score += question.marks;

      return {
        questionId: question.id,
        evaluation: isCorrect ? "correct" : "incorrect",
        marks: isCorrect ? question.marks : 0
      };
    });

    return {
      objectiveScore: score,
      objectiveTotal: objectiveMarks,
      pendingManualMarks: manualEvaluation,
      unanswered,
      review
    };
  },

  getStatistics(board, classNumber, subject) {
    const tests = this.getTests(board, classNumber, subject);

    return {
      totalTests: tests.length,
      totalQuestions: tests.reduce(
        (sum, test) => sum + test.questions.length,
        0
      ),
      totalMarks: tests.reduce(
        (sum, test) => sum + test.totalMarks,
        0
      )
    };
  }

};

console.log("VIDYORA Test Engine Loaded");
