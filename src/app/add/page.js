"use client"; // 这一行告诉 Next.js：这是在浏览器端运行的组件（因为我们要用按钮交互）

import { useState } from "react";
import Link from "next/link"; // 导入 Next.js 专用的跳转链接组件

export default function AddPage() {
  // 这里定义“状态”，就像是 Excel 里的单元格，用来暂存用户输入的数据
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* 顶部导航栏 */}
      <div className="flex items-center mb-8">
        <Link href="/" className="text-gray-500 text-sm">
          &lt; 返回首页
        </Link>
        <h1 className="text-xl font-bold flex-1 text-center pr-10 text-gray-800">
          记一笔
        </h1>
      </div>

      {/* 输入卡片 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm space-y-6">
        
        {/* 金额输入框 */}
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

        {/* 备注输入框 */}
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

        {/* 提交按钮 */}
        <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-medium text-lg hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200">
          保存
        </button>

      </div>
    </div>
  );
}