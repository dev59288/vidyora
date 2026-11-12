
/* ==========================================
   VIDYORA — GLOBAL LEARNING SEARCH ENGINE
   ========================================== */

window.VIDYORA_SEARCH = {

  index: [],

  normalize(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFKC")
      .trim();
  },

  add({
    type,
    title,
    titleHindi = "",
    description = "",
    board = "",
    classNumber = "",
    subject = "",
    chapterId = "",
    url = ""
  }) {
    if (!type || !title) return false;

    const id = `${type}-${this.index.length + 1}`;

    this.index.push({
      id,
      type,
      title,
      titleHindi,
      description,
      board,
      classNumber,
      subject,
      chapterId,
      url
    });

    return id;
  },

  addMany(items = []) {
    return items.map(item => this.add(item)).filter(Boolean);
  },

  remove(id) {
    const oldLength = this.index.length;

    this.index = this.index.filter(item => item.id !== id);

    return this.index.length !== oldLength;
  },

  search(query, filters = {}) {
    const term = this.normalize(query);

    if (!term) return [];

    return this.index
      .filter(item => {
        if (filters.type && item.type !== filters.type) {
          return false;
        }

        if (
          filters.board &&
          item.board !== filters.board
        ) {
          return false;
        }

        if (
          filters.classNumber &&
          String(item.classNumber) !== String(filters.classNumber)
        ) {
          return false;
        }

        if (
          filters.subject &&
          item.subject !== filters.subject
        ) {
          return false;
        }

        const searchable = this.normalize([
          item.title,
          item.titleHindi,
          item.description,
          item.subject,
          item.board
        ].join(" "));

        return searchable.includes(term);
      })
      .sort((a, b) => {
        const aTitle = this.normalize(a.title);
        const bTitle = this.normalize(b.title);

        const aStarts = aTitle.startsWith(term);
        const bStarts = bTitle.startsWith(term);

        return Number(bStarts) - Number(aStarts);
      });
  },

  getSuggestions(query, limit = 5) {
    return this.search(query).slice(0, limit);
  },

  getByType(type) {
    return this.index.filter(item => item.type === type);
  },

  clear() {
    this.index = [];
  },

  getStatistics() {
    const types = {};

    this.index.forEach(item => {
      types[item.type] = (types[item.type] || 0) + 1;
    });

    return {
      totalIndexedItems: this.index.length,
      categories: types
    };
  }

};

console.log("VIDYORA Search Engine Loaded");
