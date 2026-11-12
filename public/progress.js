
/* ==========================================
   VIDYORA — STUDENT PROGRESS ENGINE
   ========================================== */

window.VIDYORA_PROGRESS = {

  students: {},

  createStudent(studentId) {
    if (!studentId) return null;

    if (!this.students[studentId]) {
      this.students[studentId] = {
        studentId,
        completedChapters: [],
        completedLessons: [],
        quizAttempts: [],
        testAttempts: [],
        subjectProgress: {},
        studyHistory: [],
        totalStudyMinutes: 0,
        lastActive: null
      };
    }

    return this.students[studentId];
  },

  completeChapter(studentId, chapterId) {
    const student = this.createStudent(studentId);
    if (!student || !chapterId) return false;

    if (!student.completedChapters.includes(chapterId)) {
      student.completedChapters.push(chapterId);
    }

    this.recordActivity(studentId, "chapter-completed", chapterId);
    return true;
  },

  completeLesson(studentId, lessonId) {
    const student = this.createStudent(studentId);
    if (!student || !lessonId) return false;

    if (!student.completedLessons.includes(lessonId)) {
      student.completedLessons.push(lessonId);
    }

    this.recordActivity(studentId, "lesson-completed", lessonId);
    return true;
  },

  recordQuiz(studentId, quizId, score, totalMarks) {
    const student = this.createStudent(studentId);
    if (!student || !quizId || totalMarks <= 0) return false;

    student.quizAttempts.push({
      quizId,
      score,
      totalMarks,
      percentage: Math.round((score / totalMarks) * 100),
      date: new Date().toISOString()
    });

    return true;
  },

  recordTest(studentId, testId, score, totalMarks) {
    const student = this.createStudent(studentId);
    if (!student || !testId || totalMarks <= 0) return false;

    student.testAttempts.push({
      testId,
      score,
      totalMarks,
      percentage: Math.round((score / totalMarks) * 100),
      date: new Date().toISOString()
    });

    return true;
  },

  recordStudyTime(studentId, minutes) {
    const student = this.createStudent(studentId);

    if (!student || !Number.isFinite(minutes) || minutes <= 0) {
      return false;
    }

    student.totalStudyMinutes += minutes;

    student.studyHistory.push({
      minutes,
      date: new Date().toISOString()
    });

    return true;
  },

  recordActivity(studentId, activity, reference) {
    const student = this.createStudent(studentId);
    if (!student) return false;

    student.studyHistory.push({
      activity,
      reference,
      date: new Date().toISOString()
    });

    student.lastActive = new Date().toISOString();
    return true;
  },

  getDashboard(studentId) {
    const student = this.students[studentId];
    if (!student) return null;

    const attempts = [
      ...student.quizAttempts,
      ...student.testAttempts
    ];

    const average = attempts.length
      ? attempts.reduce((sum, item) => sum + item.percentage, 0)
        / attempts.length
      : 0;

    return {
      completedChapters: student.completedChapters.length,
      completedLessons: student.completedLessons.length,
      quizAttempts: student.quizAttempts.length,
      testAttempts: student.testAttempts.length,
      averagePercentage: Math.round(average),
      totalStudyMinutes: student.totalStudyMinutes,
      lastActive: student.lastActive
    };
  },

  getStudent(studentId) {
    return this.students[studentId] || null;
  }

};

console.log("VIDYORA Progress Engine Loaded");
