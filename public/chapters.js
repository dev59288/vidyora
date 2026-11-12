
/* ==========================================
   VIDYORA — CHAPTER MANAGEMENT ENGINE
   ========================================== */

window.VIDYORA_CHAPTERS = {

  database: {},

  createSubjectKey(board, classNumber, subject) {
    return `${board}_${classNumber}_${subject}`.toLowerCase();
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

    if (!this.database[key]) {
      this.database[key] = {
        board,
        classNumber,
        subject,
        subjectName,
        totalChapters: 0,
        chapters: []
      };
    }

    chapters.forEach(chapter => {
      this.registerChapter({
        board,
        classNumber,
        subject,
        chapter
      });
    });

    return this.database[key];
  },

  registerChapter({
    board,
    classNumber,
    subject,
    chapter
  }) {
    const key = this.createSubjectKey(
      board,
      classNumber,
      subject
    );

    if (!this.database[key]) {
      this.registerSubject({
        board,
        classNumber,
        subject,
        subjectName: subject,
        chapters: []
      });
    }

    const subjectData = this.database[key];

    const chapterId =
      chapter.id ||
      `chapter-${subjectData.chapters.length + 1}`;

    const existing = subjectData.chapters.find(
      item => item.id === chapterId
    );

    const newChapter = {
      id: chapterId,
      number: chapter.number || subjectData.chapters.length + 1,
      title: chapter.title || "Untitled Chapter",
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
        exercises: [],
        ...(chapter.content || {})
      },
      status: chapter.status || "available"
    };

    if (existing) {
      Object.assign(existing, newChapter);
    } else {
      subjectData.chapters.push(newChapter);
    }

    subjectData.totalChapters =
      subjectData.chapters.length;

    return newChapter;
  },

  getSubject(board, classNumber, subject) {
    return this.database[
      this.createSubjectKey(board, classNumber, subject)
    ] || null;
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
    return this.getChapters(
      board,
      classNumber,
      subject
    ).find(chapter => chapter.id === chapterId) || null;
  },

  addTopic(board, classNumber, subject, chapterId, topic) {
    const chapter = this.getChapter(
      board,
      classNumber,
      subject,
      chapterId
    );

    if (!chapter) return false;

    chapter.topics.push(topic);
    return true;
  },

  addLearningContent(
    board,
    classNumber,
    subject,
    chapterId,
    contentType,
    content
  ) {
    const chapter = this.getChapter(
      board,
      classNumber,
      subject,
      chapterId
    );

    if (!chapter) return false;

    if (Array.isArray(chapter.content[contentType])) {
      chapter.content[contentType].push(content);
    } else {
      chapter.content[contentType] = content;
    }

    return true;
  },

  searchChapters(searchText) {
    const query = searchText.toLowerCase();
    const results = [];

    Object.values(this.database).forEach(subject => {
      subject.chapters.forEach(chapter => {
        const searchable = [
          chapter.title,
          chapter.titleHindi,
          ...chapter.topics
        ].join(" ").toLowerCase();

        if (searchable.includes(query)) {
          results.push({
            board: subject.board,
            classNumber: subject.classNumber,
            subject: subject.subject,
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
        (sum, item) => sum + item.chapters.length,
        0
      )
    };
  }
};

console.log("VIDYORA Chapter Engine Ready");
   
