import type { Question } from "../types/quizz";

export const QUESTIONS: Question[] = [
  {
    id: 1, 
    topicId: "what-is-testing",
    question:
      "When the tester verifies the test basis while designing tests early in the lifecycle, which test objective is being achieved?",
    options: [
      ["Gaining confidence", "Gaining confidence is indeed a test objective—but it's more relevant after the software has been implemented and tested successfully. For example, when all tests pass and no critical bugs are found, confidence in the quality of the product increases. However, in the early stages, when testers are reviewing the test basis, the goal is not to gain confidence, but rather to find issues in those documents."],
      ["Finding defects", "Yes, finding defects is an objective of testing, and when reviewing test basis, defects can be found. However, the primary purpose of verifying the test basis is broader—it’s to evaluate the quality and clarity of the work products, not just to find bugs. Finding defects is a result of the evaluation process, but not the main objective at that stage."],
      ["Evaluating work products", "correct"],
      ["Providing information for decision making", "Providing decision-making information is a higher-level test objective, often achieved after executing tests and analyzing results. In early stages, reviewing the test basis doesn’t directly provide management with decision-making data—it’s more focused on improving the quality of the artifacts before development begins."]
    ],
    keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>One of the key objectives of testing is to evaluate work products:</b><br> This means assessing documents like requirements, design specifications, and models early in the lifecycle to improve their quality.</li>\
<li class='mb-2'><b>Testers can detect issues before code is written:</b><br> By reviewing the test basis early (e.g., requirements), testers help prevent defects from being introduced in the first place.</li>\
<li class='mb-2'><b>This activity is called static testing:</b><br> It includes techniques such as reviews, walkthroughs, and inspections—used to evaluate work products without executing code.</li>\
<li class='mb-2'><b>Finding defects may be a result, but not the core goal here:</b><br> The main objective is to evaluate and improve the quality and clarity of the documentation and other test basis artifacts.</li>\
<li class='mb-2'><b>Gaining confidence and providing decision-making support</b> typically happen later—<br> after executing tests and analyzing outcomes. Early reviews are about evaluating inputs, not outputs.</li>\
</ul>",
    correct: 2
  },
  {
    id: 2, 
    topicId: "testing-skills-practices",
    question:
      "In some Agile teams, people are encouraged to use their skills to help the team, regardless of their role. This could mean that testers help the developers write code and developers help testers test. What is this approach called?",
    options: [
      ["Team Aid", "Team Aid is not an established Agile term. It sounds supportive but is not recognized in Agile frameworks like Scrum, XP, or SAFe. It might seem plausible, but it's a distractor with no official meaning."],
      ["Whole Team", "correct"],
      ["Skills First", "Skills First may sound like an approach where people use their strongest skills, but it's not a formal Agile concept. Agile values cross-functionality, not just relying on specific individuals' primary skills. This choice misses the core Agile value of team collaboration."],
      ["First Aid", "First Aid refers to emergency medical help, and has no connection to Agile practices. This option is meant to be humorous or a clear distractor."]
    ],
    keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>“Whole Team” is a core Agile principle:</b><br> It emphasizes that all members of the team, regardless of role, contribute to quality and project success collaboratively.</li>\
<li class='mb-2'><b>Cross-functional collaboration is encouraged:</b><br> Testers may help with development tasks, and developers may support testing, breaking traditional role silos.</li>\
<li class='mb-2'><b>This approach improves communication, reduces handoffs, and increases shared ownership:</b><br> Everyone is responsible for quality, not just testers.</li>\
</ul>",
    correct: 1
  },
  {
    id: 3, 
    topicId: "why-testing-necessary",
    question: "Which of the following is a correct statement?",
    options: [
      ["A developer makes a mistake which causes a defect that may be seen as a failure during dynamic testing", "correct"],
      ["A developer makes an error which results in a failure that may be seen as a fault when the software is executed", "This reverses the chain. A failure happens after a fault (defect) is executed. Also, a fault is not something you “see” — it's the cause of a failure, not a visible result."],
      ["A developer has introduced a failure which results in a defect that may be seen as a mistake during dynamic testing", "This reverses everything: A developer cannot introduce a failure directly; failures only occur when a defect is executed. Defects don’t result in mistakes. Mistakes are made by humans, not observed during dynamic testing."],
      ["A developer makes a mistake which causes a bug that may be seen as a defect when the software is executed", "While the terms bug and defect are often used interchangeably, this option suggests that a bug becomes a defect, which is redundant. Also, defects are not seen during execution — failures are. The defect is the cause, not the observed result."]
    ],
    keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>Mistake → Defect → Failure is the correct sequence:</b><br> A human <i>makes a mistake</i> (also called an <i>error</i>), which introduces a <i>defect (fault)</i> into the code, which may lead to a <i>failure</i> when the software is executed.</li>\
<li class='mb-2'><b>An error is a synonym for a mistake:</b><br> It refers to a human action that leads to incorrect results — such as misunderstanding a requirement or making a logic error in code.</li>\
<li class='mb-2'><b>A defect (or fault, or bug) is the result of that mistake in the software:</b><br> It exists in the code or documentation and may not immediately cause a visible issue.</li>\
<li class='mb-2'><b>A failure occurs when the defect is executed and causes incorrect behavior:</b><br> Failures are what testers observe during dynamic testing.</li>\
</ul>",
    correct: 0
  },
  {
    id:4,
    topicId: "testing-principles",
    question: "Why is it important to avoid the principle of tests wearing out?",
    options: [
      ["Dynamic testing is less reliable in finding bugs", "Dynamic testing (i.e., testing by running the software) is very effective at finding bugs. This option is a false generalization and not related to the idea of tests wearing out."],
      ["Running the same tests repeatedly will consistently find new failures", "This is the opposite of what happens. If a test has already passed many times, it is unlikely to find new failures unless the system has changed. That’s the entire point of the tests wear out principle — repeating the same tests yields diminishing returns."],
      ["Tests should not be context dependent", "This is unrelated to the principle being discussed. While context independence can be a goal in test design, it doesn't address the issue of repetitive testing becoming less effective over time."],
      ["Running the same tests repeatedly will reduce the chance of finding new failures", "correct"]
    ],
    keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>The principle of tests wearing out means tests become less effective over time:</b><br> If the same set of test cases is run repeatedly without change, they are less likely to detect new defects.</li>\
<li class='mb-2'><b>This happens because software evolves:</b><br> As new features are added and code changes, previously effective tests may not cover new risk areas.</li>\
<li class='mb-2'><b>Running the same tests over and over can create a false sense of security:</b><br> Just because the tests pass repeatedly does not mean the software is free of defects.</li>\
<li class='mb-2'><b>Refreshing or evolving the test set is essential:</b><br> Incorporating exploratory testing, updating test cases, and using risk-based testing strategies helps prevent tests from wearing out.</li>\
<li class='mb-2'><b>Agile and modern development practices encourage continuous test maintenance:</b><br> Tests should be reviewed and updated regularly to remain relevant and effective.</li>\
</ul>",
    correct: 3
  },
  {
    id:5,
    topicId: "test-activities-roles",
    question:
      "When following a standard test process, when should the test control activity take place?",
    options: [
      ["During the planning activities", "Test control starts in planning but doesn’t stop there. Limiting it to planning only ignores its critical role during execution and monitoring."],
      ["During the implementation and execution activities", "While test control is important during these phases, it also needs to happen during planning and monitoring phases."],
      ["During the monitoring activities", "Test control and monitoring are related but not the same. Control involves taking action based on monitoring data. Limiting control to monitoring only misses its role in earlier phases."],
      ["During all the activities", "correct"]
    ],
    keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>Test control is an ongoing activity throughout the entire test process:</b><br> It involves taking corrective actions when actual progress deviates from planned progress.</li>\
<li class='mb-2'><b>It starts during test planning:</b><br> Where baselines and criteria (like schedule, scope, and quality goals) are defined to measure progress against.</li>\
<li class='mb-2'><b>During implementation and execution:</b><br> Control is used to adjust priorities, update test plans, and reallocate resources based on test results and issues discovered.</li>\
<li class='mb-2'><b>During monitoring:</b><br> Control actions are triggered based on the data collected — such as slowing test progress or increasing defect rates.</li>\
<li class='mb-2'><b>Test control supports achieving test objectives:</b><br> By ensuring the test process adapts to changes in risk, scope, or progress.</li>\
</ul>"
,
    correct: 3
  },
  {
    id:6,
    topicId: "test-activities-roles",
    question:
      "Which of the following is the activity that compares the planned test progress to the actual test progress?",
    options: [
      ["Test monitoring", "correct"],
      ["Test planning", "This is about defining what to test, how to test, resources, schedules, etc. It happens before monitoring."],
      ["Test closure", "This happens at the end of testing, when results are finalized and lessons learned are documented."],
      ["Test control", "Control is the response activity that acts upon information gathered during monitoring, not the comparison itself."]
    ],
    keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>Test monitoring involves collecting and analyzing testing data:</b><br> It focuses on measuring progress and comparing it against the plan (e.g., number of test cases executed, pass/fail rates, defect metrics).</li>\
<li class='mb-2'><b>The goal of monitoring is to understand current status:</b><br> By comparing planned progress with actual progress, teams can identify whether testing is on track.</li>\
<li class='mb-2'><b>Monitoring supports decision-making:</b><br> The information gathered is used to decide whether corrective actions are needed, which is part of test control.</li>\
<li class='mb-2'><b>Test planning happens before monitoring:</b><br> It sets the baseline (schedule, resources, scope, etc.) against which actual results will be compared during monitoring.</li>\
<li class='mb-2'><b>Test closure occurs after testing is done:</b><br> It involves finalizing documentation, collecting metrics, and analyzing lessons learned—not monitoring progress.</li>\
</ul>",
    correct: 0
  },
  {
    id:7,
    topicId: "testing-principles",
    question:
      "If you are working on a project that is constrained by time and budget, which is pressuring testing to be done quickly. How should the test approach be adjusted?",
    options: [
      ["Develop detailed test cases to reduce the test automation effort", "Creating detailed test cases is time-consuming and contradicts the goal of speeding up testing. Also, detailed test cases do not necessarily reduce automation effort; automation requires its own scripts and maintenance."],
      ["Use techniques such as exploratory and checklist testing to spend less time on test case development", "correct"],
      ["Ensure that your testing starts only after the developers have completed integration tests", "Waiting until developers finish integration testing delays the start of your testing, which is not good when you’re pressured for time."],
      ["Develop end-to-end test automation before performing manual testing so the automation can be used sooner", "Developing end-to-end automation takes a lot of time upfront and may not be feasible under strict time and budget constraints. Manual testing or lightweight techniques can deliver faster feedback."]
    ],
    keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Time and budget constraints require efficient testing approaches:</b><br> Instead of spending too much time on detailed test case development, faster techniques can provide quicker feedback.</li>\
  <li class='mb-2'><b>Exploratory testing leverages tester experience:</b><br> It allows testers to dynamically adjust their focus and uncover defects that rigid test cases might miss.</li>\
  <li class='mb-2'><b>Checklist testing provides structure without heavy documentation:</b><br> A checklist ensures key areas are covered while significantly reducing the time spent on writing detailed test cases.</li>\
  <li class='mb-2'><b>Adapting the testing approach is crucial under constraints:</b><br> The objective is to reduce test case development time while still achieving sufficient test coverage to lower risk.</li>\
  <li class='mb-2'><b>Balancing speed and quality:</b><br> Exploratory and checklist methods help maintain quality by focusing on high-impact areas even under limited time and budget.</li>\
</ul>",
    correct: 1
  },
  {
    id:8,
    topicId: "testing-skills-practices",
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
    keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Lack of objectivity is the main concern:</b><br> Developers may unintentionally overlook flaws in their own code due to cognitive bias and familiarity.</li>\
  <li class='mb-2'><b>Independent testing improves defect detection:</b><br> Independent testers are more likely to question assumptions and explore edge cases that the developer might not consider.</li>\
  <li class='mb-2'><b>Developer testing is useful but limited:</b><br> While developers can effectively perform unit tests, they may not critically challenge the overall logic and integration like a dedicated tester would.</li>\
  <li class='mb-2'><b>Test objectivity is a key principle of quality assurance:</b><br> Objectivity leads to better risk identification and helps prevent confirmation bias in testing.</li>\
</ul>",
    correct: 2
  },
  {
    id: 9,
    topicId: "testing-skills-practices",
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
    keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>Early test design and review is a good testing practice:</b><br> Reviewing requirements documents as soon as a readable draft is available helps identify issues early and improve overall quality.</li>\
<li class='mb-2'><b>Shift-left testing encourages starting test design early:</b><br> Waiting until code completion delays testing and increases risk of defects.</li>\
<li class='mb-2'><b>Testers are usually responsible for determining test execution order:</b><br> Developers can provide input but it’s not their primary role.</li>\
<li class='mb-2'><b>Development experience for testers can be beneficial but is not essential:</b><br> It does not guarantee good testing practices on its own.</li>\
</ul>",
    correct: 3
  },
  {
    id:10,
    topicId: "test-levels",
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
    keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Non-functional testing evaluates attributes such as performance, security, usability, and reliability:</b><br> These characteristics are critical to overall system quality and user satisfaction.</li>\
  <li class='mb-2'><b>Non-functional tests can be applied at multiple test levels:</b><br> While often associated with system and acceptance testing, they can also be done at unit and integration levels when applicable.</li>\
  <li class='mb-2'><b>At the unit level:</b><br> Basic performance or resource usage tests might be performed on individual components.</li>\
  <li class='mb-2'><b>At integration and system levels:</b><br> More comprehensive non-functional tests such as load, stress, and security tests are typical.</li>\
  <li class='mb-2'><b>Acceptance level:</b><br> Non-functional requirements are verified to ensure the system meets business and user expectations.</li>\
  <li class='mb-2'><b>Testing strategy should align non-functional tests with project goals and feasibility:</b><br> Not all levels require all non-functional tests, but testing can occur where it makes sense.</li>\
</ul>",
    correct: 3
  },
  {
    id: 11,
    topicId: "feedback-review",
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
    keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Early and frequent stakeholder feedback helps ensure the product meets stakeholder expectations:</b><br> This alignment reduces misunderstandings and costly rework later in the development process.</li>\
  <li class='mb-2'><b>Feedback enables timely course corrections:</b><br> Identifying issues or changes early helps keep the project on track and improves overall quality.</li>\
  <li class='mb-2'><b>Involving stakeholders throughout development fosters collaboration and shared ownership:</b><br> But the primary reason is ensuring their vision and requirements are realized in the product.</li>\
  <li class='mb-2'><b>Using stakeholders as testers is secondary and not the main goal:</b><br> Their primary role is providing feedback, not formal testing.</li>\
  <li class='mb-2'><b>More meetings are not a benefit:</b><br> Meetings should be purposeful and efficient, focused on productive feedback.</li>\
</ul>",
    correct: 1
  },
  {
  id:12,
  topicId: "static-testing",
  question: "Which of the following is a benefit of static analysis?",
  options: [
    ["Defects can be identified that might not be caught by dynamic testing", "Static analysis can detect issues before the code is executed."],
    ["Early defect identification requires less documentation", "Documentation needs remain the same regardless of when defects are found."],
    ["Early execution of the code provides a gauge of code quality", "Static analysis does not require code execution."],
    ["Tools are not needed because reviews are used instead of executing code", "Static analysis uses tools to analyze code without executing it."]
  ],
  keyPoints: "<h3>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li><b>Static analysis is performed without executing the code:</b><br>It examines source code, or related artifacts using tools or manual review.</li>\
<li><b>Static analysis can detect certain defects earlier than dynamic testing:</b><br>These include coding standard violations, unreachable code, data flow issues, and security vulnerabilities.</li>\
<li><b>Static analysis is typically automated using tools:</b><br>Tools can scan large codebases quickly and highlight potential issues that may not surface during runtime.</li>\
<li><b>Dynamic testing involves executing code:</b><br>So it can only find defects that manifest during execution. Static analysis complements it by catching other issues earlier.</li>\
<li><b>Early detection reduces cost and effort:</b><br>Finding defects during static analysis (pre-execution) is generally cheaper than finding them after deployment or during test execution.</li>\
</ul>",
  correct: 0
},
{
  id:13,
  topicId: "feedback-review",
  question: "For a formal review, at what point in the process are the exit criteria defined?",
  options: [
    ["Planning", "Exit criteria are defined during the planning phase of a formal review."],
    ["Review initiation", "This phase involves informing stakeholders and setting up the review, not defining criteria."],
    ["Individual review", "Reviewers examine the product individually during this phase."],
    ["Fixing and reporting", "This phase happens after review findings are recorded and fixed."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Exit criteria in a formal review are defined during the planning phase:</b><br> This ensures clear goals and conditions for completion are set before the review starts.</li>\
  <li class='mb-2'><b>Planning phase establishes scope, roles, schedules, and exit criteria:</b><br> Setting exit criteria early helps measure review effectiveness and completion.</li>\
  <li class='mb-2'><b>Subsequent phases (initiation, individual review, fixing) rely on these predefined exit criteria:</b><br> They guide when the review process can be considered complete.</li>\
  <li class='mb-2'><b>Defining exit criteria late in the process can cause confusion and inefficiency:</b><br> Early definition aligns stakeholder expectations and improves review quality.</li>\
</ul>",
  correct: 0
},
{
  id:14,
  topicId: "experience-based",
  question: "Which of the following is a good reason to use experience-based testing?",
  options: [
    ["You can find defects that might be missed by more formal techniques", "Experience-based techniques often reveal edge cases and unexpected behaviors."],
    ["You can test for defects that only experienced users would encounter", "Partially true, but not the best overall reason."],
    ["You can target the developer’s efforts to the areas that users will be more likely to use", "This is more relevant to usage-based testing, not specifically experience-based."],
    ["It is supported by strong tools and can be automated", "Experience-based testing is typically manual and informal."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Experience-based testing leverages tester skill and intuition:</b><br> It helps find defects that formal techniques might miss, especially edge cases and unexpected behaviors.</li>\
  <li class='mb-2'><b>This approach is informal and exploratory:</b><br> It relies on tester knowledge rather than predefined test cases or automation tools.</li>\
  <li class='mb-2'><b>Experience-based testing complements formal testing:</b><br> It provides additional defect detection coverage and flexibility.</li>\
  <li class='mb-2'><b>It is particularly useful when requirements are incomplete or evolving:</b><br> Skilled testers can adapt and explore areas that may not be covered by formal tests.</li>\
</ul>",
  correct: 0
},
{
  id:15,
  topicId: "experience-based",
  question: "What is error guessing?",
  options: [
    ["A testing technique used to guess where a developer is likely to have made a mistake", "This technique relies on the tester's intuition and experience to predict where defects may be."],
    ["A technique used for assessing defect metrics", "This is related to metrics and reporting, not guessing errors."],
    ["A development technique to verify that all error paths have been coded", "This is a development activity, not a testing technique."],
    ["A planning technique used to anticipate likely schedule variances due to faults", "This relates to project planning, not error guessing."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Error guessing is an experience-based testing technique:</b><br> Testers use their domain knowledge, past experience, and intuition to guess likely areas where defects may exist.</li>\
  <li class='mb-2'><b>There are no formal rules or structure in error guessing:</b><br> It is informal and flexible, allowing testers to create test cases based on anticipated errors.</li>\
  <li class='mb-2'><b>Common targets include:</b><br> Edge cases, input validation, integration points, and areas of the application known to be error-prone or historically defective.</li>\
  <li class='mb-2'><b>Error guessing is often used in conjunction with other test techniques:</b><br> It helps increase test coverage by supplementing formal test design techniques.</li>\
</ul>",
  correct: 0
},
{
  id:16,
  topicId: "test-planning",
  question: "You are working in a team of testers who are all writing test cases. You have noticed that there is a significant inconsistency with the length and amount of detail in the different test cases. Where should the criteria for test case writing be documented?",
  options: [
    ["The test plan", "The test plan typically includes standards and criteria for how test cases should be written."],
    ["The test approach", "The test approach describes the testing strategy but not detailed case-writing guidelines."],
    ["The test case template", "The template helps standardize format but not the writing rules or quality expectations."],
    ["The project plan", "This document manages project tasks and timelines, not test case writing rules."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>The test plan defines how testing is to be conducted:</b><br>Including standards for test design, templates, and level of detail.</li>\
  <li class='mb-2'><b>The ISTQB syllabus states test plans include communication and documentation templates:</b><br>Which ensures consistency in test case format and completeness.</li>\
  <li class='mb-2'><b>Test case inconsistency is a process-level issue:</b><br>And the correct place to align team practices is through the test plan, not ad hoc discussions.</li>\
  <li class='mb-2'><b>Proper planning ensures shared understanding among testers:</b><br>Preventing ambiguity and improving maintainability, coverage, and quality.</li>\
</ul>",
  correct: 0
},
{
  id:17,
  topicId: "defect-management",
  question: "You have been testing software that will be used to track credit card purchases. You have found a defect that causes the system to crash, but only if a person has made and voided 10 purchases in a row. What is the proper priority and severity rating for this defect?",
  options: [
    ["Priority high, severity high", "A crash is severe, but the situation is rare, so high priority may not apply."],
    ["Priority high, severity low", "Low severity for a crash is inaccurate."],
    ["Priority low, severity low", "A crash is not low severity even if it’s rare."],
    ["Priority low, severity high", "The defect causes a crash (high severity), but it's rare (low priority)."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Severity refers to the impact of the defect on the system:</b><br> A system crash is considered high severity regardless of how frequently it occurs because it disrupts critical functionality.</li>\
  <li class='mb-2'><b>Priority reflects the urgency to fix the defect:</b><br> A rare issue that occurs only in unusual scenarios (like voiding 10 purchases in a row) may not need to be fixed immediately, hence low priority.</li>\
  <li class='mb-2'><b>Testers usually assess severity, while stakeholders (like product owners or project managers) determine priority:</b><br> Based on business impact and release goals.</li>\
  <li class='mb-2'><b>High severity + low priority is a valid combination:</b><br> Critical defects that rarely happen or have minimal business impact can be deferred but must be documented and monitored.</li>\
</ul>",
  correct: 3
},
{
  id:18,
  topicId: "test-automation",
  question: "Which of the following is a benefit of test automation?",
  options: [
    ["Test execution is faster", "Automation enables tests to run more quickly and frequently."],
    ["Manual testing becomes obsolete", "Manual testing is still necessary for exploratory and usability testing."],
    ["ROI is easy to determine", "ROI can be complex to calculate due to upfront costs."],
    ["Test implementation is faster", "Implementing automated tests can initially take more time."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Test automation significantly increases execution speed:</b><br> Automated tests can run faster than manual tests, especially when repeated across builds and environments.</li>\
  <li class='mb-2'><b>Automation enables frequent and consistent test runs:</b><br> Useful in continuous integration (CI) pipelines where tests must run after each code change or deployment.</li>\
  <li class='mb-2'><b>Manual testing is not obsolete:</b><br> Some areas, like usability, exploratory, and ad hoc testing, still require human intuition and cannot be fully automated.</li>\
  <li class='mb-2'><b>ROI from automation takes time:</b><br> Initial development of automated tests requires investment, but long-term efficiency improves as the test suite grows.</li>\
  <li class='mb-2'><b>Automation helps reduce human error:</b><br> Scripts perform tasks consistently and don't get tired or distracted like manual testers might.</li>\
</ul>",
  correct: 0
},
{
  id:19,
  topicId: "test-levels",
  question: "Usability testing is an example of which type of testing?",
  options: [
    ["Functional", "Functional testing focuses on what the system does, not usability."],
    ["Non-functional", "Usability is a non-functional attribute focused on user experience."],
    ["Structural", "Structural testing involves code structure, not user experience."],
    ["Change-related", "Usability is not related to change-related testing."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Usability testing evaluates how easy and intuitive a system is to use:</b><br> It measures aspects such as user satisfaction, efficiency, learnability, and error frequency.</li>\
  <li class='mb-2'><b>It is a type of non-functional testing:</b><br> Non-functional tests evaluate how well a system performs rather than what it does.</li>\
  <li class='mb-2'><b>Usability is one of the key non-functional quality characteristics:</b><br> Alongside performance, reliability, security, maintainability, and portability.</li>\
  <li class='mb-2'><b>Functional testing checks system behavior against requirements:</b><br> While usability focuses on the user's interaction and perception of the system.</li>\
  <li class='mb-2'><b>Usability testing is often performed with end users:</b><br> Observing them as they complete tasks helps identify design flaws and user experience issues.</li>\
</ul>",
  correct: 1
},
{
  id:20,
  topicId: "test-levels",
  question: "You work as a tester on a project on a mobile application for food ordering for one of your clients. The client sent you a list of requirements. One of them, with high priority, says “The order must be processed in less than 10 seconds in 95% of the cases”. You created a set of test cases in which a number of random orders were made, the processing time measured, and the test results were checked against the requirements. What test type did you perform?",
  options: [
    ["Functional, because the test cases cover the user’s business requirement for the system", "The requirement relates to performance, which is non-functional."],
    ["Non-functional, because they measure the system’s performance", "Performance requirements are considered non-functional."],
    ["Functional, because the test cases interact with the user interface", "Interaction with UI doesn’t necessarily define the test type."],
    ["White-box, because we need to know the internal structure of the program to measure the order processing time", "White-box refers to testing code logic; this scenario is black-box."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Non-functional testing verifies system attributes like performance, usability, and reliability:</b><br> These tests assess *how well* the system performs, not *what* it does.</li>\
  <li class='mb-2'><b>Performance testing is a key type of non-functional testing:</b><br> It measures responsiveness, stability, and speed under specific conditions.</li>\
  <li class='mb-2'><b>The requirement 'processed in less than 10 seconds in 95% of cases' is a performance metric:</b><br> It sets a measurable threshold for acceptable system behavior under load.</li>\
  <li class='mb-2'><b>Functional tests check whether features work as expected:</b><br> For example, whether a user can place an order. Performance of that feature is a separate concern.</li>\
  <li class='mb-2'><b>This testing does not require knowledge of internal code structure:</b><br> It can be performed as black-box testing using timers and logs to verify response time.</li>\
</ul>",
  correct: 1
}, 
{
  id:21,
  topicId: "experience-based",
  question: "Which of the following BEST fits as an element of the checklist used in checklist-based testing?",
  options: [
    ["The developer made an error when implementing the code", "This is a cause, not a checklist item."],
    ["The achieved statement coverage exceeds 85%", "This is a metric, not a checklist element."],
    ["The program works correctly regarding functional and non-functional requirements", "Too broad and vague for a checklist item."],
    ["The error messages are written in language that the user can understand", "This is a concrete, testable condition appropriate for a checklist."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
    <ul>\
    <li class='mb-2'><b>Checklist items should be specific, actionable, and testable:</b> <br>Each item should be phrased in the form of a question or condition that can be checked directly.</li>\
    <li class='mb-2'><b>Checklist items come from experience, user priorities, or knowledge of failures:</b> <br>Built from experience, what’s important for the user, or understanding of how software fails.</li>\
    <li class='mb-2'><b>Checklist items are NOT metrics, criteria, or overly general ideas:</b> <br>Should not include metrics like coverage %, entry/exit criteria, or vague statements.</li>\
    </ul>",
  correct: 3
},
{
  id:22,
  topicId: "sdlc",
  question: "What is the key objective of the shift-left testing approach?",
  options: [
    ["To perform acceptance testing earlier in the development cycle", "Acceptance testing is not the only focus of shift-left."],
    ["To detect and prevent defects as early as possible", "Shift-left aims to catch issues earlier by starting testing activities sooner."],
    ["To reduce the need for developer involvement in testing", "Shift-left encourages more collaboration, not less."],
    ["To delay integration until all modules are complete", "This goes against the early-testing goal of shift-left."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>Shift-left testing means starting testing activities earlier in the software development lifecycle:</b><br> This includes involvement from requirements, design, and coding phases rather than waiting until later stages.</li>\
<li class='mb-2'><b>Early defect detection and prevention are the main goals:</b><br> Finding defects as soon as possible reduces cost and effort required to fix them.</li>\
<li class='mb-2'><b>Shift-left encourages collaboration and involvement of all stakeholders:</b><br> Developers, testers, and business representatives work closely together early on.</li>\
<li class='mb-2'><b>Common practices supporting shift-left include:</b><br> Static analysis, early reviews (requirements, design, user stories), test-driven development (TDD), behavior-driven development (BDD), and automated unit and component testing.</li>\
<li class='mb-2'><b>Continuous Integration (CI) tools support shift-left by automating tests and providing quick feedback on code changes:</b><br> CI helps catch issues early through fast feedback loops.</li>\
<li class='mb-2'><b>Shift-left is embedded in Agile, DevOps, and modern iterative development approaches:</b><br> These methodologies promote early and continuous testing throughout the lifecycle.</li>\
<li class='mb-2'><b>Challenges of shift-left include the need for upfront investment in tools, training, and cultural change:</b><br> Teams need preparation and buy-in to implement early testing effectively.</li>\
<li class='mb-2'><b>Shift-left testing covers both functional and non-functional testing early on, such as performance and security testing at component levels:</b><br> Early evaluation ensures better quality and prevents late surprises.</li>\
</ul>",
  correct: 1
},
{
  id:23,
  topicId: "sdlc",
  question: "Which practice best illustrates the shift-left principle?",
  options: [
    ["Reviewing the specification for defects before development begins", "Early review and feedback help prevent defects, supporting shift-left."],
    ["Performing user acceptance testing after release", "This is too late in the lifecycle for shift-left."],
    ["Conducting manual system testing post-deployment", "Shift-left promotes earlier testing, not post-deployment testing."],
    ["Running security scans during production", "Production scans are too late to be considered shift-left."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>Shift-left testing means starting testing activities earlier in the software development lifecycle:</b><br> This includes involvement from requirements, design, and coding phases rather than waiting until later stages.</li>\
<li class='mb-2'><b>Early defect detection and prevention are the main goals:</b><br> Finding defects as soon as possible reduces cost and effort required to fix them.</li>\
<li class='mb-2'><b>Shift-left encourages collaboration and involvement of all stakeholders:</b><br> Developers, testers, and business representatives work closely together early on.</li>\
<li class='mb-2'><b>Common practices supporting shift-left include:</b><br> Static analysis, early reviews (requirements, design, user stories), test-driven development (TDD), behavior-driven development (BDD), and automated unit and component testing.</li>\
<li class='mb-2'><b>Continuous Integration (CI) tools support shift-left by automating tests and providing quick feedback on code changes:</b><br> CI helps catch issues early through fast feedback loops.</li>\
<li class='mb-2'><b>Shift-left is embedded in Agile, DevOps, and modern iterative development approaches:</b><br> These methodologies promote early and continuous testing throughout the lifecycle.</li>\
<li class='mb-2'><b>Challenges of shift-left include the need for upfront investment in tools, training, and cultural change:</b><br> Teams need preparation and buy-in to implement early testing effectively.</li>\
<li class='mb-2'><b>Shift-left testing covers both functional and non-functional testing early on, such as performance and security testing at component levels:</b><br> Early evaluation ensures better quality and prevents late surprises.</li>\
</ul>",
  correct: 0
},
{
  id:24,
  topicId: "sdlc",
  question: "Which development approaches inherently apply shift-left testing?",
  options: [
    ["Waterfall and V-Model", "These are more traditional and often shift testing to later stages."],
    ["Spiral and RAD", "These may involve iterations but don't inherently enforce early testing."],
    ["TDD, ATDD, and BDD", "These approaches start testing early, often before code is written."],
    ["Agile and DevOps", "They support early testing but shift-left is more embedded in TDD, ATDD, and BDD."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>Shift-left testing means starting testing activities earlier in the software development lifecycle:</b><br> This includes involvement from requirements, design, and coding phases rather than waiting until later stages.</li>\
<li class='mb-2'><b>Early defect detection and prevention are the main goals:</b><br> Finding defects as soon as possible reduces cost and effort required to fix them.</li>\
<li class='mb-2'><b>Shift-left encourages collaboration and involvement of all stakeholders:</b><br> Developers, testers, and business representatives work closely together early on.</li>\
<li class='mb-2'><b>Common practices supporting shift-left include:</b><br> Static analysis, early reviews (requirements, design, user stories), test-driven development (TDD), behavior-driven development (BDD), and automated unit and component testing.</li>\
<li class='mb-2'><b>Continuous Integration (CI) tools support shift-left by automating tests and providing quick feedback on code changes:</b><br> CI helps catch issues early through fast feedback loops.</li>\
<li class='mb-2'><b>Shift-left is embedded in Agile, DevOps, and modern iterative development approaches:</b><br> These methodologies promote early and continuous testing throughout the lifecycle.</li>\
<li class='mb-2'><b>Challenges of shift-left include the need for upfront investment in tools, training, and cultural change:</b><br> Teams need preparation and buy-in to implement early testing effectively.</li>\
<li class='mb-2'><b>Shift-left testing covers both functional and non-functional testing early on, such as performance and security testing at component levels:</b><br> Early evaluation ensures better quality and prevents late surprises.</li>\
</ul>",
  correct: 2
},
{
  id:25,
  topicId: "sdlc",
  question: "Why is stakeholder buy-in important for shift-left testing?",
  options: [
    ["It guarantees code coverage of 100%", "Code coverage is a technical metric and not guaranteed by stakeholder support."],
    ["It ensures early testing is prioritized and supported", "Stakeholders need to support early testing efforts to make shift-left effective."],
    ["It eliminates the need for defect tracking tools", "Defect tracking is still essential regardless of stakeholder support."],
    ["It removes the need for developer involvement in testing", "Developers are still actively involved in shift-left testing."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>Shift-left testing means starting testing activities earlier in the software development lifecycle:</b><br> This includes involvement from requirements, design, and coding phases rather than waiting until later stages.</li>\
<li class='mb-2'><b>Early defect detection and prevention are the main goals:</b><br> Finding defects as soon as possible reduces cost and effort required to fix them.</li>\
<li class='mb-2'><b>Shift-left encourages collaboration and involvement of all stakeholders:</b><br> Developers, testers, and business representatives work closely together early on.</li>\
<li class='mb-2'><b>Common practices supporting shift-left include:</b><br> Static analysis, early reviews (requirements, design, user stories), test-driven development (TDD), behavior-driven development (BDD), and automated unit and component testing.</li>\
<li class='mb-2'><b>Continuous Integration (CI) tools support shift-left by automating tests and providing quick feedback on code changes:</b><br> CI helps catch issues early through fast feedback loops.</li>\
<li class='mb-2'><b>Shift-left is embedded in Agile, DevOps, and modern iterative development approaches:</b><br> These methodologies promote early and continuous testing throughout the lifecycle.</li>\
<li class='mb-2'><b>Challenges of shift-left include the need for upfront investment in tools, training, and cultural change:</b><br> Teams need preparation and buy-in to implement early testing effectively.</li>\
<li class='mb-2'><b>Shift-left testing covers both functional and non-functional testing early on, such as performance and security testing at component levels:</b><br> Early evaluation ensures better quality and prevents late surprises.</li>\
</ul>",
  correct: 1
},
{
  id:26,
  topicId: "sdlc",
  question: "Which of the following is NOT an example of shift-left testing?",
  options: [
    ["Static analysis of source code during development", "This is a classic example of early testing."],
    ["Running system tests after all features are completed", "This is late-stage testing and not shift-left."],
    ["Reviewing user stories during backlog grooming", "Early review aligns with shift-left."],
    ["Writing component-level performance tests early", "Early component testing supports shift-left."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>Shift-left testing means starting testing activities earlier in the software development lifecycle:</b><br> This includes involvement from requirements, design, and coding phases rather than waiting until later stages.</li>\
<li class='mb-2'><b>Early defect detection and prevention are the main goals:</b><br> Finding defects as soon as possible reduces cost and effort required to fix them.</li>\
<li class='mb-2'><b>Shift-left encourages collaboration and involvement of all stakeholders:</b><br> Developers, testers, and business representatives work closely together early on.</li>\
<li class='mb-2'><b>Common practices supporting shift-left include:</b><br> Static analysis, early reviews (requirements, design, user stories), test-driven development (TDD), behavior-driven development (BDD), and automated unit and component testing.</li>\
<li class='mb-2'><b>Continuous Integration (CI) tools support shift-left by automating tests and providing quick feedback on code changes:</b><br> CI helps catch issues early through fast feedback loops.</li>\
<li class='mb-2'><b>Shift-left is embedded in Agile, DevOps, and modern iterative development approaches:</b><br> These methodologies promote early and continuous testing throughout the lifecycle.</li>\
<li class='mb-2'><b>Challenges of shift-left include the need for upfront investment in tools, training, and cultural change:</b><br> Teams need preparation and buy-in to implement early testing effectively.</li>\
<li class='mb-2'><b>Shift-left testing covers both functional and non-functional testing early on, such as performance and security testing at component levels:</b><br> Early evaluation ensures better quality and prevents late surprises.</li>\
</ul>",
  correct: 1
},
{
  id:27,
  topicId: "sdlc",
  question: "How does CI (Continuous Integration) enable shift-left testing?",
  options: [
    ["By delaying testing until deployment", "This contradicts the concept of CI and shift-left."],
    ["By avoiding test automation", "CI depends heavily on automation for feedback."],
    ["By integrating code with automated tests for fast feedback", "Automated tests in CI provide early defect detection, supporting shift-left."],
    ["By running only UI tests in production", "This is too late and not the goal of CI."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>Shift-left testing means starting testing activities earlier in the software development lifecycle:</b><br> This includes involvement from requirements, design, and coding phases rather than waiting until later stages.</li>\
<li class='mb-2'><b>Early defect detection and prevention are the main goals:</b><br> Finding defects as soon as possible reduces cost and effort required to fix them.</li>\
<li class='mb-2'><b>Shift-left encourages collaboration and involvement of all stakeholders:</b><br> Developers, testers, and business representatives work closely together early on.</li>\
<li class='mb-2'><b>Common practices supporting shift-left include:</b><br> Static analysis, early reviews (requirements, design, user stories), test-driven development (TDD), behavior-driven development (BDD), and automated unit and component testing.</li>\
<li class='mb-2'><b>Continuous Integration (CI) tools support shift-left by automating tests and providing quick feedback on code changes:</b><br> CI helps catch issues early through fast feedback loops.</li>\
<li class='mb-2'><b>Shift-left is embedded in Agile, DevOps, and modern iterative development approaches:</b><br> These methodologies promote early and continuous testing throughout the lifecycle.</li>\
<li class='mb-2'><b>Challenges of shift-left include the need for upfront investment in tools, training, and cultural change:</b><br> Teams need preparation and buy-in to implement early testing effectively.</li>\
<li class='mb-2'><b>Shift-left testing covers both functional and non-functional testing early on, such as performance and security testing at component levels:</b><br> Early evaluation ensures better quality and prevents late surprises.</li>\
</ul>",
  correct: 2
},
{
  id:28,
  topicId: "sdlc",
  question: "Which is a challenge often associated with shift-left testing?",
  options: [
    ["Requires upfront investment in training and tools", "Adopting shift-left involves early planning, tools, and training investment."],
    ["Leads to poor test documentation", "Shift-left does not inherently reduce documentation quality."],
    ["Increases bugs in production", "Shift-left reduces bugs by catching them early."],
    ["Prevents reuse of test cases", "Test cases can still be reused with shift-left."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>Shift-left testing means starting testing activities earlier in the software development lifecycle:</b><br> This includes involvement from requirements, design, and coding phases rather than waiting until later stages.</li>\
<li class='mb-2'><b>Early defect detection and prevention are the main goals:</b><br> Finding defects as soon as possible reduces cost and effort required to fix them.</li>\
<li class='mb-2'><b>Shift-left encourages collaboration and involvement of all stakeholders:</b><br> Developers, testers, and business representatives work closely together early on.</li>\
<li class='mb-2'><b>Common practices supporting shift-left include:</b><br> Static analysis, early reviews (requirements, design, user stories), test-driven development (TDD), behavior-driven development (BDD), and automated unit and component testing.</li>\
<li class='mb-2'><b>Continuous Integration (CI) tools support shift-left by automating tests and providing quick feedback on code changes:</b><br> CI helps catch issues early through fast feedback loops.</li>\
<li class='mb-2'><b>Shift-left is embedded in Agile, DevOps, and modern iterative development approaches:</b><br> These methodologies promote early and continuous testing throughout the lifecycle.</li>\
<li class='mb-2'><b>Challenges of shift-left include the need for upfront investment in tools, training, and cultural change:</b><br> Teams need preparation and buy-in to implement early testing effectively.</li>\
<li class='mb-2'><b>Shift-left testing covers both functional and non-functional testing early on, such as performance and security testing at component levels:</b><br> Early evaluation ensures better quality and prevents late surprises.</li>\
</ul>",
  correct: 0
},
{
  id:29,
  topicId: "sdlc",
  question: "What does shift-left encourage with respect to test case design?",
  options: [
    ["Write test cases only after the code is fully tested", "This is too late and not in line with shift-left."],
    ["Write test cases before or during development", "Designing test cases early ensures better coverage and early defect detection."],
    ["Skip test case design in favor of exploratory testing", "Exploratory testing complements but doesn’t replace planned test cases."],
    ["Focus only on system-level test cases", "Shift-left promotes earlier testing at all levels."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>Shift-left testing means starting testing activities earlier in the software development lifecycle:</b><br> This includes involvement from requirements, design, and coding phases rather than waiting until later stages.</li>\
<li class='mb-2'><b>Early defect detection and prevention are the main goals:</b><br> Finding defects as soon as possible reduces cost and effort required to fix them.</li>\
<li class='mb-2'><b>Shift-left encourages collaboration and involvement of all stakeholders:</b><br> Developers, testers, and business representatives work closely together early on.</li>\
<li class='mb-2'><b>Common practices supporting shift-left include:</b><br> Static analysis, early reviews (requirements, design, user stories), test-driven development (TDD), behavior-driven development (BDD), and automated unit and component testing.</li>\
<li class='mb-2'><b>Continuous Integration (CI) tools support shift-left by automating tests and providing quick feedback on code changes:</b><br> CI helps catch issues early through fast feedback loops.</li>\
<li class='mb-2'><b>Shift-left is embedded in Agile, DevOps, and modern iterative development approaches:</b><br> These methodologies promote early and continuous testing throughout the lifecycle.</li>\
<li class='mb-2'><b>Challenges of shift-left include the need for upfront investment in tools, training, and cultural change:</b><br> Teams need preparation and buy-in to implement early testing effectively.</li>\
<li class='mb-2'><b>Shift-left testing covers both functional and non-functional testing early on, such as performance and security testing at component levels:</b><br> Early evaluation ensures better quality and prevents late surprises.</li>\
</ul>",
  correct: 1
},
{
  id:30,
  topicId: "sdlc",
  question: "Which testing activity supports shift-left in non-functional testing?",
  options: [
    ["Executing performance tests only in staging", "Staging is too late for shift-left."],
    ["Running performance tests at component level", "Running such tests early supports shift-left."],
    ["Performing usability testing after UAT", "This is too late in the cycle."],
    ["Deferring load testing until deployment", "Deferring contradicts shift-left principles."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>Shift-left testing means starting testing activities earlier in the software development lifecycle:</b><br> This includes involvement from requirements, design, and coding phases rather than waiting until later stages.</li>\
<li class='mb-2'><b>Early defect detection and prevention are the main goals:</b><br> Finding defects as soon as possible reduces cost and effort required to fix them.</li>\
<li class='mb-2'><b>Shift-left encourages collaboration and involvement of all stakeholders:</b><br> Developers, testers, and business representatives work closely together early on.</li>\
<li class='mb-2'><b>Common practices supporting shift-left include:</b><br> Static analysis, early reviews (requirements, design, user stories), test-driven development (TDD), behavior-driven development (BDD), and automated unit and component testing.</li>\
<li class='mb-2'><b>Continuous Integration (CI) tools support shift-left by automating tests and providing quick feedback on code changes:</b><br> CI helps catch issues early through fast feedback loops.</li>\
<li class='mb-2'><b>Shift-left is embedded in Agile, DevOps, and modern iterative development approaches:</b><br> These methodologies promote early and continuous testing throughout the lifecycle.</li>\
<li class='mb-2'><b>Challenges of shift-left include the need for upfront investment in tools, training, and cultural change:</b><br> Teams need preparation and buy-in to implement early testing effectively.</li>\
<li class='mb-2'><b>Shift-left testing covers both functional and non-functional testing early on, such as performance and security testing at component levels:</b><br> Early evaluation ensures better quality and prevents late surprises.</li>\
</ul>",
  correct: 1
},
{
  id:31,
  topicId: "sdlc",
  question: "Which statement reflects a misunderstanding of shift-left testing?",
  options: [
    ["Testing should begin as early as the requirements phase", "This is aligned with shift-left principles."],
    ["Testers should be involved in reviewing drafts and specifications", "Early involvement is part of shift-left."],
    ["Testing is only effective once all code has been written", "This contradicts shift-left’s goal of early testing."],
    ["Writing automated unit tests before coding aligns with shift-left", "This supports the shift-left methodology."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>Shift-left testing means starting testing activities earlier in the software development lifecycle:</b><br> This includes involvement from requirements, design, and coding phases rather than waiting until later stages.</li>\
<li class='mb-2'><b>Early defect detection and prevention are the main goals:</b><br> Finding defects as soon as possible reduces cost and effort required to fix them.</li>\
<li class='mb-2'><b>Shift-left encourages collaboration and involvement of all stakeholders:</b><br> Developers, testers, and business representatives work closely together early on.</li>\
<li class='mb-2'><b>Common practices supporting shift-left include:</b><br> Static analysis, early reviews (requirements, design, user stories), test-driven development (TDD), behavior-driven development (BDD), and automated unit and component testing.</li>\
<li class='mb-2'><b>Continuous Integration (CI) tools support shift-left by automating tests and providing quick feedback on code changes:</b><br> CI helps catch issues early through fast feedback loops.</li>\
<li class='mb-2'><b>Shift-left is embedded in Agile, DevOps, and modern iterative development approaches:</b><br> These methodologies promote early and continuous testing throughout the lifecycle.</li>\
<li class='mb-2'><b>Challenges of shift-left include the need for upfront investment in tools, training, and cultural change:</b><br> Teams need preparation and buy-in to implement early testing effectively.</li>\
<li class='mb-2'><b>Shift-left testing covers both functional and non-functional testing early on, such as performance and security testing at component levels:</b><br> Early evaluation ensures better quality and prevents late surprises.</li>\
</ul>",
  correct: 2
},
{
  id:32,
  topicId: "what-is-testing",
  question: "Which of the following statements describe a valid test objective?",
  options: [
    ["To prove that there are no unfixed defects in the system under test", "It is impossible to prove that there are no defects anymore in the system under test."],
    ["To prove that there will be no failures after the implementation of the system into production", "it's impossible to prove the absence of all future failures in any complex software system. Even with extensive testing, unknown edge cases, environmental differences, user behavior, or integration issues can still lead to failures after deployment."],
    ["To reduce the risk level of the test object and to build confidence in the quality level", "Testing finds defects and failures which reduces the level of risk and at the same time gives more confidence in the quality level of the test object"],
    ["To verify that there are no untested combinations of inputs", "It is impossible to test all combinations of inputs"]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
<li class='mb-2'><b>Testing helps reduce product risk:</b><br> By identifying defects early, testing lowers the chances of failure in production.</li>\
<li class='mb-2'><b>Testing builds confidence in quality:</b><br> Consistent testing across components and stages assures stakeholders that the system behaves as expected.</li>\
<li class='mb-2'><b>A valid objective is not to prove the system is defect-free:</b><br> Testing can reveal defects but cannot guarantee the absence of all defects or future failures.</li>\
<li class='mb-2'><b>Complete input coverage is impractical:</b><br> Due to the near-infinite combinations, exhaustive testing isn't feasible—risk-based and focused testing is key.</li>\
<li class='mb-2'><b>ISTQB Foundation Level defines test objectives as:</b><br> Gaining confidence, providing information for decision-making, preventing defects, and reducing risk—not proving perfection.</li>\
</ul>",
  correct: 2
},
{
  id:33,
  topicId: "sdlc",
  question: "When coding is directed by the test cases, what development approach is being used?",
  options: [
    ["TDD", "correct"],
    ["BDD", "BDD focuses on defining system behavior in a natural language format understandable by all stakeholders (e.g., using Gherkin syntax). It emphasizes collaboration between developers, testers, and business people to create shared understanding before coding. Unlike TDD, BDD drives development through behavior specifications rather than low-level test cases."],
    ["ATDD", "ATDD is about writing acceptance tests collaboratively before development starts, involving testers, developers, and business representatives. It focuses on capturing acceptance criteria to guide development and ensure the product meets business requirements. ATDD tests tend to be higher-level acceptance tests, not the unit-level tests that drive coding in TDD."],
    ["TBD", "This is not a standard or recognized development approach. It might be a distractor or typo. The commonly known approaches are TDD, BDD, and ATDD."]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Test-Driven Development (TDD) is a development approach where:</b><br> Developers write automated test cases before writing the code that fulfills those tests.</li>\
  <li class='mb-2'><b>TDD cycle:</b><br> Red (write a failing test) → Green (write just enough code to pass) → Refactor (clean up the code while keeping tests green).</li>\
  <li class='mb-2'><b>TDD helps ensure code meets requirements from the start:</b><br> By focusing on test cases first, developers think about behavior and edge cases early.</li>\
  <li class='mb-2'><b>TDD is different from BDD and ATDD:</b><br> BDD focuses on behavior described in natural language, and ATDD involves collaboration between testers, developers, and business analysts to write acceptance tests before development.</li>\
  <li class='mb-2'><b>Benefits of TDD:</b><br> Better design, fewer bugs, faster feedback, and improved test coverage.</li>\
</ul>",
  correct: 0
},
{
  id:34,
  topicId: "maintenance",
  question: "When a system is targeted for decommissioning, what type of maintenance testing may be required?",
  options: [
    ["Retirement testing", "There is no such testing type"],
    ["Regression testing", "This is more appropriate for current systems, not the system being retired"],
    ["Data migration testing", "correct"],
    ["Patch testing", "This is of no use for a system being retired"]
  ],
  keyPoints: "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Maintenance testing includes activities performed on a system after its initial release:</b><br> This ensures continued operation, bug fixes, and smooth transition phases like decommissioning.</li>\
  <li class='mb-2'><b>Decommissioning a system often involves data migration testing:</b><br> Testing verifies that all critical data is accurately and completely transferred to a new system or archive without loss or corruption.</li>\
  <li class='mb-2'><b>Regression testing is typically applied to active systems:</b><br> It ensures that recent changes haven't broken existing functionality, less relevant when the system is retiring.</li>\
  <li class='mb-2'><b>Patch testing focuses on verifying fixes or updates:</b><br> Usually irrelevant during system retirement, unless patching is still performed.</li>\
  <li class='mb-2'><b>Retirement testing is not a recognized formal testing type:</b><br> The appropriate testing is focused on ensuring a smooth transition, primarily through data migration validation.</li>\
</ul>",
  correct: 2
},
{
  "id": 35,
  "topicId": "testing-skills-practices",
  "question": "Which of the following is an example of a good testing practice?",
  "options": [
    [
      "Different test levels should have specific test objectives",
      "Correct. Each test level should have its own clear objectives to ensure effective and targeted testing."
    ],
    [
      "Testers should have development experience",
      "While development experience can help, it is not a prerequisite or a defining good practice for testers."
    ],
    [
      "Developers should determine the order of test execution in the test procedures",
      "Test execution order is usually decided by testers or test leads to optimize test effectiveness, not solely by developers."
    ],
    [
      "Test design should begin when the code is complete to avoid changes",
      "This is not a good practice; test design should start early and evolve, often alongside development."
    ]
  ],
  "keyPoints": "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Good testing practices include defining specific objectives for each test level:</b><br> This helps focus testing efforts and improves defect detection.</li>\
  <li class='mb-2'><b>Testers don’t need to be developers but should have good analytical and communication skills:</b><br> Collaboration with developers is important, but development experience is not mandatory.</li>\
  <li class='mb-2'><b>Test execution order should be planned by testers based on risk, priority, and coverage:</b><br> It ensures efficient use of testing resources.</li>\
  <li class='mb-2'><b>Test design should ideally start early in the development lifecycle:</b><br> Early design allows for early defect detection and better test coverage.</li>\
</ul>",
  "correct": 0
},
{
  "id": 36,
  "topicId": "testing-skills-practices",
  "question": "You are working with a junior tester who has been given a user story to test. They have created only one positive path test for the story. You know there are more areas that should be tested for this story, including negative scenarios. Which of the following generic skills do they appear to be lacking?",
  "options": [
    [
      "Communication",
      "Communication is important for sharing information but is not the main skill lacking when negative scenarios are missed."
    ],
    [
      "Curiosity",
      "Correct. Curiosity drives testers to explore beyond the obvious, including negative and edge cases."
    ],
    [
      "Confidence",
      "Confidence affects tester assertiveness but doesn’t directly explain missing negative test scenarios."
    ],
    [
      "Creativity",
      "Creativity helps design tests but curiosity is more fundamental in exploring unknown test areas."
    ]
  ],
  "keyPoints": "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Curiosity is a key generic skill for testers:</b><br> It motivates exploring beyond happy paths to uncover hidden defects.</li>\
  <li class='mb-2'><b>Testers need to consider both positive and negative scenarios:</b><br> This ensures comprehensive coverage of potential system behaviors.</li>\
  <li class='mb-2'><b>Lack of curiosity may result in insufficient test coverage:</b><br> Testing only positive paths misses many possible failure modes.</li>\
  <li class='mb-2'><b>Communication, confidence, and creativity are important but secondary skills in this context:</b><br> The core issue here is the tester's limited exploratory mindset.</li>\
</ul>",
  "correct": 1
},
{
  "id": 37,
  "topicId": "what-is-testing",
  "question": "Which of the following is an example of debugging?",
  "options": [
    [
      "A tester finds a defect and reports it",
      "This is defect detection and reporting, not debugging."
    ],
    [
      "A tester retests a fix from the developer and finds a regression",
      "This is regression testing, not debugging."
    ],
    [
      "A developer finds and fixes a defect",
      "Correct. Debugging is the process of identifying, analyzing, and fixing defects in the code."
    ],
    [
      "A developer performs unit testing",
      "Unit testing is a testing activity, which may help find defects, but debugging specifically involves fixing the defects."
    ]
  ],
  "keyPoints": "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Debugging involves locating, analyzing, and fixing defects in the code:</b><br> Typically performed by developers.</li>\
  <li class='mb-2'><b>Testing activities such as finding and reporting defects or retesting fixes are not debugging:</b><br> They help identify problems but do not fix them.</li>\
  <li class='mb-2'><b>Unit testing is a test level, not debugging itself:</b><br> It may help find defects but debugging is the corrective action.</li>\
</ul>",
  "correct": 2
},
{
  "id": 38,
  "topicId": "testing-principles",
  "question": "Which of the following is a true statement about exhaustive testing?",
  "options": [
    [
      "It is a form of stress testing",
      "Incorrect. Exhaustive testing means testing all possible inputs and paths, not specifically stress testing."
    ],
    [
      "It is not feasible except in the case of trivial software",
      "Correct. Due to the extremely large number of input combinations, exhaustive testing is usually impractical except for very simple programs."
    ],
    [
      "It is commonly done with test automation",
      "Incorrect. Although automation helps, exhaustive testing is rarely done because of the vast number of cases."
    ],
    [
      "It is normally the responsibility of the developer during unit testing",
      "Incorrect. While developers do unit testing, exhaustive testing is generally not feasible even at unit test level."
    ]
  ],
  "keyPoints": "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Exhaustive testing means attempting to test all possible input combinations and execution paths.</b></li>\
  <li class='mb-2'><b>It is practically infeasible for anything but trivial or very small software due to combinatorial explosion.</b></li>\
  <li class='mb-2'><b>Because exhaustive testing is not feasible, testers rely on risk-based and selective testing techniques.</b></li>\
  <li class='mb-2'><b>Test automation can speed up testing but does not make exhaustive testing practical.</b></li>\
  <li class='mb-2'><b>Unit testing by developers focuses on meaningful coverage rather than exhaustive cases.</b></li>\
</ul>",
  "correct": 1
},
{
  "id": 39,
  "topicId": "test-planning",
  "question": "Who normally writes the test plan for a project?",
  "options": [
    [
      "The project manager",
      "Usually involved in project oversight but not directly responsible for the test plan."
    ],
    [
      "The product owner",
      "Responsible for requirements and prioritization, not typically writing test plans."
    ],
    [
      "The test manager",
      "Correct. The test manager or lead typically creates and maintains the test plan."
    ],
    [
      "The tester",
      "Testers execute tests and may contribute details but do not usually write the overall test plan."
    ]
  ],
  "keyPoints": "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>The test plan is a formal document outlining testing scope, approach, resources, schedule, and deliverables.</b></li>\
  <li class='mb-2'><b>The test manager or test lead is typically responsible for writing and maintaining the test plan.</b></li>\
  <li class='mb-2'><b>Project managers oversee the project but don’t usually handle detailed test planning.</b></li>\
  <li class='mb-2'><b>Product owners focus on requirements and priorities, not on test documentation.</b></li>\
  <li class='mb-2'><b>Testers primarily execute tests and report results; they may provide input but don’t usually write the full plan.</b></li>\
</ul>",
  "correct": 2
},
{
  "id": 40,
  "topicId": "test-levels",
  "question": "You have been receiving daily builds from the developers. Even though they are documenting the fixes they are including in each build, you are finding that the fixes either aren’t in the build or are not working. What type of testing is best suited for finding these issues?",
  "options": [
    [
      "Unit testing",
      "Unit testing focuses on individual components by developers and is not primarily responsible for verifying integrated fixes in builds."
    ],
    [
      "System testing",
      "System testing verifies the entire system but may be too broad to specifically catch missing or faulty fixes early."
    ],
    [
      "Confirmation testing",
      "Correct. Confirmation testing (also called retesting) verifies that specific defects have been fixed and that the fix works as intended."
    ],
    [
      "Regression testing",
      "Regression testing checks that recent changes haven’t broken existing functionality, but may not focus specifically on verifying fixes themselves."
    ]
  ],
  "keyPoints": "<h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>\
<ul>\
  <li class='mb-2'><b>Confirmation testing (retesting) specifically verifies that defects reported earlier are fixed correctly.</b></li>\
  <li class='mb-2'><b>Unit testing targets code at the component level, mostly done by developers before builds are delivered.</b></li>\
  <li class='mb-2'><b>System testing verifies the entire integrated system but may not focus narrowly on specific fixes.</b></li>\
  <li class='mb-2'><b>Regression testing ensures that recent changes haven't introduced new defects but is broader than confirmation testing.</b></li>\
  <li class='mb-2'><b>Daily builds require frequent confirmation testing to ensure fixes are correctly included and functional.</b></li>\
</ul>",
  "correct": 2
},
{
  id: 41,
  topicId: "what-is-testing",
  question: "Which of the following is a typical test objective?",
  options: [
    ["Finding and fixing defects in the test object", "Testers find defects, but fixing them is a developer's responsibility."],
    ["Maintaining effective communications with developers", "This is a good practice, but not a core test objective."],
    ["Validating that legal requirements have been met", "This may be part of compliance testing, but is not a general objective of testing."],
    ["Building confidence in the quality of the test object", "Correct: A key objective of testing is to build confidence in the software product's quality."]
  ],
  keyPoints: `
    <h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>
    <ul>
      <li class='mb-2'><b>Testing has several key objectives:</b> These include finding defects, providing information for decision-making, preventing defects, and <b>building confidence in the quality of the software</b>.</li>
      <li class='mb-2'><b>Testers do not fix defects:</b> That is the responsibility of the developers. Testers identify and report them.</li>
      <li class='mb-2'><b>Good communication</b> is a valuable practice but not classified as a formal test objective.</li>
      <li class='mb-2'><b>Validating legal requirements</b> may be done during compliance testing, but it's not a general objective that applies to all testing.</li>
    </ul>
  `,
  correct: 3
},
{
  id: 42,
  topicId: "what-is-testing",
  question: "Which of the following is a typical test objective?",
  options: [
    ["Validating that documented requirements are met", "Validation refers to meeting user needs, not documented requirements. Verification checks the documented requirements."],
    ["Causing failures and identifying defects", "This is a common goal of dynamic testing: to expose failures and identify defects."],
    ["Initiating errors and identifying root causes", "Errors are made by developers, not initiated by testers. Root cause analysis is part of debugging, not testing."],
    ["Verifying the test object meets user expectations", "Verification deals with documented requirements. Meeting user expectations is part of validation."]
  ],
  keyPoints: `
    <h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>
    <ul>
      <li class='mb-2'><b>Testing aims to cause failures and identify defects:</b> This is a fundamental purpose of dynamic testing.</li>
      <li class='mb-2'><b>Validation vs Verification:</b> Validation checks if the system meets user needs. Verification checks if the system meets specified requirements.</li>
      <li class='mb-2'><b>Errors are not initiated by testers:</b> They occur due to human mistakes during development and are found through testing activities.</li>
      <li class='mb-2'><b>Root cause analysis and debugging</b> are activities typically done by developers, not testers.</li>
    </ul>
  `,
  correct: 1
},
{
  id: 43,
  topicId: "what-is-testing",
  question: "Which of the following statements BEST describes the difference between testing and debugging?",
  options: [
    ["Testing causes failures while debugging fixes failures", "Testing reveals failures but does not cause them. Debugging is about fixing defects, not just failures."],
    ["Testing is a negative activity while debugging is a positive activity", "This is a subjective view. Both are essential and neutral parts of development and quality assurance."],
    ["Testing determines that defects exist while debugging removes defects", "Testing shows that defects are present, while debugging identifies and fixes them."],
    ["Testing finds the cause of defects while debugging fixes the cause of defects", "Testing detects that a problem exists. Debugging is the process of locating and fixing the cause."]
  ],
  keyPoints: `
    <h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>
    <ul>
      <li class='mb-2'><b>Testing and debugging are separate but complementary activities:</b> Testing identifies that a defect exists, often through failures.</li>
      <li class='mb-2'><b>Debugging is the process of locating the cause of a defect and fixing it:</b> It usually starts after a defect is reported by testing.</li>
      <li class='mb-2'><b>Testers do not fix defects:</b> They provide information about what is wrong, which helps developers in debugging.</li>
    </ul>
  `,
  correct: 2
},
{
  id: 44,
  topicId: "why-testing-necessary",
  question: "In what way does root cause analysis contribute to quality assurance?",
  options: [
    ["Helps to better identify and correct the root cause of defects", "RCA identifies the underlying reasons defects occur so they can be addressed, improving long-term quality."],
    ["Outlines how development teams can code faster", "RCA focuses on quality improvements, not coding speed."],
    ["Specifies the desired root causes to be achieved by other teams", "RCA aims to eliminate root causes of defects, not set them as goals."],
    ["Contributes to the justification of future project funding", "While RCA might inform decisions, its primary purpose is not budget-related."]
  ],
  keyPoints: `
    <h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>
    <ul>
      <li class='mb-2'><b>Root Cause Analysis (RCA) is a systematic method:</b> It identifies the fundamental source of defects to prevent recurrence.</li>
      <li class='mb-2'><b>In quality assurance, RCA improves processes:</b> This helps avoid similar defects in future builds or releases.</li>
      <li class='mb-2'><b>RCA is preventive, not reactive:</b> It focuses on improving long-term quality by addressing issues at their source.</li>
    </ul>
  `,
  correct: 0
},
{
  id: 45,
  topicId: "why-testing-necessary",
  question: "Which of the following is an example of why testing is necessary?",
  options: [
    ["Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users", " It is often possible to use dynamic testing to cause a test object to fail in ways that could never be achieved by the users, such as by using fault injection. However, if the failure can never occur with real end users, then identifying it is not especially valuable as testing is ultimately aimed at improving the work product for the end users. Spending time testing for failures that cannot occur with real users is not an efficient use of a tester’s time"],
    ["Static testing is used by developers to identify failures in their code earlier than can be achieved through dynamic testing", "Static testing in the form of static analysis is used by developers to identify defects in their code earlier than can be achieved through dynamic testing. Note, however, that static testing (and static analysis) is used to detect defects, not failures, which are found by dynamic testing. Thus it is the use of the term ‘failures’ that makes this an incorrect option"],
    ["Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release", "Static analysis directly detects defects in code, and this is normally information for the developer, not the customer."],
    ["Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products", "Reviews are a form of static testing that can be applied from the very start of the software development lifecycle and are used to find defects that can be removed before subsequent development activities waste effort on faulty requirements. If the defects are not detected and removed early on, then when the defect is found in derived work products, such as the design and code, the requirements will need to be changed."]
  ],
  keyPoints: `
    <h3 class='text-green-600'>Essential Key Points to Answer This Question:</h3>
    <ul>
      <li class='mb-2'><b>Reviews are part of static testing:</b> They are used early in the process to identify issues in documents like requirements and designs.</li>
      <li class='mb-2'><b>High-quality requirements reduce defects later:</b> Fewer misunderstandings lead to less rework in development and testing.</li>
      <li class='mb-2'><b>Testing is necessary to manage risk:</b> The earlier defects are found, the cheaper they are to fix and the higher the product quality.</li>
    </ul>
  `,
  correct: 3
}





];
