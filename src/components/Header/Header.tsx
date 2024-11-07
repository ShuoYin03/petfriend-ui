import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center mb-16">
      <div className="text-2xl font-bold">宠物伙伴</div>
      <nav>
        <a href="/login" className="mr-4 hover:underline">登录</a>
        <a href="/signup" className="hover:underline">注册</a>
      </nav>
    </header>
  );
};

export default Header;