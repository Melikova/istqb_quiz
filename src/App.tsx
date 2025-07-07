import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import GameOver from "./components/game_over";
import QuestionCard from "./components/question_card";
import StartScreen from "./components/start_screen";
import QuizEntry from "./components/quiz_entry";
import type { GameState } from "./types/quizz";
import { QUESTIONS } from "./data/questions";
import Timer from "./components/timer";
import { shuffleArray } from "./utils/shuffle";

function App() {
  const [gameState, setGameState] = useState<GameState>("entry");
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(300);
  // const [questionCount, setQuestionCount] = useState<number>(5);
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof QUESTIONS>([]);
  const [wrongAnswers, setWrongAnswers] = useState<[string, string[], string][]>([]);

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [gameState]);


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

  const handleStart = (count: number) => {
    if (!selectedTopicId) return;

    const topicQuestions = QUESTIONS.filter((q) => q.topicId === selectedTopicId);

    const shuffled = shuffleArray(topicQuestions)
      .slice(0, count)
      .map((q) => {
        const shuffledOptions = shuffleArray(q.options);
        return {
          ...q,
          shuffledOptions,
          correctIndexInShuffled: shuffledOptions.indexOf(q.options[q.correct]),
        };
      });

    setShuffledQuestions(shuffled);
    setGameState("playing");
    setTimeLeft(count * 60);
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
    } else {
      setWrongAnswers((prev) => [
        ...prev,
        [currentQ.question, userAnswer, currentQ.keyPoints],
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
        {gameState === "entry" && (
          <QuizEntry
            onSelectTopic={(topic) => {
              setSelectedTopicId(topic);
              setGameState("start");
            }}
          />
        )}

        {gameState === "start" && selectedTopicId && (
          <StartScreen
            onStart={(count) => {
              // setQuestionCount(count);
              handleStart(count);
            }}
            onBack={() => setGameState("entry")}
            maxQuestionCount={QUESTIONS.filter((q) => q.topicId === selectedTopicId).length}
          />
        )}

        {gameState === "playing" && shuffledQuestions.length > 0 && (
          <div className="p-8">
            <Timer timeLeft={timeLeft} />
            <QuestionCard
              question={shuffledQuestions[currentQuestion]}
              onAnswerSelect={handleAnswer}
              selectedAnswer={selectedAnswer}
              totalQuestions={shuffledQuestions.length}
              currentQuestion={currentQuestion}
              onExitQuiz={() => setGameState("entry")}
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
            onRestart={() => setGameState("entry")}
            wrongAnswers={wrongAnswers}
          />
        )}
      </main>
    </div>
  );
}

export default App;
