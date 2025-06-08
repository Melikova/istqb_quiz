import { useEffect, useState } from "react";

interface GameOverProps {
  onRestart: () => void;
  score: number;
  totalQuestions: number;
  wrongAnswers: [string, string[]][];
}

export default function GameOver({onRestart, score, totalQuestions, wrongAnswers}: GameOverProps) {
  const [selectedQA, setSelectedQA] = useState<[string, string, string] | null>(null);

  useEffect(() => {
    if (selectedQA) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedQA]);

  const handleCloseModal = () => {
    setSelectedQA(null);
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz is Over</h2>
      <p className="text-lg text-gray-600">
        Final Score: {score}/{totalQuestions}
      </p>

      {wrongAnswers.length > 0 && (
        <div className="mt-6 text-left max-w-xl mx-auto">
          <h3 className="text-lg font-semibold mb-4">Click to Review Incorrect Answers:</h3>
          <ul className="space-y-4">
            {wrongAnswers.map(([question, userAnswer], idx) => (
              <li
                key={idx}
                className="border p-4 rounded-md bg-red-50 cursor-pointer hover:bg-red-100 transition"
                onClick={() => setSelectedQA([question, userAnswer[0], userAnswer[1]])}
              >
                <p className="font-semibold">{question}</p>
                <p>
                  Your answer: <span className="text-red-600">{userAnswer[0]}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={onRestart}
        className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Start Again
      </button>

      {/* Modal */}
      {selectedQA && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg">
            {/* <h3 className="text-xl font-bold mb-4">Incorrect Answer</h3> */}
            {/* <p className="mb-2"><strong>Question:</strong> {selectedQA[0]}</p> */}
            <p className="mb-4"><span className="text-red-600">{selectedQA[2]}</span></p>
            <button
              onClick={handleCloseModal}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
