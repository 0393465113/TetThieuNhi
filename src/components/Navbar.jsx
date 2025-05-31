import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { to: "/", label: "Trang Chủ" },
    { to: "/messages", label: "Lời Yêu Thương" },
    { to: "/memories", label: "Kỷ Niệm Đẹp" },
    { to: "/game", label: "Trò Chơi Nhỏ" },
    { to: "/promises", label: "Lời Hứa Ngọt Ngào" },
  ];

  return (
    <nav className="bg-pink-300 p-3 shadow-md">
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 text-white font-semibold text-base sm:text-lg"> {/* Giảm gap và font size cho mobile */}
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="hover:text-pink-800 transition-colors duration-200 p-1 sm:p-2 rounded-md hover:bg-pink-200 text-center" // Giảm padding cho mobile
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;