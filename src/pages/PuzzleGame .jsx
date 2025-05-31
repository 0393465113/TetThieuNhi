// PuzzleGame.tsx
import React, { useState, useEffect, useCallback } from 'react';

const PuzzleGame = () => {
  const targetImageUrl = "https://res.cloudinary.com/disdu197t/image/upload/v1748630858/2024_02_14_19_05_IMG_5195_axjjc9.jpg"; 
  const rows = 3;
  const cols = 3;
  const totalCells = rows * cols;
  const [puzzlePieces, setPuzzlePieces] = useState([]);
  const [selectedPieceIndex, setSelectedPieceIndex] = useState(null);
  const [gameCompleted, setGameCompleted] = useState(false);

  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  useEffect(() => {
    const initialOrder = Array.from({ length: totalCells }, (_, i) => i);
    let shuffledOrder = shuffleArray([...initialOrder]);
    while (shuffledOrder.every((val, idx) => val === idx)) {
      shuffledOrder = shuffleArray([...initialOrder]);
    }
    setPuzzlePieces(shuffledOrder);
    setGameCompleted(false);
    setSelectedPieceIndex(null);
  }, [totalCells]);

  useEffect(() => {
    const isSolved = puzzlePieces.every((piece, index) => piece === index);
    if (isSolved && puzzlePieces.length > 0) {
      setGameCompleted(true);
    }
  }, [puzzlePieces]);

  const handlePieceClick = useCallback((clickedIndex) => {
    if (gameCompleted) return;
    if (selectedPieceIndex === null) {
      setSelectedPieceIndex(clickedIndex);
    } else {
      const newPuzzlePieces = [...puzzlePieces];
      [newPuzzlePieces[selectedPieceIndex], newPuzzlePieces[clickedIndex]] =
        [newPuzzlePieces[clickedIndex], newPuzzlePieces[selectedPieceIndex]];
      setPuzzlePieces(newPuzzlePieces);
      setSelectedPieceIndex(null);
    }
  }, [selectedPieceIndex, puzzlePieces, gameCompleted]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl text-center">
      <h3 className="text-4xl font-bold text-pink-600 mb-4">🧩 Ghép Hình: Thế giới của anh!</h3>
      <p className="mb-4 text-gray-700">Click hai mảnh để hoán đổi cho đến khi ghép hoàn chỉnh.</p>

      <div
        className="relative mx-auto border-4 border-pink-300 rounded-lg overflow-hidden"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          aspectRatio: '16 / 9',
        }}
      >
        {puzzlePieces.map((originalIndex, currentIndex) => (
          <div
            key={currentIndex}
            className={`border transition-transform ${selectedPieceIndex === currentIndex ? 'border-blue-500 scale-105' : ''}`}
            onClick={() => handlePieceClick(currentIndex)}
            style={{
              backgroundImage: `url(${targetImageUrl})`,
              backgroundSize: `${cols * 100}% ${rows * 100}%`,
              backgroundPosition: `${(originalIndex % cols) * (100 / (cols - 1))}% ${Math.floor(originalIndex / cols) * (100 / (rows - 1))}%`,
              pointerEvents: gameCompleted ? 'none' : 'auto',
            }}
          />
        ))}
        {gameCompleted && (
          <img
            src={targetImageUrl}
            alt="Completed"
            className="absolute inset-0 w-full h-full object-cover rounded-lg animate-fade-in"
          />
        )}
      </div>

      {gameCompleted && (
        <div className="mt-6 bg-yellow-100 p-4 rounded shadow border-l-4 border-yellow-400">
          <h4 className="text-2xl font-semibold text-yellow-700 mb-2">🎉 Em đã ghép xong rồi!</h4>
          <p>Yêu em nhiều lắm! ❤️</p>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PuzzleGame;
