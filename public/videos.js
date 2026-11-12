
/* ==========================================
   VIDYORA — VIDEO LEARNING ENGINE
   ========================================== */

window.VIDYORA_VIDEOS = {

  database: {},

  createKey(board, classNumber, subject, chapterId) {
    return `${board}_${classNumber}_${subject}_${chapterId}`;
  },

  registerLesson({
    board,
    classNumber,
    subject,
    chapterId,
    title,
    titleHindi = "",
    description = "",
    videoUrl,
    provider = "external",
    language = "hinglish",
    duration = 0,
    instructor = "VIDYORA"
  }) {
    if (!title || !videoUrl) return null;

    const key = this.createKey(
      board,
      classNumber,
      subject,
      chapterId
    );

    if (!this.database[key]) {
      this.database[key] = [];
    }

    const lesson = {
      id: `lesson-${this.database[key].length + 1}`,
      title,
      titleHindi,
      description,
      videoUrl,
      provider,
      language,
      duration,
      instructor,
      status: "available",
      createdAt: new Date().toISOString()
    };

    this.database[key].push(lesson);

    return lesson;
  },

  getLessons(board, classNumber, subject, chapterId) {
    const key = this.createKey(
      board,
      classNumber,
      subject,
      chapterId
    );

    return this.database[key] || [];
  },

  getLesson(board, classNumber, subject, chapterId, lessonId) {
    return this.getLessons(
      board,
      classNumber,
      subject,
      chapterId
    ).find(lesson => lesson.id === lessonId) || null;
  },

  updateLesson(lesson, updates = {}) {
    if (!lesson) return false;

    const allowed = [
      "title",
      "titleHindi",
      "description",
      "videoUrl",
      "language",
      "duration",
      "instructor",
      "status"
    ];

    allowed.forEach(field => {
      if (updates[field] !== undefined) {
        lesson[field] = updates[field];
      }
    });

    return true;
  },

  getByLanguage(board, classNumber, subject, chapterId, language) {
    return this.getLessons(
      board,
      classNumber,
      subject,
      chapterId
    ).filter(lesson => lesson.language === language);
  },

  getTotalDuration(board, classNumber, subject, chapterId) {
    return this.getLessons(
      board,
      classNumber,
      subject,
      chapterId
    ).reduce(
      (total, lesson) => total + (Number(lesson.duration) || 0),
      0
    );
  },

  search(query) {
    const term = String(query).toLowerCase();
    const results = [];

    Object.entries(this.database).forEach(([key, lessons]) => {
      lessons.forEach(lesson => {
        if (
          lesson.title.toLowerCase().includes(term) ||
          lesson.titleHindi.toLowerCase().includes(term) ||
          lesson.description.toLowerCase().includes(term)
        ) {
          results.push({ key, lesson });
        }
      });
    });

    return results;
  },

  getStatistics() {
    const lessons = Object.values(this.database).flat();

    return {
      totalLessons: lessons.length,
      totalDuration: lessons.reduce(
        (sum, lesson) => sum + (Number(lesson.duration) || 0),
        0
      ),
      hindiLessons: lessons.filter(
        lesson => lesson.language === "hindi"
      ).length,
      hinglishLessons: lessons.filter(
        lesson => lesson.language === "hinglish"
      ).length
    };
  }

};

console.log("VIDYORA Video Engine Loaded");
