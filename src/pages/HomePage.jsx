import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-xl my-4 sm:my-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-600 mb-4 sm:mb-6">
        Chào Mừng Em Yêu Đến Với Thế Giới Của Anh! 🎉
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
        Hôm nay là ngày đặc biệt dành cho Bé yêu của anh!
        Anh đã chuẩn bị một vài điều bất ngờ nhỏ để chúc mừng Tết Thiếu Nhi.
        Hãy khám phá từng mục dưới đây nhé!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Link to="/messages" className="block p-4 sm:p-6 bg-pink-100 rounded-lg shadow-md hover:bg-pink-200 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl sm:text-2xl font-bold text-pink-700 mb-1 sm:mb-2">💌 Lời Yêu Thương</h3>
          <p className="text-sm sm:text-base text-gray-600">Những lời từ trái tim anh gửi đến em.</p>
        </Link>
        <Link to="/memories" className="block p-4 sm:p-6 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-1 sm:mb-2">📸 Kỷ Niệm Đẹp</h3>
          <p className="text-sm sm:text-base text-gray-600">Cùng xem lại những khoảnh khắc đáng nhớ của chúng ta.</p>
        </Link>
        <Link to="/game" className="block p-4 sm:p-6 bg-green-100 rounded-lg shadow-md hover:bg-green-200 transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-1 sm:mb-2">🎮 Trò Chơi Nhỏ</h3>
          <p className="text-sm sm:text-base text-gray-600">Thử thách trí tuệ với một trò chơi vui nhộn!</p>
        </Link>
        <Link to="/promises" className="block p-4 sm:p-6 bg-purple-100 rounded-lg shadow-md hover:bg-purple-200 transform hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1 lg:col-start-2">
          <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-1 sm:mb-2">🤝 Lời Hứa Ngọt Ngào</h3>
          <p className="text-sm sm:text-base text-gray-600">Những điều anh hứa sẽ làm cho em.</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;