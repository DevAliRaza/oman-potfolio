export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
  verifyUrl?: string;
  linkedinUrl?: string;
  category: "certification" | "recognition" | "publication";
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  date: string;
  abstract: string;
  keywords: string[];
  doiUrl: string;
  image?: string;
  category: "publication";
}

export type AchievementItem = Achievement | Publication;

export const certifications: Achievement[] = [
  {
    title: "IBM AI Developer Professional Certificate",
    issuer: "IBM / Coursera",
    date: "20 June 2025",
    description:
      "Professional programme covering design, development and deployment of AI-powered applications — generative AI, LLM integration, Python for AI, and end-to-end AI solutions. Credly-verified.",
    image: "/images/achievements/ibm-ai-developer.jpeg",
    verifyUrl:
      "https://www.credly.com/badges/9925ab67-37af-4428-9a84-84da1619c561",
    category: "certification",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford Online / DeepLearning.AI",
    date: "25 February 2025",
    description:
      "Three-course specialisation: supervised learning, neural networks, unsupervised learning, recommender systems and reinforcement learning. Instructor: Andrew Ng.",
    image: "/images/achievements/ml-specialization.jpeg",
    verifyUrl:
      "https://coursera.org/verify/specialization/81RVNLR6TVEW",
    category: "certification",
  },
  {
    title:
      "Generative AI Application Developer Certificate — Top Performer",
    issuer: "Pak Angels / iCode Guru / Aspire Pakistan",
    date: "28 August 2025",
    description:
      "Practical GenAI application development. Recognised as Top Performer of the cohort. Training: June–July 2025.",
    image: "/images/achievements/genai-top-performer.png",
    category: "certification",
  },
];

export const recognitions: Achievement[] = [
  {
    title: "Winner — Robotics Competition",
    issuer: "IEEE Society, UET Rachna College of Engineering and Technology (RCET)",
    date: "2023",
    description:
      "First place — hands-on robotics engineering under time-bounded competitive conditions.",
    linkedinUrl: "https://lnkd.in/p/dXhkCfd7",
    category: "recognition",
  },
  {
    title: "Certificate of Recognition — Distinguished Guest",
    issuer: "IEEE ComSoc Lahore Chapter / KICS, UET Lahore",
    date: "26 December 2024",
    description:
      "Distinguished Guest at IEEE ComSoc Lahore Chapter Annual Meet-Up 2024, UET Lahore / KICS.",
    image: "/images/achievements/ieee-comsoc-recognition.png",
    linkedinUrl: "https://lnkd.in/p/d4xPhc_H",
    category: "recognition",
  },
];

export const publications: Publication[] = [
  {
    title:
      "Development of an AI-Powered Assistive Wearable Prototype Enabling Visual Interpretation and Contextual Verbal Feedback",
    authors: "Oman Khalid Butt, Abdullah Khan, Saad Rehman Babary",
    venue:
      "Spectrum of Engineering Sciences (SES), Vol. 4, No. 1, pp. 288–297",
    date: "20 January 2026",
    abstract:
      "The study presents the development of an AI-powered assistive wearable prototype designed to enhance environmental understanding through real-time visual interpretation and contextual verbal feedback. The system combines on-device visual perception with spoken interaction to detect obstacles, recognise everyday objects and convey relevant information to users in an intuitive, context-aware manner. Emphasis is placed on low-cost hardware selection, energy efficiency and wearable form factor to ensure practicality for daily use. Evaluation through controlled experiments and real-world testing with visually impaired participants indicates improved navigation confidence and environmental awareness while maintaining affordability and responsiveness.",
    keywords: [
      "Artificial intelligence",
      "Assistive wearable technology",
      "Visual impairment",
      "Edge computing",
      "Context-aware verbal feedback",
    ],
    doiUrl: "https://doi.org/10.5281/zenodo.18308529",
    category: "publication",
  },
  {
    title:
      "Comparative Analysis of Wired Communication Methods for Smart Grid Applications: Performance, Scalability, Reliability and Cost",
    authors:
      "Abdul Rafay, Uzair Khan, Abbas Jveed, Oman Khalid Butt, Haad Ahmad, Moazzam Shehzad",
    venue: "Global Conference on Advanced Science and Technology (GCAST) — Spring 2025 Proceedings",
    date: "29 April 2025",
    abstract:
      "The paper examines the wired communication infrastructure required for smart-grid systems and addresses a gap in prior work that focuses on small-scale networks and wireless solutions. The authors provide an extensive comparison between multiple wired communication methods, evaluating cost, performance, scalability and reliability. Findings indicate that fibre optics delivers superior performance at high cost, Ethernet ensures reliability at substations, DSL offers an affordable solution for advanced metering despite higher latency, and power-line communication effectively supports metering and monitoring applications.",
    keywords: [
      "Smart grid",
      "Wired communication",
      "Fibre optics",
      "Ethernet",
      "DSL",
      "Power-line communication",
    ],
    doiUrl:
      "https://proceedings.gcast.org/index.php/pr/article/view/1",
    image: "/images/achievements/gcast-proceedings.png",
    category: "publication",
  },
];
