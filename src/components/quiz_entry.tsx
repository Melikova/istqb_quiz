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
  { id: "what-is-testing", title: "What is Testing?: Test Objectives, Testing and Debugging" },
  { id: "why-testing-necessary", title: "Why is Testing Necessary?: Testing’s Contributions to Success, Testing and QA, Errors, Defects, Failures, and Root Causes" },
  { id: "testing-principles", title: "Testing Principles" },
  { id: "test-activities-roles", title: "Test Activities, Testware and Test Roles..." },
  { id: "testing-skills-practices", title: "Essential Skills and Good Practices in Testing..." },
  { id: "sdlc", title: "Testing in the Context of a Software Development Lifecycle..." },
  { id: "test-levels", title: "Test Levels and Test Types..." },
  { id: "maintenance", title: "Maintenance Testing" },
  { id: "static-testing", title: "Static Testing Basics..." },
  { id: "feedback-review", title: "Feedback and Review Process..." },
  { id: "test-techniques", title: "Test Techniques Overview" },
  { id: "black-box", title: "Black-Box Test Techniques..." },
  { id: "white-box", title: "White-Box Test Techniques..." },
  { id: "experience-based", title: "Experience-based Test Techniques..." },
  { id: "collab-based", title: "Collaboration-based Test Approaches..." },
  { id: "test-planning", title: "Test Planning..." },
  { id: "risk-management", title: "Risk Management..." },
  { id: "monitoring-control-completion", title: "Test Monitoring, Control and Completion..." },
  { id: "configuration-management", title: "Configuration Management" },
  { id: "defect-management", title: "Defect Management" },
  { id: "testing-tools", title: "Tool Support for Testing" },
  { id: "test-automation", title: "Benefits and Risks of Test Automation" }
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
