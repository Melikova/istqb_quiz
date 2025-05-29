import { useEffect, useState } from "react";
import GameOver from "./components/game_over";
import QuestionCard from "./components/question_card";
import StartScreen from "./components/start_screen";
import type { GameState } from "./types/quizz";
import { QUESTIONS } from "./data/questions";
import { QUESTIONS_1 } from "./data/questions_1";
import Timer from "./components/timer";
import { shuffleArray } from "./utils/shuffle";

function App() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(600);
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof QUESTIONS>([]);

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
    const urlHas1 = window.location.href.includes("shift-left");
    const sourceQuestions = urlHas1 ? QUESTIONS_1 : QUESTIONS;
    const shuffled = shuffleArray(sourceQuestions).slice(0, 10).map((q) => {
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
  };

  const handleAnswer = (index: number): void => {
    setSelectedAnswer(index);
    const isCorrect = index === shuffledQuestions[currentQuestion].correctIndexInShuffled;
    if (isCorrect) {
      setScore((prev) => prev + 1);
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-250">
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
          />
        )}
      </div>
    </div>
  );
}

export default App;
