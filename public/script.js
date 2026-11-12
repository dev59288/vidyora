
"use strict";

/* ==========================================
   VIDYORA — MAIN APPLICATION
   ========================================== */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const state = {
  board: "",
  class: "",
  medium: "",
  stream: "",
  subject: ""
};

const curriculum = window.VIDYORA_CURRICULUM;

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

/* ==========================================
   MOBILE NAVIGATION
   ========================================== */

const menuButton = $("#mobileMenu");
const navigation = $("#navLinks");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const opened = navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(opened)
    );
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==========================================
   LEARNING PATH INTERFACE
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
      <p id="learningDescription">
        Select your academic stream to continue.
      </p>
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

  learningSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
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

    selectCard("[data-board]", card);

    showToast(
      `${card.querySelector("h3").textContent} selected.`
    );

    $("#classes")?.scrollIntoView({
      behavior: "smooth"
    });

    learningSection.hidden = true;
  });
});

/* ==========================================
   CLASS SELECTION
   ========================================== */

$$("[data-class]").forEach(card => {
  card.addEventListener("click", () => {
    if (!state.board) {
      showToast("Please select your board first.");

      $("#boards")?.scrollIntoView({
        behavior: "smooth"
      });

      return;
    }

    state.class = card.dataset.class;
    state.medium = "";
    state.stream = "";
    state.subject = "";

    selectCard("[data-class]", card);

    showToast(`Class ${state.class} selected.`);

    $("#medium")?.scrollIntoView({
      behavior: "smooth"
    });

    learningSection.hidden = true;
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

  const streams = curriculum.getStreams(state.class);

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
      stream.name.charAt(0),
      stream.name,
      `Explore ${stream.name} subjects.`,
      () => {
        state.stream = stream.id;
        state.subject = "";

        selectCard("#streamContainer .board-card", card);

        renderSubjects();
      }
    );

    container.appendChild(card);
  });

  showLearningSection();
}

/* ==========================================
   SUBJECT SELECTION
   ========================================== */

function renderSubjects() {
  const subjects = curriculum.getSubjects(
    state.class,
    state.stream
  );

  const container = $("#subjectContainer");

  container.replaceChildren();

  $("#subjectArea").hidden = false;
  $("#chapterArea").hidden = true;

  subjects.forEach((subject, index) => {
    const card = createCard(
      `SUBJECT ${index + 1}`,
      subject.name.charAt(0),
      subject.name,
      subject.category || "Academic subject",
      () => {
        state.subject = subject.id;

        selectCard(
          "#subjectContainer .board-card",
          card
        );

        showSubject(subject);
      }
    );

    container.appendChild(card);
  });

  $("#subjectArea").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* ==========================================
   SUBJECT CLASSROOM
   ========================================== */

function showSubject(subject) {
  $("#chapterArea").hidden = false;

  $("#selectedSubjectTitle").textContent =
    subject.name;

  $("#chapterMessage").textContent =
    `You selected ${subject.name} for Class ${state.class}. Chapter-wise learning content will appear here when the verified chapter data is added.`;

  showToast(`${subject.name} selected.`);

  document.dispatchEvent(
    new CustomEvent("vidyora:subject-selected", {
      detail: {
        ...state,
        subjectName: subject.name
      }
    })
  );

  $("#chapterArea").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
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

console.log("VIDYORA Application Loaded Successfully");
                      
