import { Play } from "lucide-react";

interface StartScreenProps {
    onStart: ()=> void;
}

export default function StartScreen({onStart}: StartScreenProps){
    return (
        <>
        <div className="text-left p-8">
            <div className="rounded-lg text-left text-gray-700 mb-10">
                <h2 className="text-xl font-semibold mb-2">Quiz Rules & Instructions</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                  <li>Total of 10 random questions per session.</li>
                  <li>Answer options are shuffled each time.</li>
                  <li>Time limit: 10 minutes.</li>
                  <li>Each correct answer gives 1 point. No negative marking.</li>
                  <li>You can't go back once an answer is selected.</li>
                  <li>Quiz ends when all questions are answered or time runs out.</li>
                  <li>You can restart after the quiz ends.</li>
                </ul>
            </div>
            <button 
                onClick={onStart} 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-center text-white rounded-full cursor-pointer">
                <Play className="w-5 h-5 mr-2" />
                Start Quiz
            </button>
        </div>
        </>
    )
}