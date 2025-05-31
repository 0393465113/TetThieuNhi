import React, { useState, useEffect } from "react";

const startDate = new Date("2021-02-14");

const questionsData = [
  {
    question: "Chúng ta đã bên nhau bao nhiêu ngày?",
    options: [
      `${Math.floor((Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1)} ngày`,
      "100 ngày",
      "365 ngày",
      "999 ngày",
    ],
    correctIndex: 0,
  },
  {
    question: "Ngày chúng ta chính thức yêu nhau là ngày mấy?",
    options: ["14/2/2021", "1/1/2021", "20/10/2020", "8/3/2021"],
    correctIndex: 0,
  },
  {
    question: "Ai là người tỏ tình trước?",
    options: ["Anh", "Em", "Cả hai cùng lúc", "Không ai cả"],
    correctIndex: 0,
  },
  {
    question: "Lần đầu tiên mình đi chơi cùng nhau ở đâu?",
    options: ["Căn tin", "Quán Min Min", "Quán Henry", "Quán Misu"],
    correctIndex: 2,
  },
  {
    question: "Món ăn đầu tiên chúng ta ăn cùng nhau là gì?",
    options: ["Bánh mì", "Mì cay", "Bún đậu", "Trà sữa"],
    correctIndex: 1,
  },
  {
    question: "Bài hát nào là bài hát em hát đầu tiên cho anh nghe?",
    options: ["Phố cũ còn anh", "Hơn cả yêu", "Lạc trôi", "Em của ngày hôm qua"],
    correctIndex: 0,
  },
  {
    question: "Anh thích loài hoa nào nhất?",
    options: ["Hoa Tuyết", "Hoa Lưu Ly", "Hoa Bỉ Ngạn", "Hoa tulip"],
    correctIndex: 0,
  },
  {
    question: "Chúng ta đã từng đi du lịch ở đâu cùng nhau?",
    options: ["Đà Lạt", "Sa Huỳnh", "Hội An", "Vũng Tàu"],
    correctIndex: 2,
  },
  {
    question: "Món ăn anh nấu đầu tiên cho em là gì?",
    options: ["Canh chua", "Trứng chiên", "Cơm rang", "Cơm chiên"],
    correctIndex: 3,
  },
  {
    question: "Câu nói anh hay nói với em nhất?",
    options: ["Anh yêu em", "Đi ăn không?", "Ngủ ngon nha", "Nhớ em nhiều"],
    correctIndex: 0,
  },
];

// Hàm shuffle mảng (Fisher–Yates shuffle)
function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Hàm shuffle câu trả lời và cập nhật lại correctIndex
function shuffleOptions(question) {
  const options = question.options.map((option, index) => ({ option, index }));
  const shuffledOptions = shuffleArray(options);

  // Tìm vị trí mới của đáp án đúng (dựa vào original index correctIndex)
  const newCorrectIndex = shuffledOptions.findIndex(
    (item) => item.index === question.correctIndex
  );

  return {
    question: question.question,
    options: shuffledOptions.map((item) => item.option),
    correctIndex: newCorrectIndex,
  };
}

const MillionaireGame = () => {
  // Mảng câu hỏi đã được shuffle và shuffle đáp án
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Shuffle câu hỏi khi bắt đầu
    const shuffledQuestions = shuffleArray(questionsData).map(shuffleOptions);
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setShowResult(false);
  }, []);

  if (questions.length === 0) return null; // Đợi load questions

  const question = questions[currentQuestionIndex];
  const isAnswered = selectedIndex !== null;
  const isCorrect = selectedIndex === question.correctIndex;

  const handleAnswer = (index) => {
    if (isAnswered) return;
    setSelectedIndex(index);
    if (index === question.correctIndex) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setSelectedIndex(null);
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center bg-pink-50 px-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        <div className="flex-1 p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4 text-center">
            🎓 Ai là triệu phú tình yêu? 💖
          </h2>

          {!showResult ? (
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Câu {currentQuestionIndex + 1}: {question.question}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {question.options.map((option, i) => {
                  let btnClass =
                    "bg-blue-100 hover:bg-blue-200 text-blue-800 transition-all";
                  if (isAnswered) {
                    if (i === question.correctIndex) {
                      btnClass =
                        "bg-green-200 text-green-800 font-semibold border border-green-500";
                    } else if (i === selectedIndex) {
                      btnClass =
                        "bg-red-200 text-red-800 font-semibold border border-red-500";
                    } else {
                      btnClass = "bg-gray-100 text-gray-400";
                    }
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      disabled={isAnswered}
                      className={`py-2 px-4 rounded-md ${btnClass}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {isAnswered && isCorrect && (
                <p className="mt-2 text-green-600 font-semibold text-lg animate-pulse">
                  🎉 Chính xác rồi! Em thông minh ghê! 💕
                </p>
              )}
              {isAnswered && !isCorrect && (
                <p className="mt-2 text-red-500 font-semibold text-lg">
                  😢 Sai rồi, nhưng không sao hết, anh vẫn thương em!
                </p>
              )}
            </div>
          ) : (
            <div className="text-center mt-10">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                🎊 Kết thúc trò chơi! 🎊
              </h3>
              <p className="text-xl text-green-600 font-semibold">
                Em đã trả lời đúng {score} / {questions.length} câu!
              </p>
              <p className="text-gray-600 mt-2">
                Em luôn là nhà vô địch trong tim anh 💝
              </p>
              <button
                onClick={() => {
                  // Khi chơi lại, shuffle lại câu hỏi và đáp án
                  const shuffledQuestions = shuffleArray(questionsData).map(
                    shuffleOptions
                  );
                  setQuestions(shuffledQuestions);
                  setCurrentQuestionIndex(0);
                  setSelectedIndex(null);
                  setScore(0);
                  setShowResult(false);
                }}
                className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-all"
              >
                Chơi lại
              </button>
            </div>
          )}
        </div>

        <div className="w-full md:w-64 bg-gradient-to-br from-pink-100 to-yellow-100 p-6 text-center border-l border-pink-200">
          <h4 className="text-xl font-bold text-pink-700 mb-2">🎯 Điểm số</h4>
          <div className="text-4xl font-extrabold text-green-600">{score}</div>
          <p className="text-gray-600 mt-2 text-sm">
            Trả lời đúng trên tổng {questions.length} câu
          </p>
        </div>
      </div>
    </div>
  );
};

export default MillionaireGame;
