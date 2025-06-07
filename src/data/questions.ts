import type { Question } from "../types/quizz"

export const QUESTIONS: Question[] = [
    {
        question: "When the tester verifies the test basis while designing tests early in the lifecycle, which test objective is being achieved?",
        options: [
            "Gaining confidence", 
            "Finding defects", 
            "Evaluating work products", 
            "Providing information for decision making"
        ],
        correct: 2
    },
    {
        question: "In some Agile teams, people are encouraged to use their skills to help the team, regardless of their role. This could mean that testers help the developers write code and developers help testers test. What is this approach called?",
        options: [
            "Team Aid", 
            "Whole Team", 
            "Skills First", 
            "First Aid"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a correct statement?",
        options: [
            "A developer makes a mistake which causes a defect that may be seen as a failure during dynamic testing", 
            "A developer makes an error which results in a failure that may be seen as a fault when the software is executed", 
            "A developer has introduced a failure which results in a defect that may be seen as a mistake during dynamic testing", 
            "A developer makes a mistake which causes a bug that may be seen as a defect when the software is executed"
        ],
        correct: 0
    },
    {
        question: "Why is it important to avoid the principle of tests wearing out?",
        options: [
            "Dynamic testing is less reliable in finding bugs", 
            "Running the same tests repeatedly will consistently find new failures", 
            "Tests should not be context dependent", 
            "Running the same tests repeatedly will reduce the chance of finding new failures"
        ],
        correct: 3
    },
    {
        question: "When following a standard test process, when should the test control activity take place?",
        options: [
            "During the planning activities", 
            "During the implementation and execution activities", 
            "During the monitoring activities", 
            "During all the activities"
        ],
        correct: 3
    },
    {
        question: "Which of the following is the activity that compares the planned test progress to the actual test progress?",
        options: [
            "Test monitoring", 
            "Test planning", 
            "Test closure", 
            "Test control"
        ],
        correct: 0
    },
    {
        question: "If you are working on a project that is constrained by time and budget, which is pressuring testing to be done quickly. How should the test approach be adjusted?",
        options: [
            "Develop detailed test cases to reduce the test automation effort", 
            "Use techniques such as exploratory and checklist testing to spend less time on test case development", 
            "Ensure that your testing starts only after the developers have completed integration tests", 
            "Develop end-to-end test automation before performing manual testing so the automation can be used sooner"
        ],
        correct: 1
    },
    {
        question: "What is the biggest problem with a developer testing his own code?",
        options: [
            "Developers are not good testers", 
            "Developers are not quality focused", 
            "Developers are not objective about their own code", 
            "Developers do not have time to test their own code"
        ],
        correct: 2
    },
    {
        question: "Which of the following is an example of a good testing practice?",
        options: [
            "Testers should have development experience", 
            "Developers should determine the order of test execution in the test procedures", 
            "Test design should begin when the code is complete to avoid changes", 
            "Testers should review requirements documents as soon as a readable draft is available"
        ],
        correct: 3
    },
    {
        question: "During which level(s) of testing should non-functional tests be executed?",
        options: [
            "Unit and integration only", 
            "System testing only", 
            "Integration, system and acceptance only", 
            "Unit, integration, system and acceptance only"
        ],
        correct: 3
    },
    {
        question: "What is the primary reason to get early and frequent feedback from stakeholders regarding a product being developed?",
        options: [
            "To make them feel involved", 
            "To ensure that their vision for the product will be realized", 
            "To create more meetings", 
            "To use the stakeholders as testers"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a benefit of static analysis?",
        options: [
            "Defects can be identified that might not be caught by dynamic testing", 
            "Early defect identification requires less documentation", 
            "Early execution of the code provides a gauge of code quality", 
            "Tools are not needed because reviews are used instead of executing code"
        ],
        correct: 0
    },
    {
        question: "For a formal review, at what point in the process are the exit criteria defined?",
        options: [
            "Planning", 
            "Review initiation", 
            "Individual review", 
            "Fixing and reporting"
        ],
        correct: 0
    },
    {
        question: "Which of the following is a good reason to use experience-based testing?",
        options: [
            "You can find defects that might be missed by more formal techniques", 
            "You can test for defects that only experienced users would encounter", 
            "You can target the developer’s efforts to the areas that users will be more likely to use", 
            "It is supported by strong tools and can be automated"
        ],
        correct: 0
    },
    {
        question: "What is error guessing?",
        options: [
            "A testing technique used to guess where a developer is likely to have made a mistake", 
            "A technique used for assessing defect metrics", 
            "A development technique to verify that all error paths have been coded", 
            "A planning technique used to anticipate likely schedule variances due to faults"
        ],
        correct: 0
    },
    {
        question: "You are working in a team of testers who are all writing test cases. You have noticed that there is a significant inconsistency with the length and amount of detail in the different test cases. Where should the criteria for test case writing be documented?",
        options: [
            "The test plan", 
            "The test approach", 
            "The test case template", 
            "The project plan"
        ],
        correct: 0
    },
    {
        question: "You have been testing software that will be used to track credit card purchases. You have found a defect that causes the system to crash, but only if a person has made and voided 10 purchases in a row. What is the proper priority and severity rating for this defect?",
        options: [
            "Priority high, severity high", 
            "Priority high, severity low", 
            "Priority low, severity low", 
            "Priority low, severity high"
        ],
        correct: 3
    },
    {
        question: "Which of the following is a benefit of test automation?",
        options: [
            "Test execution is faster", 
            "Manual testing becomes obsolete", 
            "ROI is easy to determine", 
            "Test implementation is faster"
        ],
        correct: 0
    },
    {
        question: "Usability testing is an example of which type of testing?",
        options: [
            "Functional", 
            "Non-functional", 
            "Structural", 
            "Change-related"
        ],
        correct: 1
    },
    {
        question: "You work as a tester on a project on a mobile application for food ordering for one of your clients. The client sent you a list of requirements. One of them, with high priority, says “The order must be processed in less than 10 seconds in 95% of the cases”. You created a set of test cases in which a number of random orders were made, the processing time measured, and the test results were checked against the requirements. What test type did you perform?",
        options: [
            "Functional, because the test cases cover the user’s business requirement for the system", 
            "Non-functional, because they measure the system’s performance", 
            "Functional, because the test cases interact with the user interface", 
            "White-box, because we need to know the internal structure of the program to measure the order processing time"
        ],
        correct: 1
    },
    {
        question: "Which of the following BEST fits as an element of the checklist used in checklist-based testing?",
        options: [
            "The developer made an error when implementing the code", 
            "The achieved statement coverage exceeds 85%", 
            "The program works correctly regarding functional and non-functional requirements", 
            "The error messages are written in language that the user can understand"
        ],
        correct: 3
    },
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
    }
]