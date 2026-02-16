import { Subject } from '../types';

export const MOCK_SUBJECTS: Subject[] = [
    {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science & Engineering",
    description: "An exploration of fundamental programming concepts, algorithms, and computational thinking using modern languages.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "BIO204",
    name: "Genetics and Heredity",
    department: "Biological Sciences",
    description: "A study of the mechanisms of inheritance, molecular biology of the gene, and population genetics in various organisms.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ECON302",
    name: "Macroeconomic Theory",
    department: "Economics",
    description: "Analysis of national income determination, inflation, unemployment, and the impact of fiscal and monetary policies on the global economy.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];
