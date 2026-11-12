
/* ==========================================
   VIDYORA — CURRICULUM ENGINE
   Classes 11 & 12 | CBSE | ISC | UP BOARD
   ========================================== */

window.VIDYORA_CURRICULUM = {

  version: "1.0.0",

  boards: {
    cbse: {
      name: "CBSE",
      fullName: "Central Board of Secondary Education",
      official: "https://cbseacademic.nic.in/curriculum_2027.html"
    },

    isc: {
      name: "ISC",
      fullName: "Indian School Certificate (CISCE)",
      official: "https://www.cisce.org/"
    },

    up: {
      name: "UP Board",
      fullName: "Uttar Pradesh Madhyamik Shiksha Parishad",
      official: "https://www.upmsp.edu.in/Board_Syllabus.aspx"
    }
  },

  classes: {

    11: {
      name: "Class 11",
      streams: {

        science: {
          name: "Science",
          subjects: [
            {
              id: "physics",
              name: "Physics",
              category: "Core"
            },
            {
              id: "chemistry",
              name: "Chemistry",
              category: "Core"
            },
            {
              id: "mathematics",
              name: "Mathematics",
              category: "Optional"
            },
            {
              id: "biology",
              name: "Biology",
              category: "Optional"
            },
            {
              id: "computer-science",
              name: "Computer Science",
              category: "Elective"
            },
            {
              id: "physical-education",
              name: "Physical Education",
              category: "Elective"
            }
          ]
        },

        commerce: {
          name: "Commerce",
          subjects: [
            { id: "accountancy", name: "Accountancy" },
            { id: "business-studies", name: "Business Studies" },
            { id: "economics", name: "Economics" },
            { id: "mathematics", name: "Mathematics" },
            { id: "applied-mathematics", name: "Applied Mathematics" },
            { id: "entrepreneurship", name: "Entrepreneurship" }
          ]
        },

        humanities: {
          name: "Humanities",
          subjects: [
            { id: "history", name: "History" },
            { id: "geography", name: "Geography" },
            { id: "political-science", name: "Political Science" },
            { id: "sociology", name: "Sociology" },
            { id: "psychology", name: "Psychology" },
            { id: "economics", name: "Economics" }
          ]
        }
      }
    },

    12: {
      name: "Class 12",
      streams: {

        science: {
          name: "Science",
          subjects: [
            { id: "physics", name: "Physics" },
            { id: "chemistry", name: "Chemistry" },
            { id: "mathematics", name: "Mathematics" },
            { id: "biology", name: "Biology" },
            { id: "computer-science", name: "Computer Science" },
            { id: "physical-education", name: "Physical Education" }
          ]
        },

        commerce: {
          name: "Commerce",
          subjects: [
            { id: "accountancy", name: "Accountancy" },
            { id: "business-studies", name: "Business Studies" },
            { id: "economics", name: "Economics" },
            { id: "mathematics", name: "Mathematics" },
            { id: "applied-mathematics", name: "Applied Mathematics" },
            { id: "entrepreneurship", name: "Entrepreneurship" }
          ]
        },

        humanities: {
          name: "Humanities",
          subjects: [
            { id: "history", name: "History" },
            { id: "geography", name: "Geography" },
            { id: "political-science", name: "Political Science" },
            { id: "sociology", name: "Sociology" },
            { id: "psychology", name: "Psychology" },
            { id: "economics", name: "Economics" }
          ]
        }
      }
    }
  },

  languages: {
    hindi: {
      name: "हिन्दी",
      code: "hi"
    },

    hinglish: {
      name: "Hinglish",
      code: "hi-Latn"
    }
  },

  chapterStructure: {
    sections: [
      "videoLessons",
      "detailedNotes",
      "quickRevision",
      "definitions",
      "diagrams",
      "solvedExamples",
      "importantQuestions",
      "questionAnswers",
      "mcqQuizzes",
      "chapterTests",
      "practiceExercises"
    ]
  },

  getBoards() {
    return Object.values(this.boards);
  },

  getClasses() {
    return Object.keys(this.classes);
  },

  getStreams(classNumber) {
    const selectedClass = this.classes[classNumber];

    if (!selectedClass) return [];

    return Object.entries(selectedClass.streams).map(
      ([id, stream]) => ({
        id,
        name: stream.name
      })
    );
  },

  getSubjects(classNumber, streamId) {
    const selectedClass = this.classes[classNumber];

    if (!selectedClass) return [];

    const selectedStream = selectedClass.streams[streamId];

    if (!selectedStream) return [];

    return selectedStream.subjects;
  }

};

/* Curriculum engine ready */
console.log("VIDYORA Curriculum Engine Loaded");
