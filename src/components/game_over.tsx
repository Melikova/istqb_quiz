interface GameOverProps {
  onRestart: () => void;
  score: number;
  totalQuestions: number;
  wrongAnswers: [string, string][];  // <-- Add this
}

export default function GameOver({ onRestart, score, totalQuestions, wrongAnswers }: GameOverProps) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz is Over</h2>
      <p className="text-lg text-gray-600">
        Final Score: {score}/{totalQuestions}
      </p>

      {wrongAnswers.length > 0 && (
        <div className="mt-6 text-left max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">Review Incorrect Answers:</h3>
          <ul className="space-y-4">
            {wrongAnswers.map(([question, userAnswer], idx) => (
              <li key={idx} className="border p-4 rounded-md bg-red-50">
                <p className="font-semibold">{question}</p>
                <p>Your answer: <span className="text-red-600">{userAnswer}</span></p>
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
    </div>
  );
}
