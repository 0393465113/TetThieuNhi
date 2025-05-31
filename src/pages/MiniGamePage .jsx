import React, { useState } from 'react';
import PuzzleGame from './PuzzleGame ';
// Bạn sẽ cần tạo các component riêng cho 2 trò chơi dưới đây
import MillionaireGame from './MillionaireGame ';
import GameCatChaseMouse from './GameCatChaseMouse';

const MiniGamePage = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const renderGameComponent = () => {
    switch (selectedGame) {
      case 'puzzle':
        return <PuzzleGame />;
      case 'millionaire':
        return <MillionaireGame />;
      case 'adventure':
        return <GameCatChaseMouse />;
      default:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-pink-500">🎮 Chọn Một Trò Chơi Để Bắt Đầu!</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 w-full max-w-3xl">
              <button
                onClick={() => setSelectedGame('puzzle')}
                className="bg-gradient-to-r from-yellow-300 to-red-400 hover:from-yellow-400 hover:to-red-500 transition-all text-white p-6 rounded-xl shadow-lg text-xl font-semibold flex flex-col items-center space-y-2"
              >
                <span className="text-4xl">🧩</span>
                <span>Ghép Hình</span>
              </button>
              <button
                onClick={() => setSelectedGame('millionaire')}
                className="bg-gradient-to-r from-indigo-400 to-purple-600 hover:from-indigo-500 hover:to-purple-700 transition-all text-white p-6 rounded-xl shadow-lg text-xl font-semibold flex flex-col items-center space-y-2"
              >
                <span className="text-4xl">💰</span>
                <span>Ai là Tỷ Phú vì Yêu?</span>
              </button>
              <button
                onClick={() => setSelectedGame('adventure')}
                className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 transition-all text-white p-6 rounded-xl shadow-lg text-xl font-semibold flex flex-col items-center space-y-2"
              >
                <span className="text-4xl">🚀</span>
                <span>Hành Trình Đến Với Anh yêu</span>
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className=" bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 p-6 sm:p-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 sm:p-12 transition-all">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-pink-600">
            💖 Mini Game Dành Riêng Cho Em 💖
          </h1>
          {selectedGame && (
            <button
              onClick={() => setSelectedGame(null)}
              className="text-sm sm:text-base bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-full font-semibold shadow"
            >
              ⬅ Quay lại
            </button>
          )}
        </div>
        {renderGameComponent()}
      </div>
    </div>
  );
};

export default MiniGamePage;
