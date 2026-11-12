
/* ==========================================
   VIDYORA — CHAPTER MANAGEMENT ENGINE
   ========================================== */

window.VIDYORA_CHAPTERS = {

  database: {},

  createSubjectKey(board, classNumber, subject) {
    return `${board}_${classNumber}_${subject}`;
  },

  registerSubject({
    board,
    classNumber,
    subject,
    subjectName,
    chapters = []
  }) {
    const key = this.createSubjectKey(
      board,
      classNumber,
      subject
    );

    this.database[key] = {
      board,
      classNumber,
      subject,
      subjectName,
      totalChapters: chapters.length,
      chapters: chapters.map((chapter, index) => ({
        id: chapter.id || `chapter-${index + 1}`,
        number: index + 1,
        title: chapter.title,
        titleHindi: chapter.titleHindi || "",
        topics: chapter.topics || [],
        content: {
          videoLessons: [],
          detailedNotes: null,
          quickRevision: null,
          definitions: [],
          diagrams: [],
          solvedExamples: [],
          importantQuestions: [],
          questionAnswers: [],
          quizzes: [],
          tests: [],
          exercises: []
        },
        status: "available"
      }))
    };

    return this.database[key];
  },

  getSubject(board, classNumber, subject) {
    const key = this.createSubjectKey(
      board,
      classNumber,
      subject
    );

    return this.database[key] || null;
  },

  getChapters(board, classNumber, subject) {
    const data = this.getSubject(
      board,
      classNumber,
      subject
    );

    return data ? data.chapters : [];
  },

  getChapter(board, classNumber, subject, chapterId) {
    const chapters = this.getChapters(
      board,
      classNumber,
      subject
    );

    return chapters.find(
      chapter => chapter.id === chapterId
    ) || null;
  },

  addTopic(board, classNumber, subject, chapterId, topic) {
    const chapter = this.getChapter(
      board,
      classNumber,
      subject,
      chapterId
    );

    if (!chapter) return false;

    chapter.topics.push({
      id: `topic-${chapter.topics.length + 1}`,
      title: topic.title,
      titleHindi: topic.titleHindi || "",
      description: topic.description || ""
    });

    return true;
  },

  addLearningContent(
    board,
    classNumber,
    subject,
    chapterId,
    section,
    content
  ) {
    const allowedSections = [
      "videoLessons",
      "detailedNotes",
      "quickRevision",
      "definitions",
      "diagrams",
      "solvedExamples",
      "importantQuestions",
      "questionAnswers",
      "quizzes",
      "tests",
      "exercises"
    ];

    if (!allowedSections.includes(section)) {
      return false;
    }

    const chapter = this.getChapter(
      board,
      classNumber,
      subject,
      chapterId
    );

    if (!chapter) return false;

    const current = chapter.content[section];

    if (Array.isArray(current)) {
      current.push(content);
    } else {
      chapter.content[section] = content;
    }

    return true;
  },

  searchChapters(searchText) {
    const query = String(searchText).toLowerCase();
    const results = [];

    Object.values(this.database).forEach(subject => {
      subject.chapters.forEach(chapter => {
        const title = chapter.title.toLowerCase();
        const hindi = chapter.titleHindi.toLowerCase();

        if (
          title.includes(query) ||
          hindi.includes(query)
        ) {
          results.push({
            board: subject.board,
            classNumber: subject.classNumber,
            subject: subject.subjectName,
            chapter
          });
        }
      });
    });

    return results;
  },

  getStatistics() {
    const subjects = Object.values(this.database);

    return {
      totalSubjects: subjects.length,
      totalChapters: subjects.reduce(
        (total, subject) => total + subject.chapters.length,
        0
      )
    };
  }

};

console.log("VIDYORA Chapter Engine Loaded");
