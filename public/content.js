
/* ==========================================
   VIDYORA — CLASS 11 BIOLOGY CONTENT
   Chapter 1: The Living World
   Board: CBSE
   ========================================== */

(function () {
  "use strict";

  const engine = window.VIDYORA_CHAPTERS;

  if (!engine) {
    console.error("VIDYORA_CHAPTERS engine not found!");
    return;
  }

  // Register subject and chapter
  engine.registerSubject({
    board: "cbse",
    classNumber: "11",
    subject: "biology",
    subjectName: "Biology",

    chapters: [
      {
        id: "the-living-world",
        title: "The Living World",
        titleHindi: "जीव जगत",

        topics: [
          { title: "What is Living?", titleHindi: "सजीव क्या हैं?" },
          { title: "Characteristics of Living Organisms" },
          { title: "Biodiversity" },
          { title: "Taxonomy and Systematics" },
          { title: "Nomenclature" },
          { title: "Taxonomic Categories" },
          { title: "Taxonomical Aids" }
        ]
      }
    ]
  });

  const board = "cbse";
  const classNumber = "11";
  const subject = "biology";
  const chapterId = "the-living-world";

  // Detailed Notes
  engine.addLearningContent(
    board, classNumber, subject, chapterId,
    "detailedNotes",
    {
      title: "The Living World — Detailed Notes",
      sections: [
        {
          heading: "1. What is Living?",
          explanation:
            "Living organisms are characterised by cellular organisation, metabolism, growth and the ability to sense and respond to their surroundings. No single simple feature explains every aspect of life."
        },
        {
          heading: "2. Growth",
          explanation:
            "Growth is an increase in mass and an increase in the number of individuals or cells. In living organisms, growth generally occurs from inside through cell division. Non-living objects can also increase in size by accumulation of material, so growth alone does not define life."
        },
        {
          heading: "3. Reproduction",
          explanation:
            "Reproduction is the biological process by which organisms produce offspring. It may be sexual or asexual. However, reproduction is not an all-inclusive defining feature because some living organisms, such as mules and sterile worker bees, cannot reproduce."
        },
        {
          heading: "4. Metabolism",
          explanation:
            "Metabolism is the sum total of all chemical reactions occurring inside a living organism. It includes anabolism (building reactions) and catabolism (breaking-down reactions). Metabolism is a defining feature of living organisms."
        },
        {
          heading: "5. Consciousness",
          explanation:
            "Living organisms can sense their surroundings and respond to environmental stimuli. Plants and animals respond in different ways. This ability is an important characteristic of life."
        },
        {
          heading: "6. Biodiversity",
          explanation:
            "Biodiversity refers to the variety of living organisms found on Earth. Scientists use identification, nomenclature and classification to study this diversity."
        },
        {
          heading: "7. Taxonomy and Systematics",
          explanation:
            "Taxonomy deals with identification, nomenclature and classification of organisms. Systematics also considers evolutionary relationships among organisms."
        },
        {
          heading: "8. Binomial Nomenclature",
          explanation:
            "Binomial nomenclature gives every organism a scientific name consisting of two words: the genus name and the specific epithet. Scientific names are generally written in italics when printed."
        },
        {
          heading: "9. Taxonomic Hierarchy",
          explanation:
            "The major taxonomic categories are species, genus, family, order, class, phylum or division, and kingdom. Species is the basic unit of classification."
        },
        {
          heading: "10. Taxonomical Aids",
          explanation:
            "Herbaria, botanical gardens, museums, zoological parks and taxonomic keys help scientists identify and study organisms."
        }
      ]
    }
  );

  // Quick Revision
  engine.addLearningContent(
    board, classNumber, subject, chapterId,
    "quickRevision",
    {
      title: "Quick Revision",
      points: [
        "Growth alone is not a defining feature of life.",
        "Reproduction is not universal among all living organisms.",
        "Metabolism is a defining feature of living organisms.",
        "Cellular organisation is a fundamental feature of life.",
        "Taxonomy includes identification, nomenclature and classification.",
        "Systematics considers evolutionary relationships.",
        "Binomial nomenclature uses two words.",
        "Species is the basic unit of classification.",
        "A taxonomic key helps in identification.",
        "A herbarium contains preserved plant specimens."
      ]
    }
  );

  // Important Definitions
  const definitions = [
    {
      term: "Biodiversity",
      meaning: "The variety of living organisms present on Earth."
    },
    {
      term: "Metabolism",
      meaning: "The sum total of all chemical reactions occurring in a living organism."
    },
    {
      term: "Taxonomy",
      meaning: "The science of identification, nomenclature and classification."
    },
    {
      term: "Systematics",
      meaning: "The study of organismal diversity and their evolutionary relationships."
    },
    {
      term: "Nomenclature",
      meaning: "The scientific process of assigning names to organisms."
    },
    {
      term: "Species",
      meaning: "The basic unit of biological classification."
    },
    {
      term: "Herbarium",
      meaning: "A collection of dried, pressed and preserved plant specimens."
    },
    {
      term: "Taxonomic Key",
      meaning: "A tool used to identify organisms through contrasting characters."
    }
  ];

  definitions.forEach(item => {
    engine.addLearningContent(
      board, classNumber, subject, chapterId,
      "definitions", item
    );
  });

  // Diagram explanations
  const diagrams = [
    {
      title: "Taxonomic Hierarchy",
      type: "flowchart",
      labels: [
        "Kingdom",
        "Phylum / Division",
        "Class",
        "Order",
        "Family",
        "Genus",
        "Species"
      ],
      explanation:
        "The hierarchy moves from broader categories at the top to more specific categories at the bottom."
    },
    {
      title: "Binomial Nomenclature",
      type: "labelled-example",
      labels: [
        "Genus: Homo",
        "Specific epithet: sapiens",
        "Scientific name: Homo sapiens"
      ],
      explanation:
        "The first word represents the genus and begins with a capital letter. The second word is the specific epithet and begins with a small letter."
    },
    {
      title: "Types of Taxonomical Aids",
      type: "concept-map",
      labels: [
        "Herbarium",
        "Botanical Garden",
        "Museum",
        "Zoological Park",
        "Taxonomic Key"
      ],
      explanation:
        "Different taxonomical aids help with preservation, observation, comparison and identification of organisms."
    }
  ];

  diagrams.forEach(item => {
    engine.addLearningContent(
      board, classNumber, subject, chapterId,
      "diagrams", item
    );
  });

  // Important Questions
  const questions = [
    {
      question: "Why is reproduction not considered a defining feature of all living organisms?",
      answer:
        "Because some living organisms, such as mules and sterile worker bees, are unable to reproduce."
    },
    {
      question: "Define metabolism.",
      answer:
        "Metabolism is the sum total of all chemical reactions occurring in a living organism."
    },
    {
      question: "What is binomial nomenclature?",
      answer:
        "It is the system of naming organisms using two words: genus name and specific epithet."
    },
    {
      question: "Which is the basic unit of classification?",
      answer: "Species."
    },
    {
      question: "What is the function of a taxonomic key?",
      answer:
        "It helps identify organisms by using contrasting characters."
    }
  ];

  questions.forEach(item => {
    engine.addLearningContent(
      board, classNumber, subject, chapterId,
      "questionAnswers", item
    );
  });

  // MCQ Quiz
  const quizQuestions = [
    {
      question: "Which of the following is a defining feature of living organisms?",
      options: [
        "Increase in size only",
        "Metabolism",
        "Reproduction only",
        "Movement only"
      ],
      correctAnswer: "Metabolism",
      explanation:
        "Metabolism includes all chemical reactions occurring in living organisms."
    },
    {
      question: "The basic unit of classification is:",
      options: [
        "Kingdom",
        "Family",
        "Species",
        "Class"
      ],
      correctAnswer: "Species",
      explanation:
        "Species is the basic unit of taxonomic classification."
    },
    {
      question: "Binomial nomenclature consists of:",
      options: [
        "One word",
        "Two words",
        "Three words",
        "Four words"
      ],
      correctAnswer: "Two words",
      explanation:
        "The two words are the genus name and specific epithet."
    },
    {
      question: "A collection of preserved plant specimens is called:",
      options: [
        "Museum",
        "Herbarium",
        "Zoo",
        "Laboratory"
      ],
      correctAnswer: "Herbarium",
      explanation:
        "A herbarium stores dried and pressed plant specimens."
    },
    {
      question: "Which category comes immediately above genus?",
      options: [
        "Species",
        "Family",
        "Order",
        "Class"
      ],
      correctAnswer: "Family",
      explanation:
        "The order is species, genus, family, order, class, phylum or division, kingdom."
    }
  ];

  quizQuestions.forEach(item => {
    engine.addLearningContent(
      board, classNumber, subject, chapterId,
      "quizzes", item
    );
  });

  // Practice Exercises
  const exercises = [
    {
      question: "Explain why growth alone cannot define living organisms.",
      marks: 2,
      type: "descriptive"
    },
    {
      question: "Write the two components of a scientific name.",
      marks: 2,
      type: "descriptive"
    },
    {
      question: "Arrange the taxonomic categories from species to kingdom.",
      marks: 3,
      type: "descriptive"
    }
  ];

  exercises.forEach(item => {
    engine.addLearningContent(
      board, classNumber, subject, chapterId,
      "exercises", item
    );
  });

  console.log(
    "VIDYORA Biology Chapter 1 Content Loaded",
    engine.getStatistics()
  );

})();
 
