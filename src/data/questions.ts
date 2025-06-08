import type { Question } from "../types/quizz";

export const QUESTIONS: Question[] = [
  {
    question:
      "When the tester verifies the test basis while designing tests early in the lifecycle, which test objective is being achieved?",
    options: [
      ["Gaining confidence", "Gaining confidence is indeed a test objective—but it's more relevant after the software has been implemented and tested successfully. For example, when all tests pass and no critical bugs are found, confidence in the quality of the product increases. However, in the early stages, when testers are reviewing the test basis, the goal is not to gain confidence, but rather to find issues in those documents."],
      ["Finding defects", "Yes, finding defects is an objective of testing, and when reviewing test basis, defects can be found. However, the primary purpose of verifying the test basis is broader—it’s to evaluate the quality and clarity of the work products, not just to find bugs. Finding defects is a result of the evaluation process, but not the main objective at that stage."],
      ["Evaluating work products", "correct"],
      ["Providing information for decision making", "Providing decision-making information is a higher-level test objective, often achieved after executing tests and analyzing results. In early stages, reviewing the test basis doesn’t directly provide management with decision-making data—it’s more focused on improving the quality of the artifacts before development begins."]
    ],
    correct: 2
  },
  {
    question:
      "In some Agile teams, people are encouraged to use their skills to help the team, regardless of their role. This could mean that testers help the developers write code and developers help testers test. What is this approach called?",
    options: [
      ["Team Aid", "Team Aid is not an established Agile term. It sounds supportive but is not recognized in Agile frameworks like Scrum, XP, or SAFe. It might seem plausible, but it's a distractor with no official meaning."],
      ["Whole Team", "correct"],
      ["Skills First", "Skills First may sound like an approach where people use their strongest skills, but it's not a formal Agile concept. Agile values cross-functionality, not just relying on specific individuals' primary skills. This choice misses the core Agile value of team collaboration."],
      ["First Aid", "First Aid refers to emergency medical help, and has no connection to Agile practices. This option is meant to be humorous or a clear distractor."]
    ],
    correct: 1
  },
  {
    question: "Which of the following is a correct statement?",
    options: [
      ["A developer makes a mistake which causes a defect that may be seen as a failure during dynamic testing", "correct"],
      ["A developer makes an error which results in a failure that may be seen as a fault when the software is executed", "This reverses the chain. A failure happens after a fault (defect) is executed. Also, a fault is not something you “see” — it's the cause of a failure, not a visible result."],
      ["A developer has introduced a failure which results in a defect that may be seen as a mistake during dynamic testing", "This reverses everything: A developer cannot introduce a failure directly; failures only occur when a defect is executed. Defects don’t result in mistakes. Mistakes are made by humans, not observed during dynamic testing."],
      ["A developer makes a mistake which causes a bug that may be seen as a defect when the software is executed", "While the terms bug and defect are often used interchangeably, this option suggests that a bug becomes a defect, which is redundant. Also, defects are not seen during execution — failures are. The defect is the cause, not the observed result."]
    ],
    correct: 0
  },
  {
    question: "Why is it important to avoid the principle of tests wearing out?",
    options: [
      ["Dynamic testing is less reliable in finding bugs", "Dynamic testing (i.e., testing by running the software) is very effective at finding bugs. This option is a false generalization and not related to the idea of tests wearing out."],
      ["Running the same tests repeatedly will consistently find new failures", "This is the opposite of what happens. If a test has already passed many times, it is unlikely to find new failures unless the system has changed. That’s the entire point of the tests wear out principle — repeating the same tests yields diminishing returns."],
      ["Tests should not be context dependent", "This is unrelated to the principle being discussed. While context independence can be a goal in test design, it doesn't address the issue of repetitive testing becoming less effective over time."],
      ["Running the same tests repeatedly will reduce the chance of finding new failures", "correct"]
    ],
    correct: 3
  },
  {
    question:
      "When following a standard test process, when should the test control activity take place?",
    options: [
      ["During the planning activities", "Test control starts in planning but doesn’t stop there. Limiting it to planning only ignores its critical role during execution and monitoring."],
      ["During the implementation and execution activities", "While test control is important during these phases, it also needs to happen during planning and monitoring phases."],
      ["During the monitoring activities", "Test control and monitoring are related but not the same. Control involves taking action based on monitoring data. Limiting control to monitoring only misses its role in earlier phases."],
      ["During all the activities", "correct"]
    ],
    correct: 3
  },
  {
    question:
      "Which of the following is the activity that compares the planned test progress to the actual test progress?",
    options: [
      ["Test monitoring", "correct"],
      ["Test planning", "This is about defining what to test, how to test, resources, schedules, etc. It happens before monitoring."],
      ["Test closure", "This happens at the end of testing, when results are finalized and lessons learned are documented."],
      ["Test control", "Control is the response activity that acts upon information gathered during monitoring, not the comparison itself."]
    ],
    correct: 0
  },
  {
    question:
      "If you are working on a project that is constrained by time and budget, which is pressuring testing to be done quickly. How should the test approach be adjusted?",
    options: [
      ["Develop detailed test cases to reduce the test automation effort", "Creating detailed test cases is time-consuming and contradicts the goal of speeding up testing. Also, detailed test cases do not necessarily reduce automation effort; automation requires its own scripts and maintenance."],
      ["Use techniques such as exploratory and checklist testing to spend less time on test case development", "correct"],
      ["Ensure that your testing starts only after the developers have completed integration tests", "Waiting until developers finish integration testing delays the start of your testing, which is not good when you’re pressured for time."],
      ["Develop end-to-end test automation before performing manual testing so the automation can be used sooner", "Developing end-to-end automation takes a lot of time upfront and may not be feasible under strict time and budget constraints. Manual testing or lightweight techniques can deliver faster feedback."]
    ],
    correct: 1
  },
  {
    question: "What is the biggest problem with a developer testing his own code?",
    options: [
      [
        "Developers are not good testers",
        "Developers can be good testers, especially of unit tests."
      ],
      [
        "Developers are not quality focused",
        "Many developers care deeply about quality."
      ],
      [
        "Developers are not objective about their own code",
        "Correct. It’s difficult to critically test your own work due to bias or assumptions."
      ],
      [
        "Developers do not have time to test their own code",
        "While time may be a factor, the main issue is lack of objectivity."
      ]
    ],
    correct: 2
  },
  {
    question: "Which of the following is an example of a good testing practice?",
    options: [
      [
        "Testers should have development experience",
        "Helpful, but not essential or required. Also not specific to test process quality."
      ],
      [
        "Developers should determine the order of test execution in the test procedures",
        "This is typically the tester's responsibility. Developer input is welcome but not a best practice."
      ],
      [
        "Test design should begin when the code is complete to avoid changes",
        "Waiting delays test design and contradicts shift-left testing principles."
      ],
      [
        "Testers should review requirements documents as soon as a readable draft is available",
        "Correct. Early reviews help identify issues early, improving quality and saving time."
      ]
    ],
    correct: 3
  },
  {
    question: "During which level(s) of testing should non-functional tests be executed?",
    options: [
      [
        "Unit and integration only",
        "Too narrow. Non-functional tests are not typically effective at the unit level."
      ],
      [
        "System testing only",
        "Non-functional testing is common at system level, but not exclusive to it."
      ],
      [
        "Integration, system and acceptance only",
        "Closer, but still excludes unit level where basic performance metrics might be gathered."
      ],
      [
        "Unit, integration, system and acceptance only",
        "Correct. Non-functional testing can occur at all levels depending on goals and feasibility."
      ]
    ],
    correct: 3
  },
  {
    question: "What is the primary reason to get early and frequent feedback from stakeholders regarding a product being developed?",
    options: [
      [
        "To make them feel involved",
        "Involvement is good, but it is not the primary purpose of feedback."
      ],
      [
        "To ensure that their vision for the product will be realized",
        "Correct. Early feedback ensures that the product is aligned with stakeholder expectations."
      ],
      [
        "To create more meetings",
        "Clearly incorrect and not a benefit."
      ],
      [
        "To use the stakeholders as testers",
        "Stakeholders can test, but the main goal is aligning product goals—not using them as testers."
      ]
    ],
    correct: 1
  },
  {
  question: "Which of the following is a benefit of static analysis?",
  options: [
    ["Defects can be identified that might not be caught by dynamic testing", "Static analysis can detect issues before the code is executed."],
    ["Early defect identification requires less documentation", "Documentation needs remain the same regardless of when defects are found."],
    ["Early execution of the code provides a gauge of code quality", "Static analysis does not require code execution."],
    ["Tools are not needed because reviews are used instead of executing code", "Static analysis uses tools to analyze code without executing it."]
  ],
  correct: 0
},
{
  question: "For a formal review, at what point in the process are the exit criteria defined?",
  options: [
    ["Planning", "Exit criteria are defined during the planning phase of a formal review."],
    ["Review initiation", "This phase involves informing stakeholders and setting up the review, not defining criteria."],
    ["Individual review", "Reviewers examine the product individually during this phase."],
    ["Fixing and reporting", "This phase happens after review findings are recorded and fixed."]
  ],
  correct: 0
},
{
  question: "Which of the following is a good reason to use experience-based testing?",
  options: [
    ["You can find defects that might be missed by more formal techniques", "Experience-based techniques often reveal edge cases and unexpected behaviors."],
    ["You can test for defects that only experienced users would encounter", "Partially true, but not the best overall reason."],
    ["You can target the developer’s efforts to the areas that users will be more likely to use", "This is more relevant to usage-based testing, not specifically experience-based."],
    ["It is supported by strong tools and can be automated", "Experience-based testing is typically manual and informal."]
  ],
  correct: 0
},
{
  question: "What is error guessing?",
  options: [
    ["A testing technique used to guess where a developer is likely to have made a mistake", "This technique relies on the tester's intuition and experience to predict where defects may be."],
    ["A technique used for assessing defect metrics", "This is related to metrics and reporting, not guessing errors."],
    ["A development technique to verify that all error paths have been coded", "This is a development activity, not a testing technique."],
    ["A planning technique used to anticipate likely schedule variances due to faults", "This relates to project planning, not error guessing."]
  ],
  correct: 0
},
{
  question: "You are working in a team of testers who are all writing test cases. You have noticed that there is a significant inconsistency with the length and amount of detail in the different test cases. Where should the criteria for test case writing be documented?",
  options: [
    ["The test plan", "The test plan typically includes standards and criteria for how test cases should be written."],
    ["The test approach", "The test approach describes the testing strategy but not detailed case-writing guidelines."],
    ["The test case template", "The template helps standardize format but not the writing rules or quality expectations."],
    ["The project plan", "This document manages project tasks and timelines, not test case writing rules."]
  ],
  correct: 0
},
{
  question: "You have been testing software that will be used to track credit card purchases. You have found a defect that causes the system to crash, but only if a person has made and voided 10 purchases in a row. What is the proper priority and severity rating for this defect?",
  options: [
    ["Priority high, severity high", "A crash is severe, but the situation is rare, so high priority may not apply."],
    ["Priority high, severity low", "Low severity for a crash is inaccurate."],
    ["Priority low, severity low", "A crash is not low severity even if it’s rare."],
    ["Priority low, severity high", "The defect causes a crash (high severity), but it's rare (low priority)."]
  ],
  correct: 3
},
{
  question: "Which of the following is a benefit of test automation?",
  options: [
    ["Test execution is faster", "Automation enables tests to run more quickly and frequently."],
    ["Manual testing becomes obsolete", "Manual testing is still necessary for exploratory and usability testing."],
    ["ROI is easy to determine", "ROI can be complex to calculate due to upfront costs."],
    ["Test implementation is faster", "Implementing automated tests can initially take more time."]
  ],
  correct: 0
},
{
  question: "Usability testing is an example of which type of testing?",
  options: [
    ["Functional", "Functional testing focuses on what the system does, not usability."],
    ["Non-functional", "Usability is a non-functional attribute focused on user experience."],
    ["Structural", "Structural testing involves code structure, not user experience."],
    ["Change-related", "Usability is not related to change-related testing."]
  ],
  correct: 1
},
{
  question: "You work as a tester on a project on a mobile application for food ordering for one of your clients. The client sent you a list of requirements. One of them, with high priority, says “The order must be processed in less than 10 seconds in 95% of the cases”. You created a set of test cases in which a number of random orders were made, the processing time measured, and the test results were checked against the requirements. What test type did you perform?",
  options: [
    ["Functional, because the test cases cover the user’s business requirement for the system", "The requirement relates to performance, which is non-functional."],
    ["Non-functional, because they measure the system’s performance", "Performance requirements are considered non-functional."],
    ["Functional, because the test cases interact with the user interface", "Interaction with UI doesn’t necessarily define the test type."],
    ["White-box, because we need to know the internal structure of the program to measure the order processing time", "White-box refers to testing code logic; this scenario is black-box."]
  ],
  correct: 1
},
{
  question: "Which of the following BEST fits as an element of the checklist used in checklist-based testing?",
  options: [
    ["The developer made an error when implementing the code", "This is a cause, not a checklist item."],
    ["The achieved statement coverage exceeds 85%", "This is a metric, not a checklist element."],
    ["The program works correctly regarding functional and non-functional requirements", "Too broad and vague for a checklist item."],
    ["The error messages are written in language that the user can understand", "This is a concrete, testable condition appropriate for a checklist."]
  ],
  correct: 3
},
{
  question: "What is the key objective of the shift-left testing approach?",
  options: [
    ["To perform acceptance testing earlier in the development cycle", "Acceptance testing is not the only focus of shift-left."],
    ["To detect and prevent defects as early as possible", "Shift-left aims to catch issues earlier by starting testing activities sooner."],
    ["To reduce the need for developer involvement in testing", "Shift-left encourages more collaboration, not less."],
    ["To delay integration until all modules are complete", "This goes against the early-testing goal of shift-left."]
  ],
  correct: 1
},
{
  question: "Which practice best illustrates the shift-left principle?",
  options: [
    ["Reviewing the specification for defects before development begins", "Early review and feedback help prevent defects, supporting shift-left."],
    ["Performing user acceptance testing after release", "This is too late in the lifecycle for shift-left."],
    ["Conducting manual system testing post-deployment", "Shift-left promotes earlier testing, not post-deployment testing."],
    ["Running security scans during production", "Production scans are too late to be considered shift-left."]
  ],
  correct: 0
},
{
  question: "Which development approaches inherently apply shift-left testing?",
  options: [
    ["Waterfall and V-Model", "These are more traditional and often shift testing to later stages."],
    ["Spiral and RAD", "These may involve iterations but don't inherently enforce early testing."],
    ["TDD, ATDD, and BDD", "These approaches start testing early, often before code is written."],
    ["Agile and DevOps", "They support early testing but shift-left is more embedded in TDD, ATDD, and BDD."]
  ],
  correct: 2
},
{
  question: "Why is stakeholder buy-in important for shift-left testing?",
  options: [
    ["It guarantees code coverage of 100%", "Code coverage is a technical metric and not guaranteed by stakeholder support."],
    ["It ensures early testing is prioritized and supported", "Stakeholders need to support early testing efforts to make shift-left effective."],
    ["It eliminates the need for defect tracking tools", "Defect tracking is still essential regardless of stakeholder support."],
    ["It removes the need for developer involvement in testing", "Developers are still actively involved in shift-left testing."]
  ],
  correct: 1
},
{
  question: "Which of the following is NOT an example of shift-left testing?",
  options: [
    ["Static analysis of source code during development", "This is a classic example of early testing."],
    ["Running system tests after all features are completed", "This is late-stage testing and not shift-left."],
    ["Reviewing user stories during backlog grooming", "Early review aligns with shift-left."],
    ["Writing component-level performance tests early", "Early component testing supports shift-left."]
  ],
  correct: 1
},
{
  question: "How does CI (Continuous Integration) enable shift-left testing?",
  options: [
    ["By delaying testing until deployment", "This contradicts the concept of CI and shift-left."],
    ["By avoiding test automation", "CI depends heavily on automation for feedback."],
    ["By integrating code with automated tests for fast feedback", "Automated tests in CI provide early defect detection, supporting shift-left."],
    ["By running only UI tests in production", "This is too late and not the goal of CI."]
  ],
  correct: 2
},
{
  question: "Which is a challenge often associated with shift-left testing?",
  options: [
    ["Requires upfront investment in training and tools", "Adopting shift-left involves early planning, tools, and training investment."],
    ["Leads to poor test documentation", "Shift-left does not inherently reduce documentation quality."],
    ["Increases bugs in production", "Shift-left reduces bugs by catching them early."],
    ["Prevents reuse of test cases", "Test cases can still be reused with shift-left."]
  ],
  correct: 0
},
{
  question: "What does shift-left encourage with respect to test case design?",
  options: [
    ["Write test cases only after the code is fully tested", "This is too late and not in line with shift-left."],
    ["Write test cases before or during development", "Designing test cases early ensures better coverage and early defect detection."],
    ["Skip test case design in favor of exploratory testing", "Exploratory testing complements but doesn’t replace planned test cases."],
    ["Focus only on system-level test cases", "Shift-left promotes earlier testing at all levels."]
  ],
  correct: 1
},
{
  question: "Which testing activity supports shift-left in non-functional testing?",
  options: [
    ["Executing performance tests only in staging", "Staging is too late for shift-left."],
    ["Running performance tests at component level", "Running such tests early supports shift-left."],
    ["Performing usability testing after UAT", "This is too late in the cycle."],
    ["Deferring load testing until deployment", "Deferring contradicts shift-left principles."]
  ],
  correct: 1
},
{
  question: "Which statement reflects a misunderstanding of shift-left testing?",
  options: [
    ["Testing should begin as early as the requirements phase", "This is aligned with shift-left principles."],
    ["Testers should be involved in reviewing drafts and specifications", "Early involvement is part of shift-left."],
    ["Testing is only effective once all code has been written", "This contradicts shift-left’s goal of early testing."],
    ["Writing automated unit tests before coding aligns with shift-left", "This supports the shift-left methodology."]
  ],
  correct: 2
}
];
