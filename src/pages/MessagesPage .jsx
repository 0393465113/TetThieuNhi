import React from 'react';

const MessagesPage = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl my-4 sm:my-8">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-pink-500 mb-6 sm:mb-8">
        Những lời từ trái tim anh ❤️
      </h3>

      {/* Lời Chúc */}
      <div className="mb-6 sm:mb-10 p-4 sm:p-6 bg-green-50 rounded-lg shadow-md border-l-4 border-green-400">
        <h4 className="text-2xl sm:text-3xl font-semibold text-green-600 mb-2 sm:mb-4">✨ Lời Chúc Ngọt Ngào ✨</h4>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-3 text-justify"> {/* Thêm text-justify */}
          Nhân ngày Quốc Tế Thiếu Nhi 1/6, anh chúc Bé yêu của anh luôn luôn vui vẻ, hạnh phúc, ăn ngon ngủ ngoan và giữ mãi nụ cười hồn nhiên, đáng yêu này nhé. Dù em có lớn bao nhiêu, em vẫn sẽ mãi là cô công chúa bé bỏng trong mắt anh.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-3 text-justify"> {/* Thêm text-justify */}
          Chúc em có một ngày thật nhiều niềm vui, tràn ngập tiếng cười và nhận được thật nhiều yêu thương. Anh mong rằng mỗi ngày của em đều sẽ là một ngày Tết Thiếu Nhi, với thật nhiều điều bất ngờ và hạnh phúc.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 text-justify"> {/* Thêm text-justify */}
          Hãy cứ hồn nhiên, vô tư như một đứa trẻ, bởi vì em xứng đáng với tất cả những điều tốt đẹp nhất trên đời này. Yêu em rất nhiều, cô bé của anh!
        </p>
      </div>

      {/* Lời Cảm Ơn */}
      <div className="mb-6 sm:mb-10 p-4 sm:p-6 bg-pink-50 rounded-lg shadow-md border-l-4 border-pink-400">
        <h4 className="text-2xl sm:text-3xl font-semibold text-pink-600 mb-2 sm:mb-4">🌻 Lời Cảm Ơn Chân Thành 🌻</h4>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-3 text-justify"> {/* Thêm text-justify */}
          Anh muốn gửi lời cảm ơn từ tận đáy lòng đến em. Cảm ơn em vì đã bước vào cuộc đời anh, mang theo cả một bầu trời nắng ấm và những gam màu rực rỡ mà trước đây anh chưa từng thấy.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-3 text-justify"> {/* Thêm text-justify */}
          Cảm ơn em đã luôn ở bên, lắng nghe những tâm sự của anh, thấu hiểu những khi anh khó tính, và kiên nhẫn với những khuyết điểm của anh. Mỗi khoảnh khắc bên em đều là những giây phút quý giá, là niềm hạnh phúc lớn lao mà anh luôn trân trọng.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 text-justify"> {/* Thêm text-justify */}
          Em là nguồn động lực, là người đã giúp anh trở thành một phiên bản tốt hơn của chính mình. Cảm ơn em vì tất cả những điều tuyệt vời em đã và đang dành cho anh.
        </p>
      </div>

      {/* Lời Xin Lỗi */}
      <div className="p-4 sm:p-6 bg-red-50 rounded-lg shadow-md border-l-4 border-red-400">
        <h4 className="text-2xl sm:text-3xl font-semibold text-red-600 mb-2 sm:mb-4">💔 Lời Xin Lỗi Từ Anh 💔</h4>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-3 text-justify"> {/* Thêm text-justify */}
          Trong khoảng thời gian chúng ta ở bên nhau, chắc chắn có những lúc anh đã vô tâm, lạnh nhạt làm em phải buồn lòng. Anh biết mình còn nhiều thiếu sót và chưa thực sự hoàn hảo.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-3 text-justify"> {/* Thêm text-justify */}
          Anh thật sự xin lỗi vì những lần đó, vì đã khiến em lo lắng hay phải rơi nước mắt. Anh hứa sẽ cố gắng nhiều hơn nữa, học cách quan tâm và thấu hiểu em sâu sắc hơn, để không còn làm em phải chịu bất cứ tổn thương nào.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 text-justify"> {/* Thêm text-justify */}
          Mong em sẽ tha thứ cho anh và cho anh cơ hội để bù đắp, để chúng ta cùng nhau xây dựng một tình yêu ngày càng vững bền và hạnh phúc hơn. Anh yêu em.
        </p>
      </div>
    </div>
  );
};

export default MessagesPage;