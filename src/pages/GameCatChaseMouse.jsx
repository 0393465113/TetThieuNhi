import React, { useState, useEffect, useRef } from "react";

const GameCatChaseMouse = () => {
  const gameRef = useRef(null);

  const [mousePos, setMousePos] = useState({ x: 100, y: 100 });
  const [catPos, setCatPos] = useState({ x: 500, y: 500 });
  const [dragging, setDragging] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [catChasing, setCatChasing] = useState(false);

  const catchDistance = 40;
  const speed = 3;

  const catPosRef = useRef(catPos);
  catPosRef.current = catPos;

  const gameOverRef = useRef(gameOver);
  gameOverRef.current = gameOver;

  const mousePosRef = useRef(mousePos);
  mousePosRef.current = mousePos;

  useEffect(() => {
    if (!catChasing) return;

    let animationFrameId;

    const chase = () => {
      if (gameOverRef.current) return;

      const prevCat = catPosRef.current;
      const targetMouse = mousePosRef.current;

      const dx = targetMouse.x - prevCat.x;
      const dy = targetMouse.y - prevCat.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < catchDistance) {
        setGameOver(true);
        return;
      }

      const vx = (dx / dist) * speed;
      const vy = (dy / dist) * speed;

      setCatPos({
        x: prevCat.x + vx,
        y: prevCat.y + vy,
      });

      animationFrameId = requestAnimationFrame(chase);
    };

    animationFrameId = requestAnimationFrame(chase);

    return () => cancelAnimationFrame(animationFrameId);
  }, [catChasing]);

  const getPointerPos = (e) => {
    const rect = gameRef.current.getBoundingClientRect();

    let clientX, clientY;

    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if (e.clientX !== undefined && e.clientY !== undefined) {
      clientX = e.clientX;
      clientY = e.clientY;
    } else {
      return null;
    }

    let x = clientX - rect.left;
    let y = clientY - rect.top;

    x = Math.max(0, Math.min(rect.width, x));
    y = Math.max(0, Math.min(rect.height, y));

    return { x, y };
  };

  const onPointerDown = (e) => {
    if (gameOver) return;
    const pos = getPointerPos(e);
    if (!pos) return;

    setDragging(true);
    setMousePos(pos);
    if (!catChasing) setCatChasing(true);

    e.preventDefault();
  };

  const onPointerMove = (e) => {
    if (!dragging || gameOver) return;
    const pos = getPointerPos(e);
    if (!pos) return;

    setMousePos(pos);

    e.preventDefault();
  };

  const onPointerUp = (e) => {
    setDragging(false);
    e.preventDefault();
  };

  const resetGame = () => {
    setMousePos({ x: 100, y: 100 });
    setCatPos({ x: 500, y: 500 });
    setGameOver(false);
    setCatChasing(false);
    setDragging(false);
  };

  return (
    // Wrap the game container in a flexbox for guaranteed centering
    <div className="flex justify-center w-full">
      <div
        ref={gameRef}
        className="relative my-8 w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] border-4 border-gray-900 rounded-2xl bg-gray-100 overflow-hidden touch-none select-none cursor-grab"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerUp}
        style={{ touchAction: "none" }} // ngăn scroll trên mobile khi kéo
      >
        {/* Chuột */}
        <img
          src="https://res.cloudinary.com/disdu197t/image/upload/v1748671183/image-removebg-preview_ncsclu.png"
          alt="mouse"
          draggable={false}
          className={`pointer-events-none select-none absolute w-15 h-15 z-10 transition-transform duration-150 ease-in-out ${
            dragging ? "scale-110" : ""
          }`}
          style={{
            left: mousePos.x - 30,
            top: mousePos.y - 30,
          }}
        />

        {/* Mèo */}
        <img
  src="https://res.cloudinary.com/disdu197t/image/upload/v1748671164/image__1_-removebg-preview_aqddp0.png"
  alt="cat"
  draggable={false}
  className="absolute w-17 h-17 z-5 transition-transform duration-300 ease-in-out"
  style={{
    left: catPos.x - 35,
    top: catPos.y - 35,
  }}
/>


        {gameOver && (
          <div className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-700 text-white rounded-xl px-10 py-6 font-bold text-2xl shadow-lg z-20 text-center select-none">
            Anh đã bắt được em rồi!
            <br />
            <button
              onClick={resetGame}
              className="mt-5 px-6 py-3 bg-blue-600 rounded-full font-semibold shadow-md hover:bg-blue-700 transition-colors"
            >
              Chơi lại
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCatChaseMouse;