import { useState, useEffect } from "react";
import { Play } from "lucide-react";

interface StartScreenProps {
  onStart: (questionCount: number) => void;
  onBack: () => void;
  maxQuestionCount: number;
}

export default function StartScreen({ onStart, onBack, maxQuestionCount }: StartScreenProps) {
  const [questionCount, setQuestionCount] = useState<number>(Math.min(5, maxQuestionCount));

  useEffect(() => {
    setQuestionCount(Math.min(5, maxQuestionCount)); // reset when topic changes
  }, [maxQuestionCount]);
 
  const options = [];
  for (let i = 1; i <= maxQuestionCount; i++) {
    options.push(i);
  }

  return (
    <div className="text-left p-8">
      <div className="rounded-lg text-left text-gray-700 mb-10">
        <h2 className="text-xl font-semibold mb-2">Quiz Rules & Instructions</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
          <li>
            Total of{" "}
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1 text-sm ml-1"
            >
              {options.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>{" "}
            random questions per session.
          </li>
          <li>Answer options are shuffled each time.</li>
          <li>Time limit: {questionCount} minutes.</li>
          <li>Each correct answer gives 1 point. No negative marking.</li>
          <li>You can't go back once an answer is selected.</li>
          <li>Quiz ends when all questions are answered or time runs out.</li>
          <li>You can restart after the quiz ends.</li>
        </ul>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base mt-5 font-semibold">
          <li>After the quiz, you can review your incorrect answers</li>
          <li>Click on your answer to see why it was incorrect</li>
          <li>
            You'll also be shown Essential Key Points to help you understand
            how to answer similar questions correctly in the future.
          </li>
        </ul>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center">
        <button
          onClick={onBack}
          className="w-4/5 sm:w-auto mx-auto sm:mx-4 inline-flex items-center justify-center px-6 py-3 bg-gray-300 text-gray-800 rounded-full cursor-pointer hover:bg-gray-400 transition mt-4 sm:mt-0"
        >
          Back to Topics
        </button>
        <button
          onClick={() => onStart(questionCount)}
          className="w-4/5 sm:w-auto mx-auto sm:mx-0 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full cursor-pointer hover:bg-blue-700 transition"
        >
          <Play className="w-5 h-5 mr-2" />
          Start Quiz
        </button>
      </div>
    </div>
  );
}
