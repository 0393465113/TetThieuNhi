import React, { useRef } from 'react';

const MemoriesPage = () => {
  const currentPlayingVideoRef = useRef(null);

  const handlePlay = (videoElement) => {
    if (currentPlayingVideoRef.current && currentPlayingVideoRef.current !== videoElement) {
      currentPlayingVideoRef.current.pause();
    }
    currentPlayingVideoRef.current = videoElement;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 p-6 sm:p-10 font-sans">
      <div className="text-center mb-10">
        <h3 className="text-4xl sm:text-5xl font-extrabold text-pink-600 drop-shadow-sm mb-4">
          🎥 Kỷ Niệm Đẹp Của Chúng Ta 🎥
        </h3>
        <p className="text-lg sm:text-xl text-gray-700">
          Cùng nhau nhìn lại những khoảnh khắc đáng yêu và ý nghĩa mà chúng ta đã có nhé!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`rounded-xl border-4 transition-all duration-300 ease-in-out p-4 shadow-lg hover:scale-105 ${
              video.color
            }`}
          >
            <p className="text-lg font-medium text-gray-800 mb-3 text-center">{video.title}</p>
            <video
              className="w-full h-auto rounded-lg shadow-inner max-h-96 object-contain border border-white"
              controls
              loop
              src={video.src}
              onError={(e) => console.error('Video error:', e)}
              onPlay={(e) => handlePlay(e.target)}
            />
          </div>
        ))}
      </div>

      <p className="text-center text-base sm:text-lg text-gray-700 mt-10 italic">
        Và còn rất nhiều kỷ niệm đẹp nữa đang chờ chúng ta tạo ra! 💞
      </p>
    </div>
  );
};

const videos = [
  {
    title: '🎂 Này là hôm sinh nhật của em nè!',
    src: 'https://res.cloudinary.com/disdu197t/video/upload/v1748627182/6791187A-960C-404E-9DA1-5A238A221DBC_ag6ecl.mp4',
    color: 'border-pink-300 bg-pink-50',
  },
  {
    title: '🎉 Này là sinh nhật của anh nè!',
    src: 'https://res.cloudinary.com/disdu197t/video/upload/v1748629771/copy_29C3AEB8-1146-484B-916E-38C5CC97365F_zqptji.mp4',
    color: 'border-yellow-300 bg-yellow-50',
  },
  {
    title: '👫 Nhớ những buổi đi chơi cùng em!',
    src: 'https://res.cloudinary.com/disdu197t/video/upload/v1748627128/89215BE3-5C90-467B-998C-51B84726C194_mplhdq.mp4',
    color: 'border-blue-300 bg-blue-50',
  },
  {
    title: '🔥 Xuống nhà anh nướng gà ăn nè!',
    src: 'https://res.cloudinary.com/disdu197t/video/upload/v1748627083/5929F667-B4D6-4241-A8FE-E3A536040AC9_l5xn1l.mp4',
    color: 'border-red-300 bg-red-50',
  },
  {
    title: '🌸 Tết em xuống nhà anh nè!',
    src: 'https://res.cloudinary.com/disdu197t/video/upload/v1748626935/60d0674188584af1bd9c4a58543912b6_iceerk.mp4',
    color: 'border-purple-300 bg-purple-50',
  },
  {
    title: '🎁 Món quà anh tặng em nè!',
    src: 'https://res.cloudinary.com/disdu197t/video/upload/v1748626909/51EBABF4-A03B-4715-8932-8E66E901D143_h5rm9q.mp4',
    color: 'border-green-300 bg-green-50',
  },
  {
    title: '🍰 Hôm đi ăn sinh nhật chị anh.',
    src: 'https://res.cloudinary.com/disdu197t/video/upload/v1748626889/41E5BB23-3696-42A0-9C63-9436F386A943_fqf3p1.mp4',
    color: 'border-rose-300 bg-rose-50',
  },
  {
    title: '🕺 Đú trend ở công viên!',
    src: 'https://res.cloudinary.com/disdu197t/video/upload/v1748626806/8D294CAA-FA17-4147-B72F-F189DDFE5BDF_eccta3.mp4',
    color: 'border-cyan-300 bg-cyan-50',
  },
  {
    title: '📅 Ngày quan trọng năm ấy...',
    src: 'https://res.cloudinary.com/disdu197t/video/upload/v1748661758/qdysj6oi2djylnitrh5j.mov',
    color: 'border-indigo-300 bg-indigo-50',
  },
  {
    title: '🍖 Đi ăn thịt nướng nè cưng!',
    src: 'https://res.cloudinary.com/disdu197t/video/upload/v1748662015/2024_02_15_19_54_IMG_5278_ntstfr.mov',
    color: 'border-orange-300 bg-orange-50',
  },
  {
    title: '🏖️ Đi biển mùa hè nè!',
    src: 'https://res.cloudinary.com/disdu197t/video/upload/v1748662237/6323B0B5-F4E7-478E-9FA1-A3F36D7A3359_igmbwg.mp4',
    color: 'border-sky-300 bg-sky-50',
  },
  {
    title: '🎬 Lại một trend lúc ấy...',
    src: 'https://res.cloudinary.com/disdu197t/video/upload/v1748662289/20230606010321523_vm5udr.mov',
    color: 'border-fuchsia-300 bg-fuchsia-50',
  },
];

export default MemoriesPage;
