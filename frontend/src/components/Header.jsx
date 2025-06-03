import React from "react";
import { assets } from "../assets/assets";

export const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center  px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
        <img
            src={assets.new_icon}
            alt=""
            className="w-8.5 rounded-full opacity-100 relative top-0 right-5 hover:opacity-70 "
          />
        <p>AI  feature integrated</p>
        </div>
        <h1 className="text-3xl sm:text-2xl font-semibold sm:leading-16 text-gray-700">
          Start reading, writing, and sharing{" "}
          <span className="text-primary">story</span> on your own{" "}
          <span className="text-primary">blogging</span> platform!
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
          Create & Publish your own blog posts with rich text formatting. Browse
          & Read blogs from other authors. Edit or Delete your own posts anytime
          Comment and engage in discussions
        </p>
        <form
          className="flex justify-between max-w-lg max-sm: scale-75 mx-auto
border border-gray-300 bg-white rounded overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search for blogs"
            required
            className="w-full pl-4 outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 m-0.5
            rounded hover: scale-105 transition-all cursor-pointer"
          >
            Search
          </button>
          I
        </form>
      </div>
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 w-100% -z-1 opacity-50"
      />
    </div>
  );
};
