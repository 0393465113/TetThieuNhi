import React from 'react';

const PromisesPage = () => {
  const promises = [
    { id: 1, text: "Anh hứa sẽ luôn lắng nghe mọi điều em muốn nói, dù là chuyện nhỏ nhất.", icon: "👂" },
    { id: 2, text: "Anh hứa sẽ luôn là bờ vai vững chắc mỗi khi em cần, và là người mang lại tiếng cười cho em.", icon: "💪" },
    { id: 3, text: "Anh hứa sẽ luôn cố gắng học hỏi và trưởng thành hơn, để xứng đáng với tình yêu của em.", icon: "📚" },
    { id: 4, text: "Anh hứa sẽ cùng em khám phá thế giới, đi đến thật nhiều nơi đẹp đẽ mà chúng ta mơ ước.", icon: "✈️" },
    { id: 5, text: "Anh hứa sẽ yêu thương, chăm sóc em thật nhiều, và luôn đặt em là ưu tiên hàng đầu.", icon: "💖" },
    { id: 6, text: "Anh hứa sẽ làm em hạnh phúc mỗi ngày, và cùng em xây dựng một tương lai thật đẹp.", icon: "🏡" },
  ];

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl my-4 sm:my-8 text-center">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-6 sm:mb-8">
        🤝 Lời Hứa Ngọt Ngào Từ Anh 🤝
      </h3>
      <p className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6">
        Đây là những lời hứa mà anh muốn dành cho em, xuất phát từ tình yêu chân thành nhất.
        Anh sẽ luôn cố gắng thực hiện chúng!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {promises.map((promise) => (
          <div key={promise.id} className="p-4 sm:p-6 bg-purple-50 rounded-lg shadow-md border-l-4 border-purple-400 flex items-start text-left">
            <span className="text-3xl sm:text-4xl mr-3 sm:mr-4">{promise.icon}</span>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">{promise.text}</p>
          </div>
        ))}
      </div>
      <p className="text-base sm:text-lg text-gray-600 mt-6 sm:mt-8 italic">
        Cảm ơn em vì đã là động lực để anh trở thành phiên bản tốt hơn của chính mình!
      </p>
    </div>
  );
};

export default PromisesPage;