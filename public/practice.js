
/* ==========================================
   VIDYORA — PRACTICE & HOMEWORK ENGINE
   ========================================== */

window.VIDYORA_PRACTICE = {

  database: {},
  submissions: {},

  createKey(board, classNumber, subject, chapterId) {
    return `${board}_${classNumber}_${subject}_${chapterId}`;
  },

  createExercise({
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

    const exercise = {
      id: `exercise-${Date.now()}`,
      title,
      language,
      difficulty,
      questions: [],
      createdAt: new Date().toISOString()
    };

    this.database[key].push(exercise);

    return exercise;
  },

  addQuestion(exercise, question) {
    if (!exercise || !question.text) return false;

    exercise.questions.push({
      id: `practice-${exercise.questions.length + 1}`,
      type: question.type || "descriptive",
      text: question.text,
      hindi: question.hindi || "",
      marks: Number(question.marks) || 1,
      options: question.options || [],
      correctAnswer: question.correctAnswer ?? null,
      hints: question.hints || [],
      solution: question.solution || "",
      explanation: question.explanation || ""
    });

    return true;
  },

  getExercises(board, classNumber, subject, chapterId) {
    const key = this.createKey(
      board,
      classNumber,
      subject,
      chapterId
    );

    return this.database[key] || [];
  },

  startPractice(exercise, studentId) {
    if (!exercise || !studentId) return null;

    const submissionId = `submission-${Date.now()}`;

    this.submissions[submissionId] = {
      studentId,
      exerciseId: exercise.id,
      answers: {},
      status: "in-progress",
      startedAt: new Date().toISOString()
    };

    return submissionId;
  },

  saveAnswer(submissionId, questionId, answer) {
    const submission = this.submissions[submissionId];

    if (!submission || submission.status !== "in-progress") {
      return false;
    }

    submission.answers[questionId] = answer;

    return true;
  },

  submitPractice(submissionId) {
    const submission = this.submissions[submissionId];

    if (!submission || submission.status !== "in-progress") {
      return false;
    }

    submission.status = "submitted";
    submission.submittedAt = new Date().toISOString();

    return true;
  },

  evaluateObjective(exercise, submissionId) {
    const submission = this.submissions[submissionId];

    if (
      !exercise ||
      !submission ||
      submission.exerciseId !== exercise.id ||
      submission.status !== "submitted"
    ) {
      return null;
    }

    let score = 0;
    let total = 0;
    let pendingManual = 0;

    const review = exercise.questions.map(question => {
      total += question.marks;

      if (
        question.type !== "mcq" &&
        question.type !== "objective"
      ) {
        pendingManual += question.marks;

        return {
          questionId: question.id,
          status: "manual-review",
          marks: null
        };
      }

      const answer = submission.answers[question.id];

      const isCorrect =
        String(answer ?? "").trim().toLowerCase() ===
        String(question.correctAnswer ?? "").trim().toLowerCase();

      if (isCorrect) score += question.marks;

      return {
        questionId: question.id,
        status: isCorrect ? "correct" : "incorrect",
        marks: isCorrect ? question.marks : 0,
        explanation: question.explanation
      };
    });

    return {
      score,
      total,
      pendingManual,
      percentage: total
        ? Math.round((score / total) * 100)
        : 0,
      review
    };
  },

  getStatistics() {
    const exercises = Object.values(this.database).flat();

    return {
      totalExercises: exercises.length,
      totalQuestions: exercises.reduce(
        (sum, exercise) => sum + exercise.questions.length,
        0
      ),
      totalSubmissions: Object.keys(this.submissions).length
    };
  }

};

console.log("VIDYORA Practice Engine Loaded");
