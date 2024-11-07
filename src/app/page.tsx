'use client'
import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);

  const handleButtonClick = async () => {
    try {
      const response = await axios.get('http://localhost:5233/owners');
      setMessage(response.data);
    } catch (error) {
      console.error('调用后端时出错:', error);
      setMessage('调用后端时出错');
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-6">为您的宠物找到最好的朋友</h1>
        <p className="text-xl mb-8">连接宠物，创造快乐时光</p>
        <Button
          color="primary"
          size="big"
          onClick={handleButtonClick}
        >
          立即开始
        </Button>
        {message && <p className="mt-4 text-lg">{message}</p>} {/* 显示后端返回的内容 */}
      </main>
      <Footer />
    </div>
  );
}
