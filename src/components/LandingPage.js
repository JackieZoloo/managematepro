import React, { useState } from "react";

const LandingPage = () => {
  const [showBusinessPlans, setShowBusinessPlans] = useState(false);
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Language Selector */}
      <div className="flex justify-end mb-4">
        <select
          value={language}
          onChange={handleLanguageChange}
          className="border p-2 rounded"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="mn">Монгол</option>
          <option value="zh">中文</option>
          <option value="vi">Tiếng Việt</option>
          <option value="ru">Русский</option>
          <option value="ko">한국어</option>
        </select>
      </div>

      {/* Animated Intro */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 animate-fadeIn">
        Built on the Same Powerful Tech Trusted by the Big Guys
      </h1>

      {/* Choose Path */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          onClick={() => window.location.href = "/signup"}
        >
          Personal
        </button>
        <button
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          onClick={() => setShowBusinessPlans(true)}
        >
          Business
        </button>
      </div>

      {/* Business Plan Options */}
      {showBusinessPlans && (
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-white p-6 rounded shadow w-72">
            <h3 className="text-xl font-semibold mb-2">Regular Plan</h3>
            <p className="mb-4">Basic features for small businesses</p>
            <p className="text-lg font-bold">$14.99/month</p>
          </div>
          <div className="bg-white p-6 rounded shadow w-72">
            <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
            <p className="mb-4">Advanced features, team access & support</p>
            <p className="text-lg font-bold">$29.99/month</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
