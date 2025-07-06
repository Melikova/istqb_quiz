import { useMemo } from "react";
// import type { Question } from "../types/quizz";
import { QUESTIONS } from "../data/questions";

interface QuizEntryProps {
  onSelectTopic: (topicId: string) => void;
}

interface Topic {
  id: string;
  title: string;
}
 
const topics: Topic[] = [
  {
    id: "what-is-testing",
    title: "What is Testing?: Test Objectives, Testing and Debugging",
  },
  {
    id: "why-testing-necessary",
    title:
      "Why is Testing Necessary?: Testing’s Contributions to Success, Testing and Quality Assurance (QA), Errors, Defects, Failures, and Root Causes",
  },
  {
    id: "testing-principles",
    title: "Testing Principles",
  },
  {
    id: "test-activities-roles",
    title:
      "Test Activities, Testware and Test Roles: Test Activities and Tasks, Test Process in Context, Testware, Traceability between the Test Basis and Testware, Roles in Testing",
  },
  {
    id: "testing-skills-practices",
    title:
      "Essential Skills and Good Practices in Testing: Generic Skills Required for Testing, Whole Team Approach, Independence of Testing",
  },
  {
    id: "sdlc",
    title:
      "Testing in the Context of a Software Development Lifecycle: Impact of the Software Development Lifecycle on Testing, Testing as a Driver for Software Development, DevOps and Testing, Shift Left, Retrospectives and Process Improvement",
  },
  {
    id: "test-levels",
    title:
      "Test Levels and Test Types: Test Levels, Test Types, Confirmation Testing and Regression Testing",
  },
  {
    id: "maintenance",
    title:
      "Maintenance Testing",
  },
  {
    id: "static-testing",
    title:
      "Static Testing Basics: Work Products Examinable by Static Testing, Value of Static Testing, Differences between Static Testing and Dynamic Testing",
  },
  {
    id: "feedback-review",
    title:
      "Feedback and Review Process: Benefits of Early and Frequent Stakeholder Feedback, Review Process Activities, Roles and Responsibilities in Reviews, Review Types, Success Factors for Reviews",
  },
  {
    id: "test-techniques",
    title:
      "Test Techniques Overview",
  },
  {
    id: "black-box",
    title:
      "Black-Box Test Techniques: Equivalence Partitioning, Boundary Value Analysis, Decision Table Testing, State Transition Testing",
  },
  {
    id: "white-box",
    title:
      "White-Box Test Techniques: Statement Testing and Statement Coverage, Branch Testing and Branch Coverage, The Value of White-box Testing",
  },
  {
    id: "experience-based",
    title:
      "Experience-based Test Techniques: Error Guessing, Exploratory Testing, Checklist-Based Testing",
  },
  {
    id: "collab-based",
    title:
      "Collaboration-based Test Approaches: Collaborative User Story Writing, Acceptance Criteria, Acceptance Test-driven Development (ATDD)",
  },
  {
    id: "test-planning",
    title:
      "Test Planning: Purpose and Content of a Test Plan, Tester's Contribution to Iteration and Release Planning, Entry Criteria and Exit Criteria, Estimation Techniques, Test Case Prioritization, Test Pyramid, Testing Quadrants",
  },
  {
    id: "risk-management",
    title:
      "Risk Management: Risk Definition and Risk Attributes, Project Risks and Product Risks, Product Risk Analysis, Product Risk Control",
  },
  {
    id: "monitoring-control-completion",
    title:
      "Test Monitoring, Test Control and Test Completion: Metrics used in Testing, Purpose, Content and Audience for Test Reports, Communicating the Status of Testing",
  },
  {
    id: "configuration-management",
    title:
      "Configuration Management",
  },
  {
    id: "defect-management",
    title:
      "Defect Management",
  },
  {
    id: "testing-tools",
    title:
      "Tool Support for Testing",
  },
  {
    id: "test-automation",
    title:
      "Benefits and Risks of Test Automation",
  }
];

export default function QuizEntry({ onSelectTopic }: QuizEntryProps) {
  const questionCountByTopic = useMemo(() => {
    const countMap: Record<string, number> = {};
    for (const question of QUESTIONS) {
      countMap[question.topicId] = (countMap[question.topicId] || 0) + 1;
    }
    return countMap;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-2xl font-bold mb-10 text-center text-gray-800">
        Choose a Topic to Begin
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topics.map((topic) => {
          const count = questionCountByTopic[topic.id] || 0;
          const disabled = count === 0;

          return (
            <div
              key={topic.id}
              onClick={() => {
                if (!disabled) onSelectTopic(topic.id);
              }}
              className={`bg-white aspect-[2/1] shadow-md rounded-xl flex flex-col justify-center items-center text-center p-4 transition-transform hover:shadow-lg
                ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:scale-105"}`}
              aria-disabled={disabled}
              role="button"
              tabIndex={disabled ? -1 : 0}
              onKeyDown={(e) => {
                if (!disabled && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  onSelectTopic(topic.id);
                }
              }}
            >
              <h2 className="text-sm font-semibold text-gray-700 mb-2">{topic.title}</h2>
              <p className="text-xs text-gray-500">
                {count} question{count !== 1 ? "s" : ""}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
