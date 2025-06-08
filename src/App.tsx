import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import GameOver from "./components/game_over";
import QuestionCard from "./components/question_card";
import StartScreen from "./components/start_screen";
import type { GameState } from "./types/quizz";
import { QUESTIONS } from "./data/questions";
import Timer from "./components/timer";
import { shuffleArray } from "./utils/shuffle";

function App() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(600);
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof QUESTIONS>([]);
  const [wrongAnswers, setWrongAnswers] = useState<[string, string[]][]>([]);


  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (gameState === "playing" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === "playing") {
      setGameState("end");
    }
    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  const handleStart = () => {
    const shuffled = shuffleArray(QUESTIONS).slice(0, 10).map((q) => {
      const shuffledOptions = shuffleArray(q.options);
      return {
        ...q,
        shuffledOptions,
        correctIndexInShuffled: shuffledOptions.indexOf(q.options[q.correct]),
      };
    });

    setShuffledQuestions(shuffled);
    setGameState("playing");
    setTimeLeft(600);
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setWrongAnswers([]);
  };

  const handleAnswer = (index: number): void => {
    setSelectedAnswer(index);

    const currentQ = shuffledQuestions[currentQuestion];
    if (!currentQ.shuffledOptions || currentQ.shuffledOptions.length === 0) {
      return;
    }
    const userAnswer = currentQ.shuffledOptions[index];
    const isCorrect = index === currentQ.correctIndexInShuffled;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }else {
      setWrongAnswers((prev) => [
        ...prev,
        [currentQ.question, userAnswer],
      ]);
    }

    setTimeout(() => {
      if (currentQuestion < shuffledQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setGameState("end");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />          
      <main className="flex-grow bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
          {gameState === "start" && <StartScreen onStart={handleStart} />}
          {gameState === "playing" && shuffledQuestions.length > 0 && (
            <div className="p-8">
              <Timer timeLeft={timeLeft} />
              <QuestionCard
                question={shuffledQuestions[currentQuestion]}
                onAnswerSelect={handleAnswer}
                selectedAnswer={selectedAnswer}
                totalQuestions={shuffledQuestions.length}
                currentQuestion={currentQuestion}
              />
              <div className="mt-6 text-center text-gray-600">
                Score: {score}/{shuffledQuestions.length}
              </div>
            </div>
          )}
          {gameState === "end" && (
            <GameOver
              totalQuestions={shuffledQuestions.length}
              score={score}
              onRestart={handleStart}
              wrongAnswers={wrongAnswers}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
