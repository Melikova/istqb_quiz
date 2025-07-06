import { CheckCircle, XCircle } from "lucide-react"
import type { Question } from "../types/quizz"

interface QuestionCardProps {
  question: Question;
  onAnswerSelect: (index: number) => void;
  selectedAnswer: number | null;
  totalQuestions: number;
  currentQuestion: number;
  onExitQuiz: () => void;
}

export default function QuestionCard({
  question,
  onAnswerSelect,
  selectedAnswer,
  totalQuestions,
  currentQuestion,
  onExitQuiz, 
}: QuestionCardProps) {

  const getButtonClass = (index: number): string => {
    if (selectedAnswer === null) return "hover:bg-gray-100";
    if (selectedAnswer === question.correctIndexInShuffled) {
      if (index === question.correctIndexInShuffled) return "bg-green-100 border-green-500";
      return "opacity-50";
    }
    if (index === selectedAnswer) return "bg-red-100 border-red-500";
    return "opacity-50";
  };
 
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Question {currentQuestion + 1} of {totalQuestions}
        </h2>
        <button
          onClick={onExitQuiz}
          className="text-sm text-red-600 border border-red-400 px-3 py-1 rounded hover:bg-red-100 transition cursor-pointer"
        >
          EXIT
        </button>
      </div>

      <p className="text-gray-600 mb-4">{question.question}</p>

      <div className="space-y-3">
        {question.shuffledOptions?.map((option, index) => (
          <button
            key={index}
            onClick={() => selectedAnswer === null && onAnswerSelect(index)}
            className={`w-full p-4 text-left border rounded-lg transition-all duration-300 ${getButtonClass(index)} ${
              selectedAnswer === null ? "cursor-pointer hover:bg-blue-100" : "cursor-default"
            }`}
            disabled={selectedAnswer !== null}
          >
            <div className="flex items-center justify-between">
              <span>{option[0]}</span>
              {selectedAnswer !== null &&
                selectedAnswer === question.correctIndexInShuffled &&
                index === question.correctIndexInShuffled && (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
              {selectedAnswer !== null &&
                selectedAnswer !== question.correctIndexInShuffled &&
                index === selectedAnswer && (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
