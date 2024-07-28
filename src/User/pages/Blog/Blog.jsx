import React from "react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Deadly Strike on Soccer Field Raises Risk of Escalation Between Israel and Hezbollah",
    time: "2:24 AM ET",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Pro-Gaza Activists Size Up Harris",
    time: "12:06 AM ET",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "A Fed Rate Cut Is Finally Within View",
    time: "12:02 AM ET",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Posing as ‘Alicia,’ This Man Scammed Hundreds Online. He Was Also a Victim.",
    time: "9:00 PM ET",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "British Slang Might Not Be the Dog’s Bollocks Much Longer",
    time: "9:00 PM ET",
    img: "https://via.placeholder.com/150"
  }
];

const popularArticles = [
  {
    title: "Harris Erases Trump’s Lead, WSJ Poll Finds",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "A Few Blockbuster Podcasts Are Making All the Money",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Arizona Copper Mine at the Center of Epic Fight Over Religion and Politics",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Deadly Strike on Soccer Field Raises Risk of Escalation Between Israel and Hezbollah",
    img: "https://via.placeholder.com/150"
  }
];

const ModernBlogPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mt-[10vh]">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Blog Site
            </h1>
            <div className="mt-4 sm:mt-0">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                Subscribe
              </button>
              <button className="ml-4 py-2 px-6 rounded-md border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:flex">
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold mb-6">Latest Headlines</h2>
          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                className="bg-white p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col lg:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={article.img} alt="placeholder" className="w-full h-48 lg:w-24 lg:h-24 rounded-md mb-4 lg:mb-0 lg:mr-4"/>
                <div>
                  <a href="#" className="text-xl font-bold text-blue-600 hover:underline">
                    {article.title}
                  </a>
                  <p className="text-gray-500 text-sm mt-2">{article.time}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <div className="lg:w-1/3 lg:pl-6 mt-8 lg:mt-0">
          <h3 className="text-2xl font-bold mb-6">Most Popular News</h3>
          <div className="space-y-6">
            {popularArticles.map((article, index) => (
              <motion.article
                key={index}
                className="bg-white p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col lg:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
              >
                <img src={article.img} alt="placeholder" className="w-full h-48 lg:w-16 lg:h-16 rounded-md mb-4 lg:mb-0 lg:mr-4"/>
                <div>
                  <a href="#" className="text-lg font-bold text-blue-600 hover:underline">
                    {article.title}
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModernBlogPage;
