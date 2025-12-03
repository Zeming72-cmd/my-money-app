export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="p-10 bg-white shadow-xl rounded-2xl text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          💰 MyMoney 记账本
        </h1>
        <p className="text-gray-500 mb-8">
          我的第一个全栈 React 项目
        </p>
        
        <div className="space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-md">
            记一笔
          </button>
          <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            查看报表
          </button>
        </div>
      </div>
    </div>
  );
}