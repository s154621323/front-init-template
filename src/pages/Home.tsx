const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🎉 Tailwind CSS 生效了！
        </h1>
        <p className="text-gray-600 mb-6">
          如果你看到这个美丽的样式，说明 Tailwind CSS 已经正常工作了。
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            响应式
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            现代化
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
            快速开发
          </span>
        </div>
        <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
          开始使用 Tailwind CSS
        </button>
      </div>
    </div>
  );
};
export default HomePage;
