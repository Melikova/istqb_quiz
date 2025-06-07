// import { TimerIcon } from "lucide-react";

// interface TimerProps{
//     timeLeft: number;
// }

// export default function Timer({timeLeft}: TimerProps){
//     return (
//         <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-gray-700 mb-8">
//             <TimerIcon className="w-6 h-6 "/>
//             <span>{timeLeft}</span>
//         </div>
//     )
// }

import { TimerIcon } from "lucide-react";

interface TimerProps {
  timeLeft: number;
}

export default function Timer({ timeLeft }: TimerProps) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-gray-700 mb-8">
      <TimerIcon className="w-6 h-6" />
      <span>{formattedTime}</span>
    </div>
  );
}
