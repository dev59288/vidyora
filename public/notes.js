
/* ==========================================
   VIDYORA — SMART NOTES ENGINE
   Hindi | Hinglish | Class 11 & 12
   ========================================== */

window.VIDYORA_NOTES = {

  database: {},

  createKey(board, classNumber, subject, chapterId) {
    return `${board}_${classNumber}_${subject}_${chapterId}`;
  },

  createNotes({
    board,
    classNumber,
    subject,
    chapterId,
    title,
    language = "hinglish"
  }) {
    const key = this.createKey(
      board,
      classNumber,
      subject,
      chapterId
    );

    this.database[key] = {
      title,
      board,
      classNumber,
      subject,
      chapterId,
      language,

      detailedNotes: {
        introduction: "",
        learningObjectives: [],
        sections: [],
        conclusion: ""
      },

      quickRevision: {
        summary: "",
        keyPoints: [],
        importantFacts: []
      },

      definitions: [],

      formulas: [],

      examples: [],

      lastUpdated: new Date().toISOString()
    };

    return this.database[key];
  },

  getNotes(board, classNumber, subject, chapterId) {
    const key = this.createKey(
      board,
      classNumber,
      subject,
      chapterId
    );

    return this.database[key] || null;
  },

  updateIntroduction(notes, introduction) {
    if (!notes) return false;

    notes.detailedNotes.introduction = introduction;
    return true;
  },

  addSection(notes, section) {
    if (!notes || !section.title) return false;

    notes.detailedNotes.sections.push({
      id: `section-${notes.detailedNotes.sections.length + 1}`,
      title: section.title,
      titleHindi: section.titleHindi || "",
      content: section.content || "",
      language: section.language || notes.language
    });

    return true;
  },

  addRevisionPoint(notes, point) {
    if (!notes || !point) return false;

    notes.quickRevision.keyPoints.push(point);
    return true;
  },

  addDefinition(notes, definition) {
    if (!notes || !definition.term) return false;

    notes.definitions.push({
      term: definition.term,
      hindi: definition.hindi || "",
      hinglish: definition.hinglish || "",
      explanation: definition.explanation || "",
      example: definition.example || ""
    });

    return true;
  },

  addFormula(notes, formula) {
    if (!notes || !formula.name) return false;

    notes.formulas.push({
      name: formula.name,
      expression: formula.expression,
      explanation: formula.explanation || "",
      units: formula.units || ""
    });

    return true;
  },

  addExample(notes, example) {
    if (!notes || !example.question) return false;

    notes.examples.push({
      question: example.question,
      solution: example.solution || "",
      explanation: example.explanation || ""
    });

    return true;
  },

  search(query) {
    const term = String(query).toLowerCase();
    const results = [];

    Object.entries(this.database).forEach(([key, notes]) => {
      const title = notes.title.toLowerCase();

      const definitions = notes.definitions.filter(item =>
        item.term.toLowerCase().includes(term) ||
        item.hindi.toLowerCase().includes(term)
      );

      if (title.includes(term) || definitions.length) {
        results.push({
          key,
          title: notes.title,
          definitions
        });
      }
    });

    return results;
  },

  getStatistics() {
    const notes = Object.values(this.database);

    return {
      totalNotes: notes.length,
      totalDefinitions: notes.reduce(
        (sum, item) => sum + item.definitions.length,
        0
      ),
      totalFormulas: notes.reduce(
        (sum, item) => sum + item.formulas.length,
        0
      )
    };
  }

};

console.log("VIDYORA Notes Engine Loaded");
