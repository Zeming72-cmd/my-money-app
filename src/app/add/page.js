"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // 1. 引入路由工具

export default function AddPage() {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const router = useRouter(); // 初始化路由

  const handleSave = () => {
    // 简单的验证：如果没有填金额，就不保存
    if (!amount) {
      alert("请输入金额！");
      return;
    }

    // A. 先从浏览器拿出旧的账单列表 (如果没有就是空数组 [])
    const oldData = JSON.parse(localStorage.getItem("my-money-data") || "[]");

    // B. 创建一笔新账单
    const newTransaction = {
      id: Date.now(), // 用当前时间戳做唯一ID
      amount: amount,
      note: note || "无备注", // 如果没填备注，就默认“无备注”
      date: new Date().toLocaleDateString() // 记录今天的日期
    };

    // C. 把新的加到旧的里面
    const newData = [newTransaction, ...oldData];

    // D. 存回浏览器
    localStorage.setItem("my-money-data", JSON.stringify(newData));

    // E. 保存成功后，自动跳回首页
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex items-center mb-8">
        <Link href="/" className="text-gray-500 text-sm">
          &lt; 返回首页
        </Link>
        <h1 className="text-xl font-bold flex-1 text-center pr-10 text-gray-800">
          记一笔
        </h1>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm space-y-6">
        <div>
          <label className="block text-sm text-gray-500 mb-2">金额</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-2xl text-gray-400">¥</span>
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full text-4xl font-bold text-gray-800 p-2 pl-10 border-b border-gray-200 focus:outline-none focus:border-blue-500"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-500 mb-2">备注</label>
          <input 
            type="text" 
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full p-3 bg-gray-50 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100"
            placeholder="买了什么？"
          />
        </div>

        {/* 绑定点击事件 onClick={handleSave} */}
        <button 
          onClick={handleSave}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-medium text-lg hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200"
        >
          保存
        </button>
      </div>
    </div>
  );
}