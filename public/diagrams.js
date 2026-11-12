
/* ==========================================
   VIDYORA — DIAGRAM & VISUAL LEARNING ENGINE
   ========================================== */

window.VIDYORA_DIAGRAMS = {

  database: {},

  createKey(board, classNumber, subject, chapterId) {
    return `${board}_${classNumber}_${subject}_${chapterId}`;
  },

  registerDiagram({
    board,
    classNumber,
    subject,
    chapterId,
    title,
    titleHindi = "",
    image = "",
    category = "educational",
    language = "hinglish"
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

    const diagram = {
      id: `diagram-${this.database[key].length + 1}`,
      title,
      titleHindi,
      image,
      category,
      language,
      labels: [],
      explanation: "",
      importantPoints: [],
      source: "",
      verified: false
    };

    this.database[key].push(diagram);

    return diagram;
  },

  getDiagrams(board, classNumber, subject, chapterId) {
    const key = this.createKey(
      board,
      classNumber,
      subject,
      chapterId
    );

    return this.database[key] || [];
  },

  addLabel(diagram, label) {
    if (!diagram || !label.name) return false;

    diagram.labels.push({
      name: label.name,
      hindi: label.hindi || "",
      hinglish: label.hinglish || "",
      description: label.description || ""
    });

    return true;
  },

  updateExplanation(diagram, explanation) {
    if (!diagram) return false;

    diagram.explanation = explanation;
    return true;
  },

  addImportantPoint(diagram, point) {
    if (!diagram || !point) return false;

    diagram.importantPoints.push(point);
    return true;
  },

  markVerified(diagram, source) {
    if (!diagram || !source) return false;

    diagram.source = source;
    diagram.verified = true;

    return true;
  },

  search(query) {
    const term = String(query).toLowerCase();
    const results = [];

    Object.entries(this.database).forEach(([key, diagrams]) => {
      diagrams.forEach(diagram => {
        if (
          diagram.title.toLowerCase().includes(term) ||
          diagram.titleHindi.toLowerCase().includes(term) ||
          diagram.labels.some(label =>
            label.name.toLowerCase().includes(term) ||
            label.hindi.toLowerCase().includes(term)
          )
        ) {
          results.push({
            key,
            diagram
          });
        }
      });
    });

    return results;
  },

  getStatistics() {
    const diagrams = Object.values(this.database).flat();

    return {
      totalDiagrams: diagrams.length,
      verifiedDiagrams: diagrams.filter(
        diagram => diagram.verified
      ).length,
      totalLabels: diagrams.reduce(
        (sum, diagram) => sum + diagram.labels.length,
        0
      )
    };
  }

};

console.log("VIDYORA Diagram Engine Loaded");
