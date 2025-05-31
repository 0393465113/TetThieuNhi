// src/components/VideoPlayer.jsx
import React, { useRef, useEffect, useState } from 'react';

const VideoPlayer = ({ src, alt, caption }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false); // Để không tự động phát lại sau khi đã dừng

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              // Video đi vào tầm nhìn
              if (!hasPlayedOnce) { // Chỉ tự động phát nếu chưa từng phát trước đó
                 videoRef.current.play().catch(error => {
                   console.log('Video auto-play prevented:', error);
                 });
                 setIsPlaying(true);
              }
            } else {
              // Video ra khỏi tầm nhìn
              videoRef.current.pause();
              setIsPlaying(false);
              setHasPlayedOnce(true); // Đánh dấu là đã từng phát
            }
          }
        });
      },
      {
        threshold: 0.5, // Video phải hiển thị ít nhất 50% mới kích hoạt
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [hasPlayedOnce]); // Dependency để theo dõi hasPlayedOnce

  // Xử lý khi người dùng click để phát/dừng thủ công
  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play().catch(error => console.log('Manual play prevented:', error));
      setIsPlaying(true);
      setHasPlayedOnce(true); // Nếu phát thủ công, đánh dấu đã phát
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={src}
        alt={alt}
        className="w-full h-48 sm:h-56 md:h-64 object-cover"
        loop // Lặp lại video
        muted // Quan trọng: video phải được muted để trình duyệt cho phép autoplay
        playsInline // Quan trọng: để video phát trên thiết bị di động
        controls  // Thêm controls để người dùng có thể điều khiển video
      >
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-opacity duration-300">
        {!isPlaying && (
          <svg className="h-16 w-16 text-white opacity-90" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-sm sm:text-lg font-medium">{caption}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;