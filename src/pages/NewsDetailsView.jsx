import { useState } from "react";
import { ArrowLeft } from "lucide-react";

//Mock Data
import { mockNewsArticles } from "../assets/data";
import SectionHeader from "../components/SectionHeader";

const NewsDetailsView = ({ onBack }) => {
  const [currentArticle, setCurrentArticle] = useState(
    mockNewsArticles.length > 0 ? mockNewsArticles[0] : null,
  );

  //FallBack Case
  if (!currentArticle) {
    return (
      <div className="col-span-4 row-span-3 flex flex-col items-center justify-center p-2 bg-gray-800 h-full">
        <p className="font-[Bebas_Neue] text-3xl text-lime-300 mb-4">
          No News Articles Available
        </p>
        <button
          onClick={onBack}
          className="flex items-center text-gray-900 hover:text-zinc-50 transition-colors duration-200"
        >
          <ArrowLeft className="h-6 w-6 mr-2" />
          <span className="font-[Bebas_Neue] text-xl">BACK TO HOME</span>
        </button>
      </div>
    );
  }

  return (
    <div className="">
      {/* Section Header */}
      <SectionHeader onBack={onBack} title="NEWS DETAILS" />

      {/* Main Content Area */}
      <div className="flex-grow grid grid-cols-4 gap-2 relative">
        {/* Pattern */}
        <div className="absolute inset-0 bg-[url(/pat1.svg)] blur-xs z-0" />

        {/* Left Panel: List of Articles */}
        <div className="col-span-1  p-3 bg-gray-900/40 z-10 overflow-y-auto space-y-2">
          {mockNewsArticles.map((item) => (
            <div
              key={item.id}
              onClick={() => setCurrentArticle(item)}
              className={`group p-2 cursor-pointer transition-all duration-200 ease-out ${
                currentArticle.id === item.id
                  ? "bg-lime-300 text-gray-800"
                  : "bg-zinc-100 hover:bg-lime-400"
              }`}
            >
              <p
                className={`font-[Bebas_Neue] text-xl leading-tight ${
                  currentArticle.id === item.id
                    ? "text-zinc900"
                    : "text-zinc-400 group-hover:text-zinc-900"
                }`}
              >
                {item.title}
              </p>
              <p
                className={`text-xs ${
                  currentArticle.id === item.id
                    ? "text-zinc-800"
                    : "text-zinc-600 group-hover:text-zinc-900"
                }`}
              >
                {item.date}
              </p>
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div className="col-span-3 relative overflow-hidden">
          {/* Image */}
          <div
            style={{
              backgroundImage: `url(${!currentArticle.image ? "/news1.jpg" : currentArticle.image})`,
              backgroundSize: "cover",
              backgroundPosition: `${currentArticle.position}`,
              backgroundRepeat: "no-repeat",
            }}
            className="w-full min-h-full 2xl:min-h-[600px] bg-zinc-500 hover:saturate-150 cursor-pointer transition-all duration-500 ease-out"
          ></div>

          {/* Overlay: Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 col justify-end p-6 pointer-events-none">
          {/* Date */}

            <p className="text-sm text-zinc-300">
              {currentArticle.data}
            </p>

            {/* Title */}
            <h2 className="font-[Bebas_Neue] text-5xl text-lime-400 mb-2 leading-tight">
              {currentArticle.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-zinc-200 leading-relaxed">
              {currentArticle.summary}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsView;
