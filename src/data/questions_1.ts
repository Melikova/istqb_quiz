import type { Question } from "../types/quizz" 

export const QUESTIONS_1: Question[] = [
    {
        question: "What is the key objective of the shift-left testing approach?",
        options: [
            "To perform acceptance testing earlier in the development cycle", 
            "To detect and prevent defects as early as possible", 
            "To reduce the need for developer involvement in testing", 
            "To delay integration until all modules are complete"
        ],
        correct: 1
    },
    {
        question: "Which practice best illustrates the shift-left principle?",
        options: [
            "Reviewing the specification for defects before development begins", 
            "Performing user acceptance testing after release", 
            "Conducting manual system testing post-deployment", 
            "Running security scans during production"
        ],
        correct: 0
    },
    {
        question: "Which development approaches inherently apply shift-left testing?",
        options: [
            "Waterfall and V-Model", 
            "Spiral and RAD", 
            "TDD, ATDD, and BDD", 
            "Agile and DevOps"
        ],
        correct: 2
    },
    {
        question: "Why is stakeholder buy-in important for shift-left testing?",
        options: [
            "It guarantees code coverage of 100%", 
            "It ensures early testing is prioritized and supported", 
            "It eliminates the need for defect tracking tools", 
            "It removes the need for developer involvement in testing"
        ],
        correct: 1
    },
    {
        question: "Which of the following is NOT an example of shift-left testing?",
        options: [
            "Static analysis of source code during development", 
            "Running system tests after all features are completed", 
            "Reviewing user stories during backlog grooming", 
            "Writing component-level performance tests early"
        ],
        correct: 1
    },
    {
        question: "How does CI (Continuous Integration) enable shift-left testing?",
        options: [
            "By delaying testing until deployment", 
            "By avoiding test automation", 
            "By integrating code with automated tests for fast feedback", 
            "By running only UI tests in production"
        ],
        correct: 2
    },
    {
        question: "Which is a challenge often associated with shift-left testing?",
        options: [
            "Requires upfront investment in training and tools", 
            "Leads to poor test documentation", 
            "Increases bugs in production", 
            "Prevents reuse of test cases"
        ],
        correct: 0
    },
    {
        question: "What does shift-left encourage with respect to test case design?",
        options: [
            "Write test cases only after the code is fully tested", 
            "Write test cases before or during development", 
            "Skip test case design in favor of exploratory testing", 
            "Focus only on system-level test cases"
        ],
        correct: 1
    },
    {
        question: "Which testing activity supports shift-left in non-functional testing?",
        options: [
            "Executing performance tests only in staging", 
            "Running performance tests at component level", 
            "Performing usability testing after UAT", 
            "Deferring load testing until deployment"
        ],
        correct: 1
    },
    {
        question: "Which statement reflects a misunderstanding of shift-left testing?",
        options: [
            "Testing should begin as early as the requirements phase", 
            "Testers should be involved in reviewing drafts and specifications", 
            "Testing is only effective once all code has been written", 
            "Writing automated unit tests before coding aligns with shift-left"
        ],
        correct: 2
    },
]
