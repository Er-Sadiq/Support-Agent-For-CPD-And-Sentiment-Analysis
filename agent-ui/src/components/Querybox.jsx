import React from "react";
import { Brain } from "lucide-react";

function Querybox({ handleUrlSubmit, setUrl, url }) {
  return (
    <div className="w-full max-w-4xl h-auto mx-auto my-auto bg-s rounded-xl shadow-xl overflow-hidden p-6 sm:p-8 md:p-10">
      <div className="flex flex-col items-center gap-6">
        <div className="bg-a w-16 h-16 rounded-full flex items-center justify-center">
          <Brain size={40} className="text-white" />
        </div>

        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Paste the URL of the website to ask your queries
          </h1>

          <p className="text-xs sm:text-base text-slate-200 mt-2">
            Your AI-powered support companion
          </p>
        </div>
      </div>

      {/* Input Section */}
      <form
        className="mt-6 flex flex-col justify-center items-center gap-6"
        onSubmit={handleUrlSubmit} // Changed from button onClick to form onSubmit
      >
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL... e.g., https://example.com"
          className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 ${
            !url || url.startsWith("https")
              ? "border-p focus:ring-blue-500 bg-slate-100"
              : "border-red-500 focus:ring-red-500 bg-red-50"
          }`}
        />
        <button
          type="submit"
          className="bg-teal-500 py-2 px-4 rounded-md text-white"
        >
          Let's Get Started ?
        </button>
      </form>

      {/* Info Tags */}
      <div className="flex flex-wrap gap-2 mt-6 justify-center">
        {[
          "Get to your answers",
          "Save time",
          "AI-driven insights",
          "Efficient Support",
          "Instant Insights",
        ].map((tag) => (
          <span
            key={tag}
            className="bg-p text-a py-1 px-4 rounded-full text-xs font-medium border-slate-300 border-[1px] flex justify-center items-center"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Querybox;
