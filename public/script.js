
"use strict";

/* ==========================================
   VIDYORA — COMPLETE MAIN APPLICATION
   ========================================== */

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

const state = {
  board: "",
  class: "",
  medium: "",
  stream: "",
  subject: "",
  subjectName: "",
  chapter: ""
};

const curriculum = window.VIDYORA_CURRICULUM;
const chapterEngine = window.VIDYORA_CHAPTERS;

const toast = $("#toast");

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.vidyoraToastTimer);

  window.vidyoraToastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function selectCard(selector, selected) {
  $$(selector).forEach(card => {
    card.classList.toggle("active", card === selected);
  });
}

function scrollTo(element) {
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* ==========================================
   MOBILE NAVIGATION
   ========================================== */

const menuButton = $("#mobileMenu");
const navigation = $("#navLinks");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const opened = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(opened));
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==========================================
   LEARNING INTERFACE
   ========================================== */

const learningSection = document.createElement("section");

learningSection.id = "learning-path";
learningSection.className = "section";
learningSection.hidden = true;

learningSection.innerHTML = `
  <div class="container">

    <div class="section-heading">
      <span class="eyebrow">YOUR VIDYORA CLASSROOM</span>
      <h2 id="learningTitle">Choose Your Stream</h2>
      <p id="learningDescription"></p>
    </div>

    <div id="streamContainer" class="board-grid"></div>

    <div id="subjectArea" hidden>
      <div class="section-heading">
        <span class="eyebrow">YOUR SUBJECTS</span>
        <h2>Choose Your Subject</h2>
        <p>Select a subject to continue learning.</p>
      </div>

      <div id="subjectContainer" class="board-grid"></div>
    </div>

    <div id="chapterArea" hidden>
      <div class="section-heading">
        <span class="eyebrow">CHAPTER LEARNING</span>
        <h2 id="selectedSubjectTitle"></h2>
        <p id="chapterMessage"></p>
      </div>

      <div id="chapterList" class="board-grid"></div>

      <div id="chapterViewer" hidden></div>
    </div>

  </div>
`;

const mediumSection = $("#medium");

if (mediumSection) {
  mediumSection.insertAdjacentElement(
    "afterend",
    learningSection
  );
}

/* ==========================================
   CARD CREATION
   ========================================== */

function createCard(number, symbol, title, description, action) {
  const button = document.createElement("button");

  button.type = "button";
  button.className = "board-card";

  const numberElement = document.createElement("span");
  numberElement.className = "board-number";
  numberElement.textContent = number;

  const symbolElement = document.createElement("span");
  symbolElement.className = "board-symbol";
  symbolElement.textContent = symbol;

  const heading = document.createElement("h3");
  heading.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = description;

  const link = document.createElement("span");
  link.className = "card-link";
  link.textContent = "Continue →";

  button.append(
    numberElement,
    symbolElement,
    heading,
    paragraph,
    link
  );

  button.addEventListener("click", action);

  return button;
}

function showLearningSection() {
  learningSection.hidden = false;
  scrollTo(learningSection);
}

/* ==========================================
   CONTENT RENDERING HELPERS
   ========================================== */

function addText(parent, tag, value, className = "") {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  const element = document.createElement(tag);
  element.textContent = String(value);

  if (className) {
    element.className = className;
  }

  parent.appendChild(element);
  return element;
}

function addBulletList(parent, items) {
  if (!Array.isArray(items) || !items.length) return;

  const list = document.createElement("ul");

  items.forEach(item => {
    const li = document.createElement("li");

    if (typeof item === "string") {
      li.textContent = item;
    } else if (item && typeof item === "object") {
      li.textContent =
        item.term && item.meaning
          ? `${item.term}: ${item.meaning}`
          : item.title || item.text || item.heading || "";
    }

    list.appendChild(li);
  });

  parent.appendChild(list);
}

function renderNotes(parent, notes) {
  if (!notes) return;

  const section = document.createElement("section");
  section.className = "learning-content-block";

  addText(section, "h3", notes.title || "Detailed Notes");

  if (typeof notes === "string") {
    addText(section, "p", notes);
  } else {
    (notes.sections || []).forEach(item => {
      addText(section, "h4", item.heading || "");

      if (item.explanation) {
        addText(section, "p", item.explanation);
      }

      addBulletList(section, item.points);
    });

    addBulletList(section, notes.points);
  }

  parent.appendChild(section);
}

function renderDefinitions(parent, definitions) {
  if (!Array.isArray(definitions) || !definitions.length) return;

  const section = document.createElement("section");
  section.className = "learning-content-block";

  addText(section, "h3", "Definitions");

  definitions.forEach(item => {
    if (typeof item === "string") {
      addText(section, "p", item);
    } else {
      addText(
        section,
        "p",
        `${item.term || item.title || "Term"}: ${item.meaning || item.definition || ""}`
      );
    }
  });

  parent.appendChild(section);
}

function renderQuestions(parent, questions) {
  if (!Array.isArray(questions) || !questions.length) return;

  const section = document.createElement("section");
  section.className = "learning-content-block";

  addText(section, "h3", "Important Questions");

  questions.forEach((item, index) => {
    if (typeof item === "string") {
      addText(section, "p", `${index + 1}. ${item}`);
    } else {
      addText(
        section,
        "h4",
        `${index + 1}. ${item.question || item.text || ""}`
      );

      if (item.answer) {
        addText(section, "p", `Answer: ${item.answer}`);
      }
    }
  });

  parent.appendChild(section);
}

function renderGeneralContent(parent, title, items) {
  if (!Array.isArray(items) || !items.length) return;

  const section = document.createElement("section");
  section.className = "learning-content-block";

  addText(section, "h3", title);

  items.forEach(item => {
    if (typeof item === "string") {
      addText(section, "p", item);
    } else {
      addText(
        section,
        "p",
        item.title ||
        item.name ||
        item.heading ||
        item.explanation ||
        JSON.stringify(item)
      );

      if (item.description) {
        addText(section, "p", item.description);
      }
    }
  });

  parent.appendChild(section);
}

/* ==========================================
   MCQ SYSTEM
   ========================================== */

function renderMCQs(parent, questions) {
  if (!Array.isArray(questions) || !questions.length) return;

  const section = document.createElement("section");
  section.className = "learning-content-block";

  addText(section, "h3", `Practice MCQs (${questions.length})`);

  questions.forEach((question, index) => {
    const card = document.createElement("div");
    card.className = "learning-content-block";

    addText(
      card,
      "h4",
      `${index + 1}. ${question.text || question.question || ""}`
    );

    const options = document.createElement("div");
    const feedback = document.createElement("p");
    feedback.hidden = true;

    let selectedAnswer = null;

    (question.options || []).forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "vidyora-mcq-option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `mcq-${question.id || index}`;
      input.value = optionIndex;

      const text = document.createElement("span");
      text.textContent = option;

      input.addEventListener("change", () => {
        selectedAnswer = optionIndex;
      });

      label.append(input, text);
      options.appendChild(label);
    });

    const checkButton = document.createElement("button");
    checkButton.type = "button";
    checkButton.className = "board-card";
    checkButton.textContent = "Check Answer";

    checkButton.addEventListener("click", () => {
      if (selectedAnswer === null) {
        showToast("Please select an answer first.");
        return;
      }

      let correctAnswers = [];

      if (Array.isArray(question.correctAnswers)) {
        correctAnswers = question.correctAnswers;
      } else if (Number.isInteger(question.answer)) {
        correctAnswers = [question.answer];
      } else if (typeof question.correctAnswer === "string") {
        const answerIndex = question.options.indexOf(
          question.correctAnswer
        );

        if (answerIndex >= 0) {
          correctAnswers = [answerIndex];
        }
      }

      const correct = correctAnswers.includes(selectedAnswer);

      feedback.hidden = false;
      feedback.textContent = correct
        ? "Correct answer!"
        : "Incorrect answer. Try revising this topic.";

      if (question.explanation) {
        feedback.textContent += ` ${question.explanation}`;
      }

      checkButton.disabled = true;
    });

    card.append(options, checkButton, feedback);
    section.appendChild(card);
  });

  parent.appendChild(section);
}

/* ==========================================
   CHAPTER LIST
   ========================================== */

function renderChapters(subject) {
  const container = $("#chapterList");
  const viewer = $("#chapterViewer");

  container.replaceChildren();
  viewer.replaceChildren();

  viewer.hidden = true;

  if (!chapterEngine) {
    $("#chapterMessage").textContent =
      "Chapter engine could not load. Please check chapters.js.";
    return;
  }

  const chapters = chapterEngine.getChapters(
    state.board,
    state.class,
    subject.id
  );

  if (!chapters.length) {
    $("#chapterMessage").textContent =
      `No chapters registered for ${subject.name} under ${state.board.toUpperCase()}, Class ${state.class}.`;

    return;
  }

  $("#chapterMessage").textContent =
    `${chapters.length} chapters available. Select a chapter to start learning.`;

  chapters.forEach(chapter => {
    const card = createCard(
      `CHAPTER ${chapter.number}`,
      "📖",
      chapter.title,
      chapter.titleHindi || "Explore chapter lessons",
      () => openChapter(chapter)
    );

    container.appendChild(card);
  });
}

/* ==========================================
   OPEN CHAPTER
   ========================================== */

function openChapter(chapter) {
  state.chapter = chapter.id;

  const viewer = $("#chapterViewer");
  viewer.replaceChildren();
  viewer.hidden = false;

  const backButton = document.createElement("button");
  backButton.type = "button";
  backButton.className = "board-card";
  backButton.textContent = "← Back to Chapters";

  backButton.addEventListener("click", () => {
    viewer.hidden = true;
    state.chapter = "";
    scrollTo($("#chapterList"));
  });

  viewer.appendChild(backButton);

  addText(viewer, "h2", chapter.title);

  if (chapter.titleHindi) {
    addText(viewer, "p", chapter.titleHindi);
  }

  const content = chapter.content || {};

  renderNotes(viewer, content.detailedNotes);

  renderGeneralContent(
    viewer,
    "Quick Revision",
    Array.isArray(content.quickRevision)
      ? content.quickRevision
      : content.quickRevision
        ? [content.quickRevision]
        : []
  );

  renderDefinitions(viewer, content.definitions);

  renderQuestions(viewer, content.importantQuestions);

  renderQuestions(viewer, content.questionAnswers);

  renderGeneralContent(
    viewer,
    "Diagrams",
    content.diagrams
  );

  renderGeneralContent(
    viewer,
    "Solved Examples",
    content.solvedExamples
  );

  renderGeneralContent(
    viewer,
    "Video Lessons",
    content.videoLessons
  );

  renderMCQs(viewer, content.quizzes);

  if (!viewer.children.length || viewer.children.length === 2) {
    addText(
      viewer,
      "p",
      "Learning content for this chapter is being prepared."
    );
  }

  scrollTo(viewer);
}

/* ==========================================
   BOARD SELECTION
   ========================================== */

$$("[data-board]").forEach(card => {
  card.addEventListener("click", () => {
    state.board = card.dataset.board;

    state.class = "";
    state.medium = "";
    state.stream = "";
    state.subject = "";
    state.subjectName = "";
    state.chapter = "";

    selectCard("[data-board]", card);

    showToast(
      `${card.querySelector("h3")?.textContent || state.board} selected.`
    );

    learningSection.hidden = true;

    scrollTo($("#classes"));
  });
});

/* ==========================================
   CLASS SELECTION
   ========================================== */

$$("[data-class]").forEach(card => {
  card.addEventListener("click", () => {
    if (!state.board) {
      showToast("Please select your board first.");
      scrollTo($("#boards"));
      return;
    }

    state.class = String(card.dataset.class);

    state.medium = "";
    state.stream = "";
    state.subject = "";
    state.subjectName = "";
    state.chapter = "";

    selectCard("[data-class]", card);

    showToast(`Class ${state.class} selected.`);

    learningSection.hidden = true;

    scrollTo($("#medium"));
  });
});

/* ==========================================
   MEDIUM SELECTION
   ========================================== */

$$("[data-medium]").forEach(card => {
  card.addEventListener("click", () => {
    if (!state.board || !state.class) {
      showToast("Please select your board and class first.");
      return;
    }

    state.medium = card.dataset.medium;

    state.stream = "";
    state.subject = "";
    state.subjectName = "";
    state.chapter = "";

    selectCard("[data-medium]", card);

    showToast(`${state.medium} learning selected.`);

    document.dispatchEvent(
      new CustomEvent("vidyora:selection", {
        detail: { ...state }
      })
    );

    renderStreams();
  });
});

/* ==========================================
   STREAM SELECTION
   ========================================== */

function renderStreams() {
  if (!curriculum) {
    showToast("Curriculum engine could not load.");
    return;
  }

  const streams = curriculum.getStreams(state.class) || [];
  const container = $("#streamContainer");

  container.replaceChildren();

  $("#subjectArea").hidden = true;
  $("#chapterArea").hidden = true;

  $("#learningTitle").textContent =
    `Class ${state.class} — Choose Your Stream`;

  $("#learningDescription").textContent =
    `${state.board.toUpperCase()} · ${state.medium.toUpperCase()}`;

  streams.forEach((stream, index) => {
    const card = createCard(
      `STREAM ${index + 1}`,
      stream.name?.charAt(0) || "S",
      stream.name,
      `Explore ${stream.name} subjects.`,
      () => {
        state.stream = stream.id;
        state.subject = "";
        state.subjectName = "";
        state.chapter = "";

        selectCard("#streamContainer .board-card", card);

        renderSubjects();
      }
    );

    container.appendChild(card);
  });

  if (!streams.length) {
    addText(container, "p", "No streams available for this class.");
  }

  showLearningSection();
}

/* ==========================================
   SUBJECT SELECTION
   ========================================== */

function renderSubjects() {
  if (!curriculum) return;

  const subjects = curriculum.getSubjects(
    state.class,
    state.stream
  ) || [];

  const container = $("#subjectContainer");

  container.replaceChildren();

  $("#subjectArea").hidden = false;
  $("#chapterArea").hidden = true;

  subjects.forEach((subject, index) => {
    const card = createCard(
      `SUBJECT ${index + 1}`,
      subject.name?.charAt(0) || "S",
      subject.name,
      subject.category || "Academic subject",
      () => {
        state.subject = subject.id;
        state.subjectName = subject.name;

        selectCard(
          "#subjectContainer .board-card",
          card
        );

        showSubject(subject);
      }
    );

    container.appendChild(card);
  });

  if (!subjects.length) {
    addText(container, "p", "No subjects available in this stream.");
  }

  scrollTo($("#subjectArea"));
}

/* ==========================================
   SUBJECT CLASSROOM
   ========================================== */

function showSubject(subject) {
  $("#chapterArea").hidden = false;

  $("#selectedSubjectTitle").textContent =
    subject.name;

  showToast(`${subject.name} selected.`);

  renderChapters(subject);

  document.dispatchEvent(
    new CustomEvent("vidyora:subject-selected", {
      detail: {
        ...state,
        subjectName: subject.name
      }
    })
  );

  scrollTo($("#chapterArea"));
}

/* ==========================================
   PUBLIC APPLICATION API
   ========================================== */

window.VIDYORA = {

  getSelection() {
    return { ...state };
  },

  getCurriculum() {
    return curriculum || null;
  },

  getChapters() {
    if (!chapterEngine || !state.subject) return [];

    return chapterEngine.getChapters(
      state.board,
      state.class,
      state.subject
    );
  },

  openChapter(chapterId) {
    if (!chapterEngine) return false;

    const chapter = chapterEngine.getChapter(
      state.board,
      state.class,
      state.subject,
      chapterId
    );

    if (!chapter) return false;

    openChapter(chapter);
    return true;
  },

  reset() {
    Object.keys(state).forEach(key => {
      state[key] = "";
    });

    learningSection.hidden = true;

    $$(".board-card.active").forEach(card => {
      card.classList.remove("active");
    });

    showToast("Learning selection reset.");
  }

};

console.log("VIDYORA Complete Application Loaded Successfully");
                                   
