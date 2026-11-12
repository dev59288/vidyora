
"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const state = {
  board: "",
  class: "",
  medium: ""
};

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

// Mobile navigation
const menuButton = $("#menuBtn");
const navigation = $("#nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
    });
  });
}

// Board selection
$$("[data-board]").forEach(card => {
  card.addEventListener("click", () => {
    state.board = card.dataset.board;

    $$("[data-board]").forEach(item => {
      item.classList.remove("active");
    });

    card.classList.add("active");

    showToast(
      `${state.board} selected. Now choose your class.`
    );

    $("#classes")?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Class selection
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

    showToast(
      `${state.board} · Class ${state.class} selected.`
    );

    const mediumSection = $("#medium");

    if (mediumSection) {
      mediumSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Medium selection
$$("[data-medium]").forEach(card => {
  card.addEventListener("click", () => {
    if (!state.board || !state.class) {
      showToast("Please select your board and class first.");
      return;
    }

    state.medium = card.dataset.medium;

    showToast(
      `${state.medium} selected for Class ${state.class}.`
    );

    document.dispatchEvent(
      new CustomEvent("vidyora:selection", {
        detail: { ...state }
      })
    );
  });
});

// Expose read-only selection information
window.VIDYORA = {
  getSelection() {
    return { ...state };
  }
};
