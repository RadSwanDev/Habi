import React from "react";

export default function PlusButton({
  onClick,
}: {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-16 sm:bottom-20 right-6 sm:right-10 z-30 shadow-lg text-white bg-lime-500 
                 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 
                 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl 
                 font-extrabold rounded-full hover:bg-lime-600 transition duration-300 ease-in-out"
    >
      +
    </button>
  );
}
