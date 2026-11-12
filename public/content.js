
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
 

/* ==========================================
   VIDYORA — CLASS 11 BIOLOGY
   CHAPTER 2: BIOLOGICAL CLASSIFICATION
   ========================================== */

(() => {
  const engine = window.VIDYORA_CHAPTERS;

  if (!engine) {
    console.error("VIDYORA Chapter Engine not loaded.");
    return;
  }

  const chapter = engine.registerChapter({
    board: "cbse",
    classNumber: "11",
    subject: "biology",
    chapter: {
      id: "biological-classification",
      number: 2,
      title: "Biological Classification",
      titleHindi: "जैविक वर्गीकरण",

      topics: [
        "Need for Classification",
        "Two Kingdom Classification",
        "Five Kingdom Classification",
        "Kingdom Monera",
        "Kingdom Protista",
        "Kingdom Fungi",
        "Kingdom Plantae",
        "Kingdom Animalia",
        "Lichens",
        "Viruses",
        "Viroids",
        "Prions"
      ]
    }
  });

  chapter.content.detailedNotes = {
    introduction:
      "Biological classification is the scientific arrangement of organisms into groups based on their similarities and differences.",

    sections: [
      {
        heading: "1. Need for Classification",
        points: [
          "Millions of organisms exist on Earth.",
          "Classification makes their study easier.",
          "It helps identify similarities and differences.",
          "It helps understand evolutionary relationships."
        ]
      },
      {
        heading: "2. Two Kingdom Classification",
        points: [
          "Proposed by Carolus Linnaeus.",
          "Organisms were divided into Plantae and Animalia.",
          "This system could not properly classify fungi and microorganisms."
        ]
      },
      {
        heading: "3. Five Kingdom Classification",
        points: [
          "Proposed by R.H. Whittaker in 1969.",
          "The five kingdoms are Monera, Protista, Fungi, Plantae and Animalia.",
          "Criteria included cell structure, body organisation, nutrition, reproduction and evolutionary relationships."
        ]
      },
      {
        heading: "4. Kingdom Monera",
        points: [
          "Includes prokaryotic organisms.",
          "They lack a true nucleus and membrane-bound organelles.",
          "Examples include bacteria, cyanobacteria and archaebacteria.",
          "Bacteria may have different shapes such as cocci, bacilli, vibrios and spirilla."
        ]
      },
      {
        heading: "5. Kingdom Protista",
        points: [
          "Includes mostly unicellular eukaryotic organisms.",
          "Many live in aquatic environments.",
          "Examples include Amoeba, Paramecium, Euglena and diatoms."
        ]
      },
      {
        heading: "6. Kingdom Fungi",
        points: [
          "Fungi are eukaryotic and heterotrophic.",
          "Their cell walls generally contain chitin.",
          "Most fungi reproduce through spores.",
          "Examples include yeast, Rhizopus, mushrooms and Penicillium."
        ]
      },
      {
        heading: "7. Kingdom Plantae",
        points: [
          "Includes multicellular eukaryotic organisms.",
          "Cell walls are generally made of cellulose.",
          "Most plants perform photosynthesis."
        ]
      },
      {
        heading: "8. Kingdom Animalia",
        points: [
          "Includes multicellular eukaryotic organisms.",
          "Cells do not have cell walls.",
          "Animals obtain nutrition by consuming other organisms."
        ]
      },
      {
        heading: "9. Lichens",
        points: [
          "Lichens represent a symbiotic association between an alga and a fungus.",
          "The algal partner prepares food.",
          "The fungal partner provides shelter and absorbs water and minerals."
        ]
      },
      {
        heading: "10. Viruses, Viroids and Prions",
        points: [
          "Viruses are acellular infectious agents.",
          "They contain genetic material surrounded by a protein coat.",
          "Viroids are infectious agents consisting of small RNA molecules.",
          "Prions are infectious protein particles."
        ]
      }
    ]
  };

  chapter.content.quickRevision = [
    "Two Kingdom Classification — Carolus Linnaeus.",
    "Five Kingdom Classification — R.H. Whittaker, 1969.",
    "Monera — Prokaryotic organisms.",
    "Protista — Mostly unicellular eukaryotes.",
    "Fungi — Heterotrophic organisms with chitinous cell walls.",
    "Lichens — Association of algae and fungi.",
    "Viroids — Infectious RNA particles.",
    "Prions — Infectious proteins."
  ];

  chapter.content.definitions = [
    {
      term: "Classification",
      meaning: "Arrangement of organisms into groups based on similarities and differences."
    },
    {
      term: "Prokaryotic",
      meaning: "Cells that lack a membrane-bound nucleus."
    },
    {
      term: "Eukaryotic",
      meaning: "Cells having a membrane-bound nucleus."
    },
    {
      term: "Symbiosis",
      meaning: "A close association between organisms of different species."
    },
    {
      term: "Lichens",
      meaning: "A symbiotic association between an alga and a fungus."
    },
    {
      term: "Viroids",
      meaning: "Small infectious RNA molecules without a protein coat."
    },
    {
      term: "Prions",
      meaning: "Infectious protein particles."
    }
  ];

  chapter.content.importantQuestions = [
    {
      question: "Who proposed the five kingdom classification?",
      answer: "R.H. Whittaker in 1969."
    },
    {
      question: "Name the five kingdoms.",
      answer: "Monera, Protista, Fungi, Plantae and Animalia."
    },
    {
      question: "What type of organisms are included in Monera?",
      answer: "Prokaryotic organisms."
    },
    {
      question: "What are lichens?",
      answer: "A symbiotic association between an alga and a fungus."
    },
    {
      question: "What are viroids?",
      answer: "Small infectious RNA molecules without a protein coat."
    },
    {
      question: "What is the cell wall of fungi generally made of?",
      answer: "Chitin."
    }
  ];

  chapter.content.quizzes = [
    {
      id: "bc-q1",
      question: "Who proposed the five kingdom classification?",
      options: [
        "Carolus Linnaeus",
        "R.H. Whittaker",
        "Charles Darwin",
        "Robert Hooke"
      ],
      answer: 1,
      explanation: "R.H. Whittaker proposed the five kingdom classification in 1969."
    },
    {
      id: "bc-q2",
      question: "Which kingdom contains prokaryotic organisms?",
      options: [
        "Protista",
        "Fungi",
        "Monera",
        "Animalia"
      ],
      answer: 2,
      explanation: "Kingdom Monera includes prokaryotic organisms."
    },
    {
      id: "bc-q3",
      question: "The cell wall of fungi generally contains:",
      options: [
        "Cellulose",
        "Chitin",
        "Peptidoglycan",
        "Lignin"
      ],
      answer: 1,
      explanation: "Chitin is a major component of fungal cell walls."
    },
    {
      id: "bc-q4",
      question: "Lichens are an association between:",
      options: [
        "Bacteria and virus",
        "Alga and fungus",
        "Plant and animal",
        "Two fungi"
      ],
      answer: 1,
      explanation: "Lichens consist of an algal partner and a fungal partner."
    },
    {
      id: "bc-q5",
      question: "Viroids are made of:",
      options: [
        "DNA and protein",
        "RNA",
        "Only protein",
        "Cellulose"
      ],
      answer: 1,
      explanation: "Viroids are small infectious RNA molecules."
    }
  ];

  console.log("Biology Chapter 2 loaded:", chapter.title);

})();

/* ==========================================
   VIDYORA — CLASS 11 BIOLOGY
   CHAPTER 3: PLANT KINGDOM
   ========================================== */

(() => {
  const engine = window.VIDYORA_CHAPTERS;

  if (!engine) {
    console.error("VIDYORA Chapter Engine not loaded.");
    return;
  }

  const chapter = engine.registerChapter({
    board: "cbse",
    classNumber: "11",
    subject: "biology",
    chapter: {
      id: "plant-kingdom",
      number: 3,
      title: "Plant Kingdom",
      titleHindi: "पादप जगत",

      topics: [
        "Algae",
        "Chlorophyceae",
        "Phaeophyceae",
        "Rhodophyceae",
        "Bryophytes",
        "Liverworts",
        "Mosses",
        "Pteridophytes",
        "Gymnosperms",
        "Angiosperms",
        "Plant Life Cycles",
        "Alternation of Generations"
      ]
    }
  });

  chapter.content.detailedNotes = {
    introduction:
      "The plant kingdom includes diverse organisms ranging from simple algae to complex flowering plants. Plants show different levels of body organisation and reproductive structures.",

    sections: [
      {
        heading: "1. Algae",
        points: [
          "Algae are simple, chlorophyll-bearing, mostly aquatic organisms.",
          "They may be unicellular, colonial or filamentous.",
          "They reproduce by vegetative, asexual and sexual methods.",
          "Examples include Chlamydomonas, Volvox and Spirogyra."
        ]
      },
      {
        heading: "2. Chlorophyceae — Green Algae",
        points: [
          "They contain chlorophyll a and b.",
          "Their major pigments give them a green appearance.",
          "Food is commonly stored as starch.",
          "Examples include Chlamydomonas, Volvox, Ulothrix and Spirogyra."
        ]
      },
      {
        heading: "3. Phaeophyceae — Brown Algae",
        points: [
          "They are mostly marine.",
          "They contain chlorophyll a, c and fucoxanthin.",
          "Food is stored mainly as laminarin and mannitol.",
          "Examples include Ectocarpus, Laminaria and Sargassum."
        ]
      },
      {
        heading: "4. Rhodophyceae — Red Algae",
        points: [
          "They contain the red pigment phycoerythrin.",
          "Most are marine.",
          "Food is stored as floridean starch.",
          "Examples include Polysiphonia, Porphyra and Gelidium."
        ]
      },
      {
        heading: "5. Bryophytes",
        points: [
          "Bryophytes are commonly called amphibians of the plant kingdom.",
          "They generally grow in moist and shaded places.",
          "They lack true roots, stems and leaves.",
          "The gametophyte is the dominant plant body.",
          "Examples include Riccia, Marchantia and Funaria."
        ]
      },
      {
        heading: "6. Pteridophytes",
        points: [
          "They are the first terrestrial plants to possess vascular tissues.",
          "They have true roots, stems and leaves.",
          "They reproduce through spores.",
          "The sporophyte is the dominant generation.",
          "Examples include Selaginella, Equisetum and Pteris."
        ]
      },
      {
        heading: "7. Gymnosperms",
        points: [
          "Gymnosperms produce naked seeds.",
          "Their ovules are not enclosed within an ovary.",
          "They are generally woody plants.",
          "Examples include Cycas, Pinus and Ginkgo."
        ]
      },
      {
        heading: "8. Angiosperms",
        points: [
          "Angiosperms are flowering plants.",
          "Their seeds develop inside fruits.",
          "They show double fertilisation.",
          "They are broadly divided into monocotyledons and dicotyledons."
        ]
      },
      {
        heading: "9. Plant Life Cycles",
        points: [
          "Haplontic life cycle: the haploid phase is dominant.",
          "Diplontic life cycle: the diploid phase is dominant.",
          "Haplo-diplontic life cycle: both haploid and diploid phases are multicellular.",
          "Alternation of generations occurs between gametophyte and sporophyte."
        ]
      }
    ]
  };

  chapter.content.quickRevision = [
    "Algae — Simple, mostly aquatic, photosynthetic organisms.",
    "Chlorophyceae — Green algae; chlorophyll a and b.",
    "Phaeophyceae — Brown algae; fucoxanthin.",
    "Rhodophyceae — Red algae; phycoerythrin.",
    "Bryophytes — Amphibians of the plant kingdom.",
    "Pteridophytes — First terrestrial plants with vascular tissues.",
    "Gymnosperms — Naked seeds.",
    "Angiosperms — Seeds enclosed within fruits.",
    "Gametophyte — Haploid generation.",
    "Sporophyte — Diploid generation."
  ];

  chapter.content.definitions = [
    {
      term: "Thallus",
      meaning: "A plant body that is not differentiated into true roots, stems and leaves."
    },
    {
      term: "Bryophytes",
      meaning: "Small non-vascular plants that generally grow in moist habitats."
    },
    {
      term: "Gymnosperms",
      meaning: "Plants that produce naked seeds not enclosed within fruits."
    },
    {
      term: "Angiosperms",
      meaning: "Flowering plants whose seeds are enclosed within fruits."
    },
    {
      term: "Gametophyte",
      meaning: "The haploid, gamete-producing phase of a plant."
    },
    {
      term: "Sporophyte",
      meaning: "The diploid, spore-producing phase of a plant."
    },
    {
      term: "Alternation of Generations",
      meaning: "The regular alternation between gametophyte and sporophyte generations."
    }
  ];

  chapter.content.importantQuestions = [
    {
      question: "Why are bryophytes called amphibians of the plant kingdom?",
      answer: "Because they are terrestrial plants but require water for sexual reproduction."
    },
    {
      question: "Which pigment gives brown algae their characteristic colour?",
      answer: "Fucoxanthin."
    },
    {
      question: "What are gymnosperms?",
      answer: "Plants that produce naked seeds."
    },
    {
      question: "Which plants possess vascular tissues but reproduce through spores?",
      answer: "Pteridophytes."
    },
    {
      question: "What is the dominant generation in bryophytes?",
      answer: "The gametophyte."
    },
    {
      question: "What is double fertilisation?",
      answer: "The process in angiosperms involving syngamy and triple fusion."
    }
  ];

  chapter.content.quizzes = [
    {
      id: "pk-q1",
      question: "Which pigment is responsible for the brown colour of brown algae?",
      options: [
        "Chlorophyll b",
        "Fucoxanthin",
        "Phycoerythrin",
        "Carotene"
      ],
      answer: 1,
      explanation: "Fucoxanthin is the characteristic brown pigment."
    },
    {
      id: "pk-q2",
      question: "Bryophytes are known as:",
      options: [
        "Flowering plants",
        "Amphibians of the plant kingdom",
        "Seed plants",
        "Marine animals"
      ],
      answer: 1,
      explanation: "Bryophytes need water for sexual reproduction."
    },
    {
      id: "pk-q3",
      question: "Which group produces naked seeds?",
      options: [
        "Bryophytes",
        "Pteridophytes",
        "Gymnosperms",
        "Algae"
      ],
      answer: 2,
      explanation: "Gymnosperms produce seeds that are not enclosed in fruits."
    },
    {
      id: "pk-q4",
      question: "Which generation is dominant in bryophytes?",
      options: [
        "Sporophyte",
        "Gametophyte",
        "Embryo",
        "Seed"
      ],
      answer: 1,
      explanation: "The gametophyte is the dominant independent plant body."
    },
    {
      id: "pk-q5",
      question: "Which group includes flowering plants?",
      options: [
        "Gymnosperms",
        "Angiosperms",
        "Bryophytes",
        "Pteridophytes"
      ],
      answer: 1,
      explanation: "Angiosperms are flowering plants."
    }
  ];

  console.log("Biology Chapter 3 loaded:", chapter.title);

})();

/* ==========================================
   VIDYORA — CLASS 11 BIOLOGY
   CHAPTER 4: ANIMAL KINGDOM
   ========================================== */

(() => {
  const engine = window.VIDYORA_CHAPTERS;

  if (!engine) {
    console.error("VIDYORA Chapter Engine not loaded.");
    return;
  }

  const chapter = engine.registerChapter({
    board: "cbse",
    classNumber: "11",
    subject: "biology",
    chapter: {
      id: "animal-kingdom",
      number: 4,
      title: "Animal Kingdom",
      titleHindi: "जंतु जगत",

      topics: [
        "Basis of Classification",
        "Level of Organisation",
        "Symmetry",
        "Diploblastic and Triploblastic",
        "Coelom",
        "Segmentation",
        "Notochord",
        "Porifera",
        "Cnidaria",
        "Ctenophora",
        "Platyhelminthes",
        "Aschelminthes",
        "Annelida",
        "Arthropoda",
        "Mollusca",
        "Echinodermata",
        "Hemichordata",
        "Chordata",
        "Vertebrate Classes"
      ]
    }
  });

  chapter.content.detailedNotes = {
    introduction:
      "The animal kingdom includes multicellular, eukaryotic and heterotrophic organisms. Animals show great diversity in body organisation, symmetry, body cavity and reproductive patterns.",

    sections: [
      {
        heading: "1. Basis of Classification",
        points: [
          "Level of organisation",
          "Body symmetry",
          "Number of germ layers",
          "Nature of body cavity or coelom",
          "Segmentation",
          "Presence or absence of notochord"
        ]
      },
      {
        heading: "2. Levels of Organisation",
        points: [
          "Cellular level: cells perform different functions without forming true tissues.",
          "Tissue level: similar cells form tissues.",
          "Organ level: different tissues form organs.",
          "Organ-system level: organs work together as systems."
        ]
      },
      {
        heading: "3. Body Symmetry",
        points: [
          "Asymmetrical: body cannot be divided into equal halves through any plane.",
          "Radial symmetry: body parts are arranged around a central axis.",
          "Bilateral symmetry: only one plane divides the body into equal halves."
        ]
      },
      {
        heading: "4. Germ Layers",
        points: [
          "Diploblastic animals have two germ layers: ectoderm and endoderm.",
          "Triploblastic animals have three germ layers: ectoderm, mesoderm and endoderm."
        ]
      },
      {
        heading: "5. Coelom",
        points: [
          "Acoelomates lack a body cavity.",
          "Pseudocoelomates have a body cavity not completely lined by mesoderm.",
          "Coelomates possess a true body cavity lined by mesoderm."
        ]
      },
      {
        heading: "6. Non-Chordates",
        points: [
          "Porifera: pore-bearing animals; examples Sycon and Spongilla.",
          "Cnidaria: possess cnidoblasts; examples Hydra and Aurelia.",
          "Ctenophora: commonly called comb jellies.",
          "Platyhelminthes: flatworms; examples Planaria and Taenia.",
          "Aschelminthes: roundworms; example Ascaris.",
          "Annelida: segmented worms; examples Earthworm and Nereis.",
          "Arthropoda: jointed appendages; examples Cockroach and Prawn.",
          "Mollusca: soft-bodied animals; examples Pila and Octopus.",
          "Echinodermata: spiny-skinned marine animals; examples Starfish and Sea urchin.",
          "Hemichordata: examples Balanoglossus."
        ]
      },
      {
        heading: "7. Chordata",
        points: [
          "Chordates possess a notochord at least during some stage of development.",
          "They have a dorsal hollow nerve cord.",
          "Pharyngeal gill slits occur at some stage.",
          "A post-anal tail is present at some stage."
        ]
      },
      {
        heading: "8. Vertebrate Classes",
        points: [
          "Cyclostomata: jawless vertebrates.",
          "Chondrichthyes: cartilaginous fishes.",
          "Osteichthyes: bony fishes.",
          "Amphibia: animals adapted to aquatic and terrestrial habitats.",
          "Reptilia: mostly dry, scaly-skinned vertebrates.",
          "Aves: birds with feathers.",
          "Mammalia: animals with mammary glands and hair."
        ]
      }
    ]
  };

  chapter.content.quickRevision = [
    "Porifera — Pore-bearing animals.",
    "Cnidaria — Cnidoblasts present.",
    "Ctenophora — Comb plates.",
    "Platyhelminthes — Flatworms.",
    "Aschelminthes — Roundworms.",
    "Annelida — Metameric segmentation.",
    "Arthropoda — Jointed appendages.",
    "Mollusca — Soft body.",
    "Echinodermata — Water vascular system.",
    "Chordata — Notochord present.",
    "Chondrichthyes — Cartilaginous fishes.",
    "Osteichthyes — Bony fishes.",
    "Aves — Feathers.",
    "Mammalia — Mammary glands."
  ];

  chapter.content.definitions = [
    {
      term: "Symmetry",
      meaning: "Arrangement of body parts around a plane or axis."
    },
    {
      term: "Coelom",
      meaning: "A body cavity between the body wall and gut wall, lined by mesoderm."
    },
    {
      term: "Diploblastic",
      meaning: "Animals having two embryonic germ layers."
    },
    {
      term: "Triploblastic",
      meaning: "Animals having three embryonic germ layers."
    },
    {
      term: "Notochord",
      meaning: "A supporting rod-like structure present in chordates."
    },
    {
      term: "Metamerism",
      meaning: "Division of the body into repeated segments."
    },
    {
      term: "Cnidoblast",
      meaning: "Specialised stinging cell found in cnidarians."
    },
    {
      term: "Water Vascular System",
      meaning: "A specialised hydraulic system found in echinoderms."
    }
  ];

  chapter.content.importantQuestions = [
    {
      question: "What are the main features of chordates?",
      answer: "Notochord, dorsal hollow nerve cord, paired pharyngeal gill slits and post-anal tail."
    },
    {
      question: "What is the difference between diploblastic and triploblastic animals?",
      answer: "Diploblastic animals have two germ layers, whereas triploblastic animals have three."
    },
    {
      question: "Which phylum has jointed appendages?",
      answer: "Arthropoda."
    },
    {
      question: "What is a true coelom?",
      answer: "A body cavity completely lined by mesoderm."
    },
    {
      question: "Which animals possess a water vascular system?",
      answer: "Members of Echinodermata."
    },
    {
      question: "Differentiate between Chondrichthyes and Osteichthyes.",
      answer: "Chondrichthyes are cartilaginous fishes, while Osteichthyes are bony fishes."
    }
  ];

  chapter.content.quizzes = [
    {
      id: "ak-q1",
      question: "Which phylum has jointed appendages?",
      options: [
        "Mollusca",
        "Arthropoda",
        "Annelida",
        "Porifera"
      ],
      answer: 1,
      explanation: "Jointed appendages are characteristic of Arthropoda."
    },
    {
      id: "ak-q2",
      question: "Which phylum possesses a water vascular system?",
      options: [
        "Cnidaria",
        "Mollusca",
        "Echinodermata",
        "Annelida"
      ],
      answer: 2,
      explanation: "The water vascular system is characteristic of echinoderms."
    },
    {
      id: "ak-q3",
      question: "Which of the following is a cartilaginous fish?",
      options: [
        "Rohu",
        "Shark",
        "Catla",
        "Flying fish"
      ],
      answer: 1,
      explanation: "Sharks belong to Chondrichthyes."
    },
    {
      id: "ak-q4",
      question: "Which germ layer is present in triploblastic animals?",
      options: [
        "Only ectoderm",
        "Ectoderm and endoderm",
        "Ectoderm, mesoderm and endoderm",
        "Only mesoderm"
      ],
      answer: 2,
      explanation: "Triploblastic animals have all three germ layers."
    },
    {
      id: "ak-q5",
      question: "Which phylum includes earthworms?",
      options: [
        "Annelida",
        "Arthropoda",
        "Mollusca",
        "Porifera"
      ],
      answer: 0,
      explanation: "Earthworms belong to phylum Annelida."
    }
  ];

  console.log("Biology Chapter 4 loaded:", chapter.title);

})();
       

/* ==========================================
   VIDYORA — CLASS 11 BIOLOGY
   CHAPTER 5: MORPHOLOGY OF FLOWERING PLANTS
   ========================================== */

(() => {

  const engine = window.VIDYORA_CHAPTERS;

  if (!engine) {
    console.error("VIDYORA Chapter Engine not found");
    return;
  }

  const chapter = engine.registerChapter({
    board: "cbse",
    classNumber: "11",
    subject: "biology",

    chapter: {
      id: "morphology-of-flowering-plants",
      number: 5,
      title: "Morphology of Flowering Plants",
      titleHindi: "पुष्पी पौधों की आकारिकी",

      topics: [
        "The Root",
        "The Stem",
        "The Leaf",
        "The Inflorescence",
        "The Flower",
        "The Fruit",
        "The Seed",
        "Semi-Technical Description",
        "Floral Formula",
        "Families of Flowering Plants"
      ]
    }
  });

  chapter.content.detailedNotes = {
    title: "Morphology of Flowering Plants",
    sections: [
      {
        heading: "Introduction",
        explanation:
          "Morphology is the study of the external structure and form of plants. Flowering plants have different vegetative and reproductive organs."
      },
      {
        heading: "The Root",
        points: [
          "The root usually develops from the radicle of the embryo.",
          "It generally grows underground and shows positive geotropism.",
          "Main functions include absorption of water and minerals and anchorage.",
          "Tap root system is commonly found in dicot plants.",
          "Fibrous root system is commonly found in monocot plants.",
          "Adventitious roots arise from parts other than the radicle."
        ]
      },
      {
        heading: "The Stem",
        points: [
          "The stem develops from the plumule.",
          "It bears branches, leaves, flowers and fruits.",
          "Nodes are the regions where leaves arise.",
          "Internodes are the regions between two nodes.",
          "Stems may be modified for storage, support, protection and photosynthesis."
        ]
      },
      {
        heading: "The Leaf",
        points: [
          "The leaf is a lateral, generally flattened structure.",
          "A typical leaf has leaf base, petiole and lamina.",
          "Venation may be reticulate or parallel.",
          "Phyllotaxy describes the arrangement of leaves on the stem.",
          "Leaves may be simple or compound."
        ]
      },
      {
        heading: "The Flower",
        points: [
          "A flower is the reproductive unit of angiosperms.",
          "A typical flower has four whorls: calyx, corolla, androecium and gynoecium.",
          "Calyx consists of sepals.",
          "Corolla consists of petals.",
          "Androecium is the male reproductive whorl.",
          "Gynoecium is the female reproductive whorl."
        ]
      },
      {
        heading: "The Fruit and Seed",
        points: [
          "The fruit generally develops from the ovary after fertilisation.",
          "The fruit wall is called the pericarp.",
          "A seed develops from the ovule.",
          "A typical seed contains a seed coat and an embryo."
        ]
      }
    ]
  };

  chapter.content.quickRevision = [
    "Morphology means study of external structure.",
    "Root develops from radicle.",
    "Stem develops from plumule.",
    "Nodes and internodes are parts of the stem.",
    "A typical leaf has leaf base, petiole and lamina.",
    "Phyllotaxy means arrangement of leaves.",
    "A flower has four main whorls.",
    "Fruit generally develops from ovary.",
    "Seed develops from ovule."
  ];

  chapter.content.definitions = [
    {
      term: "Morphology",
      meaning: "Study of the external form and structure of organisms."
    },
    {
      term: "Venation",
      meaning: "Arrangement of veins and veinlets in the leaf lamina."
    },
    {
      term: "Phyllotaxy",
      meaning: "Arrangement of leaves on the stem or branches."
    },
    {
      term: "Inflorescence",
      meaning: "Arrangement of flowers on the floral axis."
    },
    {
      term: "Aestivation",
      meaning: "Arrangement of sepals or petals in a floral bud."
    },
    {
      term: "Placentation",
      meaning: "Arrangement of ovules within the ovary."
    },
    {
      term: "Pericarp",
      meaning: "The wall of the fruit formed from the ovary wall."
    }
  ];

  chapter.content.importantQuestions = [
    {
      question: "What is morphology?",
      answer: "Morphology is the study of the external form and structure of plants."
    },
    {
      question: "Differentiate between tap root and fibrous root.",
      answer: "Tap roots have one main primary root, whereas fibrous roots consist of a cluster of roots of similar size."
    },
    {
      question: "What is phyllotaxy?",
      answer: "Phyllotaxy is the arrangement of leaves on the stem or branches."
    },
    {
      question: "Name the four floral whorls.",
      answer: "Calyx, corolla, androecium and gynoecium."
    },
    {
      question: "What is placentation?",
      answer: "Placentation is the arrangement of ovules within the ovary."
    }
  ];

  chapter.content.quizzes = [
    {
      id: "morphology-q1",
      question: "Which part of the embryo develops into the root?",
      options: ["Plumule", "Radicle", "Cotyledon", "Endosperm"],
      answer: 1,
      explanation: "The radicle develops into the root."
    },
    {
      id: "morphology-q2",
      question: "The stem develops from which part?",
      options: ["Radicle", "Plumule", "Ovule", "Ovary"],
      answer: 1,
      explanation: "The plumule develops into the stem."
    },
    {
      id: "morphology-q3",
      question: "The arrangement of leaves on the stem is called:",
      options: ["Venation", "Aestivation", "Phyllotaxy", "Placentation"],
      answer: 2,
      explanation: "Phyllotaxy describes leaf arrangement."
    },
    {
      id: "morphology-q4",
      question: "Which floral whorl is the female reproductive part?",
      options: ["Calyx", "Corolla", "Androecium", "Gynoecium"],
      answer: 3,
      explanation: "Gynoecium is the female reproductive whorl."
    },
    {
      id: "morphology-q5",
      question: "The ovule develops into:",
      options: ["Fruit", "Seed", "Flower", "Stem"],
      answer: 1,
      explanation: "After fertilisation, the ovule develops into a seed."
    }
  ];

  console.log("Chapter 5 Registered:", chapter.title);

})();
